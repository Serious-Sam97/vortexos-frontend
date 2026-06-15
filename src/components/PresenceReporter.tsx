import { useEffect, useRef } from "react";
import { useProcessContext } from "../contexts/ProcessContext";
import { useOSContext } from "../contexts/OSContext";
import { sendStatus } from "../system/chat";

/**
 * Reports our live presence to the server: which app is focused (the foreground
 * window's name) and whether we're active / idle / away. Pure side-effect, no UI.
 * `sendStatus` de-dupes, so the 4s tick only emits a frame when something changes.
 */
const IDLE_MS = 60_000;

const PresenceReporter: React.FC = () => {
    const { processes } = useProcessContext();
    const { minimized } = useOSContext();
    const lastActivity = useRef(Date.now());

    // Foreground app name (priority 0, not minimized) — recomputed each render, read by the tick.
    const focused = processes.find((p) => p.priority === 0 && p.uuid && !minimized.includes(p.uuid));
    const activityRef = useRef("");
    activityRef.current = focused?.name ?? "";

    useEffect(() => {
        const bump = () => {
            lastActivity.current = Date.now();
        };
        const evts = ["mousemove", "mousedown", "keydown", "touchstart", "wheel"] as const;
        evts.forEach((e) => window.addEventListener(e, bump, { passive: true }));

        const tick = () => {
            const idleFor = Date.now() - lastActivity.current;
            const status = document.hidden ? "away" : idleFor > IDLE_MS ? "idle" : "active";
            sendStatus(status, activityRef.current);
        };
        tick();
        const id = window.setInterval(tick, 4000);
        const onVis = () => tick();
        document.addEventListener("visibilitychange", onVis);
        return () => {
            evts.forEach((e) => window.removeEventListener(e, bump));
            window.clearInterval(id);
            document.removeEventListener("visibilitychange", onVis);
        };
    }, []);

    return null;
};

export default PresenceReporter;
