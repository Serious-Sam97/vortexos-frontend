import { useEffect, useRef, useState } from "react";
import { useSys } from "../../kernel/react/useSys";
import { Shell } from "../../shell/Shell";

const BANNER = ["VortexOS [Version 2.0]", "Type 'help' for a list of commands.", ""];

/** A real terminal: a TTY rendering a /bin/sh session driven by syscalls. */
const Terminal: React.FC = () => {
    const sys = useSys();
    const shellRef = useRef<Shell | null>(null);
    if (!shellRef.current) shellRef.current = new Shell(sys);
    const shell = shellRef.current;

    const [lines, setLines] = useState<string[]>(BANNER);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [histIdx, setHistIdx] = useState(-1);
    const [busy, setBusy] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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
            style={{
                width: 640,
                height: 360,
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
        </div>
    );
};

export default Terminal;
