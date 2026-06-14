import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { useOSContext } from "../contexts/OSContext";
import { VortexLogo } from "../components/VortexLogo";
import { playStartup, playBootChord } from "../system/sounds";

/* ------------------------------------------------------------------ phases */
// ready  → user gesture (needed so the AudioContext is allowed to start)
// post   → BIOS-style power-on self test, honest to the real architecture
// logo   → the signature Vortex portal + progress bar + boot chord
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

/* gesture splash background — vaporwave grid (SSS) or classic clouds (stock) */
const Splash = styled(Full)<{ $vapor: boolean }>`
    ${({ $vapor }) =>
        $vapor
            ? `background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`
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

const GestureButton = styled.button<{ $vapor: boolean }>`
    margin-top: 26px;
    padding: 11px 30px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background: ${({ $vapor }) =>
        $vapor
            ? "linear-gradient(90deg, #ff2d95, #00e5d0)"
            : "linear-gradient(90deg, #000080, #1084d0)"};
    box-shadow: 0 0 22px ${({ $vapor }) => ($vapor ? "#ff2d9577" : "#1084d066")};
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    &:hover {
        transform: translateY(-1px) scale(1.03);
        box-shadow: 0 0 30px ${({ $vapor }) => ($vapor ? "#ff2d95aa" : "#1084d0aa")};
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

const ProgressFill = styled.div<{ $vapor: boolean; $ms: number }>`
    height: 100%;
    background: ${({ $vapor }) =>
        $vapor
            ? "linear-gradient(90deg, #ff2d95, #00e5d0)"
            : "linear-gradient(90deg, #000080, #1084d0)"};
    animation: ${fillBar} ${({ $ms }) => $ms}ms linear forwards;
`;

/* --------------------------------------------------------------- the lines */
const POST_LINES = (cores: number): Array<{ label: string; status?: string }> => [
    { label: "VortexOS BIOS v2.0  —  Experimental Edition" },
    { label: "(c) Serious Sam.  All rights reserved." },
    { label: "" },
    { label: `Detecting processor cores ........ ${cores}`, status: "" },
    { label: "Microkernel .......................", status: "OK" },
    { label: "Syscall ABI .......................", status: "OK" },
    { label: "Virtual File System (OPFS) ........", status: "OK" },
    { label: "Process scheduler .................", status: "OK" },
    { label: "" },
    { label: "Starting VortexOS ..." },
];

/* -------------------------------------------------------------- component */
const Intro: React.FC = () => {
    const navigate = useNavigate();
    const { sssStyle } = useOSContext();
    const vapor = sssStyle;
    const [phase, setPhase] = useState<Phase>("ready");
    const [visibleLines, setVisibleLines] = useState(0);
    const lines = POST_LINES(navigator.hardwareConcurrency || 4);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    const start = () => {
        playStartup(); // user gesture → the AudioContext is now allowed to run
        setPhase("post");
    };

    // Reveal POST lines one at a time, then cut to the logo screen.
    useEffect(() => {
        if (phase !== "post") return;
        lines.forEach((_, i) => {
            timers.current.push(setTimeout(() => setVisibleLines(i + 1), i * POST_LINE_MS));
        });
        timers.current.push(
            setTimeout(() => setPhase("logo"), lines.length * POST_LINE_MS + 350),
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

    if (phase === "ready") {
        return (
            <Splash $vapor={vapor}>
                {vapor && <Grid />}
                <div style={{ position: "relative", zIndex: 1 }}>
                    <VortexLogo size={150} vapor={vapor} />
                    <Wordmark $vapor={vapor}>VortexOS</Wordmark>
                    <Tagline style={{ color: vapor ? "#cfcfe0" : "#0a0a0a" }}>
                        Experimental Edition
                    </Tagline>
                    <GestureButton $vapor={vapor} onClick={start}>
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

    return (
        <LogoWrap $vapor={vapor}>
            <VortexLogo size={170} vapor={vapor} />
            <Wordmark $vapor={vapor}>VortexOS</Wordmark>
            <Tagline>Version 2.0 · Experimental Edition</Tagline>
            <Signature $vapor={vapor}>a creation by Serious Sam</Signature>
            <ProgressTrack>
                <ProgressFill $vapor={vapor} $ms={LOGO_MS - 200} />
            </ProgressTrack>
        </LogoWrap>
    );
};

export default Intro;
