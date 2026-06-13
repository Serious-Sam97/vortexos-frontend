import { ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Process } from "../interfaces/Process";

const TASKBAR_HEIGHT = 40;

/**
 * A hover preview card for a taskbar button. Without a compositor we can't show a live
 * thumbnail, so this is an honest "card": large icon, window title, and run state — the
 * achievable main-thread version of Windows' taskbar previews.
 */
export const WindowPreview: React.FC<{ process: Process; minimized: boolean; children: ReactNode }> = ({ process, minimized, children }) => {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const wrap = useRef<HTMLSpanElement>(null);

    const schedule = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            const el = wrap.current?.firstElementChild as HTMLElement | undefined;
            if (el) setRect(el.getBoundingClientRect());
        }, 400);
    };
    const hide = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = null;
        setRect(null);
    };

    const state = minimized ? "Minimized" : process.priority === 0 ? "Active" : "Running";

    return (
        <span ref={wrap} style={{ display: "contents" }} onMouseEnter={schedule} onMouseLeave={hide} onMouseDown={hide}>
            {children}
            {rect &&
                createPortal(
                    <div
                        style={{
                            position: "fixed",
                            left: Math.max(4, Math.min(rect.left, window.innerWidth - 184)),
                            bottom: TASKBAR_HEIGHT + 6,
                            width: 180,
                            background: "#c0c0c0",
                            border: "2px solid",
                            borderColor: "#ffffff #808080 #808080 #ffffff",
                            boxShadow: "2px 2px 0 rgba(0,0,0,0.4)",
                            padding: 8,
                            zIndex: 3000000,
                            pointerEvents: "none",
                            fontSize: 12,
                            color: "#000",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <img src={process.icon} alt="" style={{ width: 32, height: 32, flexShrink: 0 }} />
                            <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {process.name}
                                </div>
                                <div style={{ color: "#000080" }}>{state}</div>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </span>
    );
};

export default WindowPreview;
