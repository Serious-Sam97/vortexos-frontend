import { v4 as uuidv4 } from "uuid";
import { ProgramRegistry } from "./registry";
import {
    KernelError,
    PCB,
    Persistence,
    Pid,
    ProcInfo,
    SerializedPCB,
    SpawnOpts,
    SyscallMap,
    SyscallName,
    WindowState,
} from "./types";

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
            priority: p.priority,
            window: p.window,
            cwd: p.cwd,
            state: p.state,
        }));
        this.persistence.save(table);
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

    private dispatch(caller: Pid | null, name: SyscallName, args: any): unknown {
        switch (name) {
            case "spawn":
                return this.sysSpawn(caller, args as SpawnOpts);
            case "exit":
                return this.sysExit(caller, args.code ?? 0);
            case "kill":
                return this.sysKill(args.pid);
            case "getpid":
                return caller;
            case "ps":
                return this.sysPs();
            case "win_focus":
                return this.sysFocus(args.pid);
            case "win_move":
                return this.sysMove(args.pid, args.location as WindowState);
            // filesystem & beyond — surface exists, lands in later phases.
            case "open":
            case "read":
            case "write":
            case "close":
            case "readdir":
            case "stat":
                throw new KernelError("ENOSYS", `${name} arrives in Phase 1 (filesystem)`);
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
}
