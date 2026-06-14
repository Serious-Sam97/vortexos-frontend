import { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Frame } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import Monitor from "../ControlPanel/Monitor";
import { getVolume, isMuted, playChord, setMuted, setVolume } from "../../system/sounds";
import { getWinpopupMode, setWinpopupMode } from "../../system/notifications";
import { formatBytes, useStorageEstimate } from "../../system/storage";
import { openCredits, markEgg, useEggs, ALL_EGGS } from "../../system/easter";
import { getBootCount, uptimeMs, formatUptime } from "../../system/identity";
import { VortexLogo } from "../VortexLogo";
import { BUILTIN_APPS } from "../../kernel/bin";
import { useSettings, setSetting, type IconSize } from "../../system/settings";
import { useOSContext } from "../../contexts/OSContext";
import { useAuth } from "../../contexts/AuthContext";

const SoundApplet: React.FC = () => {
    const [vol, setVol] = useState(Math.round(getVolume() * 100));
    const [mute, setMute] = useState(isMuted());
    const [classic, setClassic] = useState(getWinpopupMode() === "classic");
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Sound</p>
            <Checkbox
                checked={mute}
                onChange={() => {
                    const m = !mute;
                    setMute(m);
                    setMuted(m);
                }}
                label="Mute all sounds"
            />
            <div style={{ marginTop: 14 }}>
                <label>Volume</label>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={vol}
                    disabled={mute}
                    onChange={(e) => {
                        const v = Number(e.target.value);
                        setVol(v);
                        setVolume(v / 100);
                    }}
                    onMouseUp={() => !mute && playChord()}
                    style={{ width: 220, display: "block", marginTop: 4 }}
                />
                <span>{vol}%</span>
            </div>

            <p style={{ fontWeight: "bold", margin: "18px 0 8px" }}>Notifications</p>
            <Checkbox
                checked={classic}
                onChange={() => {
                    const c = !classic;
                    setClassic(c);
                    setWinpopupMode(c ? "classic" : "toast");
                }}
                label="Use classic WinPopup window for messages"
            />
            <p style={{ fontSize: 11, color: "#555", marginTop: 6 }}>
                When off, incoming Net Send messages appear as toast notifications in the corner.
            </p>
        </div>
    );
};

const DateTimeApplet: React.FC = () => {
    const [now, setNow] = useState(new Date());
    const { dateFormat, clock24h } = useSettings();
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    const dateStr =
        dateFormat === "long"
            ? now.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })
            : now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString(undefined, { hour12: !clock24h });
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Date &amp; Time</p>
            <Frame variant="well" style={{ padding: 10, fontSize: 16 }}>
                <div style={{ fontWeight: "bold" }}>{dateStr}</div>
                <div style={{ fontFamily: "monospace", fontSize: 20, marginTop: 4 }}>{timeStr}</div>
            </Frame>
            <p style={{ marginTop: 10, fontSize: 12 }}>
                VortexOS follows your computer's clock. Change the date format and week start in{" "}
                <b>Regional Settings</b>.
            </p>
        </div>
    );
};

/* --------------------------------------------------------------- Regional */
const RegionalApplet: React.FC = () => {
    const s = useSettings();
    const sample = new Date();
    const preview =
        s.dateFormat === "long"
            ? sample.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })
            : sample.toLocaleDateString();
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Date</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <label style={{ fontWeight: "bold" }} htmlFor="date-format">Date format:</label>
                <select
                    id="date-format"
                    value={s.dateFormat}
                    onChange={(e) => setSetting("dateFormat", e.target.value as "short" | "long")}
                    style={{ fontFamily: "inherit", padding: 2 }}
                >
                    <option value="short">Short (e.g. 6/14/2026)</option>
                    <option value="long">Long (e.g. Sunday, June 14, 2026)</option>
                </select>
            </div>
            <Frame variant="well" style={{ padding: "6px 10px", fontSize: 13, display: "inline-block" }}>{preview}</Frame>

            <p style={{ fontWeight: "bold", margin: "18px 0 8px" }}>Calendar</p>
            <Checkbox
                checked={s.firstDayMonday}
                onChange={() => setSetting("firstDayMonday", !s.firstDayMonday)}
                label="Start the week on Monday"
            />
            <p style={{ fontSize: 12, color: "#444", marginTop: 10 }}>
                Affects the calendar in the Clock app and the system-tray fly-out.
            </p>
        </div>
    );
};

/* ------------------------------------------------------------------ Mouse */
const POINTER_SCHEMES: { file: string; name: string }[] = [
    { file: "arrow.cur", name: "Standard" },
    { file: "Beam.cur", name: "Text Select" },
    { file: "help_win95.cur", name: "Help" },
    { file: "Grabbing.cur", name: "Grabbing" },
    { file: "Cursor_3.cur", name: "Classic 1" },
    { file: "Cursor_5.cur", name: "Classic 2" },
    { file: "Cursor_7.cur", name: "Classic 3" },
    { file: "Cursor_9.cur", name: "Classic 4" },
    { file: "Cursor_11.cur", name: "Classic 5" },
    { file: "Cursor_14.cur", name: "Classic 6" },
];

const MouseApplet: React.FC = () => {
    const settings = useSettings();
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Pointer scheme</p>
            <p style={{ fontSize: 12, color: "#444", marginBottom: 12 }}>Pick a pointer — it applies instantly and is remembered.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {POINTER_SCHEMES.map((p) => {
                    const active = settings.pointerScheme === p.file;
                    return (
                        <div
                            key={p.file}
                            onClick={() => setSetting("pointerScheme", p.file)}
                            style={{
                                width: 92,
                                cursor: `url(/win-cursor/${p.file}), auto`,
                                textAlign: "center",
                                padding: 8,
                                background: active ? "#000080" : "#fff",
                                color: active ? "#fff" : "#000",
                                border: "2px solid",
                                borderColor: "#808080 #ffffff #ffffff #808080",
                            }}
                            title={p.name}
                        >
                            <div
                                style={{
                                    height: 40,
                                    background: `#c0c0c0 url(/win-cursor/${p.file}) center no-repeat`,
                                    border: "1px solid #808080",
                                    marginBottom: 6,
                                }}
                            />
                            <div style={{ fontSize: 11 }}>{p.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/* ----------------------------------------------------------- Taskbar & Clock */
const TaskbarApplet: React.FC = () => {
    const s = useSettings();
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Taskbar</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Checkbox
                    checked={s.showQuickLaunch}
                    onChange={() => setSetting("showQuickLaunch", !s.showQuickLaunch)}
                    label="Show the Quick Launch toolbar"
                />
                <Checkbox
                    checked={s.autoHideTaskbar}
                    onChange={() => setSetting("autoHideTaskbar", !s.autoHideTaskbar)}
                    label="Auto-hide the taskbar"
                />
            </div>

            <p style={{ fontWeight: "bold", margin: "18px 0 10px" }}>Clock</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Checkbox checked={s.showClock} onChange={() => setSetting("showClock", !s.showClock)} label="Show the clock" />
                <Checkbox
                    checked={s.clock24h}
                    onChange={() => setSetting("clock24h", !s.clock24h)}
                    label="Use 24-hour time"
                    disabled={!s.showClock}
                />
                <Checkbox
                    checked={s.clockSeconds}
                    onChange={() => setSetting("clockSeconds", !s.clockSeconds)}
                    label="Show seconds"
                    disabled={!s.showClock}
                />
            </div>
            <p style={{ fontSize: 12, color: "#444", marginTop: 14 }}>
                Taskbar and clock changes apply immediately.
            </p>
        </div>
    );
};

/* --------------------------------------------------------------- Desktop */
const DesktopApplet: React.FC = () => {
    const s = useSettings();
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Desktop icons</p>
            <Checkbox
                checked={s.showDesktopIcons}
                onChange={() => setSetting("showDesktopIcons", !s.showDesktopIcons)}
                label="Show icons on the desktop"
            />
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                <label style={{ fontWeight: "bold" }} htmlFor="icon-size">Icon size:</label>
                <select
                    id="icon-size"
                    value={s.desktopIconSize}
                    disabled={!s.showDesktopIcons}
                    onChange={(e) => setSetting("desktopIconSize", e.target.value as IconSize)}
                    style={{ fontFamily: "inherit", padding: 2 }}
                >
                    <option value="small">Small</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                </select>
            </div>

            <p style={{ fontWeight: "bold", margin: "18px 0 8px" }}>Open items</p>
            <Checkbox
                checked={s.singleClickOpen}
                onChange={() => setSetting("singleClickOpen", !s.singleClickOpen)}
                label="Single-click to open an icon (instead of double-click)"
            />
            <p style={{ fontSize: 12, color: "#444", marginTop: 14 }}>
                Changes apply to the desktop instantly.
            </p>
        </div>
    );
};

/* ----------------------------------------------------------- Accessibility */
const AccessibilityApplet: React.FC = () => {
    const s = useSettings();
    const { setTheme } = useOSContext();
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Display</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <label style={{ fontWeight: "bold" }} htmlFor="acc-scale">Interface size:</label>
                <select
                    id="acc-scale"
                    value={s.uiScale}
                    onChange={(e) => setSetting("uiScale", Number(e.target.value))}
                    style={{ fontFamily: "inherit", padding: 2 }}
                >
                    {[90, 100, 110, 125, 150].map((v) => (
                        <option key={v} value={v}>{v}%</option>
                    ))}
                </select>
                <span style={{ fontSize: 12, color: "#444" }}>Scales the whole desktop.</span>
            </div>
            <p style={{ fontWeight: "bold", margin: "4px 0 8px" }}>Motion</p>
            <Checkbox
                checked={s.reduceMotion}
                onChange={() => setSetting("reduceMotion", !s.reduceMotion)}
                label="Reduce motion (minimise animations & transitions)"
            />
            <p style={{ fontWeight: "bold", margin: "18px 0 8px" }}>Contrast</p>
            <Button onClick={() => setTheme("highContrast")}>Switch to High Contrast theme</Button>
            <p style={{ fontSize: 12, color: "#444", marginTop: 8 }}>
                You can change the theme back any time in Display ▸ Appearance.
            </p>
        </div>
    );
};

/* --------------------------------------------------------------- Accounts */
const AccountsApplet: React.FC = () => {
    const { username, logout } = useAuth();
    const boots = getBootCount();
    return (
        <div style={{ padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#fff",
                        background: "linear-gradient(135deg, #ff2d95, #00e5d0)",
                        textTransform: "uppercase",
                    }}
                >
                    {(username || "?").charAt(0)}
                </div>
                <div>
                    <p style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>{username || "Guest"}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: "#008000" }}>● Signed in</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: "#555" }}>{boots} session{boots === 1 ? "" : "s"} on this machine</p>
                </div>
            </div>
            <p style={{ fontSize: 12.5, marginBottom: 14 }}>
                Your files, desktop, shared folders and high scores are all private to this account. Sign out to switch users.
            </p>
            <Button onClick={logout}>Log Off {username}…</Button>
        </div>
    );
};

const SystemApplet: React.FC = () => {
    const storage = useStorageEstimate();
    const eggs = useEggs();
    // A ref (not state) so rapid clicks accumulate without stale-closure misses.
    const logoClicks = useRef(0);
    const tapLogo = () => {
        logoClicks.current += 1;
        if (logoClicks.current >= 5) {
            logoClicks.current = 0;
            markEgg("about");
            openCredits();
        }
    };
    const nav = navigator as Navigator & { deviceMemory?: number };

    // Live session uptime, ticking once a second.
    const [, tick] = useState(0);
    useEffect(() => {
        const iv = setInterval(() => tick((n) => n + 1), 1000);
        return () => clearInterval(iv);
    }, []);

    const stats: [string, string][] = [
        ["Uptime", formatUptime(uptimeMs())],
        ["Boots", String(getBootCount())],
        ["Apps", String(BUILTIN_APPS.length)],
    ];
    const specs: [string, string][] = [
        ["Processor", `${nav.hardwareConcurrency ?? "?"} virtual cores`],
        ["Memory", nav.deviceMemory ? `${nav.deviceMemory} GB RAM` : "—"],
        ["Display", `${window.screen.width} × ${window.screen.height}`],
        ["Disk (OPFS)", storage?.supported ? `${formatBytes(storage.usage)} of ${formatBytes(storage.quota)}` : "—"],
        ["Kernel", "VortexOS microkernel · syscall ABI"],
        ["Filesystem", "MemFS + OPFS · /dev /proc /bin /mnt"],
    ];
    const allFound = eggs.length === ALL_EGGS.length;

    return (
        <div style={{ padding: 18, lineHeight: 1.55, overflow: "auto" }}>
            {/* signature header — the animated portal + gradient wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
                <div onClick={tapLogo} style={{ cursor: "pointer", userSelect: "none", flexShrink: 0 }} title="VortexOS">
                    <VortexLogo size={62} vapor />
                </div>
                <div>
                    <p
                        style={{
                            fontSize: 28,
                            fontWeight: 800,
                            letterSpacing: 1,
                            margin: 0,
                            background: "linear-gradient(90deg, #d6177f, #7a2fd6, #0aa89a)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        VortexOS
                    </p>
                    <p style={{ margin: 0, fontSize: 13 }}>Version 2.0 · Experimental Edition</p>
                    <p style={{ margin: "2px 0 0", fontSize: 13, color: "#a0117a", fontWeight: "bold" }}>
                        a creation by Serious Sam
                    </p>
                </div>
            </div>

            {/* live stat cards */}
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                {stats.map(([label, value]) => (
                    <div
                        key={label}
                        style={{
                            flex: 1,
                            textAlign: "center",
                            background: "#fff",
                            border: "2px solid",
                            borderColor: "#808080 #ffffff #ffffff #808080",
                            padding: "7px 4px",
                        }}
                    >
                        <div style={{ fontSize: 18, fontWeight: "bold", color: "#000080", fontVariantNumeric: "tabular-nums" }}>
                            {value}
                        </div>
                        <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* the build story / mythology */}
            <p style={{ fontSize: 12.5, margin: "0 0 12px" }}>
                I didn't theme a desktop — I <b>built an operating system</b>. Under the nostalgia is a real
                microkernel with a syscall ABI, a virtual filesystem, a process scheduler, a command shell, a window
                manager and multi-user networking. Every window, every app, every sound — hand-made, from scratch,
                in a browser tab. No emulator. No clone. It just <i>looks</i> like 1995.
            </p>

            <table style={{ fontSize: 13, borderCollapse: "collapse", marginBottom: 6 }}>
                <tbody>
                    {specs.map(([k, v]) => (
                        <tr key={k}>
                            <td style={{ fontWeight: "bold", paddingRight: 16, verticalAlign: "top", whiteSpace: "nowrap" }}>{k}:</td>
                            <td>{v}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
                <button
                    onClick={openCredits}
                    style={{
                        padding: "5px 16px",
                        fontSize: 13,
                        background: "#c0c0c0",
                        border: "2px solid",
                        borderColor: "#ffffff #000000 #000000 #ffffff",
                        cursor: "pointer",
                    }}
                >
                    🎬 Roll the Credits
                </button>
                <span style={{ fontSize: 11, color: allFound ? "#008000" : "#888", fontWeight: allFound ? "bold" : "normal" }}>
                    {allFound ? "🌀 " : ""}Easter eggs found: {eggs.length} / {ALL_EGGS.length}
                </span>
            </div>
        </div>
    );
};

const APPLETS = [
    { name: "Display", icon: "/monitor.png", component: Monitor },
    { name: "Desktop", icon: "/desktop.svg", component: DesktopApplet },
    { name: "Mouse", icon: "/mouse.svg", component: MouseApplet },
    { name: "Sounds", icon: "/sound.svg", component: SoundApplet },
    { name: "Taskbar & Clock", icon: "/taskbar.svg", component: TaskbarApplet },
    { name: "Accessibility", icon: "/accessibility.svg", component: AccessibilityApplet },
    { name: "Date/Time", icon: "/clock.svg", component: DateTimeApplet },
    { name: "Regional", icon: "/regional.svg", component: RegionalApplet },
    { name: "Accounts", icon: "/users.svg", component: AccountsApplet },
    { name: "About Vortex", icon: "/w95.png", component: SystemApplet },
];

const ControlPanel: React.FC = () => {
    const [active, setActive] = useState<(typeof APPLETS)[number] | null>(null);

    return (
        <AppShell $minW={560} $minH={380}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem $disabled={!active} onMouseDown={(e) => { e.preventDefault(); setActive(null); }}>Close Applet</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Control Panel — VortexOS</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={() => setActive(null)} disabled={!active}>◀ Back</ToolButton>
                <ToolSep />
                <span style={{ fontSize: 12, padding: "0 4px" }}>{active ? active.name : "Control Panel"}</span>
            </Toolbar>
            <AppBody style={{ padding: 3 }}>
                <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}>
                    {active ? (
                        <active.component />
                    ) : (
                        <div style={{ display: "flex", flexWrap: "wrap", padding: 10 }}>
                            {APPLETS.map((a) => (
                                <div
                                    key={a.name}
                                    onDoubleClick={() => setActive(a)}
                                    title="Double-click to open"
                                    style={{ cursor: "pointer", width: 96, padding: 12, display: "flex", flexDirection: "column", alignItems: "center" }}
                                >
                                    <img src={a.icon} alt={a.name} style={{ height: 44 }} />
                                    <p style={{ textAlign: "center" }}>{a.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{active ? active.name : "Control Panel"}</StatusPanel>
                <StatusPanel>{APPLETS.length} object(s)</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default ControlPanel;
