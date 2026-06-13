import { useEffect, useRef } from "react";
import { Frame } from "react95";
import { usePerf, PerfSample } from "../../system/perf";
import { formatBytes } from "../../system/storage";

/** A classic green-on-black scrolling line graph. */
const Graph: React.FC<{ history: number[]; value: number; label: string; unit?: string }> = ({ history, value, label, unit = "%" }) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = ref.current;
        if (!cv) return;
        const ctx = cv.getContext("2d");
        if (!ctx) return;
        const w = cv.width;
        const h = cv.height;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, w, h);

        // grid
        ctx.strokeStyle = "#003b00";
        ctx.lineWidth = 1;
        for (let gx = 0; gx <= w; gx += 16) {
            ctx.beginPath();
            ctx.moveTo(gx, 0);
            ctx.lineTo(gx, h);
            ctx.stroke();
        }
        for (let gy = 0; gy <= h; gy += 12) {
            ctx.beginPath();
            ctx.moveTo(0, gy);
            ctx.lineTo(w, gy);
            ctx.stroke();
        }

        // line
        ctx.strokeStyle = "#00ff00";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const n = history.length;
        history.forEach((v, i) => {
            const x = (i / (n - 1)) * w;
            const y = h - (Math.min(100, v) / 100) * h;
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.stroke();
    }, [history]);

    return (
        <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, marginBottom: 4 }}>{label}</div>
            <Frame variant="well" style={{ padding: 2 }}>
                <canvas ref={ref} width={220} height={96} style={{ display: "block", width: "100%", height: 96 }} />
            </Frame>
            <div style={{ fontSize: 18, fontFamily: "monospace", textAlign: "center", marginTop: 4 }}>
                {value}
                {unit}
            </div>
        </div>
    );
};

const PerfTab: React.FC = () => {
    const perf: PerfSample = usePerf();
    return (
        <div style={{ padding: 12 }}>
            <div style={{ display: "flex", gap: 16 }}>
                <Graph history={perf.cpuHistory} value={perf.cpu} label="CPU Usage (main thread)" />
                <Graph history={perf.memHistory} value={perf.mem} label="Memory Usage" />
            </div>
            <Frame variant="well" style={{ marginTop: 12, padding: 10, fontSize: 12, lineHeight: 1.7 }}>
                <div>
                    <b>CPU:</b> {perf.cpu}% (measured from frame timing — a browser tab can't read the host CPU)
                </div>
                <div>
                    <b>Memory:</b> {formatBytes(perf.memBytes)} of {formatBytes(perf.memTotal)}{" "}
                    {perf.real ? "(real JS heap)" : "(estimated)"}
                </div>
            </Frame>
        </div>
    );
};

export default PerfTab;
