import { useEffect, useRef, useState } from "react";
import { AppShell, AppBody, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import SharedCursorLayer from "../SharedCursorLayer";
import { sendSignal, subscribeSignals, type RoomSignal } from "../../system/chat";

/**
 * Vortex Whiteboard — a real-time shared canvas. Strokes are sent segment-by-
 * segment as normalised (0..1) coordinates (resolution-independent) over the
 * `draw` channel and replayed on every peer's canvas. New joiners pull a PNG
 * snapshot from whoever's already drawing. Live cursors via SharedCursorLayer.
 */
const ROOM = "whiteboard";
const COLORS = ["#000000", "#ff2d95", "#2d7dff", "#00b050", "#ffd000", "#ff6a00", "#9b30ff", "#ffffff"];

const Whiteboard: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const drawing = useRef(false);
    const last = useRef<{ x: number; y: number } | null>(null);
    const hasDrawn = useRef(false);
    const requested = useRef(false);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(3);
    const [erasing, setErasing] = useState(false);

    // Draw one segment in normalised coords onto the local canvas.
    const seg = (x0: number, y0: number, x1: number, y1: number, col: string, w: number) => {
        const c = canvasRef.current;
        const ctx = ctxRef.current;
        if (!c || !ctx) return;
        ctx.strokeStyle = col;
        ctx.lineWidth = w;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x0 * c.width, y0 * c.height);
        ctx.lineTo(x1 * c.width, y1 * c.height);
        ctx.stroke();
        hasDrawn.current = true;
    };

    useEffect(() => {
        const c = canvasRef.current;
        if (!c) return;
        // Match the backing store to the displayed size.
        const fit = () => {
            const r = c.getBoundingClientRect();
            // preserve current drawing across resizes
            const snap = hasDrawn.current ? c.toDataURL() : null;
            c.width = Math.max(1, Math.round(r.width));
            c.height = Math.max(1, Math.round(r.height));
            const ctx = c.getContext("2d");
            ctxRef.current = ctx;
            if (ctx) {
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, c.width, c.height);
            }
            if (snap && ctx) {
                const img = new Image();
                img.onload = () => ctx.drawImage(img, 0, 0, c.width, c.height);
                img.src = snap;
            }
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(c);

        // Ask for the current board.
        requested.current = true;
        sendSignal({ type: "draw", room: ROOM, sync: "req" });

        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const onSignal = (s: RoomSignal) => {
            if (s.type !== "draw" || s.room !== ROOM) return;
            if (s.sync === "req") {
                if (hasDrawn.current && canvasRef.current) sendSignal({ type: "draw", room: ROOM, snapshot: canvasRef.current.toDataURL("image/png") });
                return;
            }
            if (typeof s.snapshot === "string") {
                if (!requested.current) return;
                requested.current = false;
                const c = canvasRef.current;
                const ctx = ctxRef.current;
                if (c && ctx) {
                    const img = new Image();
                    img.onload = () => { ctx.drawImage(img, 0, 0, c.width, c.height); hasDrawn.current = true; };
                    img.src = s.snapshot as string;
                }
                return;
            }
            if (s.clear) {
                const c = canvasRef.current;
                const ctx = ctxRef.current;
                if (c && ctx) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
                return;
            }
            if (typeof s.x1 === "number") {
                seg(s.x0 as number, s.y0 as number, s.x1 as number, s.y1 as number, String(s.color), Number(s.size));
            }
        };
        return subscribeSignals(onSignal);
    }, []);

    const norm = (e: React.PointerEvent) => {
        const r = canvasRef.current!.getBoundingClientRect();
        return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
    };

    const down = (e: React.PointerEvent) => {
        drawing.current = true;
        last.current = norm(e);
    };
    const move = (e: React.PointerEvent) => {
        if (!drawing.current || !last.current) return;
        const p = norm(e);
        const col = erasing ? "#ffffff" : color;
        const w = erasing ? size * 4 : size;
        seg(last.current.x, last.current.y, p.x, p.y, col, w);
        sendSignal({ type: "draw", room: ROOM, x0: last.current.x, y0: last.current.y, x1: p.x, y1: p.y, color: col, size: w });
        last.current = p;
    };
    const up = () => { drawing.current = false; last.current = null; };

    const clearAll = () => {
        const c = canvasRef.current;
        const ctx = ctxRef.current;
        if (c && ctx) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
        sendSignal({ type: "draw", room: ROOM, clear: true });
    };

    return (
        <AppShell $minW={460} $minH={340}>
            <Toolbar style={{ gap: 4, flexWrap: "wrap" }}>
                {COLORS.map((col) => (
                    <button
                        key={col}
                        title={col}
                        onClick={() => { setColor(col); setErasing(false); }}
                        style={{ width: 20, height: 20, background: col, border: color === col && !erasing ? "2px solid #000080" : "1px solid #808080", cursor: "pointer" }}
                    />
                ))}
                <ToolSep />
                {[2, 3, 6, 12].map((w) => (
                    <ToolButton key={w} $active={size === w} onClick={() => setSize(w)}>{w}px</ToolButton>
                ))}
                <ToolSep />
                <ToolButton $active={erasing} onClick={() => setErasing((v) => !v)}>🧽 Eraser</ToolButton>
                <ToolButton onClick={clearAll}>🗑 Clear (shared)</ToolButton>
            </Toolbar>
            <AppBody>
                <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
                    <canvas
                        ref={canvasRef}
                        onPointerDown={down}
                        onPointerMove={move}
                        onPointerUp={up}
                        onPointerLeave={up}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "#fff", cursor: "crosshair", touchAction: "none" }}
                    />
                    <SharedCursorLayer room={ROOM} />
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>Vortex Whiteboard — draw together, live</StatusPanel>
                <StatusPanel>{erasing ? "Eraser" : color}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Whiteboard;
