import { useSyncExternalStore } from "react";

/**
 * Quick Launch — a per-user, persisted strip of pinned apps beside the Start button.
 * Stores an ordered list of `exec` keys (resolved to icons via the program catalog).
 */

const DEFAULT_PINS = ["terminal", "explorer", "browser"];

const key = (user: string) => `vortex.quicklaunch.${user || "user"}`;

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function read(user: string): string[] {
    const raw = localStorage.getItem(key(user));
    if (raw === null) return DEFAULT_PINS;
    try {
        const v = JSON.parse(raw);
        return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    } catch {
        return [];
    }
}

function write(user: string, list: string[]): void {
    localStorage.setItem(key(user), JSON.stringify(list));
    notify();
}

export function getPinned(user: string): string[] {
    return read(user);
}

export function isPinned(user: string, exec: string): boolean {
    return read(user).includes(exec);
}

export function pin(user: string, exec: string): void {
    const list = read(user);
    if (!list.includes(exec)) write(user, [...list, exec]);
}

export function unpin(user: string, exec: string): void {
    write(user, read(user).filter((e) => e !== exec));
}

export function togglePin(user: string, exec: string): void {
    isPinned(user, exec) ? unpin(user, exec) : pin(user, exec);
}

/** Reactive view of a user's pinned execs. */
export function useQuickLaunch(user: string): string[] {
    return useSyncExternalStore(
        (cb) => {
            listeners.add(cb);
            return () => listeners.delete(cb);
        },
        () => {
            // Memoize on the serialized value so the snapshot is referentially stable
            // between notifications (useSyncExternalStore requires this).
            const raw = localStorage.getItem(key(user)) ?? JSON.stringify(DEFAULT_PINS);
            return cache(raw);
        },
    );
}

// Stable-reference cache keyed by the raw JSON string.
let lastRaw = "";
let lastVal: string[] = DEFAULT_PINS;
function cache(raw: string): string[] {
    if (raw !== lastRaw) {
        lastRaw = raw;
        try {
            const v = JSON.parse(raw);
            lastVal = Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
        } catch {
            lastVal = [];
        }
    }
    return lastVal;
}
