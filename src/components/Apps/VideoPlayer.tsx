import { useEffect, useRef, useState } from "react";
import { AppShell, Toolbar, ToolButton, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useSys } from "../../kernel/react/useSys";

/**
 * Vortex Video — a real video player. Plays local VFS files (read → Blob →
 * objectURL) or a direct URL, with custom playback chrome, fullscreen, and
 * Picture-in-Picture. Opened standalone or via a video file in Explorer.
 */
const MIME: Record<string, string> = { mp4: "video/mp4", m4v: "video/mp4", webm: "video/webm", ogv: "video/ogg", ogg: "video/ogg", mov: "video/quicktime", mkv: "video/x-matroska" };
const extOf = (p: string) => p.slice(p.lastIndexOf(".") + 1).toLowerCase();
const nameOf = (p: string) => p.slice(p.lastIndexOf("/") + 1) || p;
const fmt = (s: number) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");

const VideoPlayer: React.FC = () => {
    const sys = useSys();
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState("No video");
    const [playing, setPlaying] = useState(false);
    const [cur, setCur] = useState(0);
    const [dur, setDur] = useState(0);
    const [vol, setVol] = useState(1);
    const [muted, setMuted] = useState(false);
    const [pip, setPip] = useState(false);
    const [src, setSrc] = useState("");
    const [error, setError] = useState<string | null>(null);

    // Load a VFS video file passed via argv (e.g. opened from Explorer).
    useEffect(() => {
        let url: string | null = null;
        (async () => {
            const p = (await sys.argv())[0];
            if (!p) return;
            const mime = MIME[extOf(p)];
            if (!mime) { setError("Unsupported video format."); return; }
            try {
                const bytes = await sys.readFile(p);
                url = URL.createObjectURL(new Blob([bytes], { type: mime }));
                setTitle(nameOf(p));
                load(url);
            } catch {
                setError("Could not open that file.");
            }
        })();
        return () => { if (url) URL.revokeObjectURL(url); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // PiP enter/leave aren't standard React props — attach them on the element.
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const on = () => setPip(true);
        const off = () => setPip(false);
        v.addEventListener("enterpictureinpicture", on);
        v.addEventListener("leavepictureinpicture", off);
        return () => {
            v.removeEventListener("enterpictureinpicture", on);
            v.removeEventListener("leavepictureinpicture", off);
        };
    }, []);

    const load = (url: string) => {
        const v = videoRef.current;
        if (!v) return;
        setError(null);
        v.src = url;
        void v.play().catch(() => {});
    };

    const openPath = async (p: string) => {
        if (!p.trim()) return;
        const mime = MIME[extOf(p)];
        if (!mime) { setError("Unsupported video format."); return; }
        try {
            const bytes = await sys.readFile(p.trim());
            const url = URL.createObjectURL(new Blob([bytes], { type: mime }));
            setTitle(nameOf(p));
            load(url);
        } catch {
            setError("Could not open that file.");
        }
    };
    const openUrl = (u: string) => {
        if (!u.trim()) return;
        setTitle(nameOf(u));
        load(u.trim());
    };

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) void v.play().catch(() => {}); else v.pause();
    };
    const fullscreen = () => { void wrapRef.current?.requestFullscreen?.().catch(() => {}); };
    const togglePip = async () => {
        const v = videoRef.current;
        if (!v) return;
        try {
            if (document.pictureInPictureElement) await document.exitPictureInPicture();
            else if (v.requestPictureInPicture) await v.requestPictureInPicture();
        } catch { /* unsupported */ }
    };

    return (
        <AppShell $minW={480} $minH={340}>
            <Toolbar style={{ gap: 6, flexWrap: "wrap" }}>
                <input placeholder="/home/you/clip.mp4 — VFS path" value={src} onChange={(e) => setSrc(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (src.startsWith("http") ? openUrl(src) : openPath(src))} style={{ flex: 1, minWidth: 120, fontFamily: "monospace", fontSize: 12 }} />
                <ToolButton onClick={() => (src.startsWith("http") ? openUrl(src) : openPath(src))}>Open</ToolButton>
            </Toolbar>
            <div ref={wrapRef} style={{ flex: 1, minHeight: 0, position: "relative", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <video
                    ref={videoRef}
                    playsInline
                    onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
                    onDurationChange={(e) => setDur(e.currentTarget.duration)}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={() => setError("Playback error — unsupported codec or bad source.")}
                    style={{ maxWidth: "100%", maxHeight: "100%", display: src ? "block" : "none" }}
                />
                {!src && <div style={{ color: "#888", fontSize: 13, textAlign: "center", padding: 16 }}>{error || "Open a video file (VFS path) or paste a URL above."}</div>}
                {src && error && <div style={{ position: "absolute", bottom: 8, left: 8, color: "#ff8080", fontSize: 12 }}>{error}</div>}
            </div>
            {/* playback chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px", background: "#c0c0c0" }}>
                <ToolButton onClick={toggle}>{playing ? "⏸" : "▶"}</ToolButton>
                <span style={{ fontSize: 11, fontFamily: "monospace", minWidth: 40 }}>{fmt(cur)}</span>
                <input type="range" min={0} max={dur || 0} step={0.1} value={cur} onChange={(e) => { if (videoRef.current) videoRef.current.currentTime = Number(e.target.value); }} style={{ flex: 1 }} />
                <span style={{ fontSize: 11, fontFamily: "monospace", minWidth: 40 }}>{fmt(dur)}</span>
                <ToolButton onClick={() => { const v = videoRef.current; if (v) { v.muted = !v.muted; setMuted(v.muted); } }}>{muted ? "🔇" : "🔊"}</ToolButton>
                <input type="range" min={0} max={1} step={0.01} value={vol} onChange={(e) => { const x = Number(e.target.value); setVol(x); if (videoRef.current) videoRef.current.volume = x; }} style={{ width: 64 }} />
                <ToolButton onClick={togglePip} title="Picture-in-Picture">{pip ? "▣" : "⧉"}</ToolButton>
                <ToolButton onClick={fullscreen} title="Fullscreen">⛶</ToolButton>
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>{title}</StatusPanel>
                <StatusPanel>{playing ? "▶ Playing" : "❚❚ Paused"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VideoPlayer;
