import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { installKonami, markEgg, subscribeParty, subscribeCredits } from "../system/easter";
import { say } from "../system/assistant";
import { playChord } from "../system/sounds";

/**
 * The fun layer: a Konami-code listener that triggers "VORTEX MODE" (a burst of
 * retrowave confetti + a glowing banner), and a full-screen arcade-style credits
 * roll. Both are also reachable from the `vortex`/`credits` shell commands and a
 * secret in the About box. Pure canvas/CSS — no asset.
 */

const PARTY_MS = 5500;
const CONFETTI_COLORS = ["#ff2d95", "#00e5d0", "#a14bff", "#ffd83a", "#1084d0", "#ff8fd4"];

/* -------------------------------------------------------------- party mode */
const bannerIn = keyframes`
    0% { transform: scale(0.4) rotate(-8deg); opacity: 0; }
    55% { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
`;
const hueShift = keyframes`to { filter: hue-rotate(360deg); }`;

const PartyLayer = styled.div`
    position: fixed;
    inset: 0;
    z-index: 70000;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Banner = styled.div`
    font-family: "Segoe UI", Tahoma, sans-serif;
    font-size: clamp(28px, 7vw, 64px);
    font-weight: 900;
    letter-spacing: 3px;
    text-align: center;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0, #ffd83a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 40px rgba(255, 45, 149, 0.4);
    animation: ${bannerIn} 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3), ${hueShift} 3s linear infinite;
`;
const Confetti = styled.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
`;

/* ---------------------------------------------------------------- credits */
const scrollUp = keyframes`
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-130%); }
`;
const CreditsLayer = styled.div`
    position: fixed;
    inset: 0;
    z-index: 71000;
    background: radial-gradient(80% 80% at 50% 40%, #0a0118 0%, #000 100%);
    overflow: hidden;
    cursor: pointer;
`;
const Roll = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: #eee;
    font-family: "Segoe UI", Tahoma, sans-serif;
    animation: ${scrollUp} 22s linear infinite;
`;
const Big = styled.div`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Hint = styled.div`
    position: fixed;
    bottom: 18px;
    right: 22px;
    color: #888;
    font-size: 12px;
    font-family: "Segoe UI", sans-serif;
`;

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rot: number;
    vr: number;
}

const EasterEggs: React.FC = () => {
    const [party, setParty] = useState(false);
    const [credits, setCredits] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    /* Konami → VORTEX MODE */
    useEffect(() => {
        return installKonami(() => {
            markEgg("konami");
            setParty(true);
            playChord();
            say({ text: "🌀 You found the Konami code — VORTEX MODE engaged!" });
        });
    }, []);

    /* external triggers (shell commands, About secret) */
    useEffect(() => subscribeParty(() => setParty(true)), []);
    useEffect(
        () =>
            subscribeCredits(() => {
                setCredits(true);
                playChord();
            }),
        [],
    );

    /* confetti animation while party is on */
    useEffect(() => {
        if (!party) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const W = (canvas.width = window.innerWidth);
        const H = (canvas.height = window.innerHeight);
        const parts: Particle[] = Array.from({ length: 160 }, () => ({
            x: Math.random() * W,
            y: Math.random() * -H,
            vx: (Math.random() - 0.5) * 3,
            vy: 2 + Math.random() * 4,
            size: 5 + Math.random() * 7,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            rot: Math.random() * Math.PI,
            vr: (Math.random() - 0.5) * 0.3,
        }));
        let raf = 0;
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            parts.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.04;
                p.rot += p.vr;
                if (p.y > H + 20) {
                    p.y = -20;
                    p.x = Math.random() * W;
                    p.vy = 2 + Math.random() * 4;
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                ctx.restore();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();
        const t = setTimeout(() => setParty(false), PARTY_MS);
        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(t);
        };
    }, [party]);

    /* close credits on Esc */
    useEffect(() => {
        if (!credits) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setCredits(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [credits]);

    return (
        <>
            {party &&
                createPortal(
                    <PartyLayer>
                        <Confetti ref={canvasRef} />
                        <Banner>VORTEX&nbsp;MODE</Banner>
                    </PartyLayer>,
                    document.body,
                )}

            {credits &&
                createPortal(
                    <CreditsLayer onClick={() => setCredits(false)}>
                        <Roll>
                            <div style={{ height: 40 }} />
                            <Big>VortexOS 2.0</Big>
                            <p style={{ color: "#b9b9c8" }}>Experimental Edition</p>
                            <div style={{ height: 40 }} />
                            <p style={{ color: "#888", fontSize: 13 }}>a creation by</p>
                            <Big style={{ fontSize: 52 }}>SERIOUS SAM</Big>
                            <div style={{ height: 60 }} />
                            <p style={{ fontWeight: 700, color: "#00e5d0" }}>The Microkernel</p>
                            <p>Syscall ABI · Process scheduler</p>
                            <p>Per-process file descriptors</p>
                            <div style={{ height: 36 }} />
                            <p style={{ fontWeight: 700, color: "#ff67c8" }}>The System</p>
                            <p>Virtual File System · OPFS</p>
                            <p>Real shell &amp; coreutils</p>
                            <p>Window manager · compositor-free</p>
                            <p>Multi-user accounts &amp; networking</p>
                            <div style={{ height: 36 }} />
                            <p style={{ fontWeight: 700, color: "#a14bff" }}>The Desktop</p>
                            <p>Every app, hand-built</p>
                            <p>The games · The tray · The assistant</p>
                            <div style={{ height: 60 }} />
                            <p style={{ fontSize: 18 }}>Built from scratch in a browser.</p>
                            <p style={{ fontSize: 18, color: "#00e5d0" }}>No emulator. No clone.</p>
                            <div style={{ height: 50 }} />
                            <p style={{ color: "#888" }}>Special thanks:</p>
                            <p style={{ fontSize: 20 }}>You, for exploring. 🌀</p>
                            <div style={{ height: 80 }} />
                            <Big style={{ fontSize: 30 }}>VortexOS</Big>
                            <div style={{ height: 60 }} />
                        </Roll>
                        <Hint>Press Esc or click to close</Hint>
                    </CreditsLayer>,
                    document.body,
                )}
        </>
    );
};

export default EasterEggs;
