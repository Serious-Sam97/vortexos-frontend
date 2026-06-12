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
    ps(): Promise<ProcInfo[]>;
    // window / scheduler
    focus(pid: Pid): Promise<void>;
    move(location: WindowState, pid?: Pid): Promise<void>;
    // filesystem (throws ENOSYS until Phase 1)
    open(path: string, flags?: string): Promise<Fd>;
    read(fd: Fd, len: number): Promise<Uint8Array>;
    write(fd: Fd, data: Uint8Array): Promise<number>;
    close(fd: Fd): Promise<void>;
    readdir(path: string): Promise<string[]>;
    stat(path: string): Promise<Stat>;
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
        ps: () => call("ps", {}),
        focus: (target) => call("win_focus", { pid: target }),
        move: (location, target) => call("win_move", { pid: target ?? (pid as Pid), location }),
        open: (path, flags = "r") => call("open", { path, flags }),
        read: (fd, len) => call("read", { fd, len }),
        write: (fd, data) => call("write", { fd, data }),
        close: (fd) => call("close", { fd }),
        readdir: (path) => call("readdir", { path }),
        stat: (path) => call("stat", { path }),
    };
}
