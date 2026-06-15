import { useEffect, useRef, useState } from "react";
import { useSys } from "../../kernel/react/useSys";
import { Shell } from "../../shell/Shell";
import { getSession, homeDir } from "../../system/session";
import { useMobileShell } from "../../system/viewport";
import ContextMenu from "../ContextMenu";

const BANNER = ["VortexOS [Version 2.0]", "Type 'help' for a list of commands.", ""];

/** A real terminal: a TTY rendering a /bin/sh session driven by syscalls. */
const Terminal: React.FC = () => {
    const sys = useSys();
    const mobile = useMobileShell();
    const shellRef = useRef<Shell | null>(null);
    if (!shellRef.current) {
        // Start in the signed-in user's home, not the legacy /home/user.
        const home = homeDir();
        shellRef.current = new Shell(sys, home, { HOME: home, USER: getSession()?.username || "user" });
    }
    const shell = shellRef.current;

    const [lines, setLines] = useState<string[]>(BANNER);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [histIdx, setHistIdx] = useState(-1);
    const [busy, setBusy] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [menu, setMenu] = useState<{ x: number; y: number; sel: string } | null>(null);

    useEffect(() => {
        if (!menu) return;
        const close = () => setMenu(null);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [menu]);

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
        inputRef.current?.focus();
    }, [lines]);

    const submit = async () => {
        const line = input;
        setLines((l) => [...l, shell.prompt() + line]);
        setInput("");
        setHistIdx(-1);
        if (line.trim()) setHistory((h) => [...h, line]);

        setBusy(true);
        const res = await shell.run(line);
        setBusy(false);

        if (res.clear) {
            setLines([]);
            return;
        }
        if (res.output) setLines((l) => [...l, ...res.output.replace(/\n$/, "").split("\n")]);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!busy) submit();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!history.length) return;
            const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
            setHistIdx(idx);
            setInput(history[idx]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (histIdx === -1) return;
            const idx = histIdx + 1;
            if (idx >= history.length) {
                setHistIdx(-1);
                setInput("");
            } else {
                setHistIdx(idx);
                setInput(history[idx]);
            }
        }
    };

    return (
        <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            onContextMenu={(e) => {
                e.preventDefault();
                setMenu({ x: e.clientX, y: e.clientY, sel: window.getSelection()?.toString() ?? "" });
            }}
            style={{
                width: "100%",
                height: "100%",
                minWidth: mobile ? 0 : 600,
                minHeight: mobile ? 0 : 360,
                boxSizing: "border-box",
                overflowY: "auto",
                background: "#000",
                color: "#c0c0c0",
                fontFamily: "'Lucida Console', 'Courier New', monospace",
                fontSize: 13,
                lineHeight: 1.35,
                padding: 8,
                cursor: "text",
            }}
        >
            {lines.map((line, i) => (
                <div key={i} style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {line || " "}
                </div>
            ))}
            <div style={{ display: "flex", whiteSpace: "pre" }}>
                <span>{shell.prompt()}</span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                    style={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#fff",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        padding: 0,
                    }}
                />
            </div>

            {menu && (
                <ContextMenu
                    x={menu.x}
                    y={menu.y}
                    onClose={() => setMenu(null)}
                    items={[
                        {
                            label: "Copy",
                            shortcut: "Ctrl+C",
                            disabled: !menu.sel,
                            onClick: () => menu.sel && void navigator.clipboard?.writeText(menu.sel).catch(() => {}),
                        },
                        {
                            label: "Paste",
                            shortcut: "Ctrl+V",
                            onClick: () =>
                                void navigator.clipboard
                                    ?.readText()
                                    .then((t) => {
                                        if (t) setInput((prev) => prev + t.replace(/\n/g, " "));
                                        inputRef.current?.focus();
                                    })
                                    .catch(() => {}),
                        },
                        {
                            label: "Select All",
                            onClick: () => {
                                const el = scrollRef.current;
                                if (!el) return;
                                const r = document.createRange();
                                r.selectNodeContents(el);
                                const s = window.getSelection();
                                s?.removeAllRanges();
                                s?.addRange(r);
                            },
                        },
                        { separator: true },
                        { label: "Clear", glyph: "⌦", onClick: () => setLines([]) },
                    ]}
                />
            )}
        </div>
    );
};

export default Terminal;
