/**
 * VortexOS sound engine — all sounds are synthesized at runtime with the Web Audio API,
 * so there are no audio assets to ship. These are original tones in the spirit of a
 * 90s desktop OS, not recordings.
 *
 * The Time Machine drives this via a SOUND SCHEME: each play* call dispatches to the
 * active scheme's recipe, falling back to the default ("vortex") recipe. Eras register
 * their own scheme (PC-speaker beeps for DOS, brighter chimes for XP, …) by adding an
 * entry to SOUND_SCHEMES; the default scheme below is the original VortexOS sound.
 */

let ctx: AudioContext | null = null;

let masterVolume = (() => {
    const v = parseFloat(localStorage.getItem("vortex.volume") ?? "");
    return Number.isFinite(v) ? v : 0.7;
})();
let muted = localStorage.getItem("vortex.muted") === "1";

// Pub/sub so the tray volume control and the Control Panel Sounds applet stay in
// sync — either surface can change volume/mute and the other re-renders.
const soundListeners = new Set<() => void>();
const notifySound = () => soundListeners.forEach((l) => l());
export function subscribeSound(fn: () => void): () => void {
    soundListeners.add(fn);
    return () => soundListeners.delete(fn);
}

export function getVolume(): number {
    return masterVolume;
}
export function setVolume(v: number): void {
    masterVolume = Math.min(1, Math.max(0, v));
    localStorage.setItem("vortex.volume", String(masterVolume));
    notifySound();
}
export function isMuted(): boolean {
    return muted;
}
export function setMuted(m: boolean): void {
    muted = m;
    localStorage.setItem("vortex.muted", m ? "1" : "0");
    notifySound();
}

function audio(): AudioContext | null {
    try {
        if (!ctx) {
            const Ctor = window.AudioContext || (window as any).webkitAudioContext;
            if (!Ctor) return null;
            ctx = new Ctor();
        }
        if (ctx.state === "suspended") void ctx.resume();
        return ctx;
    } catch {
        return null;
    }
}

interface NoteOpts {
    freq: number;
    start: number;
    dur: number;
    type?: OscillatorType;
    gain?: number;
}

function note(ac: AudioContext, { freq, start, dur, type = "sine", gain = 0.2 }: NoteOpts) {
    const vol = muted ? 0 : gain * masterVolume;
    if (vol <= 0) return;
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = ac.currentTime + start;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
}

/* ------------------------------------------------------------ sound schemes */

/** A named system event a scheme can voice. */
export type SoundEvent =
    | "startup"
    | "bootChord"
    | "ding"
    | "click"
    | "chord"
    | "open"
    | "close"
    | "minimize"
    | "maximize"
    | "shutdown";

type SoundRecipe = (ac: AudioContext) => void;
export type SoundScheme = Partial<Record<SoundEvent, SoundRecipe>>;

/** The original VortexOS sounds — the default recipe for every event. */
const DEFAULT_SCHEME: Record<SoundEvent, SoundRecipe> = {
    /** Warm ascending pad — played at boot. */
    startup: (ac) => {
        const notes: Array<[number, OscillatorType]> = [
            [261.63, "sine"],
            [329.63, "sine"],
            [392.0, "sine"],
            [523.25, "triangle"],
        ];
        notes.forEach(([f, t], i) => note(ac, { freq: f, start: i * 0.18, dur: 1.8, type: t, gain: 0.15 }));
    },
    /**
     * The signature VortexOS boot chord — a cinematic rising arpeggio that blooms
     * into a shimmering major chord with a high sparkle on top.
     */
    bootChord: (ac) => {
        const arp: Array<[number, OscillatorType]> = [
            [261.63, "triangle"],
            [329.63, "triangle"],
            [392.0, "triangle"],
            [523.25, "sine"],
        ];
        arp.forEach(([f, t], i) => note(ac, { freq: f, start: i * 0.13, dur: 1.9, type: t, gain: 0.14 }));
        [261.63, 329.63, 392.0, 523.25].forEach((f) =>
            note(ac, { freq: f, start: 0.55, dur: 2.4, type: "sine", gain: 0.07 }),
        );
        note(ac, { freq: 1046.5, start: 0.7, dur: 1.6, type: "sine", gain: 0.06 });
        note(ac, { freq: 1567.98, start: 0.78, dur: 1.4, type: "sine", gain: 0.04 });
    },
    /** Short bell — dialogs / errors. */
    ding: (ac) => {
        note(ac, { freq: 880, start: 0, dur: 0.16, type: "sine", gain: 0.22 });
        note(ac, { freq: 1318.51, start: 0, dur: 0.4, type: "sine", gain: 0.1 });
    },
    /** Tiny click — menus and the Start button. */
    click: (ac) => {
        note(ac, { freq: 200, start: 0, dur: 0.05, type: "square", gain: 0.05 });
    },
    /** Pleasant three-note chord — notifications. */
    chord: (ac) => {
        [523.25, 659.25, 783.99].forEach((f, i) => note(ac, { freq: f, start: i * 0.04, dur: 0.5, gain: 0.11 }));
    },
    /** Quick rising blip — a program opening. */
    open: (ac) => {
        note(ac, { freq: 440, start: 0, dur: 0.08, type: "triangle", gain: 0.09 });
        note(ac, { freq: 660, start: 0.05, dur: 0.1, type: "triangle", gain: 0.09 });
    },
    /** Quick falling blip — a program closing. */
    close: (ac) => {
        note(ac, { freq: 520, start: 0, dur: 0.08, type: "triangle", gain: 0.08 });
        note(ac, { freq: 320, start: 0.05, dur: 0.12, type: "triangle", gain: 0.08 });
    },
    /** Short downward swoop — minimize. */
    minimize: (ac) => {
        note(ac, { freq: 600, start: 0, dur: 0.12, type: "sine", gain: 0.08 });
        note(ac, { freq: 300, start: 0.04, dur: 0.12, type: "sine", gain: 0.08 });
    },
    /** Short upward swoop — maximize / restore. */
    maximize: (ac) => {
        note(ac, { freq: 300, start: 0, dur: 0.12, type: "sine", gain: 0.08 });
        note(ac, { freq: 600, start: 0.04, dur: 0.12, type: "sine", gain: 0.08 });
    },
    /** Descending tones — shutdown. */
    shutdown: (ac) => {
        [523.25, 392.0, 329.63, 261.63].forEach((f, i) =>
            note(ac, { freq: f, start: i * 0.18, dur: 0.7, type: "sine", gain: 0.15 }),
        );
    },
};

/**
 * Per-era sound schemes. The default ("vortex") is the recipe table above; eras
 * register partial overrides (only the events they re-voice) keyed by SoundSchemeId.
 * Anything not overridden falls back to DEFAULT_SCHEME, so a scheme is never silent.
 */
export const SOUND_SCHEMES: Record<string, SoundScheme> = {
    /** DOS — the PC speaker: harsh single-channel square-wave beeps, no warmth. */
    pcspeaker: {
        startup: (ac) => {
            note(ac, { freq: 600, start: 0, dur: 0.09, type: "square", gain: 0.07 });
            note(ac, { freq: 900, start: 0.1, dur: 0.12, type: "square", gain: 0.07 });
        },
        bootChord: (ac) => {
            [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
                note(ac, { freq: f, start: i * 0.08, dur: 0.08, type: "square", gain: 0.06 }),
            );
        },
        ding: (ac) => note(ac, { freq: 880, start: 0, dur: 0.14, type: "square", gain: 0.07 }),
        click: (ac) => note(ac, { freq: 1100, start: 0, dur: 0.02, type: "square", gain: 0.04 }),
        chord: (ac) => {
            [784, 988, 1175].forEach((f, i) => note(ac, { freq: f, start: i * 0.05, dur: 0.07, type: "square", gain: 0.05 }));
        },
        open: (ac) => {
            note(ac, { freq: 500, start: 0, dur: 0.05, type: "square", gain: 0.05 });
            note(ac, { freq: 800, start: 0.05, dur: 0.05, type: "square", gain: 0.05 });
        },
        close: (ac) => {
            note(ac, { freq: 800, start: 0, dur: 0.05, type: "square", gain: 0.05 });
            note(ac, { freq: 400, start: 0.05, dur: 0.06, type: "square", gain: 0.05 });
        },
        minimize: (ac) => note(ac, { freq: 500, start: 0, dur: 0.06, type: "square", gain: 0.05 }),
        maximize: (ac) => note(ac, { freq: 800, start: 0, dur: 0.06, type: "square", gain: 0.05 }),
        shutdown: (ac) => {
            [880, 660, 440].forEach((f, i) => note(ac, { freq: f, start: i * 0.12, dur: 0.14, type: "square", gain: 0.06 }));
        },
    },
    /**
     * Windows 9x / NT / 2000 — warm period chimes. Distinct boot "tada" and a major
     * bloom; the small sounds fall through to the default recipe.
     */
    chimes9x: {
        startup: (ac) => {
            // The classic rising "ta-da".
            note(ac, { freq: 587.33, start: 0, dur: 0.5, type: "sine", gain: 0.16 });
            note(ac, { freq: 880, start: 0.16, dur: 0.7, type: "sine", gain: 0.16 });
            note(ac, { freq: 1174.66, start: 0.16, dur: 0.7, type: "triangle", gain: 0.08 });
        },
        bootChord: (ac) => {
            // Warm major triad that blooms, no sparkle (period-correct, simpler than Vortex).
            [523.25, 659.25, 783.99].forEach((f) =>
                note(ac, { freq: f, start: 0, dur: 1.6, type: "sine", gain: 0.12 }),
            );
            note(ac, { freq: 1046.5, start: 0.18, dur: 1.3, type: "triangle", gain: 0.06 });
        },
    },
    /** Windows XP — a brighter, cleaner chime; a gentle five-note bloom on boot. */
    luna: {
        startup: (ac) => {
            // Soft bright welcome (a descending-then-resolving phrase, XP-ish).
            note(ac, { freq: 1046.5, start: 0, dur: 0.4, type: "sine", gain: 0.13 });
            note(ac, { freq: 783.99, start: 0.14, dur: 0.5, type: "sine", gain: 0.12 });
            note(ac, { freq: 1318.51, start: 0.28, dur: 0.9, type: "sine", gain: 0.11 });
            note(ac, { freq: 1567.98, start: 0.34, dur: 0.8, type: "triangle", gain: 0.05 });
        },
        bootChord: (ac) => {
            // Clean major bloom with a soft shimmer.
            [659.25, 830.61, 987.77].forEach((f) =>
                note(ac, { freq: f, start: 0, dur: 1.5, type: "sine", gain: 0.1 }),
            );
            note(ac, { freq: 1318.51, start: 0.22, dur: 1.2, type: "sine", gain: 0.05 });
        },
        ding: (ac) => {
            // The softer XP-style ding.
            note(ac, { freq: 1046.5, start: 0, dur: 0.18, type: "sine", gain: 0.18 });
            note(ac, { freq: 1567.98, start: 0.02, dur: 0.35, type: "sine", gain: 0.08 });
        },
    },
    /** Windows Vista / 7 — refined glassy Aero chimes: smooth, airy, resolved. */
    aero: {
        startup: (ac) => {
            // The gentle Aero welcome — a soft four-note resolve with shimmer.
            note(ac, { freq: 880, start: 0, dur: 0.5, type: "sine", gain: 0.12 });
            note(ac, { freq: 1108.73, start: 0.16, dur: 0.6, type: "sine", gain: 0.12 });
            note(ac, { freq: 1318.51, start: 0.32, dur: 0.9, type: "sine", gain: 0.11 });
            note(ac, { freq: 1760, start: 0.4, dur: 0.8, type: "triangle", gain: 0.04 });
        },
        bootChord: (ac) => {
            // Airy major-ninth bloom with a glassy top.
            [659.25, 830.61, 987.77, 1318.51].forEach((f, i) =>
                note(ac, { freq: f, start: i * 0.04, dur: 1.7, type: "sine", gain: 0.08 }),
            );
            note(ac, { freq: 1975.53, start: 0.3, dur: 1.1, type: "sine", gain: 0.035 });
        },
        ding: (ac) => {
            note(ac, { freq: 1174.66, start: 0, dur: 0.2, type: "sine", gain: 0.16 });
            note(ac, { freq: 1760, start: 0.04, dur: 0.4, type: "sine", gain: 0.07 });
        },
    },
};

let activeScheme = "vortex";
export function getSoundScheme(): string {
    return activeScheme;
}
export function setSoundScheme(id: string): void {
    activeScheme = id;
}

function play(event: SoundEvent): void {
    const ac = audio();
    if (!ac) return;
    const recipe = SOUND_SCHEMES[activeScheme]?.[event] ?? DEFAULT_SCHEME[event];
    recipe(ac);
}

/* --------------------------------------------------- public event triggers */
export const playStartup = (): void => play("startup");
export const playBootChord = (): void => play("bootChord");
export const playDing = (): void => play("ding");
export const playClick = (): void => play("click");
export const playChord = (): void => play("chord");
export const playOpen = (): void => play("open");
export const playClose = (): void => play("close");
export const playMinimize = (): void => play("minimize");
export const playMaximize = (): void => play("maximize");
export const playShutdown = (): void => play("shutdown");
