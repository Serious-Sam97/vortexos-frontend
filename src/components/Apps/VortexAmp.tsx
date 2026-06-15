import { useEffect, useRef, useState } from "react";
import { AppShell, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useSys } from "../../kernel/react/useSys";
import { getAudioContext, setActiveAnalyser, EQ_BANDS, EQ_PRESETS } from "../../system/audio";

/**
 * VortexAmp — a skinnable Winamp-style player. Hand-wired Web Audio graph:
 * <audio> → MediaElementSource → 10 peaking BiquadFilters (graphic EQ) →
 * AnalyserNode (published for the visualizers) → master Gain → destination.
 */
const MIME: Record<string, string> = { mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", m4a: "audio/mp4", flac: "audio/flac" };
const extOf = (p: string) => p.slice(p.lastIndexOf(".") + 1).toLowerCase();
const nameOf = (p: string) => p.slice(p.lastIndexOf("/") + 1);
const fmt = (s: number) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");

interface Track { name: string; url?: string; path?: string }

const SKINS = {
    classic: { bg: "#202020", panel: "#000", text: "#00ff66", dim: "#0a3", accent: "#00ff66", bar: "#00ff66" },
    vapor: { bg: "#1a0a2e", panel: "#10001f", text: "#ff8fd4", dim: "#7a4", accent: "#00e5d0", bar: "#ff2d95" },
};

const VortexAmp: React.FC = () => {
    const sys = useSys();
    const audioRef = useRef<HTMLAudioElement>(null);
    const ctxRef = useRef<AudioContext | null>(null);
    const filters = useRef<BiquadFilterNode[]>([]);
    const gainRef = useRef<GainNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const built = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const raf = useRef(0);

    const [tracks, setTracks] = useState<Track[]>([{ name: "VortexOS — Startup", url: "/win98.mp3" }]);
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [cur, setCur] = useState(0);
    const [dur, setDur] = useState(0);
    const [vol, setVol] = useState(0.8);
    const [eq, setEq] = useState<number[]>(() => [...EQ_PRESETS.Flat]);
    const [skinName, setSkinName] = useState<keyof typeof SKINS>("classic");
    const [addPath, setAddPath] = useState("");
    const [showEq, setShowEq] = useState(true);
    const skin = SKINS[skinName];

    // Build the audio graph once (a MediaElementSource can only be created once per element).
    const buildGraph = () => {
        if (built.current || !audioRef.current) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
            const src = ctx.createMediaElementSource(audioRef.current);
            const chain = EQ_BANDS.map((hz, i) => {
                const f = ctx.createBiquadFilter();
                f.type = i === 0 ? "lowshelf" : i === EQ_BANDS.length - 1 ? "highshelf" : "peaking";
                f.frequency.value = hz;
                f.Q.value = 1;
                f.gain.value = eq[i];
                return f;
            });
            const an = ctx.createAnalyser();
            an.fftSize = 256;
            const g = ctx.createGain();
            g.gain.value = vol;
            // src → f0 → f1 → … → analyser → gain → destination
            let node: AudioNode = src;
            chain.forEach((f) => { node.connect(f); node = f; });
            node.connect(an);
            an.connect(g);
            g.connect(ctx.destination);
            ctxRef.current = ctx;
            filters.current = chain;
            analyserRef.current = an;
            gainRef.current = g;
            built.current = true;
            setActiveAnalyser(an);
            drawLoop();
        } catch {
            /* no Web Audio — playback still works */
        }
    };

    useEffect(() => () => { setActiveAnalyser(null); cancelAnimationFrame(raf.current); }, []);

    // Load the selected track.
    useEffect(() => {
        const t = tracks[index];
        const el = audioRef.current;
        if (!t || !el) return;
        let objectUrl: string | null = null;
        let alive = true;
        (async () => {
            try {
                if (t.url) {
                    el.src = t.url;
                } else if (t.path) {
                    const mime = MIME[extOf(t.path)] ?? "audio/mpeg";
                    const bytes = await sys.readFile(t.path);
                    objectUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
                    el.src = objectUrl;
                }
                if (alive && playing) void el.play().catch(() => {});
            } catch { /* ignore */ }
        })();
        return () => { alive = false; if (objectUrl) URL.revokeObjectURL(objectUrl); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, tracks]);

    const drawLoop = () => {
        const cv = canvasRef.current;
        const an = analyserRef.current;
        if (cv && an) {
            const ctx2d = cv.getContext("2d");
            if (ctx2d) {
                const bins = an.frequencyBinCount;
                const data = new Uint8Array(bins);
                an.getByteFrequencyData(data);
                ctx2d.clearRect(0, 0, cv.width, cv.height);
                const n = 32;
                const bw = cv.width / n;
                for (let i = 0; i < n; i++) {
                    const v = data[Math.floor((i / n) * bins)] / 255;
                    const h = v * cv.height;
                    ctx2d.fillStyle = skin.bar;
                    ctx2d.fillRect(i * bw + 1, cv.height - h, bw - 2, h);
                }
            }
        }
        raf.current = requestAnimationFrame(drawLoop);
    };

    const togglePlay = () => {
        buildGraph();
        const el = audioRef.current;
        if (!el) return;
        if (el.paused) { void el.play().catch(() => {}); setPlaying(true); }
        else { el.pause(); setPlaying(false); }
    };
    const step = (d: number) => setIndex((i) => (i + d + tracks.length) % tracks.length);

    const onEq = (i: number, v: number) => {
        setEq((prev) => { const next = [...prev]; next[i] = v; return next; });
        if (filters.current[i]) filters.current[i].gain.value = v;
    };
    const applyPreset = (name: string) => {
        const p = EQ_PRESETS[name];
        setEq([...p]);
        p.forEach((v, i) => { if (filters.current[i]) filters.current[i].gain.value = v; });
    };
    const onVol = (v: number) => { setVol(v); if (gainRef.current) gainRef.current.gain.value = v; };

    const addTrack = async () => {
        const p = addPath.trim();
        if (!p) return;
        if (!MIME[extOf(p)]) return;
        setTracks((t) => [...t, { name: nameOf(p), path: p }]);
        setAddPath("");
    };

    const lcd: React.CSSProperties = { fontFamily: "'Lucida Console', monospace", color: skin.text, background: skin.panel, textShadow: `0 0 4px ${skin.text}` };

    return (
        <AppShell $minW={460} $minH={340}>
            <Toolbar style={{ gap: 4 }}>
                <ToolButton onClick={() => setSkinName((s) => (s === "classic" ? "vapor" : "classic"))}>🎨 Skin: {skinName}</ToolButton>
                <ToolSep />
                <ToolButton $active={showEq} onClick={() => setShowEq((v) => !v)}>Equalizer</ToolButton>
            </Toolbar>
            <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", background: skin.bg, padding: 8, gap: 8 }}>
                <audio
                    ref={audioRef}
                    onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
                    onDurationChange={(e) => setDur(e.currentTarget.duration)}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={() => step(1)}
                />

                {/* LCD + spectrum */}
                <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ ...lcd, flex: 1, padding: 8, border: `1px solid ${skin.dim}`, overflow: "hidden", whiteSpace: "nowrap" }}>
                        <div style={{ fontSize: 18, fontWeight: 700 }}>{fmt(cur)} <span style={{ opacity: 0.6 }}>/ {fmt(dur)}</span></div>
                        <div style={{ fontSize: 13, textOverflow: "ellipsis", overflow: "hidden" }}>♪ {tracks[index]?.name ?? "—"}</div>
                    </div>
                    <canvas ref={canvasRef} width={140} height={56} style={{ background: skin.panel, border: `1px solid ${skin.dim}` }} />
                </div>

                {/* transport + seek + volume */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <ToolButton onClick={() => step(-1)}>⏮</ToolButton>
                    <ToolButton onClick={togglePlay}>{playing ? "⏸" : "▶"}</ToolButton>
                    <ToolButton onClick={() => step(1)}>⏭</ToolButton>
                    <input type="range" min={0} max={dur || 0} step={0.1} value={cur} onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value); }} style={{ flex: 1 }} />
                    <span style={{ fontSize: 11 }}>🔊</span>
                    <input type="range" min={0} max={1} step={0.01} value={vol} onChange={(e) => onVol(Number(e.target.value))} style={{ width: 70 }} />
                </div>

                {/* equalizer */}
                {showEq && (
                    <div style={{ background: skin.panel, border: `1px solid ${skin.dim}`, padding: 6 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            {Object.keys(EQ_PRESETS).map((p) => (
                                <button key={p} onClick={() => applyPreset(p)} style={{ fontSize: 10, cursor: "pointer", background: skin.bg, color: skin.text, border: `1px solid ${skin.dim}`, padding: "1px 4px" }}>{p}</button>
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: 70 }}>
                            {EQ_BANDS.map((hz, i) => (
                                <div key={hz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                                    <input
                                        type="range"
                                        min={-12}
                                        max={12}
                                        step={1}
                                        value={eq[i]}
                                        // vertical EQ sliders
                                        style={{ writingMode: "vertical-lr", direction: "rtl", width: 16, height: 48 } as React.CSSProperties}
                                        onChange={(e) => onEq(i, Number(e.target.value))}
                                        aria-label={`${hz} Hz`}
                                    />
                                    <span style={{ fontSize: 8, color: skin.dim }}>{hz >= 1000 ? `${hz / 1000}k` : hz}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* playlist */}
                <div style={{ flex: 1, minHeight: 60, overflow: "auto", background: skin.panel, border: `1px solid ${skin.dim}` }}>
                    {tracks.map((t, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            style={{ padding: "3px 8px", cursor: "pointer", color: i === index ? "#fff" : skin.text, background: i === index ? skin.dim : "transparent", fontSize: 12, fontFamily: "'Lucida Console', monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                        >
                            {i + 1}. {t.name}
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                    <input value={addPath} onChange={(e) => setAddPath(e.target.value)} placeholder="/home/you/song.mp3" style={{ flex: 1, fontSize: 12, fontFamily: "monospace" }} onKeyDown={(e) => e.key === "Enter" && addTrack()} />
                    <button onClick={addTrack} style={{ cursor: "pointer" }}>Add</button>
                </div>
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>VortexAmp</StatusPanel>
                <StatusPanel>{playing ? "▶ Playing" : "❚❚ Paused"}</StatusPanel>
                <StatusPanel>{tracks.length} track(s)</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VortexAmp;
