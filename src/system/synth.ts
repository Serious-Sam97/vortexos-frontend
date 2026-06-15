import { getAudioContext, setActiveAnalyser } from "./audio";

/**
 * Hand-built subtractive synth voice engine. Each note is osc → lowpass filter →
 * ADSR gain → master → analyser → out. `noteOn`/`noteOff` drive the live
 * keyboard; `trigger` schedules a one-shot pluck at an exact AudioContext time
 * for the step sequencer. The master analyser is published (audio.ts) so the
 * visualizers light up to the synth too.
 */
export interface SynthParams {
    wave: OscillatorType;
    cutoff: number; // Hz
    attack: number; // s
    decay: number; // s
    sustain: number; // 0..1
    release: number; // s
}

export const DEFAULT_PARAMS: SynthParams = { wave: "sawtooth", cutoff: 2200, attack: 0.01, decay: 0.12, sustain: 0.6, release: 0.25 };

/** MIDI note → frequency (A4 = 440). */
export function midiToFreq(midi: number): number {
    return 440 * Math.pow(2, (midi - 69) / 12);
}

let master: GainNode | null = null;
let analyser: AnalyserNode | null = null;

function ensure(ctx: AudioContext) {
    if (master) return;
    analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    master = ctx.createGain();
    master.gain.value = 0.28;
    master.connect(analyser);
    analyser.connect(ctx.destination);
}

export interface Voice {
    osc: OscillatorNode;
    gain: GainNode;
}

function makeVoice(ctx: AudioContext, freq: number, p: SynthParams, when: number): Voice {
    const osc = ctx.createOscillator();
    osc.type = p.wave;
    osc.frequency.setValueAtTime(freq, when);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(p.cutoff, when);
    filter.Q.value = 6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(1, when + p.attack);
    g.gain.linearRampToValueAtTime(Math.max(0.0001, p.sustain), when + p.attack + p.decay);
    osc.connect(filter);
    filter.connect(g);
    g.connect(master!);
    osc.start(when);
    return { osc, gain: g };
}

/** Start a sustained note (returns a handle to release later). */
export function noteOn(freq: number, p: SynthParams): Voice | null {
    const ctx = getAudioContext();
    if (!ctx) return null;
    ensure(ctx);
    setActiveAnalyser(analyser);
    return makeVoice(ctx, freq, p, ctx.currentTime);
}

/** Release a sustained note with the ADSR release ramp. */
export function noteOff(v: Voice | null, release: number): void {
    const ctx = getAudioContext();
    if (!ctx || !v) return;
    const now = ctx.currentTime;
    v.gain.gain.cancelScheduledValues(now);
    v.gain.gain.setValueAtTime(v.gain.gain.value, now);
    v.gain.gain.linearRampToValueAtTime(0, now + release);
    v.osc.stop(now + release + 0.03);
}

/** Schedule a one-shot note at an exact time (for the sequencer). */
export function trigger(freq: number, p: SynthParams, when: number, dur: number): void {
    const ctx = getAudioContext();
    if (!ctx) return;
    ensure(ctx);
    setActiveAnalyser(analyser);
    const v = makeVoice(ctx, freq, p, when);
    const end = when + dur;
    v.gain.gain.setValueAtTime(Math.max(0.0001, p.sustain), end);
    v.gain.gain.linearRampToValueAtTime(0, end + p.release);
    v.osc.stop(end + p.release + 0.03);
}

export function audioNow(): number {
    return getAudioContext()?.currentTime ?? 0;
}
