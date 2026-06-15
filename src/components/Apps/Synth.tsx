import { useEffect, useRef, useState } from "react";
import { AppShell, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { noteOn, noteOff, trigger, midiToFreq, DEFAULT_PARAMS, audioNow, type SynthParams, type Voice } from "../../system/synth";

/**
 * Vortex Synth — a playable subtractive synth + 16-step sequencer, hand-built on
 * the Web Audio engine. Mouse/touch on the keys, your computer keyboard
 * (a w s e d f t g y h u j k), waveform + filter + ADSR, and a groovebox grid
 * with a lookahead scheduler. Routes through the shared analyser, so VortexViz
 * lights up to it.
 */
const LOW = 60; // C4
const HIGH = 84; // C6
const KEYMAP: Record<string, number> = { a: 60, w: 61, s: 62, e: 63, d: 64, f: 65, t: 66, g: 67, y: 68, h: 69, u: 70, j: 71, k: 72 };
const PC_BLACK = [1, 3, 6, 8, 10];
const SEQ_ROWS = [72, 69, 67, 64, 62, 60, 57, 55]; // C-major pentatonic, high→low
const ROW_LABEL = ["C5", "A4", "G4", "E4", "D4", "C4", "A3", "G3"];
const STEPS = 16;

const keys = (() => {
    const out: { midi: number; black: boolean }[] = [];
    for (let m = LOW; m <= HIGH; m++) out.push({ midi: m, black: PC_BLACK.includes(m % 12) });
    return out;
})();
const whiteCount = keys.filter((k) => !k.black).length;

const Synth: React.FC = () => {
    const [params, setParams] = useState<SynthParams>({ ...DEFAULT_PARAMS });
    const paramsRef = useRef(params);
    paramsRef.current = params;
    const voices = useRef<Map<number, Voice>>(new Map());
    const [held, setHeld] = useState<Set<number>>(new Set());

    // sequencer
    const [grid, setGrid] = useState<boolean[][]>(() => SEQ_ROWS.map(() => Array(STEPS).fill(false)));
    const gridRef = useRef(grid);
    gridRef.current = grid;
    const [bpm, setBpm] = useState(120);
    const bpmRef = useRef(bpm);
    bpmRef.current = bpm;
    const [playing, setPlaying] = useState(false);
    const [step, setStep] = useState(-1);
    const schedRef = useRef<number | null>(null);

    const start = (midi: number) => {
        if (voices.current.has(midi)) return;
        const v = noteOn(midiToFreq(midi), paramsRef.current);
        if (v) voices.current.set(midi, v);
        setHeld((s) => new Set(s).add(midi));
    };
    const stop = (midi: number) => {
        const v = voices.current.get(midi);
        if (v) {
            noteOff(v, paramsRef.current.release);
            voices.current.delete(midi);
        }
        setHeld((s) => { const n = new Set(s); n.delete(midi); return n; });
    };

    // computer keyboard
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.repeat) return;
            const tag = (document.activeElement as HTMLElement | null)?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || (document.activeElement as HTMLElement | null)?.isContentEditable) return;
            const m = KEYMAP[e.key.toLowerCase()];
            if (m != null) { e.preventDefault(); start(m); }
        };
        const up = (e: KeyboardEvent) => {
            const m = KEYMAP[e.key.toLowerCase()];
            if (m != null) stop(m);
        };
        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // sequencer scheduler (lookahead)
    useEffect(() => {
        if (!playing) return;
        let nextTime = audioNow() + 0.1;
        let s = 0;
        const tick = () => {
            const stepDur = 60 / bpmRef.current / 4; // 16th notes
            const now = audioNow();
            while (nextTime < now + 0.12) {
                const col = s % STEPS;
                gridRef.current.forEach((row, r) => {
                    if (row[col]) trigger(midiToFreq(SEQ_ROWS[r]), paramsRef.current, nextTime, stepDur * 0.9);
                });
                const showAt = nextTime;
                const colShown = col;
                setTimeout(() => setStep(colShown), Math.max(0, (showAt - audioNow()) * 1000));
                nextTime += stepDur;
                s++;
            }
        };
        tick();
        schedRef.current = window.setInterval(tick, 25);
        return () => {
            if (schedRef.current) clearInterval(schedRef.current);
            setStep(-1);
        };
    }, [playing]);

    const toggleCell = (r: number, c: number) =>
        setGrid((g) => g.map((row, ri) => (ri === r ? row.map((v, ci) => (ci === c ? !v : v)) : row)));

    const whiteW = 100 / whiteCount;

    return (
        <AppShell $minW={520} $minH={360}>
            <Toolbar style={{ gap: 6, flexWrap: "wrap" }}>
                <label style={{ fontSize: 12 }}>Wave:</label>
                <select value={params.wave} onChange={(e) => setParams((p) => ({ ...p, wave: e.target.value as OscillatorType }))} style={{ fontFamily: "inherit" }}>
                    {["sawtooth", "square", "sine", "triangle"].map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
                <ToolSep />
                <Knob label="Cutoff" min={200} max={8000} step={50} value={params.cutoff} onChange={(v) => setParams((p) => ({ ...p, cutoff: v }))} unit="Hz" />
                <Knob label="Atk" min={0} max={1} step={0.01} value={params.attack} onChange={(v) => setParams((p) => ({ ...p, attack: v }))} />
                <Knob label="Dec" min={0} max={1} step={0.01} value={params.decay} onChange={(v) => setParams((p) => ({ ...p, decay: v }))} />
                <Knob label="Sus" min={0} max={1} step={0.01} value={params.sustain} onChange={(v) => setParams((p) => ({ ...p, sustain: v }))} />
                <Knob label="Rel" min={0} max={1.5} step={0.01} value={params.release} onChange={(v) => setParams((p) => ({ ...p, release: v }))} />
            </Toolbar>

            <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#2a2a3a", padding: 10 }}>
                {/* sequencer */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <ToolButton onClick={() => setPlaying((p) => !p)}>{playing ? "⏹ Stop" : "▶ Play"}</ToolButton>
                    <label style={{ color: "#fff", fontSize: 12 }}>Tempo {bpm}</label>
                    <input type="range" min={60} max={200} value={bpm} onChange={(e) => setBpm(Number(e.target.value))} />
                    <ToolButton onClick={() => setGrid(SEQ_ROWS.map(() => Array(STEPS).fill(false)))}>Clear</ToolButton>
                </div>
                <div style={{ display: "inline-block", background: "#1c1c28", padding: 6, borderRadius: 4 }}>
                    {grid.map((row, r) => (
                        <div key={r} style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 3 }}>
                            <span style={{ width: 26, color: "#9aa", fontSize: 10, fontFamily: "monospace" }}>{ROW_LABEL[r]}</span>
                            {row.map((on, c) => (
                                <div
                                    key={c}
                                    onClick={() => toggleCell(r, c)}
                                    style={{
                                        width: 20,
                                        height: 18,
                                        cursor: "pointer",
                                        borderRadius: 3,
                                        background: on ? (c === step ? "#fff" : "#ff2d95") : (c === step ? "#556" : "#333"),
                                        border: c % 4 === 0 ? "1px solid #667" : "1px solid #2a2a38",
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* keyboard */}
                <div style={{ position: "relative", height: 120, marginTop: 12, userSelect: "none", touchAction: "none" }}>
                    {/* white keys */}
                    <div style={{ display: "flex", height: "100%" }}>
                        {keys.filter((k) => !k.black).map((k) => (
                            <div
                                key={k.midi}
                                onPointerDown={(e) => { try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* capture optional */ } start(k.midi); }}
                                onPointerUp={() => stop(k.midi)}
                                onPointerLeave={(e) => { if (e.buttons) stop(k.midi); }}
                                style={{ flex: 1, border: "1px solid #444", borderRadius: "0 0 4px 4px", background: held.has(k.midi) ? "#ff9bd3" : "#fff" }}
                            />
                        ))}
                    </div>
                    {/* black keys */}
                    {(() => {
                        let w = 0;
                        return keys.map((k) => {
                            if (!k.black) { w++; return null; }
                            const left = w * whiteW;
                            return (
                                <div
                                    key={k.midi}
                                    onPointerDown={(e) => { try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* capture optional */ } start(k.midi); }}
                                    onPointerUp={() => stop(k.midi)}
                                    onPointerLeave={(e) => { if (e.buttons) stop(k.midi); }}
                                    style={{ position: "absolute", top: 0, left: `calc(${left}% - ${whiteW * 0.3}%)`, width: `${whiteW * 0.6}%`, height: "62%", background: held.has(k.midi) ? "#a0408a" : "#111", border: "1px solid #000", borderRadius: "0 0 3px 3px", zIndex: 2 }}
                                />
                            );
                        });
                    })()}
                </div>
                <div style={{ color: "#aab", fontSize: 11, marginTop: 6 }}>Play with the keys above, or your keyboard: <b>a w s e d f t g y h u j k</b></div>
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>Vortex Synth</StatusPanel>
                <StatusPanel>{playing ? `▶ ${bpm} BPM` : "stopped"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

const Knob: React.FC<{ label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; unit?: string }> = ({ label, min, max, step, value, onChange, unit }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 10 }}>
        <span>{label}</span>
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{ width: 64 }} />
        <span style={{ color: "#06c" }}>{value}{unit ?? ""}</span>
    </div>
);

export default Synth;
