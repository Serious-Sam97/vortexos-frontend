import { useCallback, useEffect, useState } from "react";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useEditMenu } from "../EditContextMenu";
import { homeDir } from "../../system/session";

/** A real plain-text editor: reads and writes files on the VFS through syscalls. */
const Notes: React.FC = () => {
    const sys = useSys();
    const HOME = homeDir();
    const DEFAULT = `${HOME}/welcome.txt`;
    const [path, setPath] = useState(DEFAULT);
    const [note, setNote] = useState("");
    const [dirty, setDirty] = useState(false);
    const [files, setFiles] = useState<string[]>([]);
    const [status, setStatus] = useState("Ready");
    const { openEditMenu, editMenu } = useEditMenu();

    const load = useCallback(
        async (p: string) => {
            try {
                const text = await sys.readTextFile(p);
                setPath(p); setNote(text); setDirty(false); setStatus(`Opened ${p}`);
            } catch (e: any) {
                setStatus(`Could not open ${p}: ${e.code ?? e.message}`);
            }
        },
        [sys],
    );

    useEffect(() => {
        (async () => {
            const [arg] = await sys.argv();
            await load(arg || DEFAULT);
        })();
    }, [load, sys]);

    const refreshFiles = async () => {
        try { setFiles((await sys.readdir(HOME)).filter((f) => f.endsWith(".txt"))); } catch { setFiles([]); }
    };

    const save = async () => {
        try { await sys.writeTextFile(path, note); setDirty(false); setStatus(`Saved ${path}`); }
        catch (e: any) { setStatus(`Save failed: ${e.code ?? e.message}`); }
    };

    const newNote = () => {
        const name = window.prompt("New file name:", "untitled.txt");
        if (!name) return;
        setPath(`${HOME}/${name}`); setNote(""); setDirty(true); setStatus(`New file ${name} — not saved yet`);
    };

    return (
        <AppShell $minW={520} $minH={360}>
            <MenuBar>
                <Menu label="File" onOpen={refreshFiles}>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); newNote(); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); save(); }}>Save<span>Ctrl+S</span></MenuItem>
                    <MenuSep />
                    {files.length === 0 ? (
                        <MenuItem $disabled>(no .txt files)</MenuItem>
                    ) : (
                        files.map((f) => (
                            <MenuItem key={f} onMouseDown={(e) => { e.preventDefault(); load(`${HOME}/${f}`); }}>{f}</MenuItem>
                        ))
                    )}
                </Menu>
                <Menu label="Edit">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setNote(""); setDirty(true); }}>Select All / Clear</MenuItem>
                </Menu>
                <Menu label="Help">
                    <MenuItem $disabled>Notes — VortexOS</MenuItem>
                </Menu>
            </MenuBar>

            <AppBody style={{ padding: 3 }}>
                <textarea
                    value={note}
                    onChange={(e) => { setNote(e.target.value); setDirty(true); }}
                    onContextMenu={openEditMenu}
                    spellCheck={false}
                    rows={20}
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        resize: "none",
                        boxSizing: "border-box",
                        padding: 6,
                        border: "2px solid",
                        borderColor: "#808080 #ffffff #ffffff #808080",
                        background: "#ffffff",
                        fontFamily: "'ms_sans_serif', 'MS Sans Serif', sans-serif",
                        fontSize: 13,
                        outline: "none",
                    }}
                />
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>{path}{dirty ? " •" : ""}</StatusPanel>
                <StatusPanel>{status}</StatusPanel>
            </StatusBar>
            {editMenu}
        </AppShell>
    );
};

export default Notes;
