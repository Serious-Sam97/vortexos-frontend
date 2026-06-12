import { KernelError, Stat } from "../types";
import { FileSystem, SerializedNode } from "./types";
import { basename, dirname, normalize, segments } from "./path";

interface MemNode {
    type: "file" | "dir";
    mtime: number;
    data?: Uint8Array;
    children?: Map<string, MemNode>;
}

const now = () => Date.now();

/**
 * An in-memory inode filesystem: a tree of file/dir nodes. This is the writable,
 * persistent root of the VFS. All logic is synchronous and self-contained, so it is
 * fully unit-testable; persistence happens out-of-band via serialize()/deserialize().
 */
export class MemFS implements FileSystem {
    readonly readonly = false;
    private root: MemNode = { type: "dir", mtime: now(), children: new Map() };

    private resolve(path: string): MemNode | null {
        let node: MemNode = this.root;
        for (const name of segments(path)) {
            if (node.type !== "dir" || !node.children) throw new KernelError("ENOTDIR", path);
            const next = node.children.get(name);
            if (!next) return null;
            node = next;
        }
        return node;
    }

    private resolveDir(path: string): MemNode {
        const node = this.resolve(path);
        if (!node) throw new KernelError("ENOENT", path);
        if (node.type !== "dir") throw new KernelError("ENOTDIR", path);
        return node;
    }

    exists(path: string): boolean {
        return this.resolve(path) !== null;
    }

    stat(path: string): Stat {
        const node = this.resolve(path);
        if (!node) throw new KernelError("ENOENT", path);
        return {
            type: node.type,
            size: node.type === "file" ? (node.data?.length ?? 0) : 0,
            mtime: node.mtime,
        };
    }

    readdir(path: string): string[] {
        const node = this.resolveDir(path);
        return [...node.children!.keys()].sort();
    }

    read(path: string): Uint8Array {
        const node = this.resolve(path);
        if (!node) throw new KernelError("ENOENT", path);
        if (node.type === "dir") throw new KernelError("EISDIR", path);
        return node.data ?? new Uint8Array();
    }

    write(path: string, data: Uint8Array): void {
        if (normalize(path) === "/") throw new KernelError("EISDIR", path);
        const parent = this.resolveDir(dirname(path));
        const name = basename(path);
        const existing = parent.children!.get(name);
        if (existing && existing.type === "dir") throw new KernelError("EISDIR", path);
        parent.children!.set(name, { type: "file", mtime: now(), data: new Uint8Array(data) });
    }

    mkdir(path: string): void {
        const parent = this.resolveDir(dirname(path));
        const name = basename(path);
        if (!name) throw new KernelError("EEXIST", path); // root
        if (parent.children!.has(name)) throw new KernelError("EEXIST", path);
        parent.children!.set(name, { type: "dir", mtime: now(), children: new Map() });
    }

    unlink(path: string): void {
        if (normalize(path) === "/") throw new KernelError("EACCES", "cannot unlink /");
        const node = this.resolve(path);
        if (!node) throw new KernelError("ENOENT", path);
        if (node.type === "dir" && node.children!.size > 0) throw new KernelError("ENOTEMPTY", path);
        this.resolveDir(dirname(path)).children!.delete(basename(path));
    }

    rename(from: string, to: string): void {
        const node = this.resolve(from);
        if (!node) throw new KernelError("ENOENT", from);
        const destParent = this.resolveDir(dirname(to));
        this.resolveDir(dirname(from)).children!.delete(basename(from));
        node.mtime = now();
        destParent.children!.set(basename(to), node);
    }

    // ── persistence ──────────────────────────────────────────────────────

    serialize(): SerializedNode {
        return toSerialized(this.root);
    }

    static deserialize(data: SerializedNode): MemFS {
        const fs = new MemFS();
        fs.root = fromSerialized(data);
        return fs;
    }
}

function toSerialized(node: MemNode): SerializedNode {
    if (node.type === "file") {
        return { type: "file", mtime: node.mtime, data: Array.from(node.data ?? []) };
    }
    const children: Record<string, SerializedNode> = {};
    for (const [name, child] of node.children!) children[name] = toSerialized(child);
    return { type: "dir", mtime: node.mtime, children };
}

function fromSerialized(node: SerializedNode): MemNode {
    if (node.type === "file") {
        return { type: "file", mtime: node.mtime, data: new Uint8Array(node.data ?? []) };
    }
    const children = new Map<string, MemNode>();
    for (const [name, child] of Object.entries(node.children ?? {})) {
        children.set(name, fromSerialized(child));
    }
    return { type: "dir", mtime: node.mtime, children };
}
