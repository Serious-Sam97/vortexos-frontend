import { SerializedNode } from "./types";

/**
 * Persistence for the writable root filesystem. A pluggable interface so the backing
 * store can later become OPFS or the backend File table without touching the VFS.
 */
export interface FsPersistence {
    load(): SerializedNode | null;
    save(tree: SerializedNode): void;
}

const KEY = "vortex.vfs";

/** localStorage-backed snapshot of the root MemFS tree. */
export function createLocalStorageFsPersistence(): FsPersistence {
    return {
        load() {
            const raw = localStorage.getItem(KEY);
            if (!raw) return null;
            try {
                return JSON.parse(raw) as SerializedNode;
            } catch {
                return null;
            }
        },
        save(tree) {
            localStorage.setItem(KEY, JSON.stringify(tree));
        },
    };
}
