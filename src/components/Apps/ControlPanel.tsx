import { useEffect, useState } from "react";
import { Button, Checkbox, Frame, Toolbar, WindowContent } from "react95";
import Monitor from "../ControlPanel/Monitor";
import { getVolume, isMuted, playChord, setMuted, setVolume } from "../../system/sounds";

const SoundApplet: React.FC = () => {
    const [vol, setVol] = useState(Math.round(getVolume() * 100));
    const [mute, setMute] = useState(isMuted());
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

const SystemApplet: React.FC = () => (
    <div style={{ padding: 16, lineHeight: 1.7 }}>
        <p style={{ fontWeight: "bold", marginBottom: 10 }}>System</p>
        <p>VortexOS 2.0</p>
        <p>Experimental Windows 95 simulation</p>
        <p>Microkernel build — VFS, shell, window manager</p>
        <p>Registered to: Serious Sam</p>
    </div>
);

const APPLETS = [
    { name: "Display", icon: "/monitor.png", component: Monitor },
    { name: "Sounds", icon: "/sound.svg", component: SoundApplet },
    { name: "Date/Time", icon: "/clock.svg", component: DateTimeApplet },
    { name: "System", icon: "/my-computer.png", component: SystemApplet },
];

const ControlPanel: React.FC = () => {
    const [active, setActive] = useState<(typeof APPLETS)[number] | null>(null);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 560, minHeight: 380 }}>
            <Toolbar>
                {active && (
                    <Button variant="menu" size="sm" onClick={() => setActive(null)}>
                        ◀ Back
                    </Button>
                )}
                <span style={{ marginLeft: 8, alignSelf: "center" }}>{active ? active.name : "Control Panel"}</span>
            </Toolbar>
            <WindowContent style={{ flex: 1, minHeight: 0, overflow: "auto", backgroundColor: "white", border: "3px solid gray", borderRadius: 5 }}>
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
            </WindowContent>
            <Frame variant="well" className="footer">
                {active ? active.name : `${APPLETS.length} object(s)`}
            </Frame>
        </div>
    );
};

export default ControlPanel;
