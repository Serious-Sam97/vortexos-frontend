import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AppShell, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";

const STREAM_URL = "https://radio.plaza.one/mp3";
const STATUS_API = "https://api.plaza.one/status";

type Track = { artwork_src?: string; title?: string; artist?: string };

/* ------------------------------------------------------------ animations */
const gridMove = keyframes`to { transform: perspective(420px) rotateX(74deg) translateY(44px); }`;
const spin = keyframes`to { transform: rotate(360deg); }`;
const bounce = keyframes`0%,100% { transform: scaleY(0.18); } 50% { transform: scaleY(1); }`;
const pulse = keyframes`0%,100% { opacity: 1; box-shadow: 0 0 7px #ff2d2d; } 50% { opacity: 0.35; box-shadow: 0 0 2px #ff2d2d; }`;
const twinkle = keyframes`0%,100% { opacity: 0.2; } 50% { opacity: 1; }`;
const marquee = keyframes`0% { transform: translateX(0); } 100% { transform: translateX(-50%); }`;
const sunPulse = keyframes`0%,100% { filter: drop-shadow(0 0 24px #ff2d95aa); } 50% { filter: drop-shadow(0 0 40px #ff8a3caa); }`;

/* --------------------------------------------------------------- scene */
const Scene = styled.div`
    flex: 1;
    min-height: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #0a0220 0%, #25064a 38%, #5e0f5e 60%, #c01f6b 78%, #ff8a3c 100%);
    font-family: "ms_sans_serif", sans-serif;
    color: #fff;
`;

// retrowave sun with horizontal slits in its lower half
const Sun = styled.div`
    position: absolute;
    top: 26%;
    left: 50%;
    width: 200px;
    height: 200px;
    margin-left: -100px;
    border-radius: 50%;
    background: linear-gradient(180deg, #fff27a 0%, #ff5ca8 55%, #ff2d95 100%);
    animation: ${sunPulse} 4s ease-in-out infinite;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 52%;
        background: repeating-linear-gradient(#0000 0 6px, #25064a 6px 11px);
    }
`;

const Grid = styled.div`
    position: absolute;
    left: -50%;
    right: -50%;
    bottom: 0;
    height: 46%;
    background-image:
        linear-gradient(#ff2d95cc 2px, transparent 2px),
        linear-gradient(90deg, #00e5d0aa 1px, transparent 1px);
    background-size: 100% 44px, 44px 100%;
    transform-origin: top center;
    transform: perspective(420px) rotateX(74deg);
    animation: ${gridMove} 1.1s linear infinite;
    mask-image: linear-gradient(transparent, #000 40%);
`;

const Stars = styled.div`
    position: absolute;
    inset: 0 0 50% 0;
    pointer-events: none;
`;
const Star = styled.span<{ $i: number }>`
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fff;
    left: ${(p) => (p.$i * 53) % 100}%;
    top: ${(p) => (p.$i * 37) % 60}%;
    animation: ${twinkle} ${(p) => 1.5 + (p.$i % 4) * 0.5}s ease-in-out infinite;
    animation-delay: ${(p) => (p.$i % 5) * 0.3}s;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 14px 12px 12px;
    width: 100%;
    box-sizing: border-box;
`;

const Logo = styled.div`
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 3px;
    background: linear-gradient(#fff, #ff8ad0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 1px #ff2d95;
    filter: drop-shadow(0 0 8px #ff2d95);
`;

// spinning vinyl record with the cover as the label
const Vinyl = styled.div<{ $spin: boolean }>`
    position: relative;
    width: 172px;
    height: 172px;
    border-radius: 50%;
    background:
        radial-gradient(circle, #2a2a2a 0 27%, transparent 27%),
        repeating-radial-gradient(circle, #111 0 2px, #1c1c1c 2px 4px);
    box-shadow: 0 0 18px #00e5d0, 0 0 36px rgba(255, 45, 149, 0.45);
    border: 1px solid #00e5d0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${spin} 3.4s linear infinite;
    animation-play-state: ${(p) => (p.$spin ? "running" : "paused")};
`;
const Label = styled.img`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
`;
const Spindle = styled.div`
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #c0c0c0;
    box-shadow: 0 0 0 2px #000;
`;

const Ticker = styled.div`
    width: 100%;
    max-width: 280px;
    overflow: hidden;
    white-space: nowrap;
`;
const TickerInner = styled.div<{ $scroll: boolean }>`
    display: inline-block;
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    color: #00e5d0;
    text-shadow: 0 0 7px rgba(0, 229, 208, 0.8);
    ${(p) => p.$scroll && `animation: ${marquee} 9s linear infinite;`}
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
    height: 22px;
`;
const Bar = styled.div<{ $i: number; $on: boolean }>`
    width: 4px;
    height: 100%;
    transform-origin: bottom;
    background: linear-gradient(180deg, #00e5d0, #ff2d95);
    border-radius: 1px;
    animation: ${bounce} ${(p) => 0.55 + (p.$i % 5) * 0.13}s ease-in-out infinite;
    animation-delay: ${(p) => (p.$i % 7) * 0.07}s;
    animation-play-state: ${(p) => (p.$on ? "running" : "paused")};
    opacity: ${(p) => (p.$on ? 1 : 0.3)};
`;

/* ------------------------------------------------------------- controls */
const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 280px;
    padding: 8px 12px;
    box-sizing: border-box;
    background: rgba(10, 2, 32, 0.55);
    border: 1px solid #ff2d9577;
    border-radius: 8px;
    backdrop-filter: blur(2px);
`;
const PlayBtn = styled.button`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #00e5d0;
    background: radial-gradient(circle at 38% 32%, #ff8ad0, #ff2d95);
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px #ff2d9588;
    &:active {
        transform: scale(0.94);
    }
`;
const Speaker = styled.button`
    flex-shrink: 0;
    background: none;
    border: none;
    color: #00e5d0;
    font-size: 16px;
    cursor: pointer;
    padding: 0;
`;
const Volume = styled.input`
    flex: 1;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #00e5d0, #ff2d95);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #ff2d95;
        box-shadow: 0 0 6px #00e5d0;
    }
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
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const load = () =>
            fetch(STATUS_API).then((r) => r.json()).then((d) => setTrack(d.song)).catch(() => {});
        load();
        setNumber(Math.floor(Math.random() * 10) + 1);
        const interval = setInterval(load, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
    }, [volume, muted]);

    const togglePlay = () => {
        const a = audioRef.current;
        if (!a) return;
        if (a.paused) a.play().catch(() => {});
        else a.pause();
    };

    const cover = track?.artwork_src ?? `/vaporwave/${number}.jpeg`;
    const title = track?.title ?? "Sunset over Neon Palms";
    const artist = track?.artist ?? "Dream Mall Escalator";
    const longTitle = title.length > 22;

    return (
        <AppShell $minW={320} $minH={520}>
            <MenuBar>
                <Menu label="Station">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); togglePlay(); }}>{playing ? "Pause" : "Play"}</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setMuted((m) => !m); }}>{muted ? "Unmute" : "Mute"}</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); window.open("https://plaza.one", "_blank", "noopener"); }}>Open plaza.one</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Nightwave Plaza — VortexOS</MenuItem></Menu>
            </MenuBar>

            <Scene>
                <Stars>{Array.from({ length: 26 }).map((_, i) => <Star key={i} $i={i + 1} />)}</Stars>
                <Sun />
                <Grid />

                <Content>
                    <Logo>♫ NIGHTWAVE PLAZA</Logo>
                    <Vinyl $spin={playing}>
                        <Label src={cover} alt="Cover" onError={(e) => ((e.target as HTMLImageElement).src = `/vaporwave/${number}.jpeg`)} />
                        <Spindle />
                    </Vinyl>
                    <Ticker>
                        <TickerInner $scroll={longTitle}>
                            {title}
                            {longTitle ? "      " + title : ""}
                        </TickerInner>
                    </Ticker>
                    <Artist>{artist}</Artist>
                    <Eq>{Array.from({ length: 18 }).map((_, i) => <Bar key={i} $i={i} $on={playing && !muted} />)}</Eq>

                    <Controls>
                        <PlayBtn onClick={togglePlay} title={playing ? "Pause" : "Play"}>{playing ? "⏸" : "▶"}</PlayBtn>
                        <Speaker onClick={() => setMuted((m) => !m)} title={muted ? "Unmute" : "Mute"}>{muted || volume === 0 ? "🔇" : "🔊"}</Speaker>
                        <Volume
                            type="range"
                            min={0}
                            max={100}
                            value={Math.round((muted ? 0 : volume) * 100)}
                            onChange={(e) => {
                                setVolume(Number(e.target.value) / 100);
                                if (muted) setMuted(false);
                            }}
                            title="Volume"
                        />
                    </Controls>
                </Content>

                <audio
                    ref={audioRef}
                    autoPlay
                    src={STREAM_URL}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    style={{ display: "none" }}
                />
            </Scene>

            <StatusBar>
                <StatusPanel $flex={1}>Powered by Nightwave Plaza</StatusPanel>
                <StatusPanel><OnAir>{playing ? "ON AIR" : "PAUSED"}</OnAir></StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default NightwavePlaza;
