import { useState } from "react";
import { Button, Checkbox, Monitor as React95Monitor } from "react95";
import styled from "styled-components";
import { useOSContext } from "../../contexts/OSContext";
import { THEMES } from "../../system/themes";
import { previewSaver, SAVERS, setSaverSettings, useSaverSettings } from "../../system/screensaver";
import { useSettings, setSetting } from "../../system/settings";

/* ------------------------------------------------------------ tab chrome */
type TabKey = "background" | "appearance" | "screensaver" | "effects";
const TABS: { key: TabKey; label: string }[] = [
    { key: "background", label: "Background" },
    { key: "appearance", label: "Appearance" },
    { key: "screensaver", label: "Screen Saver" },
    { key: "effects", label: "Effects" },
];

const TabRow = styled.div`
    display: flex;
    gap: 3px;
    padding: 8px 10px 0;
`;
const TabBtn = styled.button<{ $active: boolean }>`
    padding: 5px 16px;
    font-size: 13px;
    cursor: pointer;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 ${({ $active }) => ($active ? "#c0c0c0" : "#808080")} #ffffff;
    border-radius: 5px 5px 0 0;
    margin-bottom: -2px;
    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
    position: relative;
    z-index: ${({ $active }) => ($active ? 2 : 1)};
`;
const Page = styled.div`
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    margin: 0 10px 10px;
    padding: 16px;
    background: #c0c0c0;
`;
const Section = styled.p`
    font-weight: bold;
    margin: 0 0 8px;
`;
const Note = styled.p`
    font-size: 12px;
    color: #444;
    margin: 6px 0 0;
`;

/* ------------------------------------------------------- wallpaper gallery */
const WALLPAPER_GROUPS = [
    { name: "Vaporwave", count: 7, prefix: "vw", ext: "jpg" },
    { name: "Windows XP", count: 5, prefix: "xp", ext: "jpg" },
    { name: "Windows 7", count: 4, prefix: "7", ext: "jpg" },
    { name: "Games", count: 1, prefix: "games", ext: "png" },
];
const SOLID_COLORS = ["#008080", "#000080", "#000000", "#1a0033", "#2e0d4f", "#004b40", "#800000", "#3a3a3a"];
const ACCENT_COLORS = ["#000080", "#1084d0", "#a0117a", "#0a8043", "#b8860b", "#800000", "#5a2d8c", "#c0392b", "#0d7377", "#000000"];

const Thumb = styled.div<{ $selected: boolean }>`
    width: 104px;
    height: 66px;
    flex-shrink: 0;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    border: 3px solid ${({ $selected }) => ($selected ? "#000080" : "transparent")};
    box-shadow: ${({ $selected }) => ($selected ? "0 0 0 1px #1084d0" : "inset 0 0 0 1px #00000033")};
    &:hover {
        border-color: #1084d0;
    }
`;
const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;
const Swatch = styled.div<{ $selected: boolean }>`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 3px solid ${({ $selected }) => ($selected ? "#000080" : "#808080")};
    &:hover {
        border-color: #1084d0;
    }
`;

const Monitor: React.FC = () => {
    const { changeWallpaper, wallpaper, crt, toggleCrt, theme, setTheme, sssStyle, toggleSssStyle } = useOSContext();
    const saver = useSaverSettings();
    const settings = useSettings();
    const [tab, setTab] = useState<TabKey>("background");

    const [sel, setSel] = useState<string>(wallpaper.image || "");
    const [selType, setSelType] = useState<number>(wallpaper.type || 1);

    const previewStyle = (() => {
        if (!sel) return { background: sssStyle ? "#1a0033" : "#008080" };
        if (selType === 2) return { background: sel };
        return { backgroundImage: `url('/${sel}')`, backgroundSize: "cover", backgroundPosition: "center" };
    })();

    return (
        <div style={{ minHeight: 420 }}>
            <TabRow>
                {TABS.map((t) => (
                    <TabBtn key={t.key} $active={tab === t.key} onClick={() => setTab(t.key)}>
                        {t.label}
                    </TabBtn>
                ))}
            </TabRow>

            <Page>
                {/* ----------------------------------------------------- Background */}
                {tab === "background" && (
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                            <React95Monitor backgroundStyles={previewStyle} />
                        </div>

                        <Section>Solid colors</Section>
                        <Gallery style={{ marginBottom: 16 }}>
                            {SOLID_COLORS.map((c) => (
                                <Swatch
                                    key={c}
                                    $selected={sel === c && selType === 2}
                                    style={{ background: c }}
                                    onClick={() => {
                                        setSel(c);
                                        setSelType(2);
                                    }}
                                />
                            ))}
                        </Gallery>

                        {WALLPAPER_GROUPS.map((g) => (
                            <div key={g.name} style={{ marginBottom: 14 }}>
                                <Section>{g.name}</Section>
                                <Gallery>
                                    {Array.from({ length: g.count }, (_, i) => i + 1).map((n) => {
                                        const path = `wallpapers/${g.prefix}-${n}.${g.ext}`;
                                        return (
                                            <Thumb
                                                key={path}
                                                $selected={sel === path}
                                                style={{ backgroundImage: `url('/${path}')` }}
                                                onClick={() => {
                                                    setSel(path);
                                                    setSelType(1);
                                                }}
                                                title={`${g.name} ${n}`}
                                            />
                                        );
                                    })}
                                </Gallery>
                            </div>
                        ))}

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
                            <Button
                                onClick={() => {
                                    setSel("");
                                    changeWallpaper({ image: "", type: 1 });
                                }}
                            >
                                Default
                            </Button>
                            <Button onClick={() => changeWallpaper({ image: sel, type: selType })} disabled={!sel}>
                                Apply
                            </Button>
                        </div>
                    </div>
                )}

                {/* ----------------------------------------------------- Appearance */}
                {tab === "appearance" && (
                    <div>
                        <Section>Color scheme</Section>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6, marginBottom: 16 }}>
                            {Object.entries(THEMES).map(([key, t]) => {
                                const header = (t as { headerBackground?: string }).headerBackground || "#000080";
                                const material = (t as { material?: string }).material || "#c0c0c0";
                                return (
                                    <div
                                        key={key}
                                        onClick={() => setTheme(key)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            padding: 6,
                                            cursor: "pointer",
                                            background: theme === key ? "#000080" : "#fff",
                                            color: theme === key ? "#fff" : "#000",
                                            border: "2px solid",
                                            borderColor: "#808080 #ffffff #ffffff #808080",
                                        }}
                                    >
                                        <div style={{ display: "flex", flexShrink: 0, border: "1px solid #000" }}>
                                            <div style={{ width: 14, height: 24, background: header }} />
                                            <div style={{ width: 14, height: 24, background: material }} />
                                        </div>
                                        <span style={{ fontSize: 13 }}>{t.name}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <Section>Accent colour</Section>
                        <Gallery style={{ marginBottom: 16 }}>
                            {ACCENT_COLORS.map((c) => (
                                <Swatch
                                    key={c}
                                    $selected={settings.accentColor.toLowerCase() === c.toLowerCase()}
                                    style={{ background: c, width: 36, height: 36 }}
                                    onClick={() => setSetting("accentColor", c)}
                                    title={c}
                                />
                            ))}
                        </Gallery>
                        <Note style={{ marginTop: 0, marginBottom: 14 }}>Used to highlight selected desktop icons and the selection box.</Note>

                        <fieldset style={{ border: "2px groove #c0c0c0", padding: "8px 12px" }}>
                            <legend style={{ fontWeight: "bold" }}>Desktop Style</legend>
                            <Checkbox checked={sssStyle} onChange={toggleSssStyle} label="Serious Sam Style (Vaporwave)" />
                            <Note>On: the signature vaporwave desktop. Off: a clean, stock Windows 98 look.</Note>
                        </fieldset>
                    </div>
                )}

                {/* ---------------------------------------------------- Screen Saver */}
                {tab === "screensaver" && (
                    <div>
                        <Section>Screen saver</Section>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                            <select
                                value={saver.type}
                                onChange={(e) => setSaverSettings({ type: e.target.value })}
                                style={{ fontFamily: "inherit", padding: 2 }}
                            >
                                {SAVERS.map((s) => (
                                    <option key={s.key} value={s.key}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                            <Button size="sm" disabled={saver.type === "none"} onClick={() => previewSaver()}>
                                Preview
                            </Button>
                        </div>
                        <label style={{ fontSize: 13 }}>
                            Wait:{" "}
                            <input
                                type="number"
                                min={1}
                                max={60}
                                value={saver.wait}
                                onChange={(e) => setSaverSettings({ wait: Math.max(1, Number(e.target.value) || 1) })}
                                style={{ width: 48, fontFamily: "inherit" }}
                            />{" "}
                            minutes
                        </label>
                        <Note>The screen saver starts after the desktop has been idle for this long.</Note>
                    </div>
                )}

                {/* -------------------------------------------------------- Effects */}
                {tab === "effects" && (
                    <div>
                        <Section>Visual effects</Section>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <Checkbox checked={crt} onChange={toggleCrt} label="CRT scanline effect" />
                            <Checkbox
                                checked={settings.reduceMotion}
                                onChange={() => setSetting("reduceMotion", !settings.reduceMotion)}
                                label="Reduce motion (minimise animations)"
                            />
                        </div>

                        <Section style={{ marginTop: 16 }}>Windows</Section>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <Checkbox
                                checked={settings.liveDrag}
                                onChange={() => setSetting("liveDrag", !settings.liveDrag)}
                                label="Show window contents while dragging"
                            />
                            <Checkbox
                                checked={settings.windowSnap}
                                onChange={() => setSetting("windowSnap", !settings.windowSnap)}
                                label="Snap windows to screen edges"
                            />
                        </div>
                        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
                            <label style={{ fontWeight: "bold" }} htmlFor="ui-scale">
                                Interface size:
                            </label>
                            <select
                                id="ui-scale"
                                value={settings.uiScale}
                                onChange={(e) => setSetting("uiScale", Number(e.target.value))}
                                style={{ fontFamily: "inherit", padding: 2 }}
                            >
                                {[90, 100, 110, 125, 150].map((v) => (
                                    <option key={v} value={v}>
                                        {v}%
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Note>Interface size and reduce-motion are also in the Accessibility applet.</Note>
                    </div>
                )}
            </Page>
        </div>
    );
};

export default Monitor;
