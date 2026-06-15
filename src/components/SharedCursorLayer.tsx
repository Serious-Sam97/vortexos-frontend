import { useEffect, useReducer, useRef } from "react";
import { sendSignal, subscribeSignals } from "../system/chat";
import { nameColor } from "./Avatar";

/**
 * Drop this inside any `position: relative` shared surface to get live, labelled
 * cursors of the other users in the same `room`. It reports our own pointer as
 * normalised (0..1) coordinates — resolution-independent — throttled to ~50ms,
 * and renders everyone else's. Cursors expire after a few seconds of silence.
 * Reused by the collaborative editor (M3) and the whiteboard (M5).
 */
interface RemoteCursor {
    x: number; // normalised 0..1
    y: number;
    ts: number;
}

const STALE_MS = 4000;
const SEND_MS = 50;

const SharedCursorLayer: React.FC<{ room: string }> = ({ room }) => {
    const layerRef = useRef<HTMLDivElement>(null);
    const cursors = useRef<Map<string, RemoteCursor>>(new Map());
    const lastSent = useRef(0);
    const [, render] = useReducer((x) => x + 1, 0);

    // Receive remote cursors for this room.
    useEffect(() => {
        return subscribeSignals((s) => {
            if (s.type !== "cursor" || s.room !== room) return;
            if (typeof s.x === "number" && typeof s.y === "number") {
                cursors.current.set(s.from, { x: s.x as number, y: s.y as number, ts: Date.now() });
                render();
            }
        });
    }, [room]);

    // Report our pointer (throttled, normalised to the surface) + drop stale cursors.
    useEffect(() => {
        const surface = layerRef.current?.parentElement;
        if (!surface) return;

        const onMove = (e: PointerEvent) => {
            const now = Date.now();
            if (now - lastSent.current < SEND_MS) return;
            lastSent.current = now;
            const r = surface.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            if (x < 0 || x > 1 || y < 0 || y > 1) return;
            sendSignal({ type: "cursor", room, x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 });
        };
        surface.addEventListener("pointermove", onMove);

        const sweep = window.setInterval(() => {
            const now = Date.now();
            let changed = false;
            for (const [k, v] of cursors.current) {
                if (now - v.ts > STALE_MS) {
                    cursors.current.delete(k);
                    changed = true;
                }
            }
            if (changed) render();
        }, 1000);

        return () => {
            surface.removeEventListener("pointermove", onMove);
            window.clearInterval(sweep);
        };
    }, [room]);

    return (
        <div ref={layerRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50, overflow: "hidden" }}>
            {[...cursors.current.entries()].map(([name, c]) => {
                const color = nameColor(name);
                return (
                    <div
                        key={name}
                        style={{ position: "absolute", left: `${c.x * 100}%`, top: `${c.y * 100}%`, transition: "left 80ms linear, top 80ms linear", willChange: "left, top" }}
                    >
                        {/* arrow */}
                        <svg width="18" height="18" viewBox="0 0 18 18" style={{ display: "block", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.4))" }}>
                            <path d="M2 2 L2 14 L6 10 L9 16 L11 15 L8 9 L14 9 Z" fill={color} stroke="#fff" strokeWidth="1" />
                        </svg>
                        <span
                            style={{
                                position: "absolute",
                                left: 14,
                                top: 12,
                                background: color,
                                color: "#fff",
                                fontSize: 11,
                                fontWeight: 700,
                                padding: "1px 6px",
                                borderRadius: 8,
                                whiteSpace: "nowrap",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                        >
                            {name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default SharedCursorLayer;
