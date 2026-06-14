import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AppShell, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";

const STREAM_URL = "https://radio.plaza.one/mp3";
const STATUS_API = "https://api.plaza.one/status";

type Track = { artwork_src?: string; title?: string; artist?: string };

const bounce = keyframes`
    0%, 100% { transform: scaleY(0.25); }
    50% { transform: scaleY(1); }
`;
const pulse = keyframes`
    0%, 100% { opacity: 1; box-shadow: 0 0 6px #ff2d2d; }
    50% { opacity: 0.35; box-shadow: 0 0 2px #ff2d2d; }
`;

// Retrowave player surface — neon over a sunset gradient, inside the Win98 chrome.
const Stage = styled.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 16px 14px;
    background: linear-gradient(165deg, #3a0d5e 0%, #240a44 55%, #11052b 100%);
    color: #e8d8ff;
    font-family: "ms_sans_serif", sans-serif;
`;

const Logo = styled.div`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0 0 8px #ff2d95, 0 0 16px #ff2d95;
    text-align: center;
`;

const Cover = styled.img`
    width: 176px;
    height: 176px;
    object-fit: cover;
    border: 2px solid #00e5d0;
    box-shadow: 0 0 14px #00e5d0, 0 0 28px rgba(255, 45, 149, 0.5);
    image-rendering: auto;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #00e5d0;
    text-shadow: 0 0 6px rgba(0, 229, 208, 0.7);
    text-align: center;
    max-width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Artist = styled.div`
    font-size: 12px;
    color: #ff8ad0;
    text-shadow: 0 0 6px rgba(255, 45, 149, 0.6);
`;

const Eq = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 26px;
`;
const Bar = styled.div<{ $i: number }>`
    width: 4px;
    height: 100%;
    transform-origin: bottom;
    background: linear-gradient(180deg, #00e5d0, #ff2d95);
    animation: ${bounce} ${(p) => 0.6 + (p.$i % 5) * 0.12}s ease-in-out infinite;
    animation-delay: ${(p) => (p.$i % 7) * 0.08}s;
`;

const OnAir = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff2d2d;
        animation: ${pulse} 1.4s ease-in-out infinite;
    }
`;

const NightwavePlaza: React.FC = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const load = () =>
            fetch(STATUS_API)
                .then((res) => res.json())
                .then((data) => setTrack(data.song))
                .catch(() => {});
        load();
        setNumber(Math.floor(Math.random() * 10) + 1);
        const interval = setInterval(load, 30000);
        return () => clearInterval(interval);
    }, []);

    const cover = track?.artwork_src ?? `/vaporwave/${number}.jpeg`;
    const title = track?.title ?? "Sunset over Neon Palms";
    const artist = track?.artist ?? "Dream Mall Escalator";

    return (
        <AppShell $minW={300} $minH={440}>
            <MenuBar>
                <Menu label="Station">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); window.open("https://plaza.one", "_blank", "noopener"); }}>Open plaza.one</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Nightwave Plaza — VortexOS</MenuItem></Menu>
            </MenuBar>

            <Stage>
                <Logo>♫ NIGHTWAVE PLAZA</Logo>
                <Cover src={cover} alt="Cover" onError={(e) => ((e.target as HTMLImageElement).src = `/vaporwave/${number}.jpeg`)} />
                <Title title={title}>{title}</Title>
                <Artist>{artist}</Artist>
                <Eq>{Array.from({ length: 16 }).map((_, i) => <Bar key={i} $i={i} />)}</Eq>
                <audio controls autoPlay src={STREAM_URL} style={{ width: "100%", maxWidth: 260 }} />
            </Stage>

            <StatusBar>
                <StatusPanel $flex={1}>Powered by Nightwave Plaza</StatusPanel>
                <StatusPanel><OnAir>ON AIR</OnAir></StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default NightwavePlaza;
