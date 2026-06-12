import { useCallback, useEffect, useState } from "react";
import { Button, Frame, MenuList, MenuListItem, Separator, TextInput, Toolbar, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";

const HOME = "/home/user";
const DEFAULT = "/home/user/welcome.txt";

/** A real text editor: reads and writes files on the VFS through syscalls. */
const Notes: React.FC = () => {
    const sys = useSys();
    const [path, setPath] = useState(DEFAULT);
    const [note, setNote] = useState("");
    const [dirty, setDirty] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [files, setFiles] = useState<string[]>([]);
    const [status, setStatus] = useState("");

    const load = useCallback(
        async (p: string) => {
            try {
                const text = await sys.readTextFile(p);
                setPath(p);
                setNote(text);
                setDirty(false);
                setStatus(`Opened ${p}`);
            } catch (e: any) {
                setStatus(`Could not open ${p}: ${e.code ?? e.message}`);
            }
        },
        [sys],
    );

    useEffect(() => {
        // Open the file passed in argv (e.g. from Explorer), else the default note.
        (async () => {
            const [arg] = await sys.argv();
            await load(arg || DEFAULT);
        })();
    }, [load, sys]);

    const openMenu = async () => {
        try {
            setFiles((await sys.readdir(HOME)).filter((f) => f.endsWith(".txt")));
        } catch {
            setFiles([]);
        }
        setMenuOpen((o) => !o);
    };

    const save = async () => {
        try {
            await sys.writeTextFile(path, note);
            setDirty(false);
            setStatus(`Saved ${path}`);
        } catch (e: any) {
            setStatus(`Save failed: ${e.code ?? e.message}`);
        }
        setMenuOpen(false);
    };

    const newNote = () => {
        const name = window.prompt("New file name:", "untitled.txt");
        setMenuOpen(false);
        if (!name) return;
        setPath(`${HOME}/${name}`);
        setNote("");
        setDirty(true);
        setStatus(`New file ${name} — not saved yet`);
    };

    const openFile = async (name: string) => {
        setMenuOpen(false);
        await load(`${HOME}/${name}`);
    };

    return (
        <>
            <Toolbar>
                <Button variant="menu" size="sm" onClick={openMenu}>
                    File
                </Button>
                {menuOpen && (
                    <MenuList style={{ position: "absolute", left: "3%", top: "100%", zIndex: 99999 }}>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={newNote}>
                            New
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={save}>
                            Save
                        </MenuListItem>
                        <Separator />
                        {files.length === 0 && <MenuListItem disabled>(no .txt files)</MenuListItem>}
                        {files.map((f) => (
                            <MenuListItem key={f} style={{ cursor: "pointer" }} onClick={() => openFile(f)}>
                                {f}
                            </MenuListItem>
                        ))}
                    </MenuList>
                )}
                <Button variant="menu" size="sm" onClick={save} disabled={!dirty}>
                    Save
                </Button>
            </Toolbar>
            <WindowContent>
                <TextInput
                    style={{ minWidth: "60vw" }}
                    value={note}
                    onChange={(e) => {
                        setNote(e.target.value);
                        setDirty(true);
                    }}
                    multiline
                    rows={20}
                    fullWidth
                />
            </WindowContent>
            <Frame variant="well" className="footer">
                <p>
                    {path}
                    {dirty ? " •" : ""} {status && `— ${status}`}
                </p>
            </Frame>
        </>
    );
};

export default Notes;
