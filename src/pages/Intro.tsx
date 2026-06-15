import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { useOSContext } from "../contexts/OSContext";
import { VortexLogo } from "../components/VortexLogo";
import { playStartup, playBootChord, setSoundScheme } from "../system/sounds";
import { useEra } from "../system/eras";

/* ------------------------------------------------------------------ phases */
// ready  → user gesture (needed so the AudioContext is allowed to start)
// post   → BIOS-style power-on self test, honest to the real architecture
// logo   → the era wordmark + progress bar + boot chord (skipped for DOS)
type Phase = "ready" | "post" | "logo";

const POST_LINE_MS = 200;
const LOGO_MS = 2400;

/* ------------------------------------------------------------------- atoms */
const fillBar = keyframes`from { width: 0 } to { width: 100% }`;
const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const flicker = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

const Full = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`;

/* gesture splash background — vaporwave grid (SSS), an era background, or clouds */
const Splash = styled(Full)<{ $vapor: boolean; $bg?: string }>`
    ${({ $vapor, $bg }) =>
        $vapor
            ? `background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`
            : $bg
              ? `background: ${$bg};`
              : `background-image: url('/clouds.jpg'); background-size: cover; background-position: center;`}
`;

const Grid = styled.div`
    position: absolute;
    inset: 38% 0 0 0;
    background-image:
        linear-gradient(rgba(255, 45, 149, 0.45) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 229, 208, 0.4) 1px, transparent 1px);
    background-size: 44px 44px;
    transform: perspective(340px) rotateX(62deg);
    transform-origin: top center;
    mask-image: linear-gradient(#000, transparent 75%);
    pointer-events: none;
`;

const GestureButton = styled.button<{ $vapor: boolean; $grad?: string; $glow?: string }>`
    margin-top: 26px;
    padding: 11px 30px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background: ${({ $vapor, $grad }) =>
        $grad ?? ($vapor ? "linear-gradient(90deg, #ff2d95, #00e5d0)" : "linear-gradient(90deg, #000080, #1084d0)")};
    box-shadow: 0 0 22px ${({ $vapor, $glow }) => $glow ?? ($vapor ? "#ff2d9577" : "#1084d066")};
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    &:hover {
        transform: translateY(-1px) scale(1.03);
        box-shadow: 0 0 30px ${({ $vapor, $glow }) => $glow ?? ($vapor ? "#ff2d95aa" : "#1084d0aa")};
    }
    &:active {
        transform: translateY(0) scale(0.99);
    }
`;

/* POST / logo dark background — neon-tinted (SSS) or pure black (stock) */
const Console = styled(Full)<{ $vapor: boolean }>`
    background: ${({ $vapor }) =>
        $vapor ? "radial-gradient(80% 80% at 50% 50%, #0a0118 0%, #000 100%)" : "#000"};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7vh 8vw;
    color: #d8d8d8;
    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
`;

const PostLine = styled.div`
    animation: ${fadeIn} 0.1s linear;
    white-space: pre;
`;

const Ok = styled.span<{ $vapor: boolean }>`
    color: ${({ $vapor }) => ($vapor ? "#00e5d0" : "#3ad14a")};
    font-weight: bold;
`;

const Cursor = styled.span`
    display: inline-block;
    width: 9px;
    height: 16px;
    margin-left: 2px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${flicker} 1s step-end infinite;
`;

const LogoWrap = styled(Full)<{ $vapor: boolean }>`
    background: ${({ $vapor }) =>
        $vapor
            ? "radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)"
            : "#000"};
    animation: ${fadeIn} 0.5s ease;
`;

const Wordmark = styled.h1<{ $vapor: boolean }>`
    margin: 26px 0 2px;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({ $vapor }) =>
        $vapor
            ? "linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)"
            : "linear-gradient(90deg, #5cb9ff, #ffffff)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
    margin: 2px 0 0;
    color: #b9b9c8;
    font-size: 13px;
    letter-spacing: 1px;
`;

const Signature = styled.p<{ $vapor: boolean }>`
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({ $vapor }) => ($vapor ? "#00e5d0" : "#7fc6ff")};
    text-shadow: 0 0 12px ${({ $vapor }) => ($vapor ? "#00e5d088" : "transparent")};
`;

const ProgressTrack = styled.div`
    width: 320px;
    height: 18px;
    margin-top: 40px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;

const ProgressFill = styled.div<{ $vapor: boolean; $ms: number; $grad?: string }>`
    height: 100%;
    background: ${({ $vapor, $grad }) =>
        $grad ?? ($vapor ? "linear-gradient(90deg, #ff2d95, #00e5d0)" : "linear-gradient(90deg, #000080, #1084d0)")};
    animation: ${fillBar} ${({ $ms }) => $ms}ms linear forwards;
`;

/* ---------------------------------------------------------------- DOS atoms */
const DosScreen = styled.div`
    position: fixed;
    inset: 0;
    background: #000;
    color: #c8c8c8;
    font-family: "Courier New", monospace;
    font-size: 16px;
    line-height: 1.6;
    padding: 6vh 7vw;
    text-align: left;
    overflow: hidden;
    white-space: pre-wrap;
`;

const DosButton = styled.button`
    margin-top: 18px;
    background: transparent;
    border: 0;
    color: #c8c8c8;
    font-family: "Courier New", monospace;
    font-size: 16px;
    cursor: pointer;
    padding: 0;
    &:hover {
        color: #ffffff;
    }
`;

/* --------------------------------------------------------------- Luna (XP) */
const slide = keyframes`
    0%   { transform: translateX(-46px); }
    100% { transform: translateX(150px); }
`;

const LunaWrap = styled(Full)`
    background: #000;
    animation: ${fadeIn} 0.5s ease;
`;

const XpTitle = styled.h1`
    margin: 0;
    font-family: "Franklin Gothic Medium", "Segoe UI", "Tahoma", sans-serif;
    font-size: 46px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    span {
        font-style: italic;
        margin-left: 8px;
        background: linear-gradient(180deg, #ff8a00, #d65a00);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const XpSub = styled.p`
    margin: 6px 0 44px;
    color: #9fb6d6;
    font-size: 13px;
    letter-spacing: 1px;
`;

/* the classic XP "marching blocks" loading bar */
const XpTrack = styled.div`
    width: 150px;
    height: 16px;
    border-radius: 9px;
    border: 1px solid #2a2a2a;
    background: #0a0a0a;
    overflow: hidden;
    box-shadow: inset 0 0 6px #000;
`;

const XpBlocks = styled.div`
    display: flex;
    gap: 4px;
    height: 100%;
    align-items: center;
    width: max-content;
    padding-left: 4px;
    animation: ${slide} 1.4s linear infinite;
    & > i {
        display: block;
        width: 11px;
        height: 9px;
        border-radius: 2px;
        background: linear-gradient(180deg, #7fc1ff, #2a7be0 60%, #1657b8);
        box-shadow: 0 0 5px #4aa3ff;
    }
`;

/* ------------------------------------------------------------- Aero (Vista/7) */
const flagGlow = keyframes`
    0%, 100% { filter: drop-shadow(0 0 12px rgba(120,190,255,0.45)); opacity: 0.9; }
    50%      { filter: drop-shadow(0 0 26px rgba(160,215,255,0.95)); opacity: 1; }
`;
const pulse = keyframes`0%,100%{opacity:0.45} 50%{opacity:1}`;

const AeroWrap = styled(Full)`
    background: radial-gradient(120% 90% at 50% 40%, #061633 0%, #02060f 70%);
    animation: ${fadeIn} 0.5s ease;
`;

const AeroFlag = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 34px);
    grid-template-rows: repeat(2, 34px);
    gap: 6px;
    transform: perspective(320px) rotateY(-13deg) rotateX(4deg);
    animation: ${flagGlow} 2.6s ease-in-out infinite;
    & > i {
        display: block;
        border-radius: 5px;
        box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.55);
    }
    & > i:nth-child(1) { background: linear-gradient(135deg, #ff7a7a, #e23b3b); }
    & > i:nth-child(2) { background: linear-gradient(135deg, #87e887, #36b836); }
    & > i:nth-child(3) { background: linear-gradient(135deg, #86bbff, #2a7be0); }
    & > i:nth-child(4) { background: linear-gradient(135deg, #ffe680, #f0b820); }
`;

const AeroStarting = styled.p`
    margin-top: 30px;
    color: #b9d4ff;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    animation: ${pulse} 1.8s ease-in-out infinite;
`;

/* -------------------------------------------------------------- component */
const Intro: React.FC = () => {
    const navigate = useNavigate();
    const { sssStyle } = useOSContext();
    const era = useEra();
    const style = era.boot.style; // "vortex" | "classic" | "dos" | …
    // The vaporwave neon treatment is reserved for the Vortex-style boot with SSS on;
    // every other era boots in its own period style.
    const vapor = style === "vortex" && sssStyle;
    const [phase, setPhase] = useState<Phase>("ready");
    const [visibleLines, setVisibleLines] = useState(0);
    // POST lines come from the active era's boot pack ({cores} → CPU core count).
    const cores = navigator.hardwareConcurrency || 4;
    const lines = era.boot.postLines.map((l) => ({ ...l, label: l.label.replace("{cores}", String(cores)) }));
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    // The boot plays before login (EraApplier isn't mounted yet), so point the sound
    // engine at the boot era's scheme here — otherwise startup/boot always used the
    // default scheme regardless of era.
    useEffect(() => {
        setSoundScheme(era.sound);
    }, [era.sound]);

    const start = () => {
        playStartup(); // user gesture → the AudioContext is now allowed to run
        // Eras with no BIOS POST text (e.g. XP/Luna) jump straight to the logo boot.
        setPhase(lines.length === 0 ? "logo" : "post");
    };

    // Reveal POST lines one at a time, then cut to the logo screen (DOS has none →
    // it boots straight into the OS after the prompt settles).
    useEffect(() => {
        if (phase !== "post") return;
        lines.forEach((_, i) => {
            timers.current.push(setTimeout(() => setVisibleLines(i + 1), i * POST_LINE_MS));
        });
        const done = lines.length * POST_LINE_MS;
        timers.current.push(
            style === "dos"
                ? setTimeout(() => navigate("/vortex"), done + 800)
                : setTimeout(() => setPhase("logo"), done + 350),
        );
        return () => {
            timers.current.forEach(clearTimeout);
            timers.current = [];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase]);

    // Logo screen: play the boot chord, then enter the OS.
    useEffect(() => {
        if (phase !== "logo") return;
        playBootChord();
        const t = setTimeout(() => navigate("/vortex"), LOGO_MS);
        return () => clearTimeout(t);
    }, [phase, navigate]);

    /* ------------------------------------------------------------ DOS era */
    if (style === "dos") {
        if (phase === "ready") {
            return (
                <DosScreen>
                    {era.boot.postLines[0]?.label}
                    {"\n"}
                    {era.boot.postLines[1]?.label}
                    {"\n\n"}
                    <DosButton onClick={start}>
                        Press any key to start
                        <Cursor />
                    </DosButton>
                </DosScreen>
            );
        }
        // post (no logo phase for DOS)
        return (
            <DosScreen>
                {lines.slice(0, visibleLines).map((ln, i) => (
                    <div key={i}>
                        {ln.label}
                        {ln.status ? `  ${ln.status}` : null}
                        {i === visibleLines - 1 && <Cursor />}
                    </div>
                ))}
            </DosScreen>
        );
    }

    /* -------------------------------------- Vortex (98) + classic (95/NT4/2000) */
    // Classic eras drive their progress bar / button from the era's own title
    // gradient (CSS vars aren't applied this early — the pack is the source).
    const eraGrad = vapor ? undefined : era.chrome.titleActive;

    if (phase === "ready") {
        // Luna/Aero boot onto their own desktop; other classic eras onto clouds.
        const splashBg = style === "luna" || style === "aero" ? era.chrome.desktop : undefined;
        return (
            <Splash $vapor={vapor} $bg={splashBg}>
                {vapor && <Grid />}
                <div style={{ position: "relative", zIndex: 1 }}>
                    <VortexLogo size={150} vapor={vapor} />
                    <Wordmark $vapor={vapor}>{era.boot.wordmark}</Wordmark>
                    <Tagline style={{ color: vapor ? "#cfcfe0" : "#0a0a0a" }}>{era.boot.edition}</Tagline>
                    <GestureButton $vapor={vapor} $grad={eraGrad} onClick={start}>
                        Are you ready?
                    </GestureButton>
                    <Signature
                        $vapor={vapor}
                        style={{ marginTop: 18, color: vapor ? "#00e5d0" : "#0a0a0a" }}
                    >
                        a creation by Serious Sam
                    </Signature>
                </div>
            </Splash>
        );
    }

    if (phase === "post") {
        return (
            <Console $vapor={vapor}>
                {lines.slice(0, visibleLines).map((ln, i) => (
                    <PostLine key={i}>
                        {ln.label}
                        {ln.status ? <Ok $vapor={vapor}>{ln.status}</Ok> : null}
                        {i === visibleLines - 1 && <Cursor />}
                    </PostLine>
                ))}
            </Console>
        );
    }

    // Luna (XP) boot — the wordmark + the marching-blocks loader on black.
    if (style === "luna") {
        return (
            <LunaWrap>
                <XpTitle>
                    Windows<span>XP</span>
                </XpTitle>
                <XpSub>{era.boot.edition}</XpSub>
                <XpTrack>
                    <XpBlocks>
                        <i />
                        <i />
                        <i />
                    </XpBlocks>
                </XpTrack>
                <Signature $vapor={false} style={{ marginTop: 30, color: "#7fa6d6" }}>
                    a creation by Serious Sam
                </Signature>
            </LunaWrap>
        );
    }

    // Aero (Vista / Windows 7) boot — the glowing four-pane flag forming on black.
    if (style === "aero") {
        return (
            <AeroWrap>
                <AeroFlag>
                    <i />
                    <i />
                    <i />
                    <i />
                </AeroFlag>
                <Wordmark $vapor={false} style={{ marginTop: 30 }}>
                    {era.boot.wordmark}
                </Wordmark>
                <Tagline>{era.boot.edition}</Tagline>
                <AeroStarting>Starting {era.boot.wordmark}…</AeroStarting>
                <Signature $vapor={false} style={{ marginTop: 18, color: "#7fa6d6" }}>
                    a creation by Serious Sam
                </Signature>
            </AeroWrap>
        );
    }

    return (
        <LogoWrap $vapor={vapor}>
            <VortexLogo size={170} vapor={vapor} />
            <Wordmark $vapor={vapor}>{era.boot.wordmark}</Wordmark>
            <Tagline>{era.boot.edition}</Tagline>
            <Signature $vapor={vapor}>a creation by Serious Sam</Signature>
            <ProgressTrack>
                <ProgressFill $vapor={vapor} $grad={eraGrad} $ms={LOGO_MS - 200} />
            </ProgressTrack>
        </LogoWrap>
    );
};

export default Intro;
