import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import SharedCursorLayer from "../SharedCursorLayer";
import { nameColor } from "../Avatar";
import { sendSignal, subscribeSignals, type RoomSignal } from "../../system/chat";
import { diff, applyOp, transformCaret } from "../../system/codoc";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Vortex CoWrite — a shared document everyone edits together in real time. NOT a
 * private file (those stay yours); this is an explicit shared space. Local edits
 * are diffed to one op and broadcast; remote ops are merged via the hand-built
 * engine in system/codoc.ts, with carets re-anchored. Reuses SharedCursorLayer
 * for live mouse cursors and renders remote text carets via a measuring mirror.
 */
const ROOM = "cowrite";

/** Pixel coords of a text offset inside a textarea (hidden-mirror technique). */
function caretCoords(ta: HTMLTextAreaElement, pos: number): { top: number; left: number } {
    const cs = getComputedStyle(ta);
    const div = document.createElement("div");
    const copy = ["fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textTransform", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "borderTopWidth", "borderLeftWidth"] as const;
    copy.forEach((p) => ((div.style as unknown as Record<string, string>)[p] = (cs as unknown as Record<string, string>)[p]));
    div.style.position = "absolute";
    div.style.visibility = "hidden";
    div.style.whiteSpace = "pre-wrap";
    div.style.wordWrap = "break-word";
    div.style.width = cs.width;
    div.textContent = ta.value.slice(0, pos);
    const span = document.createElement("span");
    span.textContent = ".";
    div.appendChild(span);
    document.body.appendChild(div);
    const top = span.offsetTop - ta.scrollTop;
    const left = span.offsetLeft;
    document.body.removeChild(div);
    return { top, left };
}

const CoWrite: React.FC = () => {
    const { username } = useAuth();
    const [text, setText] = useState("");
    const [carets, setCarets] = useState<Record<string, number>>({});
    const prev = useRef("");
    const taRef = useRef<HTMLTextAreaElement>(null);
    const pendingCaret = useRef<number | null>(null);
    const requested = useRef(false);
    const [, forceTick] = useState(0);

    // On join, ask whoever's here for the current document.
    useEffect(() => {
        requested.current = true;
        sendSignal({ type: "edit", room: ROOM, sync: "req" });
    }, []);

    useEffect(() => {
        const onSignal = (s: RoomSignal) => {
            if (s.type !== "edit" || s.room !== ROOM) return;
            // sync handshake
            if (s.sync === "req") {
                if (prev.current.length) sendSignal({ type: "edit", room: ROOM, sync: "full", text: prev.current });
                return;
            }
            if (s.sync === "full") {
                if (requested.current && prev.current.length === 0 && typeof s.text === "string") {
                    requested.current = false;
                    prev.current = s.text;
                    setText(s.text);
                }
                return;
            }
            // a contiguous edit op
            if (typeof s.pos === "number") {
                const op = { pos: s.pos as number, del: (s.del as number) || 0, ins: String(s.ins ?? "") };
                const merged = applyOp(prev.current, op);
                const ta = taRef.current;
                if (ta && document.activeElement === ta) pendingCaret.current = transformCaret(ta.selectionStart, op);
                prev.current = merged;
                setText(merged);
                setCarets((rc) => {
                    const next: Record<string, number> = {};
                    // shift everyone else's caret by this op too, so markers track edits
                    for (const [k, v] of Object.entries(rc)) next[k] = transformCaret(v, op);
                    if (typeof s.caret === "number") next[s.from] = s.caret as number;
                    return next;
                });
            }
        };
        return subscribeSignals(onSignal);
    }, []);

    // Restore my caret after a remote-driven text replacement.
    useLayoutEffect(() => {
        if (pendingCaret.current != null && taRef.current) {
            const c = pendingCaret.current;
            pendingCaret.current = null;
            taRef.current.setSelectionRange(c, c);
        }
    }, [text]);

    const broadcastCaret = () => {
        const ta = taRef.current;
        if (ta) sendSignal({ type: "edit", room: ROOM, pos: ta.selectionStart, del: 0, ins: "", caret: ta.selectionStart });
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const next = e.target.value;
        const op = diff(prev.current, next);
        prev.current = next;
        setText(next);
        sendSignal({ type: "edit", room: ROOM, pos: op.pos, del: op.del, ins: op.ins, caret: e.target.selectionStart });
    };

    return (
        <AppShell $minW={460} $minH={320}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onClick={() => { prev.current = ""; setText(""); sendSignal({ type: "edit", room: ROOM, pos: 0, del: text.length, ins: "", caret: 0 }); }}>Clear (shared)</MenuItem>
                </Menu>
                <Menu label="Help">
                    <MenuItem $disabled>Everyone here edits the same document.</MenuItem>
                </Menu>
            </MenuBar>
            <AppBody>
                <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
                    <textarea
                        ref={taRef}
                        value={text}
                        onChange={onChange}
                        onKeyUp={broadcastCaret}
                        onClick={broadcastCaret}
                        onScroll={() => forceTick((n) => n + 1)}
                        spellCheck={false}
                        placeholder="Start typing — everyone in CoWrite sees it live…"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", boxSizing: "border-box", resize: "none", border: "none", outline: "none", padding: 8, fontFamily: "'Lucida Console', monospace", fontSize: 13, lineHeight: 1.4, background: "#fff" }}
                    />
                    {/* remote text carets */}
                    {Object.entries(carets).map(([name, off]) => {
                        if (name === username || !taRef.current) return null;
                        const { top, left } = caretCoords(taRef.current, Math.min(off, text.length));
                        const color = nameColor(name);
                        return (
                            <div key={name} style={{ position: "absolute", top: top + 8, left: left + 8, pointerEvents: "none", zIndex: 40 }}>
                                <div style={{ width: 2, height: 16, background: color }} />
                                <span style={{ position: "absolute", top: -13, left: 0, background: color, color: "#fff", fontSize: 10, fontWeight: 700, padding: "0 4px", borderRadius: 6, whiteSpace: "nowrap" }}>{name}</span>
                            </div>
                        );
                    })}
                    {/* live mouse cursors over the doc */}
                    <SharedCursorLayer room={ROOM} />
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>Vortex CoWrite — shared document</StatusPanel>
                <StatusPanel>{text.length} chars</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default CoWrite;
