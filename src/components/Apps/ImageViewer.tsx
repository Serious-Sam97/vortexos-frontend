import { useEffect, useRef, useState } from "react";
import { Button, Toolbar } from "react95";
import { useSys } from "../../kernel/react/useSys";

const MIME: Record<string, string> = {
    png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif",
    bmp: "image/bmp", webp: "image/webp", svg: "image/svg+xml", ico: "image/x-icon",
};
const IMAGE_EXT = /\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;
const mimeOf = (p: string) => MIME[p.slice(p.lastIndexOf(".") + 1).toLowerCase()] ?? null;
const dirOf = (p: string) => p.slice(0, p.lastIndexOf("/")) || "/";
const nameOf = (p: string) => p.slice(p.lastIndexOf("/") + 1);

const ImageViewer: React.FC = () => {
    const sys = useSys();
    const [list, setList] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    const [url, setUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [fit, setFit] = useState(true);
    const [slideshow, setSlideshow] = useState(false);

    // Determine the folder's images + starting index from argv.
    useEffect(() => {
        (async () => {
            const p = (await sys.argv())[0];
            if (!p) { setError("No image to display."); return; }
            const dir = dirOf(p);
            try {
                const names = (await sys.readdir(dir)).filter((n) => IMAGE_EXT.test(n)).sort();
                const paths = names.map((n) => `${dir}/${n}`);
                const i = Math.max(0, paths.indexOf(p));
                setList(paths.length ? paths : [p]);
                setIndex(i);
            } catch {
                setList([p]);
                setIndex(0);
            }
        })();
    }, [sys]);

    // Load the current image as a blob URL (revoking the previous one).
    useEffect(() => {
        const p = list[index];
        if (!p) return;
        let objectUrl: string | null = null;
        let alive = true;
        setError(null);
        setScale(1); setRotation(0); setFit(true);
        (async () => {
            const mime = mimeOf(p);
            if (!mime) { setError("Unsupported image format."); return; }
            try {
                const bytes = await sys.readFile(p);
                objectUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
                if (alive) setUrl(objectUrl);
            } catch {
                if (alive) setError("Could not open this file.");
            }
        })();
        return () => { alive = false; if (objectUrl) URL.revokeObjectURL(objectUrl); };
    }, [list, index, sys]);

    const next = () => setIndex((i) => (list.length ? (i + 1) % list.length : 0));
    const prev = () => setIndex((i) => (list.length ? (i - 1 + list.length) % list.length : 0));

    // Slideshow timer.
    const tick = useRef(next);
    tick.current = next;
    useEffect(() => {
        if (!slideshow || list.length < 2) return;
        const id = setInterval(() => tick.current(), 3000);
        return () => clearInterval(id);
    }, [slideshow, list.length]);

    const zoomIn = () => { setFit(false); setScale((s) => Math.min(8, s * 1.25)); };
    const zoomOut = () => { setFit(false); setScale((s) => Math.max(0.1, s / 1.25)); };
    const actual = () => { setFit(false); setScale(1); };

    const imgStyle: React.CSSProperties = fit
        ? { maxWidth: "100%", maxHeight: "100%", transform: `rotate(${rotation}deg)`, imageRendering: "pixelated" }
        : { transform: `scale(${scale}) rotate(${rotation}deg)`, imageRendering: "pixelated" };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 360, minHeight: 280 }}>
            <Toolbar>
                <Button variant="menu" size="sm" onClick={prev} disabled={list.length < 2}>◀ Prev</Button>
                <Button variant="menu" size="sm" onClick={next} disabled={list.length < 2}>Next ▶</Button>
                <Button variant="menu" size="sm" onClick={zoomIn}>Zoom +</Button>
                <Button variant="menu" size="sm" onClick={zoomOut}>Zoom −</Button>
                <Button variant="menu" size="sm" active={fit} onClick={() => { setFit(true); setScale(1); }}>Fit</Button>
                <Button variant="menu" size="sm" onClick={actual}>1:1</Button>
                <Button variant="menu" size="sm" onClick={() => setRotation((r) => r - 90)}>↺</Button>
                <Button variant="menu" size="sm" onClick={() => setRotation((r) => r + 90)}>↻</Button>
                <Button variant="menu" size="sm" active={slideshow} onClick={() => setSlideshow((s) => !s)} disabled={list.length < 2}>
                    {slideshow ? "⏸ Stop" : "▶ Slideshow"}
                </Button>
            </Toolbar>
            <div style={{ flex: 1, minHeight: 0, overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center", background: "#2b2b2b" }}>
                {error && <p style={{ color: "#fff" }}>{error}</p>}
                {!error && url && <img src={url} alt={list[index]} style={imgStyle} />}
                {!error && !url && <p style={{ color: "#fff" }}>Loading…</p>}
            </div>
            <div style={{ background: "#c0c0c0", borderTop: "1px solid #808080", padding: "2px 6px", fontSize: 11, display: "flex", justifyContent: "space-between" }}>
                <span>{list[index] ? nameOf(list[index]) : ""}</span>
                <span>{list.length > 1 ? `${index + 1} / ${list.length}` : ""} {fit ? "Fit" : `${Math.round(scale * 100)}%`}</span>
            </div>
        </div>
    );
};

export default ImageViewer;
