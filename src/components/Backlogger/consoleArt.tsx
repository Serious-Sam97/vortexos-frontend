import { useState } from "react";
import styled from "styled-components";

/** A Win98 3D action button tinted green (positive) or red (destructive). */
export const ActionButton = styled.button<{ $tone: "green" | "red" }>`
    height: 26px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 2px solid;
    border-color: #ffffff #404040 #404040 #ffffff;
    background: ${(p) => (p.$tone === "green" ? "#0a8a0a" : "#c40000")};
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.45);
    &:hover {
        filter: brightness(1.12);
    }
    &:active {
        border-color: #404040 #ffffff #ffffff #404040;
    }
`;

/** A distinct (non-title-bar) banner header for the GameCache screens. */
export const LibraryHeader: React.FC<{ title: string; right?: React.ReactNode }> = ({ title, right }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
            padding: "6px 8px",
            background: "#d4d0c8",
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
        }}
    >
        <img src="/playstation-logo.png" alt="" style={{ height: 22 }} />
        <span style={{ fontSize: 15, fontWeight: "bold", color: "#000080", letterSpacing: 1 }}>{title}</span>
        {right && <span style={{ marginLeft: "auto", fontSize: 12, color: "#444" }}>{right}</span>}
    </div>
);

/**
 * Console artwork for GameCache platforms. Uses real console photos shipped locally in
 * /public/consoles (so they always load — no rate limits or broken images), with a
 * brand-coloured badge fallback if an image is ever missing.
 */
type Brand = "nintendo" | "playstation" | "xbox" | "sega" | "pc" | "quest";

const BRAND: Record<Brand, string> = {
    nintendo: "#e60012",
    playstation: "#003791",
    xbox: "#107c10",
    sega: "#0089cf",
    pc: "#555555",
    quest: "#1c2b73",
};

const PLATFORMS: Record<string, { brand: Brand; short: string; img: string }> = {
    PC: { brand: "pc", short: "PC", img: "/consoles/pc.jpg" },
    NES: { brand: "nintendo", short: "NES", img: "/consoles/nes.png" },
    "Super Nintendo": { brand: "nintendo", short: "SNES", img: "/consoles/super-nintendo.png" },
    "Nintendo 64": { brand: "nintendo", short: "N64", img: "/consoles/nintendo-64.png" },
    GameCube: { brand: "nintendo", short: "GCN", img: "/consoles/gamecube.png" },
    "Nintendo Wii": { brand: "nintendo", short: "Wii", img: "/consoles/wii.png" },
    "Nintendo 3DS": { brand: "nintendo", short: "3DS", img: "/consoles/3ds.png" },
    "Wii U": { brand: "nintendo", short: "Wii U", img: "/consoles/wii-u.png" },
    "Nintendo Switch": { brand: "nintendo", short: "NSW", img: "/consoles/switch.png" },
    PlayStation: { brand: "playstation", short: "PS1", img: "/consoles/playstation.jpg" },
    "PlayStation 2": { brand: "playstation", short: "PS2", img: "/consoles/playstation-2.jpg" },
    "PlayStation 3": { brand: "playstation", short: "PS3", img: "/consoles/playstation-3.jpg" },
    "PlayStation 4": { brand: "playstation", short: "PS4", img: "/consoles/playstation-4.jpg" },
    "PlayStation 5": { brand: "playstation", short: "PS5", img: "/consoles/playstation-5.png" },
    "PlayStation Portable": { brand: "playstation", short: "PSP", img: "/consoles/psp.png" },
    "PlayStation Vita": { brand: "playstation", short: "Vita", img: "/consoles/ps-vita.jpg" },
    Xbox: { brand: "xbox", short: "XBOX", img: "/consoles/xbox.png" },
    "Xbox 360": { brand: "xbox", short: "X360", img: "/consoles/xbox-360.png" },
    "Xbox One": { brand: "xbox", short: "XB1", img: "/consoles/xbox-one.png" },
    "Xbox Series X": { brand: "xbox", short: "XSX", img: "/consoles/xbox-series-x.png" },
    "Xbox Series S": { brand: "xbox", short: "XSS", img: "/consoles/xbox-series-s.png" },
    "Sega Genesis": { brand: "sega", short: "GEN", img: "/consoles/sega-genesis.jpg" },
    "Sega Dreamcast": { brand: "sega", short: "DC", img: "/consoles/dreamcast.jpg" },
    Quest: { brand: "quest", short: "QUEST", img: "/consoles/quest.jpg" },
};

export const ConsoleArt: React.FC<{ name: string; size?: number }> = ({ name, size = 54 }) => {
    const meta = PLATFORMS[name];
    const [imgOk, setImgOk] = useState(!!meta);
    const brandColor = BRAND[meta?.brand ?? "pc"];
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, width: size + 16 }}>
            <div
                style={{
                    width: size,
                    height: Math.round(size * 0.74),
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: imgOk ? "#ffffff" : brandColor,
                    border: "2px solid",
                    borderColor: "#808080 #ffffff #ffffff #808080",
                    overflow: "hidden",
                }}
            >
                {meta && imgOk ? (
                    <img
                        src={meta.img}
                        alt={name}
                        onError={() => setImgOk(false)}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                ) : (
                    <span style={{ color: "#fff", fontWeight: "bold", fontSize: (meta?.short.length ?? name.length) > 4 ? 9 : 11, textShadow: "0 1px 1px rgba(0,0,0,0.6)" }}>
                        {meta?.short ?? name.slice(0, 5)}
                    </span>
                )}
            </div>
            <span style={{ fontSize: 10, lineHeight: 1.1, textAlign: "center", maxWidth: size + 16 }}>{name}</span>
        </div>
    );
};

export default ConsoleArt;
