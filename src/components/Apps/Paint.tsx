import { useEffect, useRef, useState } from "react";
import { Button, Frame, Toolbar } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { useDialog } from "../Dialog/DialogProvider";

const COLORS = ["#000000", "#808080", "#c0c0c0", "#ffffff", "#ff0000", "#ffa500", "#ffff00", "#008000", "#00ff00", "#0000ff", "#00ffff", "#800080", "#ff00ff", "#8b4513"];
const SIZES = [2, 4, 8, 14];
const W = 480;
const H = 320;

const Paint: React.FC = () => {
    const sys = useSys();
    const { alert } = useDialog();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const last = useRef<{ x: number; y: number } | null>(null);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(4);
    const [eraser, setEraser] = useState(false);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, W, H);
        }
    }, []);

    const pos = (e: React.MouseEvent) => {
        const rect = canvasRef.current!.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const start = (e: React.MouseEvent) => {
        drawing.current = true;
        last.current = pos(e);
    };

    const move = (e: React.MouseEvent) => {
        if (!drawing.current) return;
        const ctx = canvasRef.current!.getContext("2d")!;
        const p = pos(e);
        ctx.strokeStyle = eraser ? "#fff" : color;
        ctx.lineWidth = size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(last.current!.x, last.current!.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        last.current = p;
    };

    const stop = () => {
        drawing.current = false;
        last.current = null;
    };

    const clear = () => {
        const ctx = canvasRef.current!.getContext("2d")!;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, W, H);
    };

    const save = async () => {
        const name = window.prompt("Save as:", "painting.png");
        if (!name) return;
        const dataUrl = canvasRef.current!.toDataURL("image/png");
        const bytes = Uint8Array.from(atob(dataUrl.split(",")[1]), (ch) => ch.charCodeAt(0));
        try {
            await sys.writeFile(`/home/user/${name}`, bytes);
            await alert({ title: "Paint", message: `Saved to /home/user/${name}`, type: "info" });
        } catch (e: any) {
            await alert({ title: "Paint", message: `Save failed: ${e.code ?? e.message}`, type: "error" });
        }
    };

    return (
        <div style={{ width: W + 20, padding: 6 }}>
            <Toolbar>
                <Button variant="menu" size="sm" active={!eraser} onClick={() => setEraser(false)}>
                    Pencil
                </Button>
                <Button variant="menu" size="sm" active={eraser} onClick={() => setEraser(true)}>
                    Eraser
                </Button>
                <Button variant="menu" size="sm" onClick={clear}>
                    Clear
                </Button>
                <Button variant="menu" size="sm" onClick={save}>
                    Save
                </Button>
            </Toolbar>

            <div style={{ display: "flex", gap: 6, alignItems: "center", margin: "6px 0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", width: 120 }}>
                    {COLORS.map((c) => (
                        <div
                            key={c}
                            onClick={() => { setColor(c); setEraser(false); }}
                            style={{ width: 16, height: 16, background: c, border: color === c ? "2px solid #000080" : "1px solid #808080", cursor: "pointer" }}
                        />
                    ))}
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                    {SIZES.map((s) => (
                        <Button key={s} size="sm" active={size === s} onClick={() => setSize(s)} style={{ width: 30 }}>
                            {s}
                        </Button>
                    ))}
                </div>
            </div>

            <Frame variant="well" style={{ padding: 2, display: "inline-block" }}>
                <canvas
                    ref={canvasRef}
                    width={W}
                    height={H}
                    onMouseDown={start}
                    onMouseMove={move}
                    onMouseUp={stop}
                    onMouseLeave={stop}
                    style={{ display: "block", cursor: "crosshair", background: "#fff" }}
                />
            </Frame>
        </div>
    );
};

export default Paint;
