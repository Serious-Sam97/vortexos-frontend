import { useSyncExternalStore } from "react";

/**
 * A single typed, persisted, reactive settings store for VortexOS personalization.
 * New options just add a field + default here, then read them anywhere via
 * useSettings() and write with setSetting(). Applied globally by SettingsApplier.
 */
export type IconSize = "small" | "normal" | "large";

export interface Settings {
    // Accessibility / effects
    reduceMotion: boolean;
    uiScale: number; // percent: 100 = normal
    // Taskbar clock
    showClock: boolean;
    clock24h: boolean;
    clockSeconds: boolean;
    // Mouse
    pointerScheme: string; // filename in /win-cursor/
    // Desktop
    desktopIconSize: IconSize;
    showDesktopIcons: boolean;
    // Taskbar
    showQuickLaunch: boolean;
    // Window manager
    liveDrag: boolean; // show window contents while dragging (vs the classic wireframe)
    windowSnap: boolean; // snap/tile windows at screen edges
    // Desktop
    singleClickOpen: boolean; // single-click (vs double-click) to open icons
    // Personalization
    accentColor: string; // selection highlight colour
    // Taskbar
    autoHideTaskbar: boolean;
    // Regional
    dateFormat: "short" | "long";
    firstDayMonday: boolean; // start the week on Monday
}

export const DEFAULTS: Settings = {
    reduceMotion: false,
    uiScale: 100,
    showClock: true,
    clock24h: false,
    clockSeconds: false,
    pointerScheme: "arrow.cur",
    desktopIconSize: "normal",
    showDesktopIcons: true,
    showQuickLaunch: true,
    liveDrag: false,
    windowSnap: true,
    singleClickOpen: false,
    accentColor: "#000080",
    autoHideTaskbar: false,
    dateFormat: "short",
    firstDayMonday: false,
};

/** Desktop icon pixel metrics per size choice. */
export const ICON_METRICS: Record<IconSize, { icon: number; cell: number; font: number }> = {
    small: { icon: 32, cell: 64, font: 11 },
    normal: { icon: 42, cell: 76, font: 12 },
    large: { icon: 56, cell: 92, font: 13 },
};

const KEY = "vortex.settings";

function load(): Settings {
    try {
        const raw = JSON.parse(localStorage.getItem(KEY) ?? "{}");
        return { ...DEFAULTS, ...(raw && typeof raw === "object" ? raw : {}) };
    } catch {
        return { ...DEFAULTS };
    }
}

// Referentially stable until a write swaps it (so useSyncExternalStore is happy).
let cache: Settings = load();

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

export function getSettings(): Settings {
    return cache;
}

export function setSetting<K extends keyof Settings>(key: K, value: Settings[K]): void {
    cache = { ...cache, [key]: value };
    localStorage.setItem(KEY, JSON.stringify(cache));
    notify();
}

export function useSettings(): Settings {
    return useSyncExternalStore(
        (cb) => {
            listeners.add(cb);
            return () => listeners.delete(cb);
        },
        getSettings,
    );
}
