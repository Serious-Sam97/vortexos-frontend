import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, MenuBar, Menu, MenuItem, MenuSep, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { basename, join } from "../../kernel/fs/path";
import { homeDir } from "../../system/session";
import { highlight, langOf, type Lang } from "../../system/highlight";
import { Shell } from "../../shell/Shell";

/** A real code editor: VFS file tree, syntax-highlighted multi-tab editing, save, and Run. */

interface Tab {
    path: string;
    name: string;
    content: string;
    lang: Lang;
    dirty: boolean;
}
interface Entry {
    name: string;
    path: string;
    type: "file" | "dir" | "dev";
}

const FONT = "'Lucida Console', 'Courier New', monospace";

/* ----------------------------------------------------------------- layout */
const Body = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
`;
const Tree = styled.div`
    width: 188px;
    flex-shrink: 0;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    font-size: 12px;
    padding: 4px 0;
`;
const Row = styled.div<{ $depth: number; $dir: boolean }>`
    padding: 1px 6px 1px ${({ $depth }) => 6 + $depth * 14}px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    color: ${({ $dir }) => ($dir ? "#000080" : "#000")};
    &:hover {
        background: #d8e6ff;
    }
`;
const Main = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
`;
const Tabs = styled.div`
    display: flex;
    background: #c0c0c0;
    overflow-x: auto;
`;
const TabBtn = styled.div<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    background: ${({ $active }) => ($active ? "#fff" : "#c0c0c0")};
    border: 1px solid #808080;
    border-bottom: ${({ $active }) => ($active ? "1px solid #fff" : "1px solid #808080")};
    margin-bottom: -1px;
`;
const Close = styled.span`
    font-weight: bold;
    &:hover {
        color: #c00;
    }
`;

/* editor: a highlighted <pre> behind a transparent <textarea>, + a line gutter */
const EditorWrap = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;
const Gutter = styled.div`
    flex-shrink: 0;
    width: 44px;
    overflow: hidden;
    text-align: right;
    padding: 6px 6px 6px 0;
    background: #f0f0f0;
    color: #999;
    font-family: ${FONT};
    font-size: 13px;
    line-height: 1.5;
    border-right: 1px solid #ddd;
    user-select: none;
`;
const Code = styled.div`
    position: relative;
    flex: 1;
    min-width: 0;
    overflow: hidden;
`;
const sharedText = `
    margin: 0;
    padding: 6px;
    border: 0;
    font-family: ${FONT};
    font-size: 13px;
    line-height: 1.5;
    tab-size: 2;
    white-space: pre;
    overflow-wrap: normal;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;
const Pre = styled.pre`
    ${sharedText}
    position: absolute;
    inset: 0;
    overflow: auto;
    pointer-events: none;
    color: #000;
    background: transparent;
`;
const Area = styled.textarea`
    ${sharedText}
    position: absolute;
    inset: 0;
    resize: none;
    outline: none;
    overflow: auto;
    color: transparent;
    caret-color: #000;
    background: transparent;
`;
const Output = styled.pre`
    height: 130px;
    margin: 0;
    overflow: auto;
    background: #000;
    color: #c0c0c0;
    font-family: ${FONT};
    font-size: 12px;
    padding: 6px;
    white-space: pre-wrap;
`;
const FindBar = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 3px 6px;
    background: #c0c0c0;
    font-size: 12px;
`;

const NEW_FILE: Tab = { path: "", name: "untitled.txt", content: "", lang: "text", dirty: true };

const VortexCode: React.FC = () => {
    const sys = useSys();
    const root = homeDir();

    const [tabs, setTabs] = useState<Tab[]>([NEW_FILE]);
    const [active, setActive] = useState(0);
    const [expanded, setExpanded] = useState<Set<string>>(new Set([root]));
    const [children, setChildren] = useState<Record<string, Entry[]>>({});
    const [output, setOutput] = useState<string | null>(null);
    const [findOpen, setFindOpen] = useState(false);
    const [findText, setFindText] = useState("");
    const [status, setStatus] = useState("Ready");

    const tabsRef = useRef(tabs);
    tabsRef.current = tabs;
    const taRef = useRef<HTMLTextAreaElement>(null);
    const preRef = useRef<HTMLPreElement>(null);
    const gutRef = useRef<HTMLDivElement>(null);

    const tab = tabs[active] ?? NEW_FILE;

    const loadChildren = async (dir: string) => {
        const names = await sys.readdir(dir).catch(() => [] as string[]);
        const entries = await Promise.all(
            names.map(async (n): Promise<Entry> => {
                const type = await sys.stat(join(dir, n)).then((s) => s.type).catch(() => "file" as const);
                return { name: n, path: join(dir, n), type };
            }),
        );
        entries.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1));
        setChildren((c) => ({ ...c, [dir]: entries }));
    };

    useEffect(() => {
        loadChildren(root);
        (async () => {
            const [arg] = await sys.argv();
            if (arg) openFile(arg);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openFile = async (path: string) => {
        const cur = tabsRef.current;
        const i = cur.findIndex((t) => t.path === path);
        if (i >= 0) {
            setActive(i);
            return;
        }
        const text = await sys.readTextFile(path).catch(() => "");
        const name = basename(path);
        const next = [...tabsRef.current, { path, name, content: text, lang: langOf(name), dirty: false }];
        tabsRef.current = next;
        setTabs(next);
        setActive(next.length - 1);
        setStatus(`Opened ${path}`);
    };

    const toggleDir = (path: string) => {
        setExpanded((e) => {
            const n = new Set(e);
            if (n.has(path)) n.delete(path);
            else {
                n.add(path);
                if (!children[path]) loadChildren(path);
            }
            return n;
        });
    };

    const setCode = (val: string) => setTabs((prev) => prev.map((t, i) => (i === active ? { ...t, content: val, dirty: true } : t)));

    const closeTab = (i: number) => {
        setTabs((prev) => {
            const next = prev.filter((_, j) => j !== i);
            return next.length ? next : [NEW_FILE];
        });
        setActive((a) => Math.max(0, a >= i ? a - 1 : a));
    };

    const save = async (): Promise<string | null> => {
        let path = tab.path;
        if (!path) {
            const name = window.prompt("Save as (name):", tab.name);
            if (!name) return null;
            path = `${root}/${name}`;
        }
        try {
            await sys.writeTextFile(path, tab.content);
            const saved = path;
            setTabs((prev) => prev.map((t, i) => (i === active ? { ...t, path: saved, name: basename(saved), lang: langOf(saved), dirty: false } : t)));
            setStatus(`Saved ${saved}`);
            loadChildren(root);
            return saved;
        } catch (e: any) {
            setStatus(`Save failed: ${e.code ?? e.message}`);
            return null;
        }
    };

    const run = async () => {
        // save() returns the path synchronously to us — tabsRef won't have updated yet.
        let path: string | null = tab.path;
        if (tab.dirty || !path) path = await save();
        if (!path) return;
        setOutput("Running…");
        try {
            const res = await new Shell(sys, root).run(`sh ${path}`);
            setOutput(res.output || "(no output)");
            setStatus(`Exited with code ${res.code}`);
        } catch (e: any) {
            setOutput(String(e?.message ?? e));
        }
    };

    const syncScroll = () => {
        const ta = taRef.current;
        if (!ta) return;
        if (preRef.current) {
            preRef.current.scrollTop = ta.scrollTop;
            preRef.current.scrollLeft = ta.scrollLeft;
        }
        if (gutRef.current) gutRef.current.scrollTop = ta.scrollTop;
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const ta = e.currentTarget;
            const s = ta.selectionStart, en = ta.selectionEnd;
            const v = tab.content.slice(0, s) + "  " + tab.content.slice(en);
            setCode(v);
            requestAnimationFrame(() => ta.setSelectionRange(s + 2, s + 2));
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
            e.preventDefault();
            save();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
            e.preventDefault();
            setFindOpen(true);
        }
    };

    const doFind = () => {
        const ta = taRef.current;
        if (!ta || !findText) return;
        const from = ta.selectionEnd;
        let idx = tab.content.indexOf(findText, from);
        if (idx < 0) idx = tab.content.indexOf(findText, 0);
        if (idx >= 0) {
            ta.focus();
            ta.setSelectionRange(idx, idx + findText.length);
            const line = tab.content.slice(0, idx).split("\n").length;
            ta.scrollTop = (line - 3) * 13 * 1.5;
            syncScroll();
            setStatus(`Found "${findText}"`);
        } else setStatus(`"${findText}" not found`);
    };

    const lineCount = tab.content.split("\n").length;
    const treeRows: React.ReactNode[] = [];
    const renderDir = (dir: string, depth: number) => {
        const kids = children[dir];
        if (!kids) return;
        for (const e of kids) {
            const isDir = e.type === "dir";
            treeRows.push(
                <Row
                    key={e.path}
                    $depth={depth}
                    $dir={isDir}
                    onClick={() => (isDir ? toggleDir(e.path) : openFile(e.path))}
                    title={e.path}
                >
                    {isDir ? (expanded.has(e.path) ? "▾ " : "▸ ") : "  "}
                    {isDir ? "📁" : "📄"} {e.name}
                </Row>,
            );
            if (isDir && expanded.has(e.path)) renderDir(e.path, depth + 1);
        }
    };
    renderDir(root, 0);

    return (
        <AppShell $minW={640} $minH={420}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); const n = [...tabsRef.current, { ...NEW_FILE }]; tabsRef.current = n; setTabs(n); setActive(n.length - 1); }}>New<span>Ctrl+N</span></MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); save(); }}>Save<span>Ctrl+S</span></MenuItem>
                    <MenuSep />
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); closeTab(active); }}>Close Tab</MenuItem>
                </Menu>
                <Menu label="Edit">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setFindOpen(true); }}>Find…<span>Ctrl+F</span></MenuItem>
                </Menu>
                <Menu label="Run">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); run(); }}>Run Script<span>F5</span></MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setOutput(null); }}>Hide Output</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>VortexCode — VortexOS</MenuItem></Menu>
            </MenuBar>

            <Toolbar>
                <ToolButton onClick={() => save()}>💾 Save</ToolButton>
                <ToolButton onClick={() => run()}>▶ Run</ToolButton>
                <ToolSep />
                <ToolButton onClick={() => setFindOpen((f) => !f)}>🔍 Find</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, padding: "0 6px", color: "#444" }}>{tab.lang.toUpperCase()}</span>
            </Toolbar>

            {findOpen && (
                <FindBar>
                    <input
                        autoFocus
                        value={findText}
                        onChange={(e) => setFindText(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") doFind(); if (e.key === "Escape") setFindOpen(false); }}
                        placeholder="Find text…"
                        style={{ flex: 1, fontFamily: FONT }}
                    />
                    <ToolButton onClick={doFind}>Next</ToolButton>
                    <ToolButton onClick={() => setFindOpen(false)}>✕</ToolButton>
                </FindBar>
            )}

            <Body>
                <Tree>{treeRows.length ? treeRows : <div style={{ padding: 8, color: "#888" }}>Empty</div>}</Tree>
                <Main>
                    <Tabs>
                        {tabs.map((t, i) => (
                            <TabBtn key={i} $active={i === active} onClick={() => setActive(i)}>
                                {t.name}{t.dirty ? " •" : ""}
                                <Close onClick={(e) => { e.stopPropagation(); closeTab(i); }}>×</Close>
                            </TabBtn>
                        ))}
                    </Tabs>
                    <EditorWrap>
                        <Gutter ref={gutRef}>
                            {Array.from({ length: lineCount }, (_, i) => <div key={i}>{i + 1}</div>)}
                        </Gutter>
                        <Code>
                            <Pre ref={preRef} dangerouslySetInnerHTML={{ __html: highlight(tab.content, tab.lang) + "\n" }} />
                            <Area
                                ref={taRef}
                                value={tab.content}
                                onChange={(e) => setCode(e.target.value)}
                                onScroll={syncScroll}
                                onKeyDown={onKeyDown}
                                spellCheck={false}
                                wrap="off"
                            />
                        </Code>
                    </EditorWrap>
                    {output !== null && <Output>{output}</Output>}
                </Main>
            </Body>

            <StatusBar>
                <StatusPanel $flex={1}>{tab.path || "untitled"}{tab.dirty ? " •" : ""}</StatusPanel>
                <StatusPanel>Ln {tab.content.slice(0, taRef.current?.selectionStart ?? 0).split("\n").length}</StatusPanel>
                <StatusPanel>{status}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VortexCode;
