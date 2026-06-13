import { useState } from "react";
import { Button, Checkbox, Monitor as React95Monitor } from "react95";
import styled from "styled-components";
import { useOSContext } from "../../contexts/OSContext";
import { THEMES } from "../../system/themes";
import { previewSaver, SAVERS, setSaverSettings, useSaverSettings } from "../../system/screensaver";

const Monitor: React.FC = () => {
    const [ wallpaperSelected, setWallpaperSelected ] = useState<string>('');
    const [ wallpaperType, setWallpaperType ] = useState<number>(1);
    const { changeWallpaper, crt, toggleCrt, theme, setTheme, sssStyle, toggleSssStyle } = useOSContext();
    const saver = useSaverSettings();

    const solidColors = [
        '#008080',
        '#000080',
        '#000000',
        '#00FF00',
        '#800000',
        '#FF00FF'
    ];

    const Image = styled.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `;

    const Wallpaper = styled.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `;

    const changeSelectedWallpaper = (image: string, type: number) => {
        setWallpaperSelected(image);
        setWallpaperType(type);
    };

    const getSelectedImage = () => {
        if (!wallpaperSelected) {
            return {
                background: 'blue',
            };
        }

        if (wallpaperType === 2) {
            return {
                background: wallpaperSelected
            }
        }

        return {
            backgroundImage: `url('/${wallpaperSelected}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }

    const ApplyDiv = styled.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `

    return (
        <div style={{width: '800px', maxHeight: '70vh', overflowY: 'scroll', overflowX: 'hidden'}}>
            <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <label htmlFor="theme-select" style={{ fontWeight: "bold" }}>Theme / Appearance:</label>
                <select
                    id="theme-select"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    style={{ fontFamily: "inherit", padding: 2 }}
                >
                    {Object.entries(THEMES).map(([key, t]) => (
                        <option key={key} value={key}>{t.name}</option>
                    ))}
                </select>
            </div>
            <div style={{ marginBottom: 12 }}>
                <Checkbox checked={crt} onChange={toggleCrt} label="CRT scanline effect" />
            </div>
            <fieldset style={{ marginBottom: 16, border: "2px groove #c0c0c0", padding: "8px 12px" }}>
                <legend style={{ fontWeight: "bold" }}>Desktop Style</legend>
                <Checkbox
                    checked={sssStyle}
                    onChange={toggleSssStyle}
                    label="Serious Sam Style (Vaporwave)"
                />
                <p style={{ fontSize: 12, color: "#444", marginTop: 6 }}>
                    On: the signature vaporwave/retrowave desktop. Off: a clean, stock Windows 98 look.
                </p>
            </fieldset>
            <fieldset style={{ marginBottom: 16, border: "2px groove #c0c0c0", padding: "8px 12px" }}>
                <legend style={{ fontWeight: "bold" }}>Screen Saver</legend>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <select
                        value={saver.type}
                        onChange={(e) => setSaverSettings({ type: e.target.value })}
                        style={{ fontFamily: "inherit", padding: 2 }}
                    >
                        {SAVERS.map((s) => (
                            <option key={s.key} value={s.key}>{s.name}</option>
                        ))}
                    </select>
                    <Button size="sm" disabled={saver.type === "none"} onClick={() => previewSaver()}>Preview</Button>
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
                        min
                    </label>
                </div>
            </fieldset>
            <p className="text-xl pb-4 font-bold">Choose the wallpaper</p>
            <div className="flex justify-center">
                <React95Monitor backgroundStyles={ getSelectedImage() }/>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Solid Colors</p>
                <div className="flex justify-between">
                    {
                        solidColors.map((color: string) => {
                            return (
                                
                                <Wallpaper style={{background: color}}  onClick={() => changeSelectedWallpaper(color, 2)} className="p-2 cursor-pointer hover"/>
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Windows XP</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 5}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/xp-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/xp-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Windows 7</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 4}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/7-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/7-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Vaporwave Style</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 7}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/vw-${number}.jpg`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/vw-${number}.jpg`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-lg text-center">Games</p>
                <div className="flex justify-between">
                    {
                        Array.from({length: 1}, (_, i) => i + 1).map((number) => {
                            return (
                                <Image
                                    onClick={() => changeSelectedWallpaper(`wallpapers/games-${number}.png`, 1)}
                                    className="p-2 cursor-pointer hover"
                                    width={'115px'}
                                    height={'20px'}
                                    src={`/wallpapers/games-${number}.png`}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <ApplyDiv>
                <Button onClick={() => changeWallpaper({image: wallpaperSelected, type: wallpaperType})} disabled={wallpaperSelected === ''}>Apply</Button>
            </ApplyDiv>
        </div>
    );
};

export default Monitor;