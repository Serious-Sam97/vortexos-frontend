import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useProcessContext } from "../contexts/ProcessContext";
import { useAuth } from "../contexts/AuthContext";
import { useUninstalled } from "../system/programs";
import { BUILTIN_APPS } from "../kernel/bin";
import { rankApps, RankableApp } from "../system/launcher";
import { openRun } from "../system/runDialog";
import { playClick } from "../system/sounds";

import w95 from "/w95.png";

type Entry = RankableApp & { kind: "app" | "action"; run: () => void };

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1500000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 14vh;
    background: rgba(0, 0, 0, 0.25);
`;

const Panel = styled.div`
    width: 460px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
`;

const SearchRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #808080;
`;

const Input = styled.input`
    flex: 1;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    padding: 4px 6px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #fff;
    outline: none;
`;

const Row = styled.div<{ $sel: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background: ${(p) => (p.$sel ? "#000080" : "transparent")};
    color: ${(p) => (p.$sel ? "#fff" : "#000")};
`;

/**
 * The command palette — a keyboard-first fuzzy launcher (Ctrl+Space). Type a few letters to
 * launch any installed app or run a system action; arrow keys move, Enter runs, Esc closes.
 * The experimental modern twist on a Windows-95 desktop.
 */
const CommandPalette: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [sel, setSel] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const { addProcess } = useProcessContext();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const uninstalled = useUninstalled();

    // Open on Ctrl+Space (a modern launcher hotkey that doesn't collide with the host OS).
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.ctrlKey && (e.code === "Space" || e.key === " ")) {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (open) {
            setQuery("");
            setSel(0);
            // focus after the portal mounts
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [open]);

    const launch = (exec: string, name: string, icon: string) => addProcess({ name, icon, componentName: exec } as never);

    const entries = useMemo<Entry[]>(() => {
        const apps: Entry[] = BUILTIN_APPS.filter((a) => !uninstalled.has(a.exec)).map((a) => ({
            exec: a.exec,
            name: a.name,
            icon: a.icon,
            kind: "app",
            run: () => launch(a.exec, a.name, a.icon),
        }));
        const actions: Entry[] = [
            { exec: "run", name: "Run…", icon: w95, kind: "action", run: () => openRun() },
            { exec: "shutdown", name: "Shut Down…", icon: w95, kind: "action", run: () => navigate("/shutdown") },
            { exec: "logoff", name: "Log Off", icon: w95, kind: "action", run: () => logout() },
        ];
        const ranked = rankApps<Entry>([...apps, ...actions], query);
        return ranked.slice(0, 8);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, uninstalled]);

    useEffect(() => setSel(0), [query]);

    if (!open) return null;

    const close = () => setOpen(false);
    const runEntry = (e?: Entry) => {
        if (!e) return;
        playClick();
        close();
        e.run();
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") return close();
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSel((s) => Math.min(entries.length - 1, s + 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSel((s) => Math.max(0, s - 1));
        } else if (e.key === "Enter") {
            e.preventDefault();
            runEntry(entries[sel]);
        }
    };

    return createPortal(
        <Backdrop onMouseDown={close}>
            <Panel onMouseDown={(e) => e.stopPropagation()}>
                <SearchRow>
                    <img src={w95} alt="" style={{ width: 22, height: 22 }} />
                    <Input
                        ref={inputRef}
                        value={query}
                        placeholder="Search apps and actions…"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={onKeyDown}
                    />
                </SearchRow>
                <div style={{ maxHeight: 320, overflowY: "auto" }}>
                    {entries.length === 0 ? (
                        <div style={{ padding: 12, color: "#555", fontSize: 13 }}>No matches</div>
                    ) : (
                        entries.map((e, i) => (
                            <Row key={`${e.kind}:${e.exec}`} $sel={i === sel} onMouseEnter={() => setSel(i)} onClick={() => runEntry(e)}>
                                <img src={e.icon} alt="" style={{ width: 18, height: 18 }} />
                                <span style={{ flex: 1 }}>{e.name}</span>
                                <span style={{ fontSize: 11, opacity: 0.6 }}>{e.kind === "action" ? "Action" : "App"}</span>
                            </Row>
                        ))
                    )}
                </div>
                <div style={{ borderTop: "1px solid #808080", padding: "3px 8px", fontSize: 11, color: "#444", display: "flex", justifyContent: "space-between" }}>
                    <span>↑↓ navigate · Enter run · Esc close</span>
                    <span>Ctrl+Space</span>
                </div>
            </Panel>
        </Backdrop>,
        document.body,
    );
};

export default CommandPalette;
