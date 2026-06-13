import { KernelError, Stat } from "../types";
import { FileSystem } from "./types";
import { dirname, normalize } from "./path";

interface Mount {
    mountPoint: string; // normalized, e.g. "/" or "/dev"
    fs: FileSystem;
}

/**
 * The Virtual File System: a single namespace assembled from mounted filesystems.
 * A path is routed to the mount with the longest matching prefix, then delegated with
 * a mount-relative path. readdir merges in child mount points so `ls /` shows them.
 */
export class Vfs {
    private mounts: Mount[] = [];
    private listeners = new Set<() => void>();
    private changeVersion = 0;

    /**
     * Subscribe to filesystem mutations. Fired after any mutating operation, so
     * persistence and live UI views (e.g. the Desktop mirroring /home/user/Desktop)
     * can react. Returns an unsubscribe function.
     */
    subscribe(fn: () => void): () => void {
        this.listeners.add(fn);
        return () => this.listeners.delete(fn);
    }

    /** Monotonic mutation counter — a stable snapshot value for useSyncExternalStore. */
    version(): number {
        return this.changeVersion;
    }

    private emit(): void {
        this.changeVersion++;
        for (const fn of this.listeners) fn();
    }

    mount(mountPoint: string, fs: FileSystem): void {
        const mp = normalize(mountPoint);
        this.mounts = this.mounts.filter((m) => m.mountPoint !== mp);
        this.mounts.push({ mountPoint: mp, fs });
        // Longest mount point first → longest-prefix match wins.
        this.mounts.sort((a, b) => b.mountPoint.length - a.mountPoint.length);
    }

    private route(path: string): { fs: FileSystem; rel: string; mountPoint: string } {
        const p = normalize(path);
        for (const m of this.mounts) {
            if (m.mountPoint === "/" || p === m.mountPoint || p.startsWith(m.mountPoint + "/")) {
                const rel = m.mountPoint === "/" ? p : p.slice(m.mountPoint.length) || "/";
                return { fs: m.fs, rel: rel || "/", mountPoint: m.mountPoint };
            }
        }
        throw new KernelError("ENOENT", path); // no root mount
    }

    /** Mount points whose parent directory is `path` (for merged readdir). */
    private childMounts(path: string): string[] {
        const p = normalize(path);
        return this.mounts
            .filter((m) => m.mountPoint !== "/" && dirname(m.mountPoint) === p)
            .map((m) => m.mountPoint.slice(p === "/" ? 1 : p.length + 1));
    }

    stat(path: string): Stat {
        const { fs, rel } = this.route(path);
        return fs.stat(rel);
    }

    readdir(path: string): string[] {
        const { fs, rel } = this.route(path);
        const own = fs.readdir(rel);
        const merged = new Set([...own, ...this.childMounts(path)]);
        return [...merged].sort();
    }

    read(path: string): Uint8Array {
        const { fs, rel } = this.route(path);
        return fs.read(rel);
    }

    write(path: string, data: Uint8Array): void {
        const { fs, rel } = this.route(path);
        if (fs.readonly) throw new KernelError("EROFS", path);
        fs.write(rel, data);
        this.emit();
    }

    mkdir(path: string): void {
        const { fs, rel } = this.route(path);
        if (fs.readonly) throw new KernelError("EROFS", path);
        fs.mkdir(rel);
        this.emit();
    }

    unlink(path: string): void {
        const { fs, rel } = this.route(path);
        if (fs.readonly) throw new KernelError("EROFS", path);
        fs.unlink(rel);
        this.emit();
    }

    rename(from: string, to: string): void {
        const src = this.route(from);
        const dst = this.route(to);
        if (src.fs.readonly || dst.fs.readonly) throw new KernelError("EROFS", from);

        if (src.fs === dst.fs) {
            src.fs.rename(src.rel, dst.rel);
        } else {
            // Cross-mount move: copy the bytes, then remove the source (files only).
            if (this.stat(from).type === "dir") throw new KernelError("EINVAL", "cross-mount dir move");
            dst.fs.write(dst.rel, src.fs.read(src.rel));
            src.fs.unlink(src.rel);
        }
        this.emit();
    }

    exists(path: string): boolean {
        try {
            this.stat(path);
            return true;
        } catch {
            return false;
        }
    }
}
