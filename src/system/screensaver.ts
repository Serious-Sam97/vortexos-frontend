import { useSyncExternalStore } from "react";

export interface SaverSettings {
    type: string; // "none" | "starfield" | "mystify" | "pipes"
    wait: number; // idle minutes before it kicks in
}

const KEY = "vortex.screensaver";
const DEFAULT: SaverSettings = { type: "starfield", wait: 3 };

function load(): SaverSettings {
    try {
        return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
    } catch {
        return { ...DEFAULT };
    }
}

let settings = load();
const listeners = new Set<() => void>();
const previewListeners = new Set<() => void>();

export function getSaverSettings(): SaverSettings {
    return settings;
}

export function setSaverSettings(patch: Partial<SaverSettings>): void {
    settings = { ...settings, ...patch };
    localStorage.setItem(KEY, JSON.stringify(settings));
    listeners.forEach((l) => l());
}

function subscribe(fn: () => void): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export function useSaverSettings(): SaverSettings {
    return useSyncExternalStore(subscribe, getSaverSettings);
}

/** Trigger a one-shot preview (from the Control Panel). */
export function previewSaver(): void {
    previewListeners.forEach((l) => l());
}
export function onPreviewSaver(fn: () => void): () => void {
    previewListeners.add(fn);
    return () => previewListeners.delete(fn);
}

export const SAVERS = [
    { key: "none", name: "(None)" },
    { key: "starfield", name: "Starfield Simulation" },
    { key: "mystify", name: "Mystify Your Mind" },
    { key: "pipes", name: "3D Pipes" },
    { key: "spectrum", name: "Sound Spectrum (VortexViz)" },
];
