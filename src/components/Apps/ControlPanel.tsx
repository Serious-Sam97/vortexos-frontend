import { useEffect, useRef, useState } from "react";
import { Checkbox, Frame } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import Monitor from "../ControlPanel/Monitor";
import { getVolume, isMuted, playChord, setMuted, setVolume } from "../../system/sounds";
import { getWinpopupMode, setWinpopupMode } from "../../system/notifications";
import { formatBytes, useStorageEstimate } from "../../system/storage";
import { openCredits, markEgg, useEggs, ALL_EGGS } from "../../system/easter";
import { getBootCount, uptimeMs, formatUptime } from "../../system/identity";
import { VortexLogo } from "../VortexLogo";
import { BUILTIN_APPS } from "../../kernel/bin";

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
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <div style={{ padding: 16 }}>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Date/Time</p>
            <Frame variant="well" style={{ padding: 10, fontSize: 18, fontFamily: "monospace" }}>
                {now.toLocaleString()}
            </Frame>
            <p style={{ marginTop: 10, fontSize: 12 }}>VortexOS follows your computer's clock.</p>
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
    { name: "Sounds", icon: "/sound.svg", component: SoundApplet },
    { name: "Date/Time", icon: "/clock.svg", component: DateTimeApplet },
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
