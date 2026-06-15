import { useEffect } from "react";
import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import LoginScreen from "../components/Login/LoginScreen";
import ChatNotifier from "../components/ChatNotifier";
import MailNotifier from "../components/MailNotifier";
import ReminderService from "../components/ReminderService";
import ToastHost from "../components/ToastHost";
import BSOD from "../components/BSOD";
import OSErrorBoundary from "../components/OSErrorBoundary";
import CommandPalette from "../components/CommandPalette";
import RunDialog from "../components/RunDialog";
import AltTabSwitcher from "../components/AltTabSwitcher";
import SystemFeedback from "../components/SystemFeedback";
import Screensaver from "../components/Screensaver";
import WelcomeCenter from "../components/WelcomeCenter";
import TipOfTheDay from "../components/TipOfTheDay";
import VortexAssistant from "../components/VortexAssistant";
import EasterEggs from "../components/EasterEggs";
import SettingsApplier from "../components/SettingsApplier";
import EraApplier from "../components/EraApplier";
import TimeWarp from "../components/TimeWarp";
import OnScreenKeyboard from "../components/OnScreenKeyboard";
import AriaLive from "../components/AriaLive";
import PresenceReporter from "../components/PresenceReporter";
import { useOSContext } from "../contexts/OSContext";
import { useAuth } from "../contexts/AuthContext";
import { useReloadCloud, useKernel } from "../kernel/react/KernelProvider";
import { connectChat, disconnectChat } from "../system/chat";
import { reloadEra } from "../system/eras";
import { syncUserApps } from "../system/userApps";

const Vortex: React.FC = () => {
    const { cursor, crt, busy, reloadWallpaper } = useOSContext();
    const { isAuthenticated } = useAuth();
    const reloadCloud = useReloadCloud();
    const kernel = useKernel();

    // Load (or switch to) the signed-in user's cloud drive + wallpaper once authenticated.
    useEffect(() => {
        if (isAuthenticated) {
            void reloadCloud();
            reloadWallpaper();
            reloadEra(); // load this user's chosen era
            syncUserApps(kernel.registry); // register this user's installed apps
        }
        // Runs on sign-in/user-switch; the callbacks aren't memoised so they're left out.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

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
            <OSErrorBoundary>
                <Desktop />
                <WindowManager />
                <WMenu />
                <ChatNotifier />
                <MailNotifier />
                <ReminderService />
                <ToastHost />
                <AltTabSwitcher />
                <SystemFeedback />
                <Screensaver />
                <CommandPalette />
                <RunDialog />
                <WelcomeCenter />
                <TipOfTheDay />
                <VortexAssistant />
                <EasterEggs />
                <SettingsApplier />
                <EraApplier />
                <TimeWarp />
                <OnScreenKeyboard />
                <AriaLive />
                <PresenceReporter />
            </OSErrorBoundary>

            {/* Rendered outside the boundary so it still shows if the chrome subtree is dead. */}
            <BSOD />

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
