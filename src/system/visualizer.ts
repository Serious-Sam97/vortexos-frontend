import { getActiveAnalyser } from "./audio";

/**
 * Shared FFT visualizer renderer — used by the VortexViz window AND the
 * "Spectrum" screensaver. Reads the currently-playing analyser (from audio.ts);
 * when nothing is playing it falls back to a procedural animation so it always
 * looks alive. Pure canvas, no libs.
 */
export type VizMode = "bars" | "scope" | "bloom";
export const VIZ_MODES: VizMode[] = ["bars", "scope", "bloom"];

const N = 48; // logical band count for bars/bloom

/** Get normalised 0..1 levels — from real audio if playing, else procedural. */
function levels(frame: number): { vals: number[]; live: boolean } {
    const an = getActiveAnalyser();
    if (an) {
        const bins = an.frequencyBinCount;
        const data = new Uint8Array(bins);
        an.getByteFrequencyData(data);
        let sum = 0;
        const vals = new Array(N);
        for (let i = 0; i < N; i++) {
            const v = data[Math.floor((i / N) * bins)] / 255;
            vals[i] = v;
            sum += v;
        }
        if (sum > 0.5) return { vals, live: true }; // real audio present
    }
    // procedural fallback — layered sines so it breathes
    const t = frame / 60;
    const vals = new Array(N);
    for (let i = 0; i < N; i++) {
        const a = 0.5 + 0.5 * Math.sin(t * 1.7 + i * 0.4);
        const b = 0.5 + 0.5 * Math.sin(t * 0.9 - i * 0.21);
        vals[i] = Math.max(0, (a * 0.6 + b * 0.4) * (0.4 + 0.6 * Math.sin(t * 0.5 + i * 0.1) ** 2));
    }
    return { vals, live: false };
}

export function renderViz(ctx: CanvasRenderingContext2D, W: number, H: number, mode: VizMode, frame: number): void {
    // trail/fade
    ctx.fillStyle = "rgba(8,2,18,0.28)";
    ctx.fillRect(0, 0, W, H);

    const { vals } = levels(frame);
    const hueBase = (frame * 0.6) % 360;

    if (mode === "bars") {
        const bw = W / N;
        for (let i = 0; i < N; i++) {
            const h = vals[i] * H * 0.9;
            const hue = (hueBase + i * 5) % 360;
            ctx.fillStyle = `hsl(${hue} 90% 55%)`;
            ctx.fillRect(i * bw + 1, H - h, bw - 2, h);
            // mirrored cap glow
            ctx.fillStyle = `hsl(${hue} 90% 75%)`;
            ctx.fillRect(i * bw + 1, H - h, bw - 2, 2);
        }
        return;
    }

    if (mode === "scope") {
        const an = getActiveAnalyser();
        ctx.lineWidth = 2;
        ctx.strokeStyle = `hsl(${hueBase} 90% 60%)`;
        ctx.beginPath();
        const M = 256;
        const time = an ? new Uint8Array(an.fftSize) : null;
        if (an && time) an.getByteTimeDomainData(time);
        for (let i = 0; i < M; i++) {
            const x = (i / (M - 1)) * W;
            let y: number;
            if (an && time && time.length) {
                y = (time[Math.floor((i / M) * time.length)] / 255) * H;
            } else {
                const t = frame / 60;
                y = H / 2 + Math.sin(i * 0.05 + t * 3) * H * 0.25 * (0.5 + 0.5 * Math.sin(t + i * 0.01));
            }
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        return;
    }

    // bloom — radial spokes from the centre
    const cx = W / 2;
    const cy = H / 2;
    const r0 = Math.min(W, H) * 0.08;
    for (let i = 0; i < N; i++) {
        const ang = (i / N) * Math.PI * 2 + frame * 0.004;
        const len = r0 + vals[i] * Math.min(W, H) * 0.42;
        const hue = (hueBase + i * 7) % 360;
        ctx.strokeStyle = `hsl(${hue} 95% 60%)`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0);
        ctx.lineTo(cx + Math.cos(ang) * len, cy + Math.sin(ang) * len);
        ctx.stroke();
    }
    // core glow
    const avg = vals.reduce((a, b) => a + b, 0) / N;
    ctx.fillStyle = `hsla(${hueBase} 90% 70%, ${0.3 + avg * 0.5})`;
    ctx.beginPath();
    ctx.arc(cx, cy, r0 * (0.6 + avg), 0, Math.PI * 2);
    ctx.fill();
}
