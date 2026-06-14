import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Slider, Checkbox } from "react95";
import { getVolume, setVolume, isMuted, setMuted, subscribeSound, playClick } from "../system/sounds";
import { getOnline, isChatConnected, subscribeChat } from "../system/chat";
import { subscribeNotifications, getNotificationHistory, clearHistory, Toast } from "../system/notifications";
import { useSettings } from "../system/settings";

const TASKBAR_HEIGHT = 40;

const Tray = styled.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;

const IconButton = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
`;

const Popup = styled.div`
    position: fixed;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 100001;
    padding: 8px;
    font-size: 12px;
`;

/** A small speaker glyph; an X appears when muted, sound waves otherwise. */
function SpeakerIcon({ muted }: { muted: boolean }) {
    return (
        <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden>
            <path d="M2 6.5h3l4-3v11l-4-3H2z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
            {muted ? (
                <path d="M12 6l4 6M16 6l-4 6" stroke="#a00" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
                <>
                    <path d="M11.5 6.5a3.5 3.5 0 0 1 0 5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M13.5 5a6 6 0 0 1 0 8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
}

/** A small bell glyph for the notification center. */
function BellIcon() {
    return (
        <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden>
            <path d="M9 2.5a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 9 2.5z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
            <path d="M7.5 13.5a1.5 1.5 0 0 0 3 0" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
    );
}

/** Two little monitors — lit (green) when the presence socket is connected. */
function NetworkIcon({ connected }: { connected: boolean }) {
    const screen = connected ? "#00c000" : "#5a5a5a";
    return (
        <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden>
            <rect x="1" y="3" width="9" height="6" rx="0.5" fill={screen} stroke="#000" strokeWidth="0.8" />
            <rect x="8" y="9" width="9" height="6" rx="0.5" fill={screen} stroke="#000" strokeWidth="0.8" />
            <path d="M5.5 9.5v1.5h7" fill="none" stroke="#000" strokeWidth="0.8" />
        </svg>
    );
}

function useNow(intervalMs: number): Date {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), intervalMs);
        return () => clearInterval(id);
    }, [intervalMs]);
    return now;
}

function formatTime(now: Date, opts: { clock24h: boolean; clockSeconds: boolean }): string {
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    if (opts.clock24h) {
        const hh = String(now.getHours()).padStart(2, "0");
        return opts.clockSeconds ? `${hh}:${m}:${s}` : `${hh}:${m}`;
    }
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const h = now.getHours() % 12 || 12;
    return opts.clockSeconds ? `${h}:${m}:${s} ${ampm}` : `${h}:${m} ${ampm}`;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW_SUN = ["S", "M", "T", "W", "T", "F", "S"];
const DOW_MON = ["M", "T", "W", "T", "F", "S", "S"];

function Calendar({ today, firstDayMonday }: { today: Date; firstDayMonday: boolean }) {
    const year = today.getFullYear();
    const month = today.getMonth();
    const rawFirst = new Date(year, month, 1).getDay(); // 0 = Sunday
    const first = firstDayMonday ? (rawFirst + 6) % 7 : rawFirst;
    const days = new Date(year, month + 1, 0).getDate();
    const DOW = firstDayMonday ? DOW_MON : DOW_SUN;
    const cells: (number | null)[] = [];
    for (let i = 0; i < first; i++) cells.push(null);
    for (let d = 1; d <= days; d++) cells.push(d);
    return (
        <div style={{ width: 196 }}>
            <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: 6 }}>
                {MONTHS[month]} {year}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, textAlign: "center" }}>
                {DOW.map((d, i) => (
                    <div key={i} style={{ fontWeight: "bold", color: "#000080", fontSize: 11 }}>
                        {d}
                    </div>
                ))}
                {cells.map((d, i) => {
                    const isToday = d === today.getDate();
                    return (
                        <div
                            key={i}
                            style={{
                                padding: "2px 0",
                                fontSize: 11,
                                background: isToday ? "#000080" : "transparent",
                                color: isToday ? "#fff" : "#000",
                            }}
                        >
                            {d ?? ""}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

type Open = "volume" | "clock" | "notifications" | null;

const TYPE_COLOR: Record<string, string> = { info: "#000080", warning: "#806000", error: "#800000" };

function NotificationCenter({ items }: { items: Toast[] }) {
    return (
        <div style={{ width: 260 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontWeight: "bold" }}>Notifications</span>
                {items.length > 0 && (
                    <button
                        onClick={() => clearHistory()}
                        style={{ fontSize: 11, cursor: "pointer", border: "1px solid #808080", background: "#c0c0c0" }}
                    >
                        Clear
                    </button>
                )}
            </div>
            <div style={{ maxHeight: 220, overflowY: "auto", background: "#fff", border: "1px solid #808080", borderColor: "#808080 #fff #fff #808080" }}>
                {items.length === 0 ? (
                    <div style={{ padding: 12, color: "#666", textAlign: "center" }}>No notifications</div>
                ) : (
                    [...items].reverse().map((t) => (
                        <div key={t.id} style={{ padding: "6px 8px", borderBottom: "1px solid #e0e0e0", display: "flex", gap: 6 }}>
                            {t.icon && <img src={t.icon} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />}
                            <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: "bold", color: TYPE_COLOR[t.type] ?? "#000" }}>{t.title}</div>
                                <div style={{ color: "#000", wordBreak: "break-word" }}>{t.body}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

const SystemTray: React.FC<{ username?: string | null }> = ({ username }) => {
    const settings = useSettings();
    const now = useNow(settings.clockSeconds ? 1000 : 10000);
    const [open, setOpen] = useState<Open>(null);
    const trayRef = useRef<HTMLDivElement>(null);

    const sound = useSyncExternalStore(subscribeSound, () => `${getVolume()}|${isMuted()}`);
    void sound; // re-render trigger; values read live below
    const volume = getVolume();
    const muted = isMuted();

    const net = useSyncExternalStore(subscribeChat, () => `${isChatConnected()}|${getOnline().length}`);
    void net;
    const connected = isChatConnected();
    const onlineCount = getOnline().length;

    const notes = useSyncExternalStore(subscribeNotifications, () => String(getNotificationHistory().length));
    void notes;
    const history = getNotificationHistory();

    // Close any popup on an outside click or Escape.
    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (!trayRef.current?.contains(e.target as Node)) setOpen(null);
        };
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const toggle = (which: Open) => {
        playClick();
        setOpen((o) => (o === which ? null : which));
    };

    return (
        <>
            <Tray ref={trayRef} className="tray-clock">
                <IconButton
                    title={connected ? `Network: connected (${onlineCount} online)` : "Network: offline"}
                    onClick={() => {
                        playClick();
                        // status only — surface the count via the title; no popup needed
                        setOpen(null);
                    }}
                >
                    <NetworkIcon connected={connected} />
                </IconButton>
                <IconButton title={muted ? "Volume: muted" : `Volume: ${Math.round(volume * 100)}%`} onClick={() => toggle("volume")}>
                    <SpeakerIcon muted={muted} />
                </IconButton>
                <IconButton title={`Notifications (${history.length})`} onClick={() => toggle("notifications")}>
                    <BellIcon />
                </IconButton>
                {username && <span style={{ opacity: 0.85 }}>{username}</span>}
                {settings.showClock && (
                    <span style={{ cursor: "pointer" }} onClick={() => toggle("clock")}>
                        {formatTime(now, settings)}
                    </span>
                )}
            </Tray>

            {open === "volume" &&
                createPortal(
                    <Popup style={{ right: 8, bottom: TASKBAR_HEIGHT + 6, width: 96 }} onMouseDown={(e) => e.stopPropagation()}>
                        <div style={{ textAlign: "center", marginBottom: 4 }}>Volume</div>
                        <div style={{ display: "flex", justifyContent: "center", height: 120 }}>
                            <Slider
                                orientation="vertical"
                                size="120px"
                                min={0}
                                max={100}
                                step={1}
                                value={Math.round(volume * 100)}
                                onChange={(v) => setVolume(v / 100)}
                            />
                        </div>
                        <div style={{ marginTop: 6 }}>
                            <Checkbox checked={muted} onChange={() => setMuted(!muted)} label="Mute" />
                        </div>
                    </Popup>,
                    document.body,
                )}

            {open === "clock" &&
                createPortal(
                    <Popup style={{ right: 8, bottom: TASKBAR_HEIGHT + 6 }} onMouseDown={(e) => e.stopPropagation()}>
                        <Calendar today={now} firstDayMonday={settings.firstDayMonday} />
                    </Popup>,
                    document.body,
                )}

            {open === "notifications" &&
                createPortal(
                    <Popup style={{ right: 8, bottom: TASKBAR_HEIGHT + 6 }} onMouseDown={(e) => e.stopPropagation()}>
                        <NotificationCenter items={history} />
                    </Popup>,
                    document.body,
                )}
        </>
    );
};

export default SystemTray;
