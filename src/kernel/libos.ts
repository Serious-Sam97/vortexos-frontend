import { Kernel } from "./Kernel";
import { Fd, Pid, ProcInfo, SpawnOpts, Stat, WindowState } from "./types";

/**
 * The userland system-call client — a thin, ergonomic wrapper over `kernel.syscall`
 * bound to one process's pid. This is the ONLY surface an app should use to reach the
 * system. In Phase 3 the same shape is re-implemented over Worker postMessage; app
 * code that depends on it won't change.
 */
export interface LibOS {
    // process
    spawn(exec: string, opts?: Omit<SpawnOpts, "exec">): Promise<Pid>;
    exit(code?: number): Promise<void>;
    kill(pid: Pid): Promise<void>;
    getpid(): Promise<Pid | null>;
    /** This process's launch arguments (e.g. the file path it was opened with). */
    argv(): Promise<string[]>;
    ps(): Promise<ProcInfo[]>;
    // window / scheduler
    focus(pid: Pid): Promise<void>;
    move(location: WindowState, pid?: Pid): Promise<void>;
    // filesystem — low level
    open(path: string, flags?: string): Promise<Fd>;
    read(fd: Fd, len: number): Promise<Uint8Array>;
    write(fd: Fd, data: Uint8Array): Promise<number>;
    close(fd: Fd): Promise<void>;
    readdir(path: string): Promise<string[]>;
    stat(path: string): Promise<Stat>;
    mkdir(path: string): Promise<void>;
    unlink(path: string): Promise<void>;
    rename(from: string, to: string): Promise<void>;
    // filesystem — whole-file convenience helpers
    readFile(path: string): Promise<Uint8Array>;
    writeFile(path: string, data: Uint8Array): Promise<void>;
    readTextFile(path: string): Promise<string>;
    writeTextFile(path: string, text: string): Promise<void>;
}

export function createLibOS(kernel: Kernel, pid: Pid | null): LibOS {
    const call = <K extends Parameters<Kernel["syscall"]>[1]>(
        name: K,
        args: Parameters<Kernel["syscall"]>[2],
    ) => kernel.syscall(pid, name, args as any);

    return {
        spawn: (exec, opts) => call("spawn", { exec, ...opts }),
        exit: (code = 0) => call("exit", { code }),
        kill: (target) => call("kill", { pid: target }),
        getpid: () => call("getpid", {}),
        argv: () => call("getargv", {}),
        ps: () => call("ps", {}),
        focus: (target) => call("win_focus", { pid: target }),
        move: (location, target) => call("win_move", { pid: target ?? (pid as Pid), location }),
        open: (path, flags = "r") => call("open", { path, flags }),
        read: (fd, len) => call("read", { fd, len }),
        write: (fd, data) => call("write", { fd, data }),
        close: (fd) => call("close", { fd }),
        readdir: (path) => call("readdir", { path }),
        stat: (path) => call("stat", { path }),
        mkdir: (path) => call("mkdir", { path }),
        unlink: (path) => call("unlink", { path }),
        rename: (from, to) => call("rename", { from, to }),

        async readFile(path) {
            const { size } = await call("stat", { path });
            const fd = await call("open", { path, flags: "r" });
            try {
                return await call("read", { fd, len: size });
            } finally {
                await call("close", { fd });
            }
        },
        async writeFile(path, data) {
            const fd = await call("open", { path, flags: "w" });
            try {
                await call("write", { fd, data });
            } finally {
                await call("close", { fd });
            }
        },
        async readTextFile(path) {
            return new TextDecoder().decode(await this.readFile(path));
        },
        async writeTextFile(path, text) {
            await this.writeFile(path, new TextEncoder().encode(text));
        },
    };
}
