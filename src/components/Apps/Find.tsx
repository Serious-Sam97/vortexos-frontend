import { useState } from "react";
import { Button, Frame, GroupBox, TextInput, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { LibOS } from "../../kernel/libos";
import { join } from "../../kernel/fs/path";

interface Hit {
    name: string;
    path: string;
    type: "file" | "dir" | "dev";
}

const MAX_RESULTS = 200;
const SKIP = new Set(["/proc", "/dev"]); // synthetic, noisy

async function search(sys: LibOS, root: string, query: string, hits: Hit[]): Promise<void> {
    if (hits.length >= MAX_RESULTS || SKIP.has(root)) return;
    let names: string[];
    try {
        names = await sys.readdir(root);
    } catch {
        return;
    }
    for (const name of names) {
        if (hits.length >= MAX_RESULTS) return;
        const path = join(root, name);
        let type: Hit["type"] = "file";
        try {
            type = (await sys.stat(path)).type;
        } catch {
            continue;
        }
        if (name.toLowerCase().includes(query)) hits.push({ name, path, type });
        if (type === "dir") await search(sys, path, query, hits);
    }
}

const Find: React.FC = () => {
    const sys = useSys();
    const [root, setRoot] = useState("/home/user");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Hit[]>([]);
    const [searching, setSearching] = useState(false);
    const [searched, setSearched] = useState(false);

    const findNow = async () => {
        setSearching(true);
        const hits: Hit[] = [];
        await search(sys, root || "/", query.trim().toLowerCase(), hits);
        setResults(hits);
        setSearching(false);
        setSearched(true);
    };

    const open = (hit: Hit) => {
        if (hit.type === "dir") sys.spawn("explorer", { argv: [hit.path] });
        else sys.spawn("notes", { argv: [hit.path] });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 460, minHeight: 360 }}>
            <WindowContent style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
                <GroupBox label="Find: Files or Folders">
                    <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                        <span style={{ width: 60 }}>Named:</span>
                        <TextInput value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && findNow()} placeholder="part of a name" style={{ flex: 1 }} fullWidth />
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ width: 60 }}>Look in:</span>
                        <TextInput value={root} onChange={(e) => setRoot(e.target.value)} style={{ flex: 1 }} fullWidth />
                        <Button onClick={findNow} disabled={searching}>
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
                            style={{ display: "flex", justifyContent: "space-between", padding: "2px 4px", cursor: "pointer" }}
                        >
                            <span>{hit.type === "dir" ? "📁" : "📄"} {hit.name}</span>
                            <span style={{ color: "#666", fontSize: 11 }}>{hit.path}</span>
                        </div>
                    ))}
                    {searched && results.length === 0 && <div style={{ padding: 8, color: "#666" }}>No items found.</div>}
                </Frame>
            </WindowContent>
            <Frame variant="well" className="footer">
                {searched ? `${results.length} item(s) found` : "Type a name and click Find Now"}
            </Frame>
        </div>
    );
};

export default Find;
