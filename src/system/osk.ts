import { useSyncExternalStore } from "react";

/**
 * Visibility channel for the on-screen keyboard. The OnScreenKeyboard component
 * owns the rendering + typing; this is the shared on/off signal so the taskbar
 * tray (and anyone else) can summon or dismiss it. The `osk` setting decides the
 * policy ("auto" | "on" | "off"); this is the live state within that policy.
 */
let visible = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export function isOskVisible(): boolean {
    return visible;
}

export function setOskVisible(v: boolean): void {
    if (visible === v) return;
    visible = v;
    emit();
}

export function toggleOsk(): void {
    setOskVisible(!visible);
}

export function subscribeOsk(cb: () => void): () => void {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

export function useOskVisible(): boolean {
    return useSyncExternalStore(subscribeOsk, isOskVisible, isOskVisible);
}
