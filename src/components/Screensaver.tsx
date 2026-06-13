import { useEffect, useRef, useState } from "react";
import { getSaverSettings, onPreviewSaver, useSaverSettings } from "../system/screensaver";

/**
 * The screensaver engine. After the configured idle time (no mouse/keyboard), a full-screen
 * canvas runs the chosen animation; any input dismisses it. Three classics, drawn from scratch:
 * Starfield, Mystify, 3D Pipes.
 */
const Screensaver: React.FC = () => {
    const { type, wait } = useSaverSettings();
    const [active, setActive] = useState(false);
    const lastActivity = useRef(Date.now());
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // ── idle detection ──────────────────────────────────────────────────
    useEffect(() => {
        const bump = () => {
            lastActivity.current = Date.now();
            setActive((a) => (a ? false : a));
        };
        window.addEventListener("mousemove", bump);
        window.addEventListener("mousedown", bump);
        window.addEventListener("keydown", bump);
        window.addEventListener("wheel", bump);
        const id = setInterval(() => {
            const s = getSaverSettings();
            if (s.type !== "none" && Date.now() - lastActivity.current > s.wait * 60_000) {
                setActive(true);
            }
        }, 1000);
        const offPreview = onPreviewSaver(() => setActive(true));
        return () => {
            window.removeEventListener("mousemove", bump);
            window.removeEventListener("mousedown", bump);
            window.removeEventListener("keydown", bump);
            window.removeEventListener("wheel", bump);
            clearInterval(id);
            offPreview();
        };
    }, [wait]);

    // ── the animation ───────────────────────────────────────────────────
    useEffect(() => {
        if (!active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);
        const onResize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        let raf = 0;
        const run = makeAnimation(type, () => W, () => H);
        const tick = () => {
            run(ctx);
            raf = requestAnimationFrame(tick);
        };
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H);
        tick();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
        };
    }, [active, type]);

    if (!active || type === "none") return null;
    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", inset: 0, zIndex: 5000000, background: "#000", cursor: "none" }}
        />
    );
};

// ── animations ──────────────────────────────────────────────────────────
function makeAnimation(type: string, getW: () => number, getH: () => number): (ctx: CanvasRenderingContext2D) => void {
    if (type === "mystify") return mystify(getW, getH);
    if (type === "pipes") return pipes(getW, getH);
    return starfield(getW, getH);
}

function starfield(getW: () => number, getH: () => number) {
    const N = 500;
    const stars = Array.from({ length: N }, () => ({ x: rnd(-1, 1), y: rnd(-1, 1), z: rnd(0.05, 1) }));
    return (ctx: CanvasRenderingContext2D) => {
        const W = getW(), H = getH(), cx = W / 2, cy = H / 2;
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#fff";
        for (const s of stars) {
            s.z -= 0.006;
            if (s.z <= 0.02) {
                s.x = rnd(-1, 1);
                s.y = rnd(-1, 1);
                s.z = 1;
            }
            const sx = cx + (s.x / s.z) * cx;
            const sy = cy + (s.y / s.z) * cy;
            if (sx < 0 || sx > W || sy < 0 || sy > H) continue;
            const r = (1 - s.z) * 2.5;
            ctx.globalAlpha = Math.min(1, 1 - s.z + 0.2);
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    };
}

function mystify(getW: () => number, getH: () => number) {
    const W0 = getW(), H0 = getH();
    const makePoly = (hue: number) => ({
        hue,
        pts: Array.from({ length: 4 }, () => ({ x: rnd(0, W0), y: rnd(0, H0), vx: rnd(-3, 3), vy: rnd(-3, 3) })),
        trail: [] as { x: number; y: number }[][],
    });
    const polys = [makePoly(190), makePoly(320)];
    return (ctx: CanvasRenderingContext2D) => {
        const W = getW(), H = getH();
        ctx.fillStyle = "rgba(0,0,0,0.12)";
        ctx.fillRect(0, 0, W, H);
        for (const p of polys) {
            for (const pt of p.pts) {
                pt.x += pt.vx;
                pt.y += pt.vy;
                if (pt.x < 0 || pt.x > W) pt.vx *= -1;
                if (pt.y < 0 || pt.y > H) pt.vy *= -1;
            }
            p.trail.push(p.pts.map((pt) => ({ x: pt.x, y: pt.y })));
            if (p.trail.length > 14) p.trail.shift();
            p.trail.forEach((frame, i) => {
                ctx.strokeStyle = `hsl(${p.hue}, 90%, ${20 + (i / p.trail.length) * 50}%)`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                frame.forEach((pt, j) => (j === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
                ctx.closePath();
                ctx.stroke();
            });
            p.hue = (p.hue + 0.3) % 360;
        }
    };
}

function pipes(getW: () => number, getH: () => number) {
    const GRID = 26;
    let x = 0, y = 0, dir = 0, hue = rnd(0, 360);
    let cols = Math.ceil(getW() / GRID), rows = Math.ceil(getH() / GRID);
    x = Math.floor(cols / 2);
    y = Math.floor(rows / 2);
    let steps = 0;
    return (ctx: CanvasRenderingContext2D) => {
        cols = Math.ceil(getW() / GRID);
        rows = Math.ceil(getH() / GRID);
        for (let k = 0; k < 2; k++) {
            const px = x * GRID + GRID / 2, py = y * GRID + GRID / 2;
            if (Math.random() < 0.15) dir = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
            const [dx, dy] = [[1, 0], [0, 1], [-1, 0], [0, -1]][dir];
            x += dx;
            y += dy;
            if (x < 0 || x >= cols || y < 0 || y >= rows || ++steps > 1400) {
                x = Math.floor(Math.random() * cols);
                y = Math.floor(Math.random() * rows);
                hue = rnd(0, 360);
                steps = 0;
            }
            const nx = x * GRID + GRID / 2, ny = y * GRID + GRID / 2;
            ctx.strokeStyle = `hsl(${hue}, 80%, 55%)`;
            ctx.lineWidth = 8;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(nx, ny);
            ctx.stroke();
            ctx.fillStyle = `hsl(${hue}, 80%, 65%)`;
            ctx.beginPath();
            ctx.arc(nx, ny, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    };
}

function rnd(a: number, b: number): number {
    return a + Math.random() * (b - a);
}

export default Screensaver;
