import { useEffect, useRef, useState } from "react";
import { Button, Frame } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { useDialog } from "../Dialog/DialogProvider";
import { homeDir } from "../../system/session";
import { Toolbar, ToolButton, ToolSep } from "../chrome/AppChrome";

const COLORS = ["#000000", "#808080", "#c0c0c0", "#ffffff", "#ff0000", "#ffa500", "#ffff00", "#008000", "#00ff00", "#0000ff", "#00ffff", "#800080", "#ff00ff", "#8b4513"];
const SIZES = [2, 4, 8, 14];
const W = 460;
const H = 300;
const ZOOMS = [1, 2, 4];

type Tool = "pencil" | "line" | "rect" | "ellipse" | "fill" | "eraser";
const TOOLS: { id: Tool; label: string }[] = [
    { id: "pencil", label: "✎ Pencil" },
    { id: "line", label: "╱ Line" },
    { id: "rect", label: "▭ Rect" },
    { id: "ellipse", label: "◯ Ellipse" },
    { id: "fill", label: "🪣 Fill" },
    { id: "eraser", label: "▱ Eraser" },
];

const Paint: React.FC = () => {
    const sys = useSys();
    const { alert } = useDialog();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const startPt = useRef<{ x: number; y: number } | null>(null);
    const last = useRef<{ x: number; y: number } | null>(null);
    const preStroke = useRef<ImageData | null>(null);
    const undo = useRef<ImageData[]>([]);
    const redo = useRef<ImageData[]>([]);

    const [tool, setTool] = useState<Tool>("pencil");
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(4);
    const [zoom, setZoom] = useState(1);
    const [, force] = useState(0); // re-render for undo/redo button enabled state

    const ctx = () => canvasRef.current!.getContext("2d")!;

    useEffect(() => {
        const c = ctx();
        c.fillStyle = "#fff";
        c.fillRect(0, 0, W, H);
    }, []);

    const pos = (e: React.MouseEvent) => {
        const rect = canvasRef.current!.getBoundingClientRect();
        return { x: (e.clientX - rect.left) / zoom, y: (e.clientY - rect.top) / zoom };
    };

    const pushUndo = () => {
        undo.current.push(ctx().getImageData(0, 0, W, H));
        if (undo.current.length > 25) undo.current.shift();
        redo.current = [];
        force((n) => n + 1);
    };

    const doUndo = () => {
        if (!undo.current.length) return;
        redo.current.push(ctx().getImageData(0, 0, W, H));
        ctx().putImageData(undo.current.pop()!, 0, 0);
        force((n) => n + 1);
    };
    const doRedo = () => {
        if (!redo.current.length) return;
        undo.current.push(ctx().getImageData(0, 0, W, H));
        ctx().putImageData(redo.current.pop()!, 0, 0);
        force((n) => n + 1);
    };

    const strokeStyle = () => (tool === "eraser" ? "#fff" : color);

    const start = (e: React.MouseEvent) => {
        const p = pos(e);
        pushUndo();
        if (tool === "fill") {
            floodFill(Math.round(p.x), Math.round(p.y), color);
            return;
        }
        drawing.current = true;
        startPt.current = p;
        last.current = p;
        if (tool === "line" || tool === "rect" || tool === "ellipse") {
            preStroke.current = ctx().getImageData(0, 0, W, H);
        }
    };

    const move = (e: React.MouseEvent) => {
        if (!drawing.current) return;
        const c = ctx();
        const p = pos(e);
        c.strokeStyle = strokeStyle();
        c.fillStyle = strokeStyle();
        c.lineWidth = size;
        c.lineCap = "round";

        if (tool === "pencil" || tool === "eraser") {
            c.beginPath();
            c.moveTo(last.current!.x, last.current!.y);
            c.lineTo(p.x, p.y);
            c.stroke();
            last.current = p;
        } else if (preStroke.current) {
            c.putImageData(preStroke.current, 0, 0); // restore, then redraw shape preview
            const s = startPt.current!;
            c.beginPath();
            if (tool === "line") {
                c.moveTo(s.x, s.y);
                c.lineTo(p.x, p.y);
                c.stroke();
            } else if (tool === "rect") {
                c.strokeRect(Math.min(s.x, p.x), Math.min(s.y, p.y), Math.abs(p.x - s.x), Math.abs(p.y - s.y));
            } else if (tool === "ellipse") {
                c.ellipse((s.x + p.x) / 2, (s.y + p.y) / 2, Math.abs(p.x - s.x) / 2, Math.abs(p.y - s.y) / 2, 0, 0, Math.PI * 2);
                c.stroke();
            }
        }
    };

    const stop = () => {
        drawing.current = false;
        startPt.current = null;
        last.current = null;
        preStroke.current = null;
    };

    // Scanline-ish flood fill over the pixel buffer.
    const floodFill = (x: number, y: number, hex: string) => {
        if (x < 0 || y < 0 || x >= W || y >= H) return;
        const c = ctx();
        const img = c.getImageData(0, 0, W, H);
        const data = img.data;
        const idx = (px: number, py: number) => (py * W + px) * 4;
        const target = idx(x, y);
        const tr = data[target], tg = data[target + 1], tb = data[target + 2], ta = data[target + 3];
        // parse target fill color
        const fr = parseInt(hex.slice(1, 3), 16), fg = parseInt(hex.slice(3, 5), 16), fb = parseInt(hex.slice(5, 7), 16);
        if (tr === fr && tg === fg && tb === fb && ta === 255) return; // already that color
        const match = (i: number) => data[i] === tr && data[i + 1] === tg && data[i + 2] === tb && data[i + 3] === ta;
        const set = (i: number) => { data[i] = fr; data[i + 1] = fg; data[i + 2] = fb; data[i + 3] = 255; };
        const stack = [[x, y]];
        while (stack.length) {
            const [px, py] = stack.pop()!;
            const i = idx(px, py);
            if (!match(i)) continue;
            set(i);
            if (px > 0) stack.push([px - 1, py]);
            if (px < W - 1) stack.push([px + 1, py]);
            if (py > 0) stack.push([px, py - 1]);
            if (py < H - 1) stack.push([px, py + 1]);
        }
        c.putImageData(img, 0, 0);
    };

    const clear = () => {
        pushUndo();
        const c = ctx();
        c.fillStyle = "#fff";
        c.fillRect(0, 0, W, H);
    };

    const save = async () => {
        const name = window.prompt("Save as:", "painting.png");
        if (!name) return;
        const dataUrl = canvasRef.current!.toDataURL("image/png");
        const bytes = Uint8Array.from(atob(dataUrl.split(",")[1]), (ch) => ch.charCodeAt(0));
        try {
            await sys.writeFile(`${homeDir()}/${name}`, bytes);
            await alert({ title: "Paint", message: `Saved to ${homeDir()}/${name}`, type: "info" });
        } catch (e: any) {
            await alert({ title: "Paint", message: `Save failed: ${e.code ?? e.message}`, type: "error" });
        }
    };

    return (
        <div style={{ padding: 6 }}>
            <Toolbar>
                <ToolButton onClick={doUndo} disabled={!undo.current.length}>Undo</ToolButton>
                <ToolButton onClick={doRedo} disabled={!redo.current.length}>Redo</ToolButton>
                <ToolSep />
                <ToolButton onClick={clear}>Clear</ToolButton>
                <ToolButton onClick={save}>Save</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, padding: "0 4px" }}>Zoom:</span>
                {ZOOMS.map((z) => (
                    <ToolButton key={z} $active={zoom === z} onClick={() => setZoom(z)}>{z}x</ToolButton>
                ))}
            </Toolbar>

            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                {/* tool palette */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3, width: 92 }}>
                    {TOOLS.map((t) => (
                        <Button key={t.id} size="sm" active={tool === t.id} onClick={() => setTool(t.id)} style={{ justifyContent: "flex-start" }}>
                            {t.label}
                        </Button>
                    ))}
                    <div style={{ display: "flex", flexWrap: "wrap", width: 92, marginTop: 6 }}>
                        {COLORS.map((c) => (
                            <div
                                key={c}
                                onClick={() => { setColor(c); if (tool === "eraser") setTool("pencil"); }}
                                style={{ width: 18, height: 18, background: c, border: color === c ? "2px solid #000080" : "1px solid #808080", cursor: "pointer", boxSizing: "border-box" }}
                            />
                        ))}
                    </div>
                    <div style={{ display: "flex", gap: 3, marginTop: 6, flexWrap: "wrap" }}>
                        {SIZES.map((s) => (
                            <Button key={s} size="sm" active={size === s} onClick={() => setSize(s)} style={{ width: 28 }}>{s}</Button>
                        ))}
                    </div>
                </div>

                {/* canvas */}
                <Frame variant="well" style={{ padding: 2, overflow: "auto", maxWidth: W + 8, maxHeight: H + 8 }}>
                    <div style={{ width: W * zoom, height: H * zoom }}>
                        <canvas
                            ref={canvasRef}
                            width={W}
                            height={H}
                            onMouseDown={start}
                            onMouseMove={move}
                            onMouseUp={stop}
                            onMouseLeave={stop}
                            style={{ display: "block", cursor: "crosshair", background: "#fff", width: W * zoom, height: H * zoom, imageRendering: "pixelated" }}
                        />
                    </div>
                </Frame>
            </div>
        </div>
    );
};

export default Paint;
