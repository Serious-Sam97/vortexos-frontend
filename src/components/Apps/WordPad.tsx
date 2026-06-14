import { useCallback, useEffect, useRef, useState } from "react";
import { Frame } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useEditMenu } from "../EditContextMenu";
import { homeDir } from "../../system/session";

const RICH_EXT = /\.(html?|rtf|doc)$/i;
const FONTS = ["MS Sans Serif", "Times New Roman", "Courier New", "Arial", "Georgia"];
const SIZES = [1, 2, 3, 4, 5, 6, 7];

/**
 * WordPad — a real rich-text editor over a contentEditable surface. Bold/italic/underline,
 * font family & size, colour, alignment and lists via execCommand; documents are saved as
 * HTML on the VFS (round-trips back into WordPad). Notes stays the plain-text quickie.
 */
const WordPad: React.FC = () => {
    const sys = useSys();
    const HOME = homeDir();
    const editor = useRef<HTMLDivElement>(null);
    const [path, setPath] = useState(`${HOME}/document.html`);
    const [status, setStatus] = useState("");
    const [files, setFiles] = useState<string[]>([]);
    const { openEditMenu, editMenu } = useEditMenu();

    const exec = (cmd: string, value?: string) => {
        editor.current?.focus();
        document.execCommand(cmd, false, value);
    };

    const load = useCallback(
        async (p: string) => {
            try {
                const html = await sys.readTextFile(p);
                if (editor.current) editor.current.innerHTML = html;
                setPath(p);
                setStatus(`Opened ${p}`);
            } catch (e: any) {
                setStatus(`Could not open ${p}: ${e.code ?? e.message}`);
            }
        },
        [sys],
    );

    useEffect(() => {
        (async () => {
            const [arg] = await sys.argv();
            if (arg) await load(arg);
            else if (editor.current) editor.current.innerHTML = "<p>The quick brown fox jumps over the lazy dog.</p>";
        })();
    }, [load, sys]);

    const refreshFiles = async () => {
        try { setFiles((await sys.readdir(HOME)).filter((f) => RICH_EXT.test(f))); } catch { setFiles([]); }
    };

    const save = async () => {
        try {
            await sys.writeTextFile(path, editor.current?.innerHTML ?? "");
            setStatus(`Saved ${path}`);
        } catch (e: any) {
            setStatus(`Save failed: ${e.code ?? e.message}`);
        }
    };

    const saveAs = async () => {
        const name = window.prompt("Save as:", path.split("/").pop() || "document.html");
        if (!name) return;
        const full = `${HOME}/${RICH_EXT.test(name) ? name : name + ".html"}`;
        setPath(full);
        try {
            await sys.writeTextFile(full, editor.current?.innerHTML ?? "");
            setStatus(`Saved ${full}`);
        } catch (e: any) {
            setStatus(`Save failed: ${e.code ?? e.message}`);
        }
    };

    const newDoc = () => {
        if (editor.current) editor.current.innerHTML = "";
        setPath(`${HOME}/document.html`);
        setStatus("New document");
    };

    const fmtBtn = (label: string, cmd: string, style?: React.CSSProperties) => (
        <ToolButton onMouseDown={(e) => e.preventDefault()} onClick={() => exec(cmd)} style={style}>
            {label}
        </ToolButton>
    );

    return (
        <AppShell $minW={560} $minH={400}>
            <MenuBar>
                <Menu label="File" onOpen={refreshFiles}>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); newDoc(); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); save(); }}>Save<span>Ctrl+S</span></MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); saveAs(); }}>Save As…</MenuItem>
                    <MenuSep />
                    {files.length === 0 ? (
                        <MenuItem $disabled>(no documents)</MenuItem>
                    ) : (
                        files.map((f) => (
                            <MenuItem key={f} onMouseDown={(e) => { e.preventDefault(); load(`${HOME}/${f}`); }}>{f}</MenuItem>
                        ))
                    )}
                </Menu>
                <Menu label="Edit">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); exec("undo"); }}>Undo</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); exec("selectAll"); }}>Select All</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>WordPad — VortexOS</MenuItem></Menu>
            </MenuBar>

            <Toolbar>
                <select onMouseDown={(e) => e.stopPropagation()} onChange={(e) => exec("fontName", e.target.value)}>
                    {FONTS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                <select onChange={(e) => exec("fontSize", e.target.value)} defaultValue="3">
                    {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ToolSep />
                {fmtBtn("B", "bold", { fontWeight: "bold" })}
                {fmtBtn("I", "italic", { fontStyle: "italic" })}
                {fmtBtn("U", "underline", { textDecoration: "underline" })}
                <input type="color" onChange={(e) => exec("foreColor", e.target.value)} title="Text colour" style={{ width: 26, height: 20, padding: 0 }} />
                <ToolSep />
                {fmtBtn("≡L", "justifyLeft")}
                {fmtBtn("≡C", "justifyCenter")}
                {fmtBtn("≡R", "justifyRight")}
                {fmtBtn("• List", "insertUnorderedList")}
            </Toolbar>

            <AppBody style={{ padding: 3 }}>
                <Frame variant="well" style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", padding: 0 }}>
                    <div
                        ref={editor}
                        contentEditable
                        suppressContentEditableWarning
                        onContextMenu={openEditMenu}
                        style={{ flex: 1, minHeight: 300, overflow: "auto", padding: 10, background: "#fff", outline: "none", fontFamily: "'Times New Roman', serif", fontSize: 16 }}
                    />
                </Frame>
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>{path}</StatusPanel>
                <StatusPanel>{status || "Ready"}</StatusPanel>
            </StatusBar>
            {editMenu}
        </AppShell>
    );
};

export default WordPad;
