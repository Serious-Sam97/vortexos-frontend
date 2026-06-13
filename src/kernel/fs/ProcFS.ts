import { KernelError, ProcInfo, Stat } from "../types";
import { FileSystem } from "./types";
import { basename, dirname } from "./path";

const now = () => Date.now();
const enc = (s: string) => new TextEncoder().encode(s);

/**
 * Synthetic /proc: one file per live process whose contents are its status, plus a
 * `processes` summary. Reads straight from the kernel's process table, so it's always
 * current. Linux-like, read-only.
 */
export class ProcFS implements FileSystem {
    readonly readonly = true;

    constructor(private source: () => ProcInfo[]) {}

    private entries(): string[] {
        return ["processes", ...this.source().map((p) => p.pid)];
    }

    private find(pid: string): ProcInfo | undefined {
        return this.source().find((p) => p.pid === pid);
    }

    stat(path: string): Stat {
        if (path === "/") return { type: "dir", size: 0, mtime: now() };
        const name = basename(path);
        if (dirname(path) !== "/" || !this.entries().includes(name)) throw new KernelError("ENOENT", path);
        return { type: "file", size: this.read(path).length, mtime: now() };
    }

    readdir(path: string): string[] {
        if (path !== "/") throw new KernelError("ENOTDIR", path);
        return this.entries();
    }

    read(path: string): Uint8Array {
        const name = basename(path);
        if (name === "processes") {
            const table = this.source()
                .map((p) => `${p.pid.slice(0, 8)}  ${p.state.padEnd(8)}  p${p.priority}  ${p.name}`)
                .join("\n");
            return enc(`PID       STATE     PRIO  NAME\n${table}\n`);
        }
        const proc = this.find(name);
        if (!proc) throw new KernelError("ENOENT", path);
        return enc(
            `pid:      ${proc.pid}\n` +
                `ppid:     ${proc.ppid ?? "-"}\n` +
                `name:     ${proc.name}\n` +
                `exec:     ${proc.exec}\n` +
                `state:    ${proc.state}\n` +
                `priority: ${proc.priority}\n` +
                `uid:      ${proc.uid}\n`,
        );
    }

    write(path: string): void {
        throw new KernelError("EROFS", path);
    }
    mkdir(path: string): void {
        throw new KernelError("EROFS", path);
    }
    unlink(path: string): void {
        throw new KernelError("EROFS", path);
    }
    rename(from: string): void {
        throw new KernelError("EROFS", from);
    }
}
