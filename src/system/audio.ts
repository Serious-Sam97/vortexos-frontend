/**
 * Shared media-audio plumbing for Phase 23 (Sight & Sound). A single AudioContext
 * for music/synth playback (separate from sounds.ts's UI-sfx context), plus an
 * "active analyser" registry so the visualizers (M2) and screensaver can render
 * whatever is currently playing without owning the audio graph.
 */
let ctx: AudioContext | null = null;

export function getAudioContext(): AudioContext | null {
    try {
        if (!ctx) {
            const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
            if (!Ctor) return null;
            ctx = new Ctor();
        }
        if (ctx.state === "suspended") void ctx.resume();
        return ctx;
    } catch {
        return null;
    }
}

let active: AnalyserNode | null = null;
const subs = new Set<() => void>();

/** Publish the analyser of the currently-playing source (or null when it stops). */
export function setActiveAnalyser(a: AnalyserNode | null): void {
    active = a;
    subs.forEach((s) => s());
}

export function getActiveAnalyser(): AnalyserNode | null {
    return active;
}

export function subscribeAnalyser(fn: () => void): () => void {
    subs.add(fn);
    return () => subs.delete(fn);
}

/** Standard 10-band graphic-EQ centre frequencies (Hz). */
export const EQ_BANDS = [31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];

export const EQ_PRESETS: Record<string, number[]> = {
    Flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Rock: [5, 4, 2, 0, -1, -1, 1, 3, 4, 5],
    Bass: [7, 6, 5, 3, 1, 0, 0, 0, 0, 0],
    Treble: [0, 0, 0, 0, 0, 1, 3, 5, 6, 7],
    Vocal: [-2, -1, 0, 2, 4, 4, 3, 1, 0, -1],
};
