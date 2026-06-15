import { useEraId, setEraId, ERA_ORDER, eraOf, triggerWarp, type EraId, type EraPack } from "../../system/eras";
import { useOSContext } from "../../contexts/OSContext";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";

/**
 * A faithful live mini-mock of an era — a tiny desktop with a window (in that era's
 * title chrome, font and corner rounding) and a taskbar (with its Start button /
 * orb and glass). This is what makes the Time Machine a real preview, not a list.
 */
const EraMock: React.FC<{ era: EraPack; h?: number }> = ({ era, h = 80 }) => {
    const c = era.chrome;
    const rounded = c.titleRadius !== "0";
    const orb = c.startButtonRadius === "50%";
    return (
        <div style={{ borderRadius: 5, overflow: "hidden", border: "1px solid rgba(0,0,0,0.25)" }}>
            <div style={{ height: h, background: c.desktop, position: "relative", padding: 9, boxSizing: "border-box" }}>
                <div
                    style={{
                        width: "72%",
                        background: c.face,
                        borderRadius: rounded ? "6px 6px 0 0" : 0,
                        boxShadow: "2px 3px 9px rgba(0,0,0,0.32)",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            background: c.titleActive,
                            color: c.titleText,
                            fontFamily: c.font,
                            fontSize: 10,
                            fontWeight: "bold",
                            padding: "3px 6px",
                            backdropFilter: c.titleBlur ?? "none",
                            WebkitBackdropFilter: c.titleBlur ?? "none",
                        }}
                    >
                        {era.name}
                    </div>
                    <div style={{ padding: "7px 8px", fontFamily: c.font, fontSize: 10, color: c.faceText }}>
                        The quick brown fox.
                    </div>
                </div>
            </div>
            {/* mock taskbar */}
            <div
                style={{
                    height: 22,
                    background: c.taskbar,
                    backdropFilter: c.taskbarBlur ?? "none",
                    WebkitBackdropFilter: c.taskbarBlur ?? "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 5px",
                    gap: 4,
                }}
            >
                <div
                    style={{
                        width: orb ? 16 : 30,
                        height: 16,
                        borderRadius: orb ? "50%" : c.startButton ? c.startButtonRadius || "0 8px 8px 0" : 0,
                        background: c.startButton ?? "#c0c0c0",
                        border: c.startButton ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(0,0,0,0.3)",
                        boxShadow: orb ? "0 0 6px rgba(140,200,255,0.6)" : "none",
                    }}
                />
            </div>
        </div>
    );
};

/**
 * The Time Machine picker — a timeline of every era as a live preview card. Click to
 * travel: the warp transition fires, the new era's chrome paints across the whole OS,
 * and (for the Vortex era) the vaporwave overlay turns on.
 */
export const TimeMachinePicker: React.FC = () => {
    const activeId = useEraId();
    const { sssStyle, toggleSssStyle } = useOSContext();

    const travel = (id: EraId) => {
        if (id === activeId) return;
        triggerWarp();
        // Swap the era mid-warp so the change lands behind the white flash.
        window.setTimeout(() => {
            setEraId(id);
            const wantsVapor = id === "vortex";
            if (wantsVapor !== sssStyle) toggleSssStyle();
        }, 320);
    };

    return (
        <div style={{ padding: 14 }}>
            <p style={{ fontWeight: "bold", margin: "0 0 2px", fontSize: 14 }}>🌀 The Time Machine</p>
            <p style={{ fontSize: 11, color: "#444", margin: "0 0 14px" }}>
                Travel VortexOS through the ages — the whole desktop, sounds and boot change to match. Click an era to go.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
                {ERA_ORDER.map((id) => {
                    const era = eraOf(id);
                    const selected = id === activeId;
                    return (
                        <button
                            key={id}
                            onClick={() => travel(id)}
                            title={era.blurb}
                            style={{
                                textAlign: "left",
                                padding: 5,
                                cursor: "pointer",
                                background: selected ? "#000080" : "#f4f4f4",
                                color: selected ? "#fff" : "#000",
                                border: "2px solid",
                                borderColor: selected ? "#000080 #000080 #000080 #000080" : "#ffffff #808080 #808080 #ffffff",
                                outline: selected ? "1px dotted #88aaff" : "none",
                                outlineOffset: 2,
                            }}
                        >
                            <EraMock era={era} />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
                                <span style={{ fontWeight: "bold", fontSize: 12 }}>
                                    {selected ? "● " : ""}
                                    {era.name}
                                </span>
                                <span style={{ fontSize: 10, opacity: 0.85 }}>{era.year}</span>
                            </div>
                            <div style={{ fontSize: 10, opacity: 0.8, marginTop: 1 }}>{era.blurb}</div>
                        </button>
                    );
                })}
            </div>
            <p style={{ fontSize: 11, color: "#888", marginTop: 14 }}>
                From the MS-DOS prompt to the Vortex future — {ERA_ORDER.length} eras, each a complete look, sound &amp; boot. ⏳
            </p>
        </div>
    );
};

/** The standalone Time Machine app. */
const TimeMachine: React.FC = () => {
    const activeId = useEraId();
    return (
        <AppShell $minW={560} $minH={300}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem $disabled>Time Machine — VortexOS</MenuItem>
                </Menu>
                <Menu label="Help">
                    <MenuItem $disabled>Click an era to travel through time</MenuItem>
                </Menu>
            </MenuBar>
            <AppBody style={{ padding: 0 }}>
                {/* Definite max-height so the era grid scrolls inside a comfortable
                    window instead of growing the window past the taskbar. */}
                <div style={{ flex: 1, minHeight: 0, maxHeight: "min(500px, calc(100vh - 150px))", overflow: "auto", background: "#fff" }}>
                    <TimeMachinePicker />
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>Now: {eraOf(activeId).name}</StatusPanel>
                <StatusPanel>{ERA_ORDER.length} eras</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default TimeMachine;
