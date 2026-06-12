import type { FC } from "react";

/** A process id. We use uuids so it stays compatible with v1's `uuid` field. */
export type Pid = string;
export type Uid = number;
export type Fd = number;

export type ProcessState = "running" | "blocked" | "zombie";

/** A program's permissions (enforced by the kernel from Phase 3 on). */
export type Permission = "fs" | "net" | "gui" | "proc" | "audio";

/** A registered program — the "binary" living in /bin. */
export interface ProgramManifest {
    /** Unique key, e.g. "notes". This is the path in /bin and v1's `componentName`. */
    exec: string;
    /** Default window title. */
    name: string;
    icon: string;
    /** The code. Phase 0: a React component. Phase 3: a Web Worker entry. */
    component: FC<any>;
    permissions?: Permission[];
}

export interface WindowState {
    x: number;
    y: number;
}

/** An open file in a process's descriptor table. Populated from Phase 1. */
export interface OpenFile {
    path: string;
    flags: string;
    offset: number;
}

/** Process Control Block — the kernel's record of one running process. */
export interface PCB {
    pid: Pid;
    ppid: Pid | null;
    uid: Uid;
    exec: string;
    name: string;
    icon: string;
    state: ProcessState;
    /** 0 = focused / foreground. Doubles as the window z-order. */
    priority: number;
    window: WindowState;
    cwd: string;
    fds: Map<Fd, OpenFile>;
    exitCode: number | null;
    startedAt: number;
}

/** What `ps` returns — a read-only view of a process. */
export interface ProcInfo {
    pid: Pid;
    ppid: Pid | null;
    uid: Uid;
    exec: string;
    name: string;
    state: ProcessState;
    priority: number;
}

/** Minimal stat result (grows in Phase 1). */
export interface Stat {
    type: "file" | "dir" | "dev";
    size: number;
    mtime: number;
}

/** Options accepted by the `spawn` syscall. */
export interface SpawnOpts {
    exec: string;
    argv?: string[];
    /** Override the manifest's default title / icon (v1 desktop passes these). */
    name?: string;
    icon?: string;
    location?: WindowState;
}

/**
 * The syscall ABI. Each entry maps a syscall name to its argument and result types.
 * This is the single contract between userland and the kernel — keep it stable.
 */
export interface SyscallMap {
    // ── process ──────────────────────────────────────────────
    spawn: { args: SpawnOpts; result: Pid };
    exit: { args: { code?: number }; result: void };
    kill: { args: { pid: Pid }; result: void };
    getpid: { args: Record<string, never>; result: Pid | null };
    ps: { args: Record<string, never>; result: ProcInfo[] };
    // ── window / scheduler ───────────────────────────────────
    win_focus: { args: { pid: Pid }; result: void };
    win_move: { args: { pid: Pid; location: WindowState }; result: void };
    // ── filesystem (ENOSYS until Phase 1) ────────────────────
    open: { args: { path: string; flags: string }; result: Fd };
    read: { args: { fd: Fd; len: number }; result: Uint8Array };
    write: { args: { fd: Fd; data: Uint8Array }; result: number };
    close: { args: { fd: Fd }; result: void };
    readdir: { args: { path: string }; result: string[] };
    stat: { args: { path: string }; result: Stat };
}

export type SyscallName = keyof SyscallMap;

/** Errno-style codes raised by the kernel. */
export type Errno =
    | "ENOSYS" // syscall not implemented
    | "ESRCH" // no such process
    | "ENOENT" // no such file or directory
    | "EBADF" // bad file descriptor
    | "EACCES" // permission denied
    | "EINVAL"; // invalid argument

export class KernelError extends Error {
    constructor(public code: Errno, message?: string) {
        super(message ? `${code}: ${message}` : code);
        this.name = "KernelError";
    }
}

/** Serialized PCB shape written to persistence (no fds / component / runtime fields). */
export interface SerializedPCB {
    pid: Pid;
    ppid: Pid | null;
    uid: Uid;
    exec: string;
    name: string;
    icon: string;
    priority: number;
    window: WindowState;
    cwd: string;
    state: ProcessState;
}

export interface Persistence {
    load(): SerializedPCB[] | null;
    save(table: SerializedPCB[]): void;
}
