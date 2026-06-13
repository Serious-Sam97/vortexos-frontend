/**
 * Recent documents — a small MRU of file paths the user has opened, surfaced in the Run dialog
 * (and available for a future jump list). Populated by openPath() whenever a file is opened.
 */
const KEY = "vortex.recent.docs";
const CAP = 10;

export function getRecentDocs(): string[] {
    try {
        const v = JSON.parse(localStorage.getItem(KEY) ?? "[]");
        return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    } catch {
        return [];
    }
}

export function pushRecentDoc(path: string): void {
    const p = path.trim();
    if (!p) return;
    const next = [p, ...getRecentDocs().filter((x) => x !== p)].slice(0, CAP);
    localStorage.setItem(KEY, JSON.stringify(next));
}

export function clearRecentDocs(): void {
    localStorage.removeItem(KEY);
}
