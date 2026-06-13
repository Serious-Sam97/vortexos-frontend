import { KernelError, Stat } from "../types";
import { FileSystem } from "./types";
import { basename, dirname } from "./path";

const now = () => Date.now();
const enc = (s: string) => new TextEncoder().encode(s);

export interface BinEntry {
    exec: string;
    name: string;
}

/** Synthetic, read-only /bin: lists the installed programs in the kernel registry. */
export class BinFS implements FileSystem {
    readonly readonly = true;

    constructor(private source: () => BinEntry[]) {}

    private find(exec: string): BinEntry | undefined {
        return this.source().find((e) => e.exec === exec);
    }

    stat(path: string): Stat {
        if (path === "/") return { type: "dir", size: 0, mtime: now() };
        const name = basename(path);
        if (dirname(path) !== "/" || !this.find(name)) throw new KernelError("ENOENT", path);
        return { type: "file", size: this.read(path).length, mtime: now() };
    }

    readdir(path: string): string[] {
        if (path !== "/") throw new KernelError("ENOTDIR", path);
        return this.source().map((e) => e.exec).sort();
    }

    read(path: string): Uint8Array {
        const entry = this.find(basename(path));
        if (!entry) throw new KernelError("ENOENT", path);
        return enc(`#!vortex-program\nexec=${entry.exec}\nname=${entry.name}\n`);
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
