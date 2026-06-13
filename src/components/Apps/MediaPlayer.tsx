import { useEffect, useRef, useState } from "react";
import { Frame } from "react95";
import { useSys } from "../../kernel/react/useSys";

const MIME: Record<string, string> = {
    mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", m4a: "audio/mp4", flac: "audio/flac",
};
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)$/i;
const mimeOf = (p: string) => MIME[p.slice(p.lastIndexOf(".") + 1).toLowerCase()] ?? null;
const dirOf = (p: string) => p.slice(0, p.lastIndexOf("/")) || "/";
const nameOf = (p: string) => p.slice(p.lastIndexOf("/") + 1);

const MediaPlayer: React.FC = () => {
    const sys = useSys();
    const audioRef = useRef<HTMLAudioElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const analyser = useRef<AnalyserNode | null>(null);
    const built = useRef(false);
    const raf = useRef(0);

    const [list, setList] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Build the playlist from the folder of the file passed in argv.
    useEffect(() => {
        (async () => {
            const p = (await sys.argv())[0];
            if (!p) { setError("No media to play."); return; }
            const dir = dirOf(p);
            try {
                const names = (await sys.readdir(dir)).filter((n) => AUDIO_EXT.test(n)).sort();
                const paths = names.map((n) => `${dir}/${n}`);
                setList(paths.length ? paths : [p]);
                setIndex(Math.max(0, paths.indexOf(p)));
            } catch {
                setList([p]); setIndex(0);
            }
        })();
    }, [sys]);

    // Load the current track into the audio element.
    useEffect(() => {
        const p = list[index];
        if (!p || !audioRef.current) return;
        let objectUrl: string | null = null;
        let alive = true;
        (async () => {
            const mime = mimeOf(p);
            if (!mime) { setError("Unsupported audio format."); return; }
            try {
                const bytes = await sys.readFile(p);
                objectUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
                if (alive && audioRef.current) {
                    audioRef.current.src = objectUrl;
                    void audioRef.current.play().catch(() => {});
                }
            } catch {
                if (alive) setError("Could not open this file.");
            }
        })();
        return () => { alive = false; if (objectUrl) URL.revokeObjectURL(objectUrl); };
    }, [list, index, sys]);

    // Web-Audio analyser + retrowave bar visualizer (the source can only be created once
    // per <audio> element, so guard it; new tracks just change audio.src).
    const setupGraph = () => {
        if (built.current || !audioRef.current) return;
        try {
            const Ctor = window.AudioContext || (window as any).webkitAudioContext;
            const ctx = new Ctor();
            const src = ctx.createMediaElementSource(audioRef.current);
            const an = ctx.createAnalyser();
            an.fftSize = 128;
            src.connect(an);
            an.connect(ctx.destination);
            analyser.current = an;
            built.current = true;
            void ctx.resume();
            draw();
        } catch {
            /* no Web Audio — the player still works without the visualizer */
        }
    };

    const draw = () => {
        const cv = canvasRef.current;
        const an = analyser.current;
        if (!cv || !an) return;
        const c = cv.getContext("2d")!;
        const bins = an.frequencyBinCount;
        const data = new Uint8Array(bins);
        an.getByteFrequencyData(data);
        c.fillStyle = "#0a0020";
        c.fillRect(0, 0, cv.width, cv.height);
        const bw = cv.width / bins;
        for (let i = 0; i < bins; i++) {
            const h = (data[i] / 255) * cv.height;
            const grad = c.createLinearGradient(0, cv.height, 0, cv.height - h);
            grad.addColorStop(0, "#ff2d95");
            grad.addColorStop(1, "#00e5d0");
            c.fillStyle = grad;
            c.fillRect(i * bw, cv.height - h, bw - 1, h);
        }
        raf.current = requestAnimationFrame(draw);
    };

    useEffect(() => () => cancelAnimationFrame(raf.current), []);

    const next = () => setIndex((i) => (list.length ? (i + 1) % list.length : 0));

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 340, minHeight: 260, padding: 6 }}>
            {error && <p style={{ padding: 12 }}>{error}</p>}
            {!error && (
                <>
                    <p style={{ margin: "2px 0 6px", fontWeight: "bold", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        🎵 {list[index] ? nameOf(list[index]) : "—"}
                    </p>
                    <Frame variant="well" style={{ padding: 2, marginBottom: 6 }}>
                        <canvas ref={canvasRef} width={320} height={80} style={{ display: "block", width: "100%", height: 80, background: "#0a0020" }} />
                    </Frame>
                    <audio
                        ref={audioRef}
                        controls
                        onPlay={setupGraph}
                        onEnded={next}
                        style={{ width: "100%" }}
                    />
                    <p style={{ fontSize: 12, fontWeight: "bold", margin: "8px 0 4px" }}>Playlist ({list.length})</p>
                    <Frame variant="well" style={{ flex: 1, minHeight: 60, overflow: "auto", background: "#fff" }}>
                        {list.map((p, i) => (
                            <div
                                key={p}
                                onClick={() => setIndex(i)}
                                style={{ padding: "3px 6px", cursor: "pointer", fontSize: 12, background: i === index ? "#000080" : "transparent", color: i === index ? "#fff" : "#000", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                            >
                                {i === index ? "▶ " : ""}{nameOf(p)}
                            </div>
                        ))}
                    </Frame>
                </>
            )}
        </div>
    );
};

export default MediaPlayer;
