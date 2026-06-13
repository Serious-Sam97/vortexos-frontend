/**
 * VortexOS sound engine — all sounds are synthesized at runtime with the Web Audio API,
 * so there are no audio assets to ship. These are original tones in the spirit of a
 * 90s desktop OS, not recordings.
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

/** Warm ascending pad — played at boot. */
export function playStartup(): void {
    const ac = audio();
    if (!ac) return;
    const notes: Array<[number, OscillatorType]> = [
        [261.63, "sine"],
        [329.63, "sine"],
        [392.0, "sine"],
        [523.25, "triangle"],
    ];
    notes.forEach(([f, t], i) => note(ac, { freq: f, start: i * 0.18, dur: 1.8, type: t, gain: 0.15 }));
}

/** Short bell — used for dialogs / errors. */
export function playDing(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 880, start: 0, dur: 0.16, type: "sine", gain: 0.22 });
    note(ac, { freq: 1318.51, start: 0, dur: 0.4, type: "sine", gain: 0.1 });
}

/** Tiny click — menus and the Start button. */
export function playClick(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 200, start: 0, dur: 0.05, type: "square", gain: 0.05 });
}

/** Pleasant three-note chord — notifications. */
export function playChord(): void {
    const ac = audio();
    if (!ac) return;
    [523.25, 659.25, 783.99].forEach((f, i) => note(ac, { freq: f, start: i * 0.04, dur: 0.5, gain: 0.11 }));
}

/** Quick rising blip — a program opening. */
export function playOpen(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 440, start: 0, dur: 0.08, type: "triangle", gain: 0.09 });
    note(ac, { freq: 660, start: 0.05, dur: 0.1, type: "triangle", gain: 0.09 });
}

/** Quick falling blip — a program closing. */
export function playClose(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 520, start: 0, dur: 0.08, type: "triangle", gain: 0.08 });
    note(ac, { freq: 320, start: 0.05, dur: 0.12, type: "triangle", gain: 0.08 });
}

/** Short downward swoop — minimize. */
export function playMinimize(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 600, start: 0, dur: 0.12, type: "sine", gain: 0.08 });
    note(ac, { freq: 300, start: 0.04, dur: 0.12, type: "sine", gain: 0.08 });
}

/** Short upward swoop — maximize / restore. */
export function playMaximize(): void {
    const ac = audio();
    if (!ac) return;
    note(ac, { freq: 300, start: 0, dur: 0.12, type: "sine", gain: 0.08 });
    note(ac, { freq: 600, start: 0.04, dur: 0.12, type: "sine", gain: 0.08 });
}

/** Descending tones — shutdown. */
export function playShutdown(): void {
    const ac = audio();
    if (!ac) return;
    [523.25, 392.0, 329.63, 261.63].forEach((f, i) =>
        note(ac, { freq: f, start: i * 0.18, dur: 0.7, type: "sine", gain: 0.15 }),
    );
}
