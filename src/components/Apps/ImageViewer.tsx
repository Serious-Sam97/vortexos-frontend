import { useEffect, useState } from "react";
import { WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";

const MIME: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    bmp: "image/bmp",
    webp: "image/webp",
    svg: "image/svg+xml",
    ico: "image/x-icon",
};

function mimeOf(path: string): string | null {
    const ext = path.slice(path.lastIndexOf(".") + 1).toLowerCase();
    return MIME[ext] ?? null;
}

const ImageViewer: React.FC = () => {
    const sys = useSys();
    const [url, setUrl] = useState<string | null>(null);
    const [path, setPath] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let objectUrl: string | null = null;
        let alive = true;
        (async () => {
            const p = (await sys.argv())[0];
            if (!p) {
                setError("No image to display.");
                return;
            }
            setPath(p);
            const mime = mimeOf(p);
            if (!mime) {
                setError("Unsupported image format.");
                return;
            }
            try {
                const bytes = await sys.readFile(p);
                const blob = new Blob([bytes], { type: mime });
                objectUrl = URL.createObjectURL(blob);
                if (alive) setUrl(objectUrl);
            } catch {
                if (alive) setError("Could not open this file.");
            }
        })();
        return () => {
            alive = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [sys]);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 320, minHeight: 240 }}>
            <WindowContent
                style={{
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#2b2b2b",
                }}
            >
                {error && <p style={{ color: "#fff" }}>{error}</p>}
                {!error && url && (
                    <img src={url} alt={path} style={{ maxWidth: "100%", maxHeight: "100%", imageRendering: "pixelated" }} />
                )}
                {!error && !url && <p style={{ color: "#fff" }}>Loading…</p>}
            </WindowContent>
        </div>
    );
};

export default ImageViewer;
