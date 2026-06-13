/**
 * VortexOS notification service — non-blocking toast/balloon notifications with a
 * persistent history (the notification center). Any part of the OS can raise a toast;
 * the ToastHost renders the active ones and the tray bell shows the history.
 */

export type ToastType = "info" | "warning" | "error";

export interface Toast {
    id: number;
    title: string;
    body: string;
    type: ToastType;
    icon?: string; // optional image src shown left of the text
    ts: number;
    /** Action key the ToastHost resolves to a side effect (e.g. open an app). */
    action?: { kind: "open-app"; exec: string; name: string; icon: string };
}

const HISTORY_CAP = 50;
let seq = 1;
let active: Toast[] = []; // currently on screen
let history: Toast[] = []; // notification center log (newest last)

type Listener = () => void;
const listeners = new Set<Listener>();
const notifyListeners = () => listeners.forEach((l) => l());

export function subscribeNotifications(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export function getActiveToasts(): Toast[] {
    return active;
}

export function getNotificationHistory(): Toast[] {
    return history;
}

/** Raise a toast. Returns its id so the caller can dismiss it early. */
export function notify(t: Omit<Toast, "id" | "ts">): number {
    const toast: Toast = { ...t, id: seq++, ts: Date.now() };
    active = [...active, toast];
    history = [...history, toast].slice(-HISTORY_CAP);
    notifyListeners();
    return toast.id;
}

/** Remove a toast from the screen (it stays in the history). */
export function dismissToast(id: number): void {
    active = active.filter((t) => t.id !== id);
    notifyListeners();
}

export function clearHistory(): void {
    history = [];
    notifyListeners();
}

// --- WinPopup delivery mode (toast vs the classic blocking window) -----------

export type WinpopupMode = "toast" | "classic";
const MODE_KEY = "vortex.notify.winpopup";
let winpopupMode: WinpopupMode = localStorage.getItem(MODE_KEY) === "classic" ? "classic" : "toast";

export function getWinpopupMode(): WinpopupMode {
    return winpopupMode;
}
export function setWinpopupMode(mode: WinpopupMode): void {
    winpopupMode = mode;
    localStorage.setItem(MODE_KEY, mode);
    notifyListeners();
}
