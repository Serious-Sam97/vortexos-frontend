import { useCallback, useEffect, useState } from "react";
import { Button, Frame, Toolbar, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { dirname, join } from "../../kernel/fs/path";
import FolderIcon from "/explorer.png";
import FileIcon from "/notes.png";

interface Entry {
    name: string;
    type: "file" | "dir" | "dev";
    size: number;
}

/** A real file explorer: lists and navigates the VFS through readdir/stat. */
const Explorer: React.FC = () => {
    const sys = useSys();
    const [cwd, setCwd] = useState("/");
    const [entries, setEntries] = useState<Entry[]>([]);
    const [selected, setSelected] = useState<string | null>(null);
    const [status, setStatus] = useState("");

    const refresh = useCallback(
        async (dir: string) => {
            try {
                const names = await sys.readdir(dir);
                const stats = await Promise.all(
                    names.map(async (name): Promise<Entry> => {
                        try {
                            const s = await sys.stat(join(dir, name));
                            return { name, type: s.type, size: s.size };
                        } catch {
                            return { name, type: "file", size: 0 };
                        }
                    }),
                );
                stats.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1));
                setCwd(dir);
                setEntries(stats);
                setSelected(null);
                setStatus(`${dir} — ${stats.length} item(s)`);
            } catch (e: any) {
                setStatus(`Cannot open ${dir}: ${e.code ?? e.message}`);
            }
        },
        [sys],
    );

    useEffect(() => {
        // Open the directory passed in argv (e.g. from Start ▸ Documents), else root.
        (async () => {
            const [arg] = await sys.argv();
            await refresh(arg || "/");
        })();
    }, [refresh, sys]);

    const open = (entry: Entry) => {
        const fullPath = join(cwd, entry.name);
        if (entry.type === "dir") {
            refresh(fullPath);
        } else {
            sys.spawn("notes", { argv: [fullPath] }); // open the file in Notes
            setStatus(`Opening ${entry.name} in Notes…`);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 560, minHeight: 340 }}>
            <Toolbar>
                <Button variant="menu" size="sm" onClick={() => refresh(dirname(cwd))} disabled={cwd === "/"}>
                    Up
                </Button>
                <Button variant="menu" size="sm" onClick={() => refresh(cwd)}>
                    Refresh
                </Button>
                <span style={{ marginLeft: 8, alignSelf: "center" }}>{cwd}</span>
            </Toolbar>
            <WindowContent style={{ flex: 1, minHeight: 0, overflow: "auto", backgroundColor: "white", border: "3px solid gray", borderRadius: "5px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", width: "100%", alignContent: "flex-start" }}>
                    {entries.map((entry) => (
                        <div
                            key={entry.name}
                            onClick={() => setSelected(entry.name)}
                            onDoubleClick={() => open(entry)}
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: 90,
                                padding: 8,
                            }}
                        >
                            <img
                                src={entry.type === "dir" ? FolderIcon : FileIcon}
                                alt={entry.type}
                                style={{
                                    height: 48,
                                    filter: selected === entry.name ? "sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)" : "none",
                                }}
                            />
                            <p
                                style={{
                                    textAlign: "center",
                                    wordBreak: "break-all",
                                    color: selected === entry.name ? "white" : "black",
                                    backgroundColor: selected === entry.name ? "#000080" : "transparent",
                                }}
                            >
                                {entry.name}
                            </p>
                        </div>
                    ))}
                </div>
            </WindowContent>
            <Frame variant="well" className="footer">
                <p>{status || "Explorer"}</p>
            </Frame>
        </div>
    );
};

export default Explorer;
