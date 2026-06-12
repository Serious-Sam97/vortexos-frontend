import { KernelError, Stat } from "../types";
import { FileSystem } from "./types";
import { basename, dirname } from "./path";

const DEVICES = ["null", "zero", "random"];
const CHUNK = 256;
const now = () => Date.now();

/** Synthetic /dev: device files like /dev/null, /dev/zero, /dev/random. */
export class DevFS implements FileSystem {
    readonly readonly = false; // /dev/null accepts (and discards) writes

    private device(path: string): string {
        const name = basename(path);
        if (dirname(path) !== "/" || !DEVICES.includes(name)) throw new KernelError("ENOENT", path);
        return name;
    }

    stat(path: string): Stat {
        if (path === "/") return { type: "dir", size: 0, mtime: now() };
        this.device(path);
        return { type: "dev", size: 0, mtime: now() };
    }

    readdir(path: string): string[] {
        if (path !== "/") throw new KernelError("ENOTDIR", path);
        return [...DEVICES];
    }

    read(path: string): Uint8Array {
        switch (this.device(path)) {
            case "null":
                return new Uint8Array();
            case "zero":
                return new Uint8Array(CHUNK);
            case "random":
                return crypto.getRandomValues(new Uint8Array(CHUNK));
            default:
                throw new KernelError("ENOENT", path);
        }
    }

    write(path: string, _data: Uint8Array): void {
        if (this.device(path) !== "null") throw new KernelError("EROFS", path);
        // /dev/null: discard.
    }

    mkdir(path: string): void {
        throw new KernelError("EROFS", path);
    }
    unlink(path: string): void {
        throw new KernelError("EROFS", path);
    }
}
