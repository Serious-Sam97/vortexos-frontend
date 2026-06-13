import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Frame, MenuList, MenuListItem, Separator, Toolbar, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";

const HOME = "/home/user";
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
    const editor = useRef<HTMLDivElement>(null);
    const [path, setPath] = useState(`${HOME}/document.html`);
    const [status, setStatus] = useState("");
    const [fileMenu, setFileMenu] = useState(false);
    const [files, setFiles] = useState<string[]>([]);

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

    const openMenu = async () => {
        try {
            setFiles((await sys.readdir(HOME)).filter((f) => RICH_EXT.test(f)));
        } catch {
            setFiles([]);
        }
        setFileMenu((o) => !o);
    };

    const save = async () => {
        setFileMenu(false);
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
        setFileMenu(false);
        if (editor.current) editor.current.innerHTML = "";
        setPath(`${HOME}/document.html`);
        setStatus("New document");
    };

    const fmtBtn = (label: string, cmd: string, style?: React.CSSProperties) => (
        <Button variant="menu" size="sm" onMouseDown={(e) => e.preventDefault()} onClick={() => exec(cmd)} style={{ minWidth: 26, ...style }}>
            {label}
        </Button>
    );

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 560, minHeight: 380 }}>
            <Toolbar style={{ position: "relative" }}>
                <Button variant="menu" size="sm" onClick={openMenu}>File</Button>
                {fileMenu && (
                    <MenuList style={{ position: "absolute", left: 4, top: "100%", zIndex: 99999, width: 180 }}>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={newDoc}>New</MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={save}>Save</MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => { setFileMenu(false); saveAs(); }}>Save As…</MenuListItem>
                        <Separator />
                        {files.length === 0 && <MenuListItem disabled>(no documents)</MenuListItem>}
                        {files.map((f) => (
                            <MenuListItem key={f} style={{ cursor: "pointer" }} onClick={() => { setFileMenu(false); load(`${HOME}/${f}`); }}>{f}</MenuListItem>
                        ))}
                    </MenuList>
                )}
                <Button variant="menu" size="sm" onClick={save}>Save</Button>
            </Toolbar>

            {/* format bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 4px", borderBottom: "1px solid #808080", flexWrap: "wrap" }}>
                <select onMouseDown={(e) => e.stopPropagation()} onChange={(e) => exec("fontName", e.target.value)} style={{ fontSize: 12, padding: 1 }}>
                    {FONTS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                <select onChange={(e) => exec("fontSize", e.target.value)} defaultValue="3" style={{ fontSize: 12, padding: 1 }}>
                    {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {fmtBtn("B", "bold", { fontWeight: "bold" })}
                {fmtBtn("I", "italic", { fontStyle: "italic" })}
                {fmtBtn("U", "underline", { textDecoration: "underline" })}
                <input type="color" onChange={(e) => exec("foreColor", e.target.value)} title="Text colour" style={{ width: 28, height: 22, padding: 0, border: "1px solid #808080" }} />
                {fmtBtn("≡L", "justifyLeft")}
                {fmtBtn("≡C", "justifyCenter")}
                {fmtBtn("≡R", "justifyRight")}
                {fmtBtn("• List", "insertUnorderedList")}
            </div>

            <WindowContent style={{ flex: 1, minHeight: 0, padding: 0 }}>
                <Frame variant="well" style={{ height: "100%", padding: 0 }}>
                    <div
                        ref={editor}
                        contentEditable
                        suppressContentEditableWarning
                        style={{ height: "100%", overflow: "auto", padding: 10, background: "#fff", outline: "none", fontFamily: "'Times New Roman', serif", fontSize: 16 }}
                    />
                </Frame>
            </WindowContent>
            <Frame variant="well" className="footer">
                <p>{path} {status && `— ${status}`}</p>
            </Frame>
        </div>
    );
};

export default WordPad;
