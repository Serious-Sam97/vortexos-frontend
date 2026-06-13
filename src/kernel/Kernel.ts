import { v4 as uuidv4 } from "uuid";
import { ProgramRegistry } from "./registry";
import { Vfs } from "./fs/Vfs";
import { normalize } from "./fs/path";
import {
    Fd,
    KernelError,
    OpenFile,
    PCB,
    Permission,
    Persistence,
    Pid,
    ProcInfo,
    SerializedPCB,
    SpawnOpts,
    SyscallMap,
    SyscallName,
    WindowState,
} from "./types";

/**
 * Which capability each syscall requires. Syscalls not listed are always allowed
 * (a process can read its own identity, list processes, and exit unconditionally).
 */
const SYSCALL_PERMISSION: Partial<Record<SyscallName, Permission>> = {
    spawn: "proc",
    kill: "proc",
    win_focus: "gui",
    win_move: "gui",
    open: "fs",
    read: "fs",
    write: "fs",
    close: "fs",
    readdir: "fs",
    stat: "fs",
    mkdir: "fs",
    unlink: "fs",
    rename: "fs",
};

export interface KernelConfig {
    registry: ProgramRegistry;
    persistence?: Persistence;
    /** Where to place a new window when the caller gives no location. */
    defaultWindowLocation?: () => WindowState;
    uid?: number;
}

type Listener = () => void;

/**
 * The microkernel. Owns the process table and is the single authority for:
 *   - process lifecycle (spawn / kill / exit)
 *   - the scheduler (focus = priority 0 = z-order)
 *   - persistence
 * Userland reaches it ONLY through `syscall`. React subscribes via subscribe/getSnapshot.
 */
export class Kernel {
    readonly registry: ProgramRegistry;
    private processes = new Map<Pid, PCB>();
    private listeners = new Set<Listener>();
    private persistence?: Persistence;
    private defaultLocation: () => WindowState;
    private uid: number;

    /** Cached immutable snapshot for useSyncExternalStore (stable between mutations). */
    private snapshot: readonly PCB[] = [];

    /** The mounted filesystem (attached after construction; null until then). */
    private vfs: Vfs | null = null;
    /** Fd table for syscalls issued by the kernel/desktop itself (caller === null). */
    private kernelFds = new Map<Fd, OpenFile>();
    private nextFd = 3; // 0,1,2 reserved for stdin/stdout/stderr

    constructor(config: KernelConfig) {
        this.registry = config.registry;
        this.persistence = config.persistence;
        this.defaultLocation = config.defaultWindowLocation ?? (() => ({ x: 400, y: 300 }));
        this.uid = config.uid ?? 1000;
        this.boot();
    }

    // ── boot / persistence ───────────────────────────────────────────────

    private boot(): void {
        const saved = this.persistence?.load();
        if (saved) {
            for (const s of saved) {
                // Drop any persisted process whose program is no longer installed.
                if (!this.registry.has(s.exec)) continue;
                this.processes.set(s.pid, this.hydrate(s));
            }
        }
        this.rebuildSnapshot();
    }

    private hydrate(s: SerializedPCB): PCB {
        return {
            pid: s.pid,
            ppid: s.ppid,
            uid: s.uid,
            exec: s.exec,
            name: s.name,
            icon: s.icon,
            argv: s.argv ?? [],
            state: s.state,
            priority: s.priority,
            window: s.window,
            cwd: s.cwd,
            fds: new Map(),
            exitCode: null,
            startedAt: 0,
        };
    }

    private persist(): void {
        if (!this.persistence) return;
        const table: SerializedPCB[] = this.snapshot.map((p) => ({
            pid: p.pid,
            ppid: p.ppid,
            uid: p.uid,
            exec: p.exec,
            name: p.name,
            icon: p.icon,
            argv: p.argv,
            priority: p.priority,
            window: p.window,
            cwd: p.cwd,
            state: p.state,
        }));
        this.persistence.save(table);
    }

    /** Attach the VFS. Done after construction so synthetic FSes (/proc) can read us. */
    mountVfs(vfs: Vfs): void {
        this.vfs = vfs;
    }

    /** Subscribe to filesystem mutations (lets React render live FS views). */
    subscribeFs = (fn: () => void): (() => void) => (this.vfs ? this.vfs.subscribe(fn) : () => {});

    /** Snapshot value for useSyncExternalStore — bumps on every FS mutation. */
    fsVersion = (): number => this.vfs?.version() ?? 0;

    /** Public process-table view, used by /proc and the ps syscall. */
    processInfo(): ProcInfo[] {
        return this.sysPs();
    }

    // ── reactive store (for React) ───────────────────────────────────────

    subscribe = (fn: Listener): (() => void) => {
        this.listeners.add(fn);
        return () => this.listeners.delete(fn);
    };

    getSnapshot = (): readonly PCB[] => this.snapshot;

    private rebuildSnapshot(): void {
        this.snapshot = [...this.processes.values()];
    }

    /** Recompute the snapshot, persist, and notify subscribers. Call after any mutation. */
    private commit(): void {
        this.rebuildSnapshot();
        this.persist();
        for (const fn of this.listeners) fn();
    }

    // ── syscall dispatch ─────────────────────────────────────────────────

    /**
     * The one entry point from userland into the kernel.
     * `caller` is the issuing pid (null for the kernel/desktop itself).
     */
    syscall<K extends SyscallName>(
        caller: Pid | null,
        name: K,
        args: SyscallMap[K]["args"],
    ): Promise<SyscallMap[K]["result"]> {
        try {
            return Promise.resolve(this.dispatch(caller, name, args) as SyscallMap[K]["result"]);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    /**
     * Capability check. The kernel/desktop/window-manager (caller === null) is trusted.
     * A real process may only issue a syscall its program declared a permission for.
     */
    private enforcePermission(caller: Pid | null, name: SyscallName): void {
        if (caller === null) return; // OS-level callers are trusted
        const required = SYSCALL_PERMISSION[name];
        if (!required) return; // ungated syscall (getpid/getargv/ps/exit)
        const pcb = this.processes.get(caller);
        if (!pcb) throw new KernelError("ESRCH", `no process ${caller}`);
        const granted = this.registry.get(pcb.exec)?.permissions ?? [];
        if (!granted.includes(required)) {
            throw new KernelError("EACCES", `'${pcb.exec}' lacks '${required}' permission for ${name}`);
        }
    }

    private dispatch(caller: Pid | null, name: SyscallName, args: any): unknown {
        this.enforcePermission(caller, name);
        switch (name) {
            case "spawn":
                return this.sysSpawn(caller, args as SpawnOpts);
            case "exit":
                return this.sysExit(caller, args.code ?? 0);
            case "kill":
                return this.sysKill(args.pid);
            case "getpid":
                return caller;
            case "getargv":
                return caller ? (this.processes.get(caller)?.argv ?? []) : [];
            case "ps":
                return this.sysPs();
            case "win_focus":
                return this.sysFocus(args.pid);
            case "win_move":
                return this.sysMove(args.pid, args.location as WindowState);
            // filesystem
            case "open":
                return this.sysOpen(caller, args.path, args.flags);
            case "read":
                return this.sysRead(caller, args.fd, args.len);
            case "write":
                return this.sysWrite(caller, args.fd, args.data as Uint8Array);
            case "close":
                return this.sysClose(caller, args.fd);
            case "readdir":
                return this.fs().readdir(args.path);
            case "stat":
                return this.fs().stat(args.path);
            case "mkdir":
                return this.fs().mkdir(args.path);
            case "unlink":
                return this.fs().unlink(args.path);
            case "rename":
                return this.fs().rename(args.from, args.to);
            default:
                throw new KernelError("ENOSYS", `unknown syscall: ${name}`);
        }
    }

    // ── syscall handlers ─────────────────────────────────────────────────

    private sysSpawn(caller: Pid | null, opts: SpawnOpts): Pid {
        const manifest = this.registry.get(opts.exec);
        if (!manifest) throw new KernelError("ENOENT", `no program "${opts.exec}" in /bin`);

        const pid = uuidv4();
        // New process takes focus; everything else moves back one in the z-order.
        for (const p of this.processes.values()) p.priority += 1;

        this.processes.set(pid, {
            pid,
            ppid: caller,
            uid: this.uid,
            exec: opts.exec,
            name: opts.name ?? manifest.name,
            icon: opts.icon ?? manifest.icon,
            argv: opts.argv ?? [],
            state: "running",
            priority: 0,
            window: opts.location ?? this.defaultLocation(),
            cwd: "/home/user",
            fds: new Map(),
            exitCode: null,
            startedAt: 0,
        });
        this.commit();
        return pid;
    }

    private sysKill(pid: Pid): void {
        if (!this.processes.delete(pid)) throw new KernelError("ESRCH", `no process ${pid}`);
        this.commit();
    }

    private sysExit(caller: Pid | null, _code: number): void {
        if (caller) this.sysKill(caller);
    }

    private sysPs(): ProcInfo[] {
        return this.snapshot.map((p) => ({
            pid: p.pid,
            ppid: p.ppid,
            uid: p.uid,
            exec: p.exec,
            name: p.name,
            state: p.state,
            priority: p.priority,
        }));
    }

    /** Bring a process to the foreground; renumber the rest (the scheduler). */
    private sysFocus(pid: Pid): void {
        const target = this.processes.get(pid);
        if (!target) throw new KernelError("ESRCH", `no process ${pid}`);
        let rank = 0;
        for (const p of this.processes.values()) {
            p.priority = p.pid === pid ? 0 : ++rank;
        }
        this.commit();
    }

    private sysMove(pid: Pid, location: WindowState): void {
        const p = this.processes.get(pid);
        if (!p) throw new KernelError("ESRCH", `no process ${pid}`);
        p.window = location;
        this.commit();
    }

    // ── filesystem ───────────────────────────────────────────────────────

    private fs(): Vfs {
        if (!this.vfs) throw new KernelError("ENOSYS", "no filesystem mounted");
        return this.vfs;
    }

    /** The fd table belonging to the caller (its PCB, or the kernel's own table). */
    private fdTable(caller: Pid | null): Map<Fd, OpenFile> {
        if (caller === null) return this.kernelFds;
        const pcb = this.processes.get(caller);
        if (!pcb) throw new KernelError("ESRCH", `no process ${caller}`);
        return pcb.fds;
    }

    private sysOpen(caller: Pid | null, rawPath: string, flags: string): Fd {
        const vfs = this.fs();
        const path = normalize(rawPath);
        const exists = vfs.exists(path);
        const write = flags === "w" || flags === "a" || flags === "rw";

        if (!exists) {
            if (!write) throw new KernelError("ENOENT", path);
            vfs.write(path, new Uint8Array()); // create
        } else if (flags === "w") {
            vfs.write(path, new Uint8Array()); // truncate
        }

        const offset = flags === "a" ? vfs.stat(path).size : 0;
        const fd = this.nextFd++;
        this.fdTable(caller).set(fd, { path, flags, offset });
        return fd;
    }

    private openFile(caller: Pid | null, fd: Fd): OpenFile {
        const file = this.fdTable(caller).get(fd);
        if (!file) throw new KernelError("EBADF", `bad fd ${fd}`);
        return file;
    }

    private sysRead(caller: Pid | null, fd: Fd, len: number): Uint8Array {
        const file = this.openFile(caller, fd);
        if (file.flags !== "r" && file.flags !== "rw") throw new KernelError("EBADF", "not opened for reading");
        const data = this.fs().read(file.path);
        const chunk = data.slice(file.offset, file.offset + len);
        file.offset += chunk.length;
        return chunk;
    }

    private sysWrite(caller: Pid | null, fd: Fd, data: Uint8Array): number {
        const file = this.openFile(caller, fd);
        if (file.flags === "r") throw new KernelError("EBADF", "not opened for writing");
        const current = this.fs().read(file.path);
        const end = file.offset + data.length;
        const merged = new Uint8Array(Math.max(current.length, end));
        merged.set(current);
        merged.set(data, file.offset);
        this.fs().write(file.path, merged);
        file.offset = end;
        return data.length;
    }

    private sysClose(caller: Pid | null, fd: Fd): void {
        if (!this.fdTable(caller).delete(fd)) throw new KernelError("EBADF", `bad fd ${fd}`);
    }
}
