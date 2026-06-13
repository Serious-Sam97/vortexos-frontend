import { useEffect, useRef, useState } from "react";
import { useProcessContext } from "../contexts/ProcessContext";
import { useOSContext } from "../contexts/OSContext";
import { Process } from "../interfaces/Process";

/**
 * Hold Alt and press Tab to cycle open windows (Alt+Shift+Tab reverses); release Alt to
 * focus the highlighted one. Esc cancels. (Like a real OS task switcher — works best when
 * the browser has focus / is fullscreen, since some host OSes capture Alt+Tab themselves.)
 */
const AltTabSwitcher: React.FC = () => {
    const { processes, changePriority } = useProcessContext();
    const { restore } = useOSContext();
    const [active, setActive] = useState(false);
    const [index, setIndex] = useState(0);
    const list = useRef<Process[]>([]);
    const idx = useRef(0);

    useEffect(() => {
        idx.current = index;
    }, [index]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Tab" || !e.altKey) {
                if (e.key === "Escape" && active) setActive(false);
                return;
            }
            const wins = processes.filter((p) => p.uuid);
            if (wins.length === 0) return;
            e.preventDefault();
            if (!active) {
                const ordered = [...wins].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
                list.current = ordered;
                setActive(true);
                const start = e.shiftKey ? ordered.length - 1 : Math.min(1, ordered.length - 1);
                setIndex(start);
            } else {
                const n = list.current.length;
                setIndex((i) => (e.shiftKey ? (i - 1 + n) % n : (i + 1) % n));
            }
        };
        const onKeyUp = (e: KeyboardEvent) => {
            if ((e.key === "Alt" || !e.altKey) && active) {
                const sel = list.current[idx.current];
                if (sel?.uuid) {
                    restore(sel.uuid);
                    changePriority(sel, 0);
                }
                setActive(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, [processes, active, changePriority, restore]);

    if (!active || list.current.length === 0) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2000000,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    background: "#c0c0c0",
                    border: "2px solid",
                    borderColor: "#dfdfdf #000 #000 #dfdfdf",
                    boxShadow: "3px 3px 0 rgba(0,0,0,0.4)",
                    padding: 16,
                    maxWidth: "80vw",
                }}
            >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", maxWidth: 560 }}>
                    {list.current.map((p, i) => (
                        <div
                            key={p.uuid}
                            style={{
                                width: 72,
                                height: 72,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 4,
                                border: i === index ? "2px solid #000080" : "2px solid transparent",
                                background: i === index ? "#000080" : "transparent",
                            }}
                        >
                            <img src={p.icon} alt="" style={{ width: 32, height: 32, objectFit: "contain" }} />
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: "center", margin: "10px 0 0", fontSize: 13 }}>
                    {list.current[index]?.name}
                </p>
            </div>
        </div>
    );
};

export default AltTabSwitcher;
