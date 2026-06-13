import { SerializedNode } from "./types";

/**
 * Persistence for the writable root filesystem. A pluggable interface so the backing
 * store can be localStorage (small, sync) or OPFS (large, async). `load()` is async so an
 * OPFS read can be awaited at boot; `save()` is fire-and-forget (debounced internally).
 */
export interface FsPersistence {
    load(): Promise<SerializedNode | null>;
    save(tree: SerializedNode): void;
}

const KEY = "vortex.vfs";

/** localStorage-backed snapshot of the root MemFS tree (the fallback store). */
export function createLocalStorageFsPersistence(): FsPersistence {
    return {
        async load() {
            const raw = localStorage.getItem(KEY);
            if (!raw) return null;
            try {
                return JSON.parse(raw) as SerializedNode;
            } catch {
                return null;
            }
        },
        save(tree) {
            try {
                localStorage.setItem(KEY, JSON.stringify(tree));
            } catch {
                // quota exceeded — OPFS is the real fix (see createOpfsFsPersistence)
            }
        },
    };
}

const OPFS_FILE = "vortex.vfs.json";

/** True when the Origin Private File System is available (secure context, modern browser). */
function opfsAvailable(): boolean {
    return typeof navigator !== "undefined" && !!navigator.storage?.getDirectory;
}

/**
 * OPFS-backed snapshot. The whole MemFS tree is written to one OPFS file, debounced so a
 * burst of edits collapses into a single write. On first run it migrates any existing
 * localStorage snapshot so nothing is lost.
 */
export function createOpfsFsPersistence(): FsPersistence {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let pending: SerializedNode | null = null;
    let writing = false;

    async function flush(): Promise<void> {
        if (writing || pending === null) return;
        writing = true;
        const tree = pending;
        pending = null;
        try {
            const dir = await navigator.storage.getDirectory();
            const handle = await dir.getFileHandle(OPFS_FILE, { create: true });
            const writable = await handle.createWritable();
            await writable.write(JSON.stringify(tree));
            await writable.close();
        } catch {
            // best-effort; the in-memory FS keeps working even if a write fails
        } finally {
            writing = false;
            if (pending !== null) void flush(); // a newer snapshot arrived while writing
        }
    }

    return {
        async load() {
            try {
                const dir = await navigator.storage.getDirectory();
                const handle = await dir.getFileHandle(OPFS_FILE).catch(() => null);
                if (handle) {
                    const text = await (await handle.getFile()).text();
                    return text ? (JSON.parse(text) as SerializedNode) : null;
                }
                // No OPFS snapshot yet — migrate the old localStorage one if present.
                const raw = localStorage.getItem(KEY);
                if (raw) {
                    const tree = JSON.parse(raw) as SerializedNode;
                    pending = tree;
                    void flush(); // copy it into OPFS
                    localStorage.removeItem(KEY); // OPFS is now the source of truth
                    return tree;
                }
                return null;
            } catch {
                return null;
            }
        },
        save(tree) {
            pending = tree;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => void flush(), 300);
        },
    };
}

/** Pick the best available FS persistence: OPFS when possible, else localStorage. */
export function createFsPersistence(): FsPersistence {
    return opfsAvailable() ? createOpfsFsPersistence() : createLocalStorageFsPersistence();
}
