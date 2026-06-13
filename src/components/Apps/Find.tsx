import { useEffect, useRef, useState } from "react";
import { Button, Frame, GroupBox, TextInput } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { LibOS } from "../../kernel/libos";
import { join } from "../../kernel/fs/path";
import { openPath } from "../../system/openPath";
import { AppShell, AppBody, StatusBar, StatusPanel } from "../chrome/AppChrome";

interface Hit {
    name: string;
    path: string;
    type: "file" | "dir" | "dev";
    mtime: number;
}

const MAX_RESULTS = 200;
const SKIP = new Set(["/proc", "/dev"]); // synthetic, noisy
const MAX_CONTENT_BYTES = 512 * 1024; // don't grep huge/binary files
const BINARY_EXT = /\.(png|jpe?g|gif|bmp|webp|ico|mp3|wav|ogg|m4a|flac|zip|gz|pdf)$/i;

interface Criteria {
    name: string; // substring of filename
    content: string; // substring of file text
    sinceMs: number; // 0 = any time; else only mtime >= now - sinceMs
}

const DAY = 86_400_000;
const DATE_OPTIONS: Array<{ label: string; ms: number }> = [
    { label: "any time", ms: 0 },
    { label: "today", ms: DAY },
    { label: "the last 7 days", ms: 7 * DAY },
    { label: "the last 30 days", ms: 30 * DAY },
];

async function search(sys: LibOS, root: string, c: Criteria, now: number, hits: Hit[], alive: () => boolean): Promise<void> {
    if (hits.length >= MAX_RESULTS || SKIP.has(root) || !alive()) return;
    let names: string[];
    try {
        names = await sys.readdir(root);
    } catch {
        return;
    }
    for (const name of names) {
        if (hits.length >= MAX_RESULTS || !alive()) return;
        const path = join(root, name);
        let type: Hit["type"] = "file";
        let size = 0;
        let mtime = 0;
        try {
            const st = await sys.stat(path);
            type = st.type;
            size = st.size;
            mtime = st.mtime;
        } catch {
            continue;
        }

        let match = true;
        if (c.name && !name.toLowerCase().includes(c.name)) match = false;
        if (match && c.sinceMs && mtime < now - c.sinceMs) match = false;
        if (match && c.content) {
            if (type !== "file" || size > MAX_CONTENT_BYTES || BINARY_EXT.test(name)) match = false;
            else {
                try {
                    const text = await sys.readTextFile(path);
                    if (!text.toLowerCase().includes(c.content)) match = false;
                } catch {
                    match = false;
                }
            }
        }
        if (match) hits.push({ name, path, type, mtime });
        if (type === "dir") await search(sys, path, c, now, hits, alive);
    }
}

const Find: React.FC = () => {
    const sys = useSys();
    const [root, setRoot] = useState("/home/user");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [sinceIdx, setSinceIdx] = useState(0);
    const [results, setResults] = useState<Hit[]>([]);
    const [searching, setSearching] = useState(false);
    const [searched, setSearched] = useState(false);
    const runId = useRef(0);

    const runSearch = async () => {
        const id = ++runId.current; // invalidates any in-flight search
        const c: Criteria = { name: name.trim().toLowerCase(), content: content.trim().toLowerCase(), sinceMs: DATE_OPTIONS[sinceIdx].ms };
        if (!c.name && !c.content && !c.sinceMs) {
            setResults([]);
            setSearched(false);
            return;
        }
        setSearching(true);
        const hits: Hit[] = [];
        await search(sys, root || "/", c, Date.now(), hits, () => runId.current === id);
        if (runId.current !== id) return; // a newer search superseded us
        setResults(hits);
        setSearching(false);
        setSearched(true);
    };

    // Live search — debounced as the criteria change.
    useEffect(() => {
        const t = setTimeout(runSearch, 300);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, content, sinceIdx, root]);

    const open = (hit: Hit) => {
        if (hit.type === "dir") sys.spawn("explorer", { argv: [hit.path] });
        else void openPath(sys, hit.path);
    };

    return (
        <AppShell $minW={480} $minH={380}>
            <AppBody style={{ flexDirection: "column", padding: 8 }}>
                <GroupBox label="Find: Files or Folders">
                    <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ width: 96 }}>Named:</span>
                        <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="part of a name" style={{ flex: 1 }} fullWidth />
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ width: 96 }}>Containing text:</span>
                        <TextInput value={content} onChange={(e) => setContent(e.target.value)} placeholder="words inside the file" style={{ flex: 1 }} fullWidth />
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ width: 96 }}>Modified:</span>
                        <select
                            value={sinceIdx}
                            onChange={(e) => setSinceIdx(Number(e.target.value))}
                            style={{ flex: 1, fontFamily: "ms_sans_serif, sans-serif", fontSize: 13, padding: 2 }}
                        >
                            {DATE_OPTIONS.map((o, i) => (
                                <option key={o.label} value={i}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ width: 96 }}>Look in:</span>
                        <TextInput value={root} onChange={(e) => setRoot(e.target.value)} style={{ flex: 1 }} fullWidth />
                        <Button onClick={runSearch} disabled={searching}>
                            {searching ? "…" : "Find Now"}
                        </Button>
                    </div>
                </GroupBox>

                <Frame variant="well" style={{ flex: 1, minHeight: 120, marginTop: 8, overflow: "auto", background: "#fff", padding: 4 }}>
                    {results.map((hit) => (
                        <div
                            key={hit.path}
                            onDoubleClick={() => open(hit)}
                            title={hit.path}
                            style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "2px 4px", cursor: "pointer" }}
                        >
                            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {hit.type === "dir" ? "📁" : "📄"} {hit.name}
                            </span>
                            <span style={{ color: "#666", fontSize: 11, whiteSpace: "nowrap" }}>
                                {hit.mtime ? new Date(hit.mtime).toLocaleDateString() : ""} · {hit.path}
                            </span>
                        </div>
                    ))}
                    {searched && results.length === 0 && <div style={{ padding: 8, color: "#666" }}>No items found.</div>}
                    {!searched && <div style={{ padding: 8, color: "#666" }}>Enter a name, text to find inside files, or a date — results appear as you type.</div>}
                </Frame>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{searching ? "Searching…" : searched ? `${results.length} item(s) found` : "Ready"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Find;
