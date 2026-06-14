import { useSyncExternalStore } from "react";

/**
 * First-run Welcome experience state: a per-user "has seen the tour" flag, the
 * global "Tip of the Day at startup" toggle, the tip catalogue, and tiny pub/sub
 * triggers so Help (or anywhere) can re-open the tour / tips on demand.
 */

/* --------------------------------------------------------- per-user welcome */
const welcomeKey = (user: string) => `vortex.welcome.${user || "user"}`;

export function isWelcomeSeen(user: string): boolean {
    return localStorage.getItem(welcomeKey(user)) === "1";
}
export function markWelcomeSeen(user: string): void {
    localStorage.setItem(welcomeKey(user), "1");
}
/** Test/debug helper — forget that a user has seen the tour. */
export function resetWelcome(user: string): void {
    localStorage.removeItem(welcomeKey(user));
}

/* ------------------------------------------------- tip-of-the-day toggle */
const TIPS_KEY = "vortex.tips.enabled";
const tipListeners = new Set<() => void>();
const notifyTips = () => tipListeners.forEach((l) => l());

export function getTipsEnabled(): boolean {
    // Default ON — classic Win9x behaviour.
    return localStorage.getItem(TIPS_KEY) !== "0";
}
export function setTipsEnabled(on: boolean): void {
    localStorage.setItem(TIPS_KEY, on ? "1" : "0");
    notifyTips();
}
export function useTipsEnabled(): boolean {
    return useSyncExternalStore(
        (cb) => {
            tipListeners.add(cb);
            return () => tipListeners.delete(cb);
        },
        getTipsEnabled,
    );
}

/* ------------------------------------------------------------------- tips */
export const TIPS: string[] = [
    "Press Ctrl+Space anywhere to open the Command Palette and launch any app or action instantly.",
    "VortexOS runs on a real microkernel — open the Terminal and type `ps` to watch live processes.",
    "Drag a window to a screen edge to snap it to that half; drag to a corner to quarter-tile it.",
    "Your files live in a real virtual filesystem. Try `ls /` in the Terminal, or browse it in Explorer.",
    "Share files with other users in Network Neighborhood, and send messages with WinPopup.",
    "Right-click the desktop to create folders and documents or rearrange your icons.",
    "Open Control Panel ▸ Display to switch between the Serious Sam vaporwave look and classic Windows.",
    "Beat your own high scores in Solitaire, Minesweeper, FreeCell and Snake — they sync to your account.",
    "Press Alt+Tab to flip between open windows, just like the real thing.",
    "The Recycle Bin really works — deleted files go there, and you can restore them.",
    "Press Ctrl+Alt+Del in a panic to reboot — VortexOS has a real BSOD and Task Manager too.",
];

export function tipAt(index: number): string {
    return TIPS[((index % TIPS.length) + TIPS.length) % TIPS.length];
}

/* ----------------------------------------------------- open triggers (pub/sub) */
const welcomeOpeners = new Set<() => void>();
const tipOpeners = new Set<() => void>();

export function openWelcome(): void {
    welcomeOpeners.forEach((f) => f());
}
export function subscribeOpenWelcome(fn: () => void): () => void {
    welcomeOpeners.add(fn);
    return () => welcomeOpeners.delete(fn);
}

export function openTips(): void {
    tipOpeners.forEach((f) => f());
}
export function subscribeOpenTips(fn: () => void): () => void {
    tipOpeners.add(fn);
    return () => tipOpeners.delete(fn);
}
