import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { useKernel, usePanic } from "../kernel/react/KernelProvider";
import { logCrash } from "../system/crashlog";

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

const Cursor = styled.span`
    animation: ${blink} 1s step-end infinite;
`;

const Screen = styled.div`
    position: fixed;
    inset: 0;
    z-index: 2000001;
    background: #0000aa;
    color: #c0c0c0;
    font-family: "Courier New", "Lucida Console", monospace;
    font-size: 15px;
    line-height: 1.5;
    padding: 8vh 12vw;
    box-sizing: border-box;
    cursor: none;
`;

const Title = styled.div`
    background: #c0c0c0;
    color: #0000aa;
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    margin: 0 auto 28px;
`;

/**
 * The Blue Screen of Death. Mounted at the top of the desktop; renders only when the kernel
 * is in a panic state. Authentic Windows 9x styling — a fatal exception code, a plausible
 * segment:offset address, and the classic recovery footer. Any key recovers ("continue");
 * Ctrl+Alt+Del reboots.
 */
const BSOD: React.FC = () => {
    const panic = usePanic();
    const kernel = useKernel();
    const navigate = useNavigate();

    useEffect(() => {
        if (!panic) return;
        logCrash({ kind: "kernel", app: "VortexOS Kernel", pid: null, message: panic.message, stack: panic.stack ?? "" });
    }, [panic]);

    useEffect(() => {
        if (!panic) return;
        const reboot = () => {
            kernel.clearPanic();
            navigate("/"); // warm reboot through the boot sequence
            window.location.assign("/"); // ensure a clean remount even if the chrome subtree is dead
        };
        const onKey = (e: KeyboardEvent) => {
            e.preventDefault();
            if (e.ctrlKey && e.altKey && (e.key === "Delete" || e.key === "Backspace")) {
                reboot();
                return;
            }
            // "press any key to continue": recoverable faults restore the desktop;
            // a fatal chrome crash leaves a dead subtree, so reboot instead.
            if (panic.recoverable) kernel.clearPanic();
            else reboot();
        };
        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [panic, kernel, navigate]);

    if (!panic) return null;

    return (
        <Screen onClick={() => kernel.clearPanic()}>
            <div style={{ textAlign: "center" }}>
                <Title>VortexOS</Title>
            </div>
            <p style={{ margin: "0 0 18px" }}>
                A fatal exception {panic.code} has occurred at {panic.address}. The current
                application will be terminated.
            </p>
            <p style={{ margin: "0 0 6px" }}>* &nbsp;Press any key to terminate the current application.</p>
            <p style={{ margin: "0 0 28px" }}>
                * &nbsp;Press CTRL+ALT+DEL again to restart your computer. You will
                <br />
                &nbsp;&nbsp;&nbsp;lose any unsaved information in all applications.
            </p>
            {panic.syscall && (
                <p style={{ margin: "0 0 28px", opacity: 0.7 }}>
                    Faulting syscall: {panic.syscall} — {panic.message}
                </p>
            )}
            <p style={{ textAlign: "center", margin: 0 }}>
                Press any key to continue <Cursor>_</Cursor>
            </p>
        </Screen>
    );
};

export default BSOD;
