import { useSyncExternalStore } from "react";

/**
 * Tracks which built-in apps the user has uninstalled (Add/Remove Programs). The catalog
 * of all apps lives in bin.ts; this records the subset that's been removed, persisted so it
 * survives reboot. The desktop and Start menu filter their shortcuts by this set.
 */
const KEY = "vortex.uninstalled";
type Listener = () => void;
const listeners = new Set<Listener>();

function load(): Set<string> {
    try {
        return new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
    } catch {
        return new Set();
    }
}

let uninstalled = load();

function persist(): void {
    localStorage.setItem(KEY, JSON.stringify([...uninstalled]));
}

export function getUninstalled(): Set<string> {
    return uninstalled;
}

export function isInstalled(exec: string): boolean {
    return !uninstalled.has(exec);
}

/** Mark an app installed (true) or removed (false). */
export function setInstalled(exec: string, installed: boolean): void {
    const next = new Set(uninstalled);
    if (installed) next.delete(exec);
    else next.add(exec);
    uninstalled = next; // new reference so useSyncExternalStore sees the change
    persist();
    listeners.forEach((l) => l());
}

function subscribe(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

/** Reactive set of uninstalled exec keys. */
export function useUninstalled(): Set<string> {
    return useSyncExternalStore(subscribe, getUninstalled);
}
