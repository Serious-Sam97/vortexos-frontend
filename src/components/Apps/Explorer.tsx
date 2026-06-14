import { useCallback, useEffect, useRef, useState } from "react";
import { TextInput } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import ContextMenu from "../ContextMenu";
import { iconForEntry } from "../../system/fileIcons";
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

    const IMAGE_EXT = /\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;
    const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)$/i;
    const open = (entry: Entry) => {
        const full = join(cwd, entry.name);
        if (entry.type === "dir") refresh(full);
        else if (IMAGE_EXT.test(entry.name)) sys.spawn("imageviewer", { argv: [full] });
        else if (AUDIO_EXT.test(entry.name)) sys.spawn("mediaplayer", { argv: [full] });
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
        <AppShell ref={rootRef as never} tabIndex={0} onKeyDown={onKeyDown} $minW={560} $minH={360} style={{ outline: "none" }}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem icon={FolderIcon} onMouseDown={(e) => { e.preventDefault(); newFolder(); }}>New Folder</MenuItem>
                    <MenuItem icon={FileIcon} onMouseDown={(e) => { e.preventDefault(); newTextDocument(); }}>New Text Document</MenuItem>
                </Menu>
                <Menu label="Edit">
                    <MenuItem $disabled={!clipboard} onMouseDown={(e) => { e.preventDefault(); paste(); }}>Paste<span>Ctrl+V</span></MenuItem>
                </Menu>
                <Menu label="View">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); refresh(cwd); }}>Refresh<span>F5</span></MenuItem>
                    <MenuSep />
                    <MenuItem $disabled={cwd === "/"} onMouseDown={(e) => { e.preventDefault(); refresh(dirname(cwd)); }}>Up One Level</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Explorer — VortexOS</MenuItem></Menu>
            </MenuBar>

            <Toolbar>
                <ToolButton onClick={() => refresh(dirname(cwd))} disabled={cwd === "/"}>↑ Up</ToolButton>
                <ToolButton onClick={() => refresh(cwd)}>⟳ Refresh</ToolButton>
                <ToolSep />
                <ToolButton onClick={newFolder}>New Folder</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, padding: "0 4px" }}>Address:</span>
                <input
                    key={cwd}
                    defaultValue={cwd}
                    onKeyDown={(e) => { if (e.key === "Enter") refresh((e.target as HTMLInputElement).value); }}
                    style={{ flex: 1, minWidth: 120 }}
                />
            </Toolbar>

            <AppBody style={{ padding: 3 }}>
                <div
                    style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}
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
                                src={iconForEntry(entry.name, entry.type === "dir")}
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
                </div>
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>{status || "Explorer"}</StatusPanel>
                <StatusPanel>{entries.length} object(s)</StatusPanel>
            </StatusBar>

            {menu &&
                (menu.entry ? (
                    <ContextMenu
                        x={menu.x}
                        y={menu.y}
                        onClose={() => setMenu(null)}
                        items={[
                            { label: "Open", glyph: "▸", onClick: () => open(menu.entry!) },
                            { separator: true },
                            { label: "Cut", shortcut: "Ctrl+X", onClick: () => setClipboard({ op: "cut", path: join(cwd, menu.entry!.name) }) },
                            { label: "Copy", shortcut: "Ctrl+C", onClick: () => setClipboard({ op: "copy", path: join(cwd, menu.entry!.name) }) },
                            { separator: true },
                            { label: "Delete", glyph: "🗑", onClick: () => remove(menu.entry!.name) },
                            { label: "Rename", shortcut: "F2", onClick: () => startRename(menu.entry!.name) },
                            { separator: true },
                            { label: "Properties", onClick: () => showProperties(menu.entry!) },
                        ]}
                    />
                ) : (
                    <ContextMenu
                        x={menu.x}
                        y={menu.y}
                        onClose={() => setMenu(null)}
                        items={[
                            {
                                label: "New",
                                submenu: [
                                    { label: "Folder", icon: FolderIcon, onClick: newFolder },
                                    { label: "Text Document", icon: FileIcon, onClick: newTextDocument },
                                ],
                            },
                            { separator: true },
                            { label: "Paste", shortcut: "Ctrl+V", disabled: !clipboard, onClick: paste },
                            { label: "Refresh", glyph: "⟳", onClick: () => refresh(cwd) },
                        ]}
                    />
                ))}
        </AppShell>
    );
};

export default Explorer;
