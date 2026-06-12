/** Absolute-path utilities for the VFS. All paths normalize to a leading "/". */

/** Split a path into its segments, resolving "." and "..". */
export function segments(path: string): string[] {
    const out: string[] = [];
    for (const part of path.split("/")) {
        if (part === "" || part === ".") continue;
        if (part === "..") {
            out.pop();
            continue;
        }
        out.push(part);
    }
    return out;
}

/** Normalize to a canonical absolute path (no trailing slash except root). */
export function normalize(path: string): string {
    const segs = segments(path);
    return "/" + segs.join("/");
}

/** Join segments into one normalized absolute path. */
export function join(...parts: string[]): string {
    return normalize(parts.join("/"));
}

/** The parent directory of a path ("/a/b/c" → "/a/b", "/a" → "/"). */
export function dirname(path: string): string {
    const segs = segments(path);
    segs.pop();
    return "/" + segs.join("/");
}

/** The final component of a path ("/a/b/c" → "c", "/" → ""). */
export function basename(path: string): string {
    const segs = segments(path);
    return segs.length ? segs[segs.length - 1] : "";
}

export function isRoot(path: string): boolean {
    return normalize(path) === "/";
}
