import { useEffect, useReducer } from "react";
import { AppShell, StatusBar, StatusPanel } from "../chrome/AppChrome";
import SharedCursorLayer from "../SharedCursorLayer";
import { Avatar } from "../Avatar";
import { getPresence, subscribeChat } from "../../system/chat";
import { useAuth } from "../../contexts/AuthContext";

/**
 * The Vortex Lounge — a shared hangout room. Everyone who opens it is "in" the
 * lounge and sees the others' live cursors gliding across the same space
 * (via SharedCursorLayer). A first, playful home for the Connected Desktop.
 */
const ROOM = "lounge";

const Lounge: React.FC = () => {
    const { username } = useAuth();
    const [, force] = useReducer((x) => x + 1, 0);
    useEffect(() => subscribeChat(force), []);
    const present = getPresence();

    return (
        <AppShell $minW={440} $minH={320}>
            <div
                style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#1a0533",
                    backgroundImage:
                        "linear-gradient(180deg, #2a0a52 0%, #6a1b6a 55%, #00231f 100%)," +
                        "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 28px)," +
                        "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 28px)",
                }}
            >
                {/* who's in the lounge */}
                <div style={{ position: "absolute", top: 10, left: 12, right: 12, display: "flex", gap: 8, flexWrap: "wrap", zIndex: 60, pointerEvents: "none" }}>
                    {present.map((u) => (
                        <span key={u.name} title={`${u.name}${u.name === username ? " (you)" : ""}`}>
                            <Avatar name={u.name} size={30} status={u.status} />
                        </span>
                    ))}
                </div>

                {/* centrepiece */}
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", textAlign: "center", pointerEvents: "none", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
                    <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 1, color: "#ffd9f4" }}>
                        The Vortex Lounge
                    </div>
                    <div style={{ marginTop: 8, fontSize: 13, opacity: 0.9 }}>
                        Move your cursor — everyone here sees it live. 🌀
                    </div>
                </div>

                <SharedCursorLayer room={ROOM} />
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>{present.length === 1 ? "Just you in the Lounge" : `${present.length} people in the Lounge`}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Lounge;
