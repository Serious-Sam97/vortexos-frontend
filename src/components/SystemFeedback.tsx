import { useEffect, useRef } from "react";
import { useProcessTable } from "../kernel/react/KernelProvider";
import { useOSContext } from "../contexts/OSContext";
import { playClose, playOpen } from "../system/sounds";

/**
 * OS-wide feedback: a brief hourglass + an "open program" / "close program" sound whenever a
 * window appears or disappears. Skips the windows restored from the saved session on boot.
 */
const SystemFeedback: React.FC = () => {
    const table = useProcessTable();
    const { flashBusy } = useOSContext();
    const prev = useRef<Set<string>>(new Set(table.map((p) => p.pid)));
    const ready = useRef(false);

    useEffect(() => {
        const cur = new Set(table.map((p) => p.pid));
        if (ready.current) {
            let added = false;
            let removed = false;
            cur.forEach((pid) => {
                if (!prev.current.has(pid)) added = true;
            });
            prev.current.forEach((pid) => {
                if (!cur.has(pid)) removed = true;
            });
            if (added) {
                playOpen();
                flashBusy();
            }
            if (removed) playClose();
        }
        ready.current = true;
        prev.current = cur;
    }, [table, flashBusy]);

    return null;
};

export default SystemFeedback;
