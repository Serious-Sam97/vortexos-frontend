import { useEffect, useState } from "react";
import { Checkbox, Frame } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import Monitor from "../ControlPanel/Monitor";
import { getVolume, isMuted, playChord, setMuted, setVolume } from "../../system/sounds";
import { getWinpopupMode, setWinpopupMode } from "../../system/notifications";
import { formatBytes, useStorageEstimate } from "../../system/storage";

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
    const nav = navigator as Navigator & { deviceMemory?: number };
    const specs: [string, string][] = [
        ["Processor", `${nav.hardwareConcurrency ?? "?"} virtual cores`],
        ["Memory", nav.deviceMemory ? `${nav.deviceMemory} GB RAM` : "—"],
        ["Display", `${window.screen.width} × ${window.screen.height}`],
        ["Disk (OPFS)", storage?.supported ? `${formatBytes(storage.usage)} of ${formatBytes(storage.quota)}` : "—"],
        ["Kernel", "VortexOS microkernel · syscall ABI"],
        ["Filesystem", "MemFS + OPFS · /dev /proc /bin /mnt"],
    ];
    return (
        <div style={{ padding: 18, lineHeight: 1.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid #808080", paddingBottom: 12, marginBottom: 12 }}>
                <img src="/w95.png" alt="" style={{ width: 48, height: 48 }} />
                <div>
                    <p style={{ fontSize: 22, fontWeight: "bold", margin: 0 }}>VortexOS</p>
                    <p style={{ margin: 0, fontSize: 13 }}>Version 2.0 · Experimental Edition</p>
                    <p style={{ margin: 0, fontSize: 12, color: "#000080", fontWeight: "bold" }}>a creation by Serious Sam</p>
                </div>
            </div>
            <table style={{ fontSize: 13, borderCollapse: "collapse" }}>
                <tbody>
                    {specs.map(([k, v]) => (
                        <tr key={k}>
                            <td style={{ fontWeight: "bold", paddingRight: 16, verticalAlign: "top", whiteSpace: "nowrap" }}>{k}:</td>
                            <td>{v}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ fontSize: 11, color: "#555", marginTop: 14 }}>
                Built from scratch — a real microkernel OS in the browser. No emulator, no clone:
                it just <i>looks</i> like 1995.
            </p>
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
