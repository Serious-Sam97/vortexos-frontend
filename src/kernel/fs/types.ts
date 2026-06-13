import { Stat } from "../types";

/**
 * A mountable filesystem. Every method receives a path *relative to the mount point*
 * (always starting with "/"). Implementations: MemFS (persistent), DevFS/ProcFS/BinFS
 * (synthetic), and future backends (OPFS, the backend File table).
 */
export interface FileSystem {
    readonly readonly: boolean;
    stat(path: string): Stat;
    readdir(path: string): string[];
    read(path: string): Uint8Array;
    write(path: string, data: Uint8Array): void;
    mkdir(path: string): void;
    unlink(path: string): void;
    rename(from: string, to: string): void;
}

/** Serialized form of a MemFS node tree (file bytes stored as number[] for JSON). */
export interface SerializedNode {
    type: "file" | "dir";
    mtime: number;
    data?: number[];
    children?: Record<string, SerializedNode>;
}
