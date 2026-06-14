import { useSyncExternalStore } from "react";

/**
 * Easter eggs & personality. Holds the discovered-eggs tally (a little meta
 * achievement surfaced in About), pub/sub triggers for the two full-screen
 * surprises (VORTEX MODE confetti + the credits roll), and the Konami-code
 * installer. All original, no asset.
 */

/* ------------------------------------------------------------- egg tally */
const EGGS_KEY = "vortex.eggs";
export const ALL_EGGS = ["konami", "vortex", "credits", "about"] as const;
export type Egg = (typeof ALL_EGGS)[number];

const eggListeners = new Set<() => void>();
function readEggs(): string[] {
    try {
        const v = JSON.parse(localStorage.getItem(EGGS_KEY) ?? "[]");
        return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    } catch {
        return [];
    }
}
// useSyncExternalStore needs a referentially-stable snapshot between changes.
let eggsCache: string[] = readEggs();

export function getEggs(): string[] {
    return eggsCache;
}
export function markEgg(e: Egg): void {
    if (eggsCache.includes(e)) return;
    eggsCache = [...eggsCache, e];
    localStorage.setItem(EGGS_KEY, JSON.stringify(eggsCache));
    eggListeners.forEach((l) => l());
}
export function useEggs(): string[] {
    return useSyncExternalStore(
        (cb) => {
            eggListeners.add(cb);
            return () => eggListeners.delete(cb);
        },
        getEggs,
    );
}

/* --------------------------------------------------- full-screen surprises */
const partyListeners = new Set<() => void>();
export function openParty(): void {
    partyListeners.forEach((f) => f());
}
export function subscribeParty(fn: () => void): () => void {
    partyListeners.add(fn);
    return () => partyListeners.delete(fn);
}

const creditsListeners = new Set<() => void>();
export function openCredits(): void {
    creditsListeners.forEach((f) => f());
}
export function subscribeCredits(fn: () => void): () => void {
    creditsListeners.add(fn);
    return () => creditsListeners.delete(fn);
}

/* ------------------------------------------------------------ Konami code */
const KONAMI = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

/** Listen for ↑↑↓↓←→←→ B A anywhere; calls onTrigger on a full match. */
export function installKonami(onTrigger: () => void): () => void {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (k === KONAMI[idx]) {
            idx++;
            if (idx === KONAMI.length) {
                idx = 0;
                onTrigger();
            }
        } else {
            // allow a restart if this key is the sequence's first key
            idx = k === KONAMI[0] ? 1 : 0;
        }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
}
