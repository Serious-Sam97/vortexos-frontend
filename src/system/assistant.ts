import { useSyncExternalStore } from "react";
import { TIPS } from "./welcome";

/**
 * "Vortex" — the desktop assistant. This module owns its enabled flag (persisted),
 * a `say()` channel so anything in the OS can make Vortex speak, and the catalogues
 * of contextual one-liners. Original character, no asset — the sprite is drawn in
 * VortexAssistant.tsx.
 */

const ENABLED_KEY = "vortex.assistant.enabled";
const enabledListeners = new Set<() => void>();
const notifyEnabled = () => enabledListeners.forEach((l) => l());

export function isAssistantEnabled(): boolean {
    // Default ON — Vortex greets first-timers. Easy to dismiss.
    return localStorage.getItem(ENABLED_KEY) !== "0";
}
export function setAssistantEnabled(on: boolean): void {
    localStorage.setItem(ENABLED_KEY, on ? "1" : "0");
    notifyEnabled();
}
export function useAssistantEnabled(): boolean {
    return useSyncExternalStore(
        (cb) => {
            enabledListeners.add(cb);
            return () => enabledListeners.delete(cb);
        },
        isAssistantEnabled,
    );
}

/* ----------------------------------------------------------- the say() channel */
export interface AssistantSpeech {
    text: string;
    action?: { label: string; run: () => void };
}
const sayListeners = new Set<(s: AssistantSpeech) => void>();
/** Make Vortex speak (ignored while the assistant is disabled). */
export function say(s: AssistantSpeech): void {
    if (!isAssistantEnabled()) return;
    sayListeners.forEach((f) => f(s));
}
export function subscribeSay(fn: (s: AssistantSpeech) => void): () => void {
    sayListeners.add(fn);
    return () => sayListeners.delete(fn);
}

/* --------------------------------------------------------------- catalogues */
export const GREETINGS: string[] = [
    "Hi! I'm Vortex — your guide around here. Click me for a tip anytime.",
    "Hey there. New to VortexOS? Click me and I'll show you the ropes.",
    "Welcome back! Click me whenever you want a hand.",
];

export const CRASH_LINES: string[] = [
    "Yikes — that app hit a snag. Dr. Watson logged the details, and the rest of VortexOS is just fine.",
    "That didn't go as planned. No data lost — want to peek at what happened?",
    "Whoops. One app stumbled, but the kernel kept right on running.",
];

/** Short, characterful one-liners shown when a given app opens. */
export const APP_QUIPS: Record<string, string[]> = {
    terminal: [
        "A real shell awaits — try `ps` to see live processes, or `ls /`.",
        "Pipes and redirects work here: `cat notes.txt | grep todo`.",
    ],
    explorer: ["This is a real filesystem. Right-click for New Folder, F2 to rename."],
    notes: ["Everything you type saves to an actual file on disk."],
    wordpad: ["Rich text here — and it saves as a real .html file."],
    paint: ["The fill bucket floods bounded areas. Don't forget Undo!"],
    calculator: ["Psst — try Scientific or Programmer mode in the View menu."],
    minesweeper: ["Your first click is always safe. Now go flag those mines!"],
    solitaire: ["Aces up to the foundations. Double-click to auto-move a card."],
    freecell: ["Use the four free cells wisely — almost every deal is winnable."],
    snake: ["Arrow keys or WASD. Whatever you do, don't bite your tail."],
    browser: ["I route pages through a proxy so they actually load — no frame blocking."],
    network: ["See who else is online and browse their shared files."],
    messenger: ["Net Send lives! Ping another signed-in user a message."],
    control_panel: ["Make it yours — wallpaper, themes, screensavers, and Serious Sam Style."],
    backlogger: ["Track your game backlog, complete with real console art."],
    task_manager: ["Honest CPU and memory graphs in here — no faking it."],
    find: ["Search by name, by contents, or by the date a file changed."],
    mediaplayer: ["Folder playlists and a live retrowave visualizer. Press play."],
    imageviewer: ["Prev/Next across the folder, plus zoom, rotate and a slideshow."],
    clock: ["Hand-drawn analog face and a working calendar."],
    nightwave: ["Retrowave radio, streaming live. Turn it up."],
    vaporwave: ["Retrowave radio, streaming live. Turn it up."],
};

export function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}
export function quipFor(exec: string): string | null {
    const q = APP_QUIPS[exec];
    return q && q.length ? pick(q) : null;
}
export function randomTip(): string {
    return pick(TIPS);
}
export function greeting(): string {
    return pick(GREETINGS);
}
export function crashLine(): string {
    return pick(CRASH_LINES);
}
