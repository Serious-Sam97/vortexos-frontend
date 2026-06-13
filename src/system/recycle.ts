/**
 * Recycle Bin manifest: remembers where each trashed item originally lived so Restore
 * can put it back. Keyed by the item's name inside `/Recycle Bin`.
 */
const KEY = "vortex.recycle";

type Manifest = Record<string, string>; // binName -> original full path

function load(): Manifest {
    try {
        return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch {
        return {};
    }
}

function save(manifest: Manifest): void {
    localStorage.setItem(KEY, JSON.stringify(manifest));
}

export function recordTrash(binName: string, originalPath: string): void {
    const manifest = load();
    manifest[binName] = originalPath;
    save(manifest);
}

export function originalPathOf(binName: string): string | undefined {
    return load()[binName];
}

export function forgetTrash(binName: string): void {
    const manifest = load();
    delete manifest[binName];
    save(manifest);
}
