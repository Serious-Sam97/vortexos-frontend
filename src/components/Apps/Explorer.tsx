import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Frame, MenuList, MenuListItem, Separator, TextInput, Toolbar, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { useOSContext } from "../../contexts/OSContext";
import { useDialog } from "../Dialog/DialogProvider";
import { LibOS } from "../../kernel/libos";
import { recordTrash } from "../../system/recycle";
import { basename, dirname, join } from "../../kernel/fs/path";
import FolderIcon from "/explorer.png";
import FileIcon from "/notes.png";

const RECYCLE = "/Recycle Bin";

interface Entry {
    name: string;
    type: "file" | "dir" | "dev";
    size: number;
}

interface Menu {
    x: number;
    y: number;
    entry: Entry | null;
}

/** Recursively copy a file or directory tree through syscalls. */
async function copyTree(sys: LibOS, src: string, dst: string): Promise<void> {
    const st = await sys.stat(src);
    if (st.type === "dir") {
        await sys.mkdir(dst);
        for (const child of await sys.readdir(src)) await copyTree(sys, join(src, child), join(dst, child));
    } else {
        await sys.writeFile(dst, await sys.readFile(src));
    }
}

function uniqueName(existing: string[], base: string): string {
    if (!existing.includes(base)) return base;
    const dot = base.lastIndexOf(".");
    const stem = dot > 0 ? base.slice(0, dot) : base;
    const ext = dot > 0 ? base.slice(dot) : "";
    for (let i = 2; ; i++) {
        const candidate = `${stem} (${i})${ext}`;
        if (!existing.includes(candidate)) return candidate;
    }
}

const Explorer: React.FC = () => {
    const sys = useSys();
    const { clipboard, setClipboard } = useOSContext();
    const { alert } = useDialog();

    const [cwd, setCwd] = useState("/");
    const [entries, setEntries] = useState<Entry[]>([]);
    const [selected, setSelected] = useState<string | null>(null);
    const [status, setStatus] = useState("");
    const [menu, setMenu] = useState<Menu | null>(null);
    const [renaming, setRenaming] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState("");

    const rootRef = useRef<HTMLDivElement>(null);

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
                setStatus(`${stats.length} object(s)`);
            } catch (e: any) {
                setStatus(`Cannot open ${dir}: ${e.code ?? e.message}`);
            }
        },
        [sys],
    );

    useEffect(() => {
        (async () => {
            const [arg] = await sys.argv();
            await refresh(arg || "/");
        })();
    }, [refresh, sys]);

    useEffect(() => {
        if (!menu) return;
        const close = () => setMenu(null);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [menu]);

    const open = (entry: Entry) => {
        const full = join(cwd, entry.name);
        if (entry.type === "dir") refresh(full);
        else sys.spawn("notes", { argv: [full] });
    };

    // ── file operations ──────────────────────────────────────────────────
    const newFolder = async () => {
        const name = uniqueName(entries.map((e) => e.name), "New Folder");
        try {
            await sys.mkdir(join(cwd, name));
            await refresh(cwd);
            startRename(name);
        } catch (e: any) {
            alert({ title: "Error", message: `Could not create folder: ${e.code ?? e.message}`, type: "error" });
        }
    };

    const newTextDocument = async () => {
        const name = uniqueName(entries.map((e) => e.name), "New Text Document.txt");
        try {
            await sys.writeTextFile(join(cwd, name), "");
            await refresh(cwd);
            startRename(name);
        } catch (e: any) {
            alert({ title: "Error", message: `Could not create file: ${e.code ?? e.message}`, type: "error" });
        }
    };

    const remove = async (name: string) => {
        const from = join(cwd, name);
        try {
            await sys.mkdir(RECYCLE).catch(() => {}); // ensure the bin exists
            const binNames = await sys.readdir(RECYCLE).catch(() => [] as string[]);
            const binName = uniqueName(binNames, name);
            await sys.rename(from, join(RECYCLE, binName));
            recordTrash(binName, from); // remember where it came from for Restore
            await refresh(cwd);
        } catch (e: any) {
            alert({ title: "Delete", message: `Could not delete "${name}": ${e.code ?? e.message}`, type: "error" });
        }
    };

    const startRename = (name: string) => {
        setSelected(name);
        setRenaming(name);
        setRenameValue(name);
    };

    const commitRename = async () => {
        if (!renaming) return;
        const target = renameValue.trim();
        const original = renaming;
        setRenaming(null);
        if (!target || target === original) return;
        try {
            await sys.rename(join(cwd, original), join(cwd, target));
            await refresh(cwd);
        } catch (e: any) {
            alert({ title: "Rename", message: `Could not rename: ${e.code ?? e.message}`, type: "error" });
        }
    };

    const paste = async () => {
        if (!clipboard) return;
        const src = clipboard.path;
        const dst = join(cwd, uniqueName(entries.map((e) => e.name), basename(src)));
        try {
            if (clipboard.op === "cut") {
                await sys.rename(src, dst);
                setClipboard(null);
            } else {
                await copyTree(sys, src, dst);
            }
            await refresh(cwd);
        } catch (e: any) {
            alert({ title: "Paste", message: `Could not paste: ${e.code ?? e.message}`, type: "error" });
        }
    };

    const showProperties = (entry: Entry) => {
        alert({
            title: `${entry.name} Properties`,
            message:
                `Name: ${entry.name}\n` +
                `Type: ${entry.type === "dir" ? "File Folder" : "File"}\n` +
                `Location: ${cwd}\n` +
                `Size: ${entry.type === "dir" ? "—" : `${entry.size} byte(s)`}`,
            type: "info",
        });
    };

    // ── menus / keyboard ─────────────────────────────────────────────────
    const openMenu = (e: React.MouseEvent, entry: Entry | null) => {
        e.preventDefault();
        e.stopPropagation();
        if (entry) setSelected(entry.name);
        setMenu({ x: e.clientX, y: e.clientY, entry });
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (renaming) return;
        if (e.key === "Delete" && selected) remove(selected);
        else if (e.key === "F2" && selected) startRename(selected);
    };

    return (
        <div
            ref={rootRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 560, minHeight: 360, outline: "none" }}
        >
            <Toolbar>
                <Button variant="menu" size="sm" onClick={() => refresh(dirname(cwd))} disabled={cwd === "/"}>
                    Up
                </Button>
                <Button variant="menu" size="sm" onClick={() => refresh(cwd)}>
                    Refresh
                </Button>
                <Button variant="menu" size="sm" onClick={newFolder}>
                    New Folder
                </Button>
                <span style={{ marginLeft: 8, alignSelf: "center" }}>{cwd}</span>
            </Toolbar>

            <WindowContent
                style={{ flex: 1, minHeight: 0, overflow: "auto", backgroundColor: "white", border: "3px solid gray", borderRadius: 5 }}
                onContextMenu={(e) => openMenu(e, null)}
                onClick={() => setSelected(null)}
            >
                <div style={{ display: "flex", flexWrap: "wrap", width: "100%", alignContent: "flex-start" }}>
                    {entries.map((entry) => (
                        <div
                            key={entry.name}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelected(entry.name);
                            }}
                            onDoubleClick={() => open(entry)}
                            onContextMenu={(e) => openMenu(e, entry)}
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
                                    filter:
                                        selected === entry.name
                                            ? "sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)"
                                            : "none",
                                }}
                            />
                            {renaming === entry.name ? (
                                <TextInput
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    onBlur={commitRename}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") commitRename();
                                        if (e.key === "Escape") setRenaming(null);
                                    }}
                                    autoFocus
                                    style={{ width: 80 }}
                                />
                            ) : (
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
                            )}
                        </div>
                    ))}
                </div>
            </WindowContent>

            <Frame variant="well" className="footer">
                <p>{status || "Explorer"}</p>
            </Frame>

            {menu &&
                createPortal(
                    menu.entry ? (
                    <MenuList style={{ position: "fixed", left: menu.x, top: menu.y, width: 160, zIndex: 100000 }}>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => open(menu.entry!)}>
                            Open
                        </MenuListItem>
                        <Separator />
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => setClipboard({ op: "cut", path: join(cwd, menu.entry!.name) })}>
                            Cut
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => setClipboard({ op: "copy", path: join(cwd, menu.entry!.name) })}>
                            Copy
                        </MenuListItem>
                        <Separator />
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => remove(menu.entry!.name)}>
                            Delete
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => startRename(menu.entry!.name)}>
                            Rename
                        </MenuListItem>
                        <Separator />
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => showProperties(menu.entry!)}>
                            Properties
                        </MenuListItem>
                    </MenuList>
                ) : (
                    <MenuList style={{ position: "fixed", left: menu.x, top: menu.y, width: 175, zIndex: 100000 }}>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={newFolder}>
                            New Folder
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={newTextDocument}>
                            New Text Document
                        </MenuListItem>
                        <Separator />
                        <MenuListItem disabled={!clipboard} style={{ cursor: clipboard ? "pointer" : "default" }} onClick={paste}>
                            Paste
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => refresh(cwd)}>
                            Refresh
                        </MenuListItem>
                    </MenuList>
                    ),
                    document.body,
                )}
        </div>
    );
};

export default Explorer;
