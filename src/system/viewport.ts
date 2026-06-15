import { useSyncExternalStore } from "react";
import { useSettings } from "./settings";

/**
 * Reactive viewport info for the adaptive (responsive) shell.
 * VortexOS stays pixel-identical on desktop; small/touch viewports get the
 * mobile treatment. Read it anywhere with useViewport(); it updates on resize
 * and orientation change. Pair with the "Tablet Mode" override (M5) via
 * useMobileShell() so a desktop user can force the touch shell too.
 */
export interface Viewport {
    width: number;
    height: number;
    /** Phone-sized: full-screen stacked windows, touch taskbar, reflowed icons. */
    isMobile: boolean;
    /** In-between: keep the desktop metaphor but allow touch affordances. */
    isTablet: boolean;
    /** Taller than wide. */
    portrait: boolean;
    /** A coarse (finger) pointer is the primary input. */
    coarse: boolean;
}

export const MOBILE_MAX = 768;
export const TABLET_MAX = 1024;

/** Taskbar height grows on the touch shell so targets clear the 44px minimum. */
export const taskbarHeight = (mobile: boolean): number => (mobile ? 52 : 40);

function read(): Viewport {
    const width = typeof window !== "undefined" ? window.innerWidth : 1280;
    const height = typeof window !== "undefined" ? window.innerHeight : 800;
    const coarse = window.matchMedia?.("(pointer: coarse)").matches ?? false;
    // Phone-sized either by a narrow width OR a short+narrowish viewport — the latter
    // keeps a phone in the mobile shell when rotated to landscape (e.g. 812×375).
    // The width<=932 guard means a normal (tall) desktop never qualifies.
    const isMobile = width <= MOBILE_MAX || (width <= 932 && height <= 500);
    return {
        width,
        height,
        isMobile,
        isTablet: !isMobile && width > MOBILE_MAX && width <= TABLET_MAX,
        portrait: height >= width,
        coarse,
    };
}

// Referentially stable until a resize swaps it (so useSyncExternalStore is happy).
let cache: Viewport = read();
const listeners = new Set<() => void>();

let bound = false;
function ensureBound() {
    if (bound || typeof window === "undefined") return;
    bound = true;
    const recompute = () => {
        cache = read();
        listeners.forEach((l) => l());
    };
    window.addEventListener("resize", recompute);
    window.addEventListener("orientationchange", recompute);
}

export function getViewport(): Viewport {
    return cache;
}

export function useViewport(): Viewport {
    return useSyncExternalStore(
        (cb) => {
            ensureBound();
            listeners.add(cb);
            return () => listeners.delete(cb);
        },
        getViewport,
        getViewport,
    );
}

/**
 * Whether the touch/mobile shell should be active: a small viewport OR the
 * user's "Tablet Mode" override (forces it on any device). Centralised so
 * every consumer — windows, taskbar, desktop, OSK — flips together.
 */
export function useMobileShell(): boolean {
    return useViewport().isMobile || useSettings().tabletMode;
}
