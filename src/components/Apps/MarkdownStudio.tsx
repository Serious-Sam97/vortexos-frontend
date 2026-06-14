import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { homeDir } from "../../system/session";
import { basename } from "../../kernel/fs/path";
import { renderMarkdown } from "../../system/markdown";
import { useEditMenu } from "../EditContextMenu";

const SAMPLE = `# Welcome to Markdown Studio\n\nType **Markdown** on the left — see it *rendered* live on the right.\n\n## Features\n\n- Headings, **bold**, *italic*, \`code\`\n- Lists, [links](https://plaza.one), and quotes\n- Code blocks:\n\n\`\`\`\nconst os = "VortexOS";\nconsole.log(os);\n\`\`\`\n\n> Built into the OS — no library.\n`;

const Split = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    gap: 3px;
`;
const Pane = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
`;
const Source = styled.textarea`
    flex: 1;
    min-height: 280px;
    resize: none;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 8px;
    font-family: "Lucida Console", monospace;
    font-size: 13px;
    line-height: 1.5;
    outline: none;
`;
const Preview = styled.div`
    flex: 1;
    min-height: 280px;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 10px 14px;
    font-family: "Segoe UI", Tahoma, sans-serif;
    font-size: 14px;
    line-height: 1.55;
    h1, h2, h3 { margin: 0.5em 0 0.3em; }
    h1 { font-size: 1.7em; border-bottom: 1px solid #ddd; padding-bottom: 2px; }
    h2 { font-size: 1.35em; }
    code { background: #f0f0f0; padding: 1px 4px; border-radius: 3px; font-family: "Lucida Console", monospace; font-size: 0.9em; }
    .md-pre { background: #1e1e2e; color: #d8d8e8; padding: 8px 10px; border-radius: 4px; overflow: auto; }
    .md-pre code { background: none; color: inherit; }
    blockquote { margin: 0.4em 0; padding: 2px 10px; border-left: 3px solid #ff2d95; color: #555; background: #faf0f6; }
    a { color: #1084d0; }
    hr { border: none; border-top: 1px solid #ccc; }
    ul, ol { margin: 0.3em 0 0.3em 1.4em; }
`;
const Label = styled.div`
    font-size: 11px;
    font-weight: bold;
    color: #444;
    padding: 2px 4px;
    background: #d4d0c8;
`;

const MarkdownStudio: React.FC = () => {
    const sys = useSys();
    const home = homeDir();
    const [text, setText] = useState(SAMPLE);
    const [path, setPath] = useState<string | null>(null);
    const [files, setFiles] = useState<string[]>([]);
    const [status, setStatus] = useState("Ready");
    const { openEditMenu, editMenu } = useEditMenu();

    const html = useMemo(() => renderMarkdown(text), [text]);

    useEffect(() => {
        (async () => {
            const [arg] = await sys.argv();
            if (arg) open(arg);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshFiles = async () => {
        try {
            setFiles((await sys.readdir(home)).filter((f) => /\.(md|markdown)$/i.test(f)));
        } catch {
            setFiles([]);
        }
    };
    const open = async (p: string) => {
        try {
            setText(await sys.readTextFile(p));
            setPath(p);
            setStatus(`Opened ${p}`);
        } catch (e: any) {
            setStatus(`Open failed: ${e.code ?? e.message}`);
        }
    };
    const save = async () => {
        let p = path;
        if (!p) {
            const name = window.prompt("Save as (name):", "notes.md");
            if (!name) return;
            p = `${home}/${/\.(md|markdown)$/i.test(name) ? name : name + ".md"}`;
        }
        await sys.writeTextFile(p, text).then(() => { setPath(p); setStatus(`Saved ${p}`); }).catch((e: any) => setStatus(`Save failed: ${e.code ?? e.message}`));
    };
    const exportHtml = async () => {
        const p = `${home}/${path ? basename(path).replace(/\.(md|markdown)$/i, "") : "document"}.html`;
        await sys.writeTextFile(p, `<!doctype html><meta charset="utf-8"><body>${html}</body>`).then(() => setStatus(`Exported ${p}`)).catch(() => {});
    };

    return (
        <AppShell $minW={620} $minH={420}>
            <MenuBar>
                <Menu label="File" onOpen={refreshFiles}>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setText(""); setPath(null); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); save(); }}>Save<span>Ctrl+S</span></MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); exportHtml(); }}>Export HTML</MenuItem>
                    <MenuSep />
                    {files.length === 0 ? <MenuItem $disabled>(no .md files)</MenuItem> : files.map((f) => <MenuItem key={f} onMouseDown={(e) => { e.preventDefault(); open(`${home}/${f}`); }}>{f}</MenuItem>)}
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Markdown Studio — VortexOS</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={save}>💾 Save</ToolButton>
                <ToolButton onClick={exportHtml}>⇩ HTML</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, color: "#444", padding: "0 6px" }}>Live preview</span>
            </Toolbar>
            <AppBody style={{ padding: 3 }}>
                <Split>
                    <Pane>
                        <Label>Markdown</Label>
                        <Source value={text} onChange={(e) => setText(e.target.value)} onContextMenu={openEditMenu} spellCheck={false} />
                    </Pane>
                    <Pane>
                        <Label>Preview</Label>
                        <Preview dangerouslySetInnerHTML={{ __html: html }} />
                    </Pane>
                </Split>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{path || "Unsaved document"}</StatusPanel>
                <StatusPanel>{text.length} chars</StatusPanel>
                <StatusPanel>{status}</StatusPanel>
            </StatusBar>
            {editMenu}
        </AppShell>
    );
};

export default MarkdownStudio;
