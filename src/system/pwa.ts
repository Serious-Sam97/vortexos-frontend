import { useSyncExternalStore } from "react";

/**
 * PWA install plumbing. Chromium fires `beforeinstallprompt` when the app is
 * installable; we stash the event so the OS can offer an "Install VortexOS"
 * button (the browser only lets you call prompt() from that saved event).
 * `appinstalled` clears it. iOS Safari has no such event — there the UI shows
 * an "Add to Home Screen" hint instead.
 */
interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferred: BeforeInstallPromptEvent | null = null;
let installed = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault(); // suppress the mini-infobar; we show our own button
        deferred = e as BeforeInstallPromptEvent;
        emit();
    });
    window.addEventListener("appinstalled", () => {
        installed = true;
        deferred = null;
        emit();
    });
}

/** True when running as an installed standalone app. */
export function isStandalone(): boolean {
    return (
        window.matchMedia?.("(display-mode: standalone)").matches ||
        // iOS Safari
        (navigator as unknown as { standalone?: boolean }).standalone === true
    );
}

export function canInstall(): boolean {
    return !!deferred && !installed && !isStandalone();
}

/** Fire the native install prompt. Returns true if the user accepted. */
export async function promptInstall(): Promise<boolean> {
    if (!deferred) return false;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    deferred = null;
    emit();
    return outcome === "accepted";
}

export function subscribePwa(cb: () => void): () => void {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

export function useCanInstall(): boolean {
    return useSyncExternalStore(subscribePwa, canInstall, canInstall);
}
