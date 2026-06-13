import { useState } from "react";
import { Button, TextInput, Toolbar } from "react95";
import { getToken } from "../../system/session";

const HOME = "vortex:home";
const API = import.meta.env.VITE_API_URL ?? "";

/** Route a real URL through the backend proxy so it can be framed (most sites block iframes). */
function proxied(url: string): string {
    return `${API}/proxy?url=${encodeURIComponent(url)}&token=${encodeURIComponent(getToken() ?? "")}`;
}

const HOME_PAGE = `
<html><head><style>
  body{font-family:'MS Sans Serif',Tahoma,sans-serif;background:#008080;color:#fff;text-align:center;padding:40px}
  h1{font-size:40px;margin:0}
  .links a{display:inline-block;margin:8px;color:#fff;background:#000080;padding:8px 14px;text-decoration:none;border:2px outset #c0c0c0}
  p{opacity:.85}
</style></head><body>
  <h1>VortexOS Web</h1>
  <p>Type a URL in the address bar and press Go.</p>
  <p>Pages load through the VortexOS proxy, so most sites work.</p>
  <p style="font-size:12px;opacity:.7">Try: example.com &middot; wikipedia.org &middot; news.ycombinator.com</p>
</body></html>`;

function normalize(url: string): string {
    const u = url.trim();
    if (!u || u === HOME) return HOME;
    if (/^https?:\/\//i.test(u)) return u;
    return "https://" + u;
}

const Browser: React.FC = () => {
    const [history, setHistory] = useState<string[]>([HOME]);
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState("");

    const current = history[index];

    const go = (raw: string) => {
        const url = normalize(raw);
        const next = [...history.slice(0, index + 1), url];
        setHistory(next);
        setIndex(next.length - 1);
        setAddress(url === HOME ? "" : url);
    };

    const back = () => {
        if (index > 0) {
            setIndex(index - 1);
            setAddress(history[index - 1] === HOME ? "" : history[index - 1]);
        }
    };
    const forward = () => {
        if (index < history.length - 1) {
            setIndex(index + 1);
            setAddress(history[index + 1] === HOME ? "" : history[index + 1]);
        }
    };
    const home = () => go(HOME);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 560, minHeight: 360 }}>
            <Toolbar style={{ gap: 4 }}>
                <Button size="sm" onClick={back} disabled={index === 0}>
                    ◀ Back
                </Button>
                <Button size="sm" onClick={forward} disabled={index === history.length - 1}>
                    Forward ▶
                </Button>
                <Button size="sm" onClick={home}>
                    Home
                </Button>
                <TextInput
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && go(address)}
                    placeholder="Address"
                    style={{ flex: 1 }}
                    fullWidth
                />
                <Button size="sm" onClick={() => go(address)}>
                    Go
                </Button>
            </Toolbar>
            <iframe
                key={current}
                title="browser"
                src={current === HOME ? undefined : proxied(current)}
                srcDoc={current === HOME ? HOME_PAGE : undefined}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                style={{ flex: 1, width: "100%", border: "2px inset #c0c0c0", background: "#fff" }}
            />
        </div>
    );
};

export default Browser;
