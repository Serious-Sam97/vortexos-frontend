import { useSyncExternalStore } from "react";

/** Tiny open/close store for the Run dialog, so the Start menu and command palette can both raise it. */
let open = false;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

export function openRun(): void {
    open = true;
    notify();
}
export function closeRun(): void {
    open = false;
    notify();
}
export function useRunOpen(): boolean {
    return useSyncExternalStore(
        (cb) => {
            listeners.add(cb);
            return () => listeners.delete(cb);
        },
        () => open,
    );
}

// --- Run MRU (most-recently-used entries) ------------------------------------
const MRU_KEY = "vortex.run.mru";
const MRU_CAP = 10;

export function getRunMru(): string[] {
    try {
        const v = JSON.parse(localStorage.getItem(MRU_KEY) ?? "[]");
        return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    } catch {
        return [];
    }
}
export function pushRunMru(entry: string): void {
    const e = entry.trim();
    if (!e) return;
    const next = [e, ...getRunMru().filter((x) => x !== e)].slice(0, MRU_CAP);
    localStorage.setItem(MRU_KEY, JSON.stringify(next));
}
