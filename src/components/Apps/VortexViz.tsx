import { useEffect, useRef, useState } from "react";
import { AppShell, Toolbar, ToolButton, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { renderViz, VIZ_MODES, type VizMode } from "../../system/visualizer";

/**
 * VortexViz — a full FFT visualizer suite reading whatever VortexAmp is playing
 * (via the shared analyser in audio.ts). Bars / Oscilloscope / Bloom. Animates
 * procedurally when nothing is playing, so it always looks alive.
 */
const LABEL: Record<VizMode, string> = { bars: "Bars", scope: "Oscilloscope", bloom: "Bloom" };

const VortexViz: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const raf = useRef(0);
    const frame = useRef(0);
    const modeRef = useRef<VizMode>("bars");
    const [mode, setMode] = useState<VizMode>("bars");

    useEffect(() => {
        modeRef.current = mode;
    }, [mode]);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext("2d");
        if (!ctx) return;
        const fit = () => {
            const r = cv.getBoundingClientRect();
            cv.width = Math.max(1, Math.round(r.width));
            cv.height = Math.max(1, Math.round(r.height));
        };
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(cv);
        const tick = () => {
            frame.current++;
            renderViz(ctx, cv.width, cv.height, modeRef.current, frame.current);
            raf.current = requestAnimationFrame(tick);
        };
        tick();
        return () => {
            cancelAnimationFrame(raf.current);
            ro.disconnect();
        };
    }, []);

    return (
        <AppShell $minW={420} $minH={300}>
            <Toolbar style={{ gap: 4 }}>
                {VIZ_MODES.map((m) => (
                    <ToolButton key={m} $active={mode === m} onClick={() => setMode(m)}>{LABEL[m]}</ToolButton>
                ))}
            </Toolbar>
            <div style={{ flex: 1, minHeight: 0, position: "relative", background: "#08020f" }}>
                <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>VortexViz — {LABEL[mode]}</StatusPanel>
                <StatusPanel>Plays from VortexAmp</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VortexViz;
