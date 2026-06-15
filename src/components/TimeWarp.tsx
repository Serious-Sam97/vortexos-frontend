import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { subscribeWarp } from "../system/eras";
import { useSettings } from "../system/settings";

/**
 * The Time Machine's signature transition — a neon hyperspace warp that plays over
 * the whole screen while the new era's chrome paints underneath, so travelling
 * between eras feels like travelling through time. Streaks rush out from the centre,
 * accelerate, flash white at the peak, then the overlay fades to reveal the new era.
 *
 * Honours reduce-motion (settings): a brief dark fade instead of the animation.
 */
const DURATION = 1150;

const TimeWarp: React.FC = () => {
    const { reduceMotion } = useSettings();
    const [active, setActive] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const layerRef = useRef<HTMLDivElement | null>(null);

    // Subscribe once to the warp trigger.
    useEffect(() => subscribeWarp(() => setActive(true)), []);

    useEffect(() => {
        if (!active) return;

        // Reduced motion: a short, calm dark veil rather than streaking hyperspace.
        if (reduceMotion) {
            const layer = layerRef.current;
            if (layer) layer.style.background = "rgba(8,2,18,0.85)";
            const t = setTimeout(() => setActive(false), 360);
            return () => clearTimeout(t);
        }

        const canvas = canvasRef.current;
        const layer = layerRef.current;
        if (!canvas || !layer) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = (canvas.width = window.innerWidth);
        const H = (canvas.height = window.innerHeight);
        const cx = W / 2;
        const cy = H / 2;

        // Radial streaks (hyperspace) — each at a fixed angle, growing outward.
        const N = 320;
        const streaks = Array.from({ length: N }, () => ({
            a: Math.random() * Math.PI * 2,
            r: Math.random() * 70,
            len: 0,
            speed: 2 + Math.random() * 5,
        }));

        const startTime = performance.now();
        let raf = 0;

        const frame = (now: number) => {
            const t = Math.min(1, (now - startTime) / DURATION);

            // Build the dark vaporwave field with motion-blur trails.
            ctx.fillStyle = "rgba(8,2,18,0.32)";
            ctx.fillRect(0, 0, W, H);

            const accel = 1 + t * t * 22; // ease-in acceleration
            ctx.lineWidth = 1.6;
            for (const s of streaks) {
                s.len += s.speed * (0.5 + t * 2.4);
                const r0 = s.r * accel;
                const r1 = (s.r + s.len) * accel;
                const cosA = Math.cos(s.a);
                const sinA = Math.sin(s.a);
                const hue = (s.a * 57.3 + t * 400) % 360;
                ctx.strokeStyle = `hsl(${hue}, 100%, 68%)`;
                ctx.beginPath();
                ctx.moveTo(cx + cosA * r0, cy + sinA * r0);
                ctx.lineTo(cx + cosA * r1, cy + sinA * r1);
                ctx.stroke();
            }

            // White flash at the peak — masks the era swap.
            if (t > 0.42 && t < 0.72) {
                const f = 1 - Math.abs(t - 0.57) / 0.15;
                ctx.fillStyle = `rgba(255,255,255,${f * 0.85})`;
                ctx.fillRect(0, 0, W, H);
            }

            // Fade the whole overlay out over the last fifth.
            layer.style.opacity = t < 0.8 ? "1" : String(Math.max(0, 1 - (t - 0.8) / 0.2));

            if (t >= 1) {
                setActive(false);
                return;
            }
            raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
        return () => cancelAnimationFrame(raf);
    }, [active, reduceMotion]);

    if (!active) return null;

    return createPortal(
        <div
            ref={layerRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 2000000,
                pointerEvents: "none",
                background: "transparent",
            }}
        >
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
        </div>,
        document.body,
    );
};

export default TimeWarp;
