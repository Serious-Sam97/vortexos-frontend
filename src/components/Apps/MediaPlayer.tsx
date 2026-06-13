import { useEffect, useState } from "react";
import { WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";

const MIME: Record<string, string> = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    m4a: "audio/mp4",
    flac: "audio/flac",
};

function mimeOf(path: string): string | null {
    const ext = path.slice(path.lastIndexOf(".") + 1).toLowerCase();
    return MIME[ext] ?? null;
}

const MediaPlayer: React.FC = () => {
    const sys = useSys();
    const [url, setUrl] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let objectUrl: string | null = null;
        let alive = true;
        (async () => {
            const p = (await sys.argv())[0];
            if (!p) {
                setError("No media to play.");
                return;
            }
            setName(p.slice(p.lastIndexOf("/") + 1));
            const mime = mimeOf(p);
            if (!mime) {
                setError("Unsupported audio format.");
                return;
            }
            try {
                const bytes = await sys.readFile(p);
                objectUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
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
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 320, minHeight: 140 }}>
            <WindowContent style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, alignItems: "center", justifyContent: "center" }}>
                {error && <p>{error}</p>}
                {!error && (
                    <>
                        <p style={{ margin: 0, fontWeight: "bold" }}>🎵 {name}</p>
                        {url && <audio src={url} controls autoPlay style={{ width: "100%" }} />}
                    </>
                )}
            </WindowContent>
        </div>
    );
};

export default MediaPlayer;
