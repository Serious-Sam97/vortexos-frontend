import { useEffect, useRef, useState } from "react";
import { Button, Frame } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { useDialog } from "../Dialog/DialogProvider";
import { homeDir } from "../../system/session";
import { Toolbar, ToolButton, ToolSep } from "../chrome/AppChrome";

const COLORS = [
    "#000000", "#404040", "#808080", "#c0c0c0", "#ffffff", "#7f0000", "#ff0000", "#ff7f00",
    "#ffff00", "#7fff00", "#008000", "#00ff00", "#00ffff", "#0000ff", "#000080", "#7f00ff",
    "#800080", "#ff00ff", "#ffc0cb", "#8b4513", "#a0522d", "#ffd700", "#00e5d0", "#ff2d95",
];
const SIZES = [2, 4, 8, 14, 24];
const W = 520;
const H = 360;
const ZOOMS = [1, 2, 4];

type Tool = "pencil" | "line" | "rect" | "ellipse" | "fill" | "eraser" | "picker" | "spray";
const TOOLS: { id: Tool; label: string }[] = [
    { id: "pencil", label: "✎ Pencil" },
    { id: "line", label: "╱ Line" },
    { id: "rect", label: "▭ Rect" },
    { id: "ellipse", label: "◯ Ellipse" },
    { id: "fill", label: "🪣 Fill" },
    { id: "spray", label: "✷ Spray" },
    { id: "eraser", label: "▱ Eraser" },
    { id: "picker", label: "💧 Pick" },
];

interface Layer {
    id: number;
    name: string;
    visible: boolean;
}

const Paint: React.FC = () => {
    const sys = useSys();
    const { alert } = useDialog();
    const canvasRef = useRef<HTMLCanvasElement>(null); // the composite the user sees
    const layerCanvases = useRef<HTMLCanvasElement[]>([]);
    const drawing = useRef(false);
    const startPt = useRef<{ x: number; y: number } | null>(null);
    const last = useRef<{ x: number; y: number } | null>(null);
    const preStroke = useRef<ImageData | null>(null);
    const undo = useRef<{ layer: number; data: ImageData }[]>([]);
    const redo = useRef<{ layer: number; data: ImageData }[]>([]);
    const nextId = useRef(1);

    const [layers, setLayers] = useState<Layer[]>([{ id: 0, name: "Background", visible: true }]);
    const [active, setActive] = useState(0);
    const [tool, setTool] = useState<Tool>("pencil");
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(4);
    const [zoom, setZoom] = useState(1);
    const [, force] = useState(0);

    const makeCanvas = (fillWhite: boolean) => {
        const c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        if (fillWhite) {
            const cx = c.getContext("2d")!;
            cx.fillStyle = "#fff";
            cx.fillRect(0, 0, W, H);
        }
        return c;
    };

    // init the background layer once
    useEffect(() => {
        if (!layerCanvases.current.length) {
            layerCanvases.current = [makeCanvas(true)];
            composite();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const lctx = () => layerCanvases.current[active].getContext("2d")!;

    const composite = () => {
        const v = canvasRef.current?.getContext("2d");
        if (!v) return;
        v.clearRect(0, 0, W, H);
        layers.forEach((l, i) => {
            if (l.visible && layerCanvases.current[i]) v.drawImage(layerCanvases.current[i], 0, 0);
        });
    };
    // re-composite whenever layer visibility/order/active changes
    useEffect(() => { composite(); /* eslint-disable-next-line */ }, [layers]);

    const pos = (e: React.MouseEvent) => {
        const rect = canvasRef.current!.getBoundingClientRect();
        return { x: (e.clientX - rect.left) / zoom, y: (e.clientY - rect.top) / zoom };
    };

    const pushUndo = () => {
        undo.current.push({ layer: active, data: lctx().getImageData(0, 0, W, H) });
        if (undo.current.length > 25) undo.current.shift();
        redo.current = [];
        force((n) => n + 1);
    };
    const doUndo = () => {
        const u = undo.current.pop();
        if (!u) return;
        const cx = layerCanvases.current[u.layer].getContext("2d")!;
        redo.current.push({ layer: u.layer, data: cx.getImageData(0, 0, W, H) });
        cx.putImageData(u.data, 0, 0);
        composite();
        force((n) => n + 1);
    };
    const doRedo = () => {
        const r = redo.current.pop();
        if (!r) return;
        const cx = layerCanvases.current[r.layer].getContext("2d")!;
        undo.current.push({ layer: r.layer, data: cx.getImageData(0, 0, W, H) });
        cx.putImageData(r.data, 0, 0);
        composite();
        force((n) => n + 1);
    };

    const start = (e: React.MouseEvent) => {
        const p = pos(e);
        if (tool === "picker") {
            const d = canvasRef.current!.getContext("2d")!.getImageData(Math.round(p.x), Math.round(p.y), 1, 1).data;
            setColor("#" + [d[0], d[1], d[2]].map((v) => v.toString(16).padStart(2, "0")).join(""));
            return;
        }
        pushUndo();
        if (tool === "fill") {
            floodFill(Math.round(p.x), Math.round(p.y), color);
            composite();
            return;
        }
        drawing.current = true;
        startPt.current = p;
        last.current = p;
        if (tool === "line" || tool === "rect" || tool === "ellipse") preStroke.current = lctx().getImageData(0, 0, W, H);
        if (tool === "spray") sprayAt(p.x, p.y);
    };

    const move = (e: React.MouseEvent) => {
        if (!drawing.current) return;
        const c = lctx();
        const p = pos(e);
        c.globalCompositeOperation = tool === "eraser" ? "destination-out" : "source-over";
        c.strokeStyle = color;
        c.fillStyle = color;
        c.lineWidth = size;
        c.lineCap = "round";
        c.lineJoin = "round";

        if (tool === "pencil" || tool === "eraser") {
            c.beginPath();
            c.moveTo(last.current!.x, last.current!.y);
            c.lineTo(p.x, p.y);
            c.stroke();
            last.current = p;
        } else if (tool === "spray") {
            sprayAt(p.x, p.y);
        } else if (preStroke.current) {
            c.putImageData(preStroke.current, 0, 0);
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
        c.globalCompositeOperation = "source-over";
        composite();
    };

    const sprayAt = (x: number, y: number) => {
        const c = lctx();
        c.fillStyle = color;
        for (let n = 0; n < size * 3; n++) {
            const a = Math.random() * Math.PI * 2;
            const r = Math.random() * size * 1.5;
            c.fillRect(x + Math.cos(a) * r, y + Math.sin(a) * r, 1, 1);
        }
    };

    const stop = () => {
        drawing.current = false;
        startPt.current = null;
        last.current = null;
        preStroke.current = null;
    };

    const floodFill = (x: number, y: number, hex: string) => {
        if (x < 0 || y < 0 || x >= W || y >= H) return;
        const c = lctx();
        const img = c.getImageData(0, 0, W, H);
        const data = img.data;
        const idx = (px: number, py: number) => (py * W + px) * 4;
        const t = idx(x, y);
        const tr = data[t], tg = data[t + 1], tb = data[t + 2], ta = data[t + 3];
        const fr = parseInt(hex.slice(1, 3), 16), fg = parseInt(hex.slice(3, 5), 16), fb = parseInt(hex.slice(5, 7), 16);
        if (tr === fr && tg === fg && tb === fb && ta === 255) return;
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

    const clearLayer = () => {
        pushUndo();
        const c = lctx();
        if (active === 0) {
            c.fillStyle = "#fff";
            c.fillRect(0, 0, W, H);
        } else {
            c.clearRect(0, 0, W, H);
        }
        composite();
    };

    const addLayer = () => {
        layerCanvases.current.push(makeCanvas(false));
        const id = nextId.current++;
        setLayers((ls) => [...ls, { id, name: `Layer ${id}`, visible: true }]);
        setActive(layerCanvases.current.length - 1);
    };
    const deleteLayer = (i: number) => {
        if (layers.length <= 1) return;
        layerCanvases.current.splice(i, 1);
        setLayers((ls) => ls.filter((_, j) => j !== i));
        setActive((a) => Math.max(0, a >= i ? a - 1 : a));
    };
    const toggleVisible = (i: number) => setLayers((ls) => ls.map((l, j) => (j === i ? { ...l, visible: !l.visible } : l)));

    const save = async () => {
        const name = window.prompt("Save as:", "painting.png");
        if (!name) return;
        composite();
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
                <ToolButton onClick={clearLayer}>Clear</ToolButton>
                <ToolButton onClick={save}>Save</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, padding: "0 4px" }}>Zoom:</span>
                {ZOOMS.map((z) => <ToolButton key={z} $active={zoom === z} onClick={() => setZoom(z)}>{z}x</ToolButton>)}
            </Toolbar>

            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                {/* tools + palette */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3, width: 96 }}>
                    {TOOLS.map((t) => (
                        <Button key={t.id} size="sm" active={tool === t.id} onClick={() => setTool(t.id)} style={{ justifyContent: "flex-start" }}>{t.label}</Button>
                    ))}
                    <div style={{ display: "flex", flexWrap: "wrap", width: 96, marginTop: 6 }}>
                        {COLORS.map((c) => (
                            <div key={c} onClick={() => { setColor(c); if (tool === "eraser" || tool === "picker") setTool("pencil"); }}
                                style={{ width: 16, height: 16, background: c, border: color === c ? "2px solid #000080" : "1px solid #808080", cursor: "pointer", boxSizing: "border-box" }} />
                        ))}
                    </div>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: 92, height: 22, marginTop: 4, padding: 0 }} title="Custom colour" />
                    <div style={{ display: "flex", gap: 3, marginTop: 6, flexWrap: "wrap" }}>
                        {SIZES.map((s) => <Button key={s} size="sm" active={size === s} onClick={() => setSize(s)} style={{ width: 26 }}>{s}</Button>)}
                    </div>
                </div>

                {/* canvas */}
                <Frame variant="well" style={{ padding: 2, overflow: "auto", maxWidth: W + 8, maxHeight: H + 8 }}>
                    <div style={{ width: W * zoom, height: H * zoom }}>
                        <canvas ref={canvasRef} width={W} height={H}
                            onMouseDown={start} onMouseMove={move} onMouseUp={stop} onMouseLeave={stop}
                            style={{ display: "block", cursor: tool === "picker" ? "copy" : "crosshair", background: "#fff", width: W * zoom, height: H * zoom, imageRendering: "pixelated" }} />
                    </div>
                </Frame>

                {/* layers panel */}
                <div style={{ width: 132, display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ fontSize: 12, fontWeight: "bold" }}>Layers</div>
                    <Button size="sm" onClick={addLayer}>+ Add Layer</Button>
                    <Frame variant="well" style={{ flex: 1, minHeight: 120, padding: 2, overflow: "auto" }}>
                        {layers.map((_, i) => i).reverse().map((i) => {
                            const l = layers[i];
                            return (
                                <div key={l.id} onClick={() => setActive(i)}
                                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "2px 3px", fontSize: 11, cursor: "pointer", background: active === i ? "#000080" : "transparent", color: active === i ? "#fff" : "#000" }}>
                                    <span onClick={(e) => { e.stopPropagation(); toggleVisible(i); }} title="Toggle visibility" style={{ cursor: "pointer" }}>{l.visible ? "👁" : "—"}</span>
                                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.name}</span>
                                    {layers.length > 1 && <span onClick={(e) => { e.stopPropagation(); deleteLayer(i); }} title="Delete layer" style={{ cursor: "pointer" }}>✕</span>}
                                </div>
                            );
                        })}
                    </Frame>
                </div>
            </div>
        </div>
    );
};

export default Paint;
