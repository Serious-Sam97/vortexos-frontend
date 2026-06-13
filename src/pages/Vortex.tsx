import { useEffect } from "react";
import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import LoginScreen from "../components/Login/LoginScreen";
import ChatNotifier from "../components/ChatNotifier";
import ToastHost from "../components/ToastHost";
import AltTabSwitcher from "../components/AltTabSwitcher";
import SystemFeedback from "../components/SystemFeedback";
import Screensaver from "../components/Screensaver";
import { useOSContext } from "../contexts/OSContext";
import { useAuth } from "../contexts/AuthContext";
import { useReloadCloud } from "../kernel/react/KernelProvider";
import { connectChat, disconnectChat } from "../system/chat";

const Vortex: React.FC = () => {
    const { cursor, crt, busy } = useOSContext();
    const { isAuthenticated } = useAuth();
    const reloadCloud = useReloadCloud();

    // Load (or switch to) the signed-in user's cloud drive once authenticated.
    useEffect(() => {
        if (isAuthenticated) void reloadCloud();
    }, [isAuthenticated, reloadCloud]);

    // Connect to the Net Send / presence WebSocket while signed in.
    useEffect(() => {
        if (!isAuthenticated) return;
        connectChat();
        return () => disconnectChat();
    }, [isAuthenticated]);

    // The desktop is gated behind a sign-in — no session, no Vortex.
    if (!isAuthenticated) return <LoginScreen />;

    return (
        <div
            style={{ position: "fixed", inset: 0, overflow: "hidden", cursor: busy ? "url(/win-cursor/loading.cur), wait" : cursor }}
            onContextMenu={(e) => e.preventDefault()} // suppress the browser menu; the desktop shows its own
        >
            <Desktop />
            <WindowManager />
            <WMenu />
            <ChatNotifier />
            <ToastHost />
            <AltTabSwitcher />
            <SystemFeedback />
            <Screensaver />

            {crt && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        pointerEvents: "none",
                        zIndex: 1000000,
                        background:
                            "repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
                        mixBlendMode: "multiply",
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 150px rgba(0,0,0,0.55)" }} />
                </div>
            )}
        </div>
    );
};

export default Vortex;
