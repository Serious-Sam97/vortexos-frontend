import { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useProcessTable } from "../kernel/react/KernelProvider";
import { useProcessContext } from "../contexts/ProcessContext";
import { subscribeCrashLog, getCrashLog } from "../system/crashlog";
import {
    useAssistantEnabled,
    setAssistantEnabled,
    subscribeSay,
    quipFor,
    randomTip,
    greeting,
    crashLine,
    type AssistantSpeech,
} from "../system/assistant";

/**
 * "Vortex" — a Clippy-style desktop assistant, but an original animated portal
 * sprite drawn entirely in SVG/CSS. It bobs in the corner, blinks, and pipes up
 * with a speech bubble when an app opens, when something crashes, when you've
 * been idle a while, or when you click it. Dismissable; re-openable from Help.
 */

const SHOW_MS = 9000; // how long a bubble stays up
const QUIP_COOLDOWN = 6000; // min gap between app-open quips
const IDLE_AFTER = 30000; // user considered idle after this
const IDLE_TIP_GAP = 75000; // min gap between unprompted idle tips
const IDLE_CHECK = 12000; // how often the idle check runs

/* ---------------------------------------------------------------- animations */
const bob = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`;
const glowPulse = keyframes`
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
`;
const blink = keyframes`
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.08); }
`;
const swirlSpin = keyframes`to { transform: rotate(360deg); }`;
const bounceIn = keyframes`
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
`;
const pop = keyframes`
    0% { transform: scale(1); }
    40% { transform: scale(1.16) rotate(-4deg); }
    100% { transform: scale(1); }
`;

const Layer = styled.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 58000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
`;

const Bubble = styled.div`
    pointer-events: auto;
    position: relative;
    max-width: 250px;
    background: #fffef2;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 11px 13px 12px;
    font-size: 13px;
    line-height: 1.5;
    color: #1a1a1a;
    box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.25);
    animation: ${bounceIn} 0.28s cubic-bezier(0.18, 0.9, 0.3, 1.2);
    /* little tail toward the sprite (bottom-right) */
    &::after {
        content: "";
        position: absolute;
        right: 26px;
        bottom: -9px;
        width: 14px;
        height: 14px;
        background: #fffef2;
        border-right: 1px solid #2a2a2a;
        border-bottom: 1px solid #2a2a2a;
        transform: rotate(45deg);
    }
`;

const BubbleName = styled.div`
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
    background: linear-gradient(90deg, #d6177f, #0aa89a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const ActionRow = styled.div`
    margin-top: 9px;
    display: flex;
    gap: 8px;
`;

const SmallBtn = styled.button`
    font-size: 12px;
    padding: 3px 11px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`;

const LinkBtn = styled.button`
    font-size: 12px;
    background: none;
    border: none;
    color: #555;
    text-decoration: underline;
    cursor: pointer;
    padding: 3px 2px;
    &:hover {
        color: #000;
    }
`;

const SpriteWrap = styled.div`
    pointer-events: auto;
    position: relative;
    width: 84px;
    height: 84px;
    cursor: pointer;
    animation: ${bob} 3.4s ease-in-out infinite;
    &:hover .vx-hide {
        opacity: 1;
    }
`;

const Popper = styled.div<{ $pop: number }>`
    width: 100%;
    height: 100%;
    /* re-keyed by $pop to retrigger the pop animation on each speak */
    animation: ${pop} 0.5s ease;
`;

const Glow = styled.div`
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff2d9577 0%, #00e5d000 70%);
    animation: ${glowPulse} 2.6s ease-in-out infinite;
    pointer-events: none;
`;

const HideDot = styled.button`
    position: absolute;
    top: -2px;
    right: -2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #000;
    background: #c0c0c0;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 2;
    &:active {
        background: #a0a0a0;
    }
`;

const Eyes = styled.g`
    transform-origin: 50px 46px;
    animation: ${blink} 4.5s infinite;
`;
const Swirl = styled.path`
    transform-origin: 50px 50px;
    animation: ${swirlSpin} 7s linear infinite;
`;

const VortexAssistant: React.FC = () => {
    const enabled = useAssistantEnabled();
    const table = useProcessTable();
    const { addProcess } = useProcessContext();

    const [speech, setSpeech] = useState<AssistantSpeech | null>(null);
    const [popN, setPopN] = useState(0);

    const prevPids = useRef<Set<string>>(new Set());
    const tableReady = useRef(false);
    const lastQuip = useRef(0);
    const lastSpoke = useRef(0);
    const lastActivity = useRef(Date.now());
    const seenCrashes = useRef(getCrashLog().length);
    const greeted = useRef(false);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const speak = useCallback((s: AssistantSpeech) => {
        lastSpoke.current = Date.now();
        setSpeech(s);
        setPopN((n) => n + 1);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setSpeech(null), SHOW_MS);
    }, []);

    const launch = useCallback(
        (exec: string, name: string, icon: string) =>
            addProcess({ name, icon, componentName: exec } as never),
        [addProcess],
    );

    /* one-time greeting per mount */
    useEffect(() => {
        if (!enabled || greeted.current) return;
        greeted.current = true;
        // No cancelling cleanup: StrictMode's double-invoke would clear the timer
        // and the ref guard would block rescheduling (see WelcomeCenter).
        setTimeout(() => speak({ text: greeting() }), 2200);
    }, [enabled, speak]);

    /* track user activity for idle tips */
    useEffect(() => {
        if (!enabled) return;
        const bump = () => (lastActivity.current = Date.now());
        const evs: (keyof WindowEventMap)[] = ["mousemove", "mousedown", "keydown", "wheel"];
        evs.forEach((e) => window.addEventListener(e, bump, { passive: true }));
        const iv = setInterval(() => {
            const now = Date.now();
            const idle = now - lastActivity.current > IDLE_AFTER;
            const quiet = now - lastSpoke.current > IDLE_TIP_GAP;
            if (idle && quiet && !document.hidden) speak({ text: randomTip() });
        }, IDLE_CHECK);
        return () => {
            evs.forEach((e) => window.removeEventListener(e, bump));
            clearInterval(iv);
        };
    }, [enabled, speak]);

    /* react to crashes */
    useEffect(() => {
        if (!enabled) return;
        return subscribeCrashLog(() => {
            const logEntries = getCrashLog();
            if (logEntries.length <= seenCrashes.current) {
                seenCrashes.current = logEntries.length;
                return;
            }
            seenCrashes.current = logEntries.length;
            speak({
                text: crashLine(),
                action: { label: "Task Manager", run: () => launch("task_manager", "Task Manager", "/task_manager.png") },
            });
        });
    }, [enabled, speak, launch]);

    /* external say() */
    useEffect(() => {
        if (!enabled) return;
        return subscribeSay((s) => speak(s));
    }, [enabled, speak]);

    /* contextual quip when an app opens (mirrors SystemFeedback's diff) */
    useEffect(() => {
        const cur = new Set(table.map((p) => p.pid));
        if (tableReady.current && enabled) {
            const added = table.find((p) => !prevPids.current.has(p.pid));
            const now = Date.now();
            if (added && now - lastQuip.current > QUIP_COOLDOWN) {
                const line = quipFor(added.exec);
                if (line) {
                    lastQuip.current = now;
                    speak({ text: line });
                }
            }
        }
        tableReady.current = true;
        prevPids.current = cur;
    }, [table, enabled, speak]);

    if (!enabled) return null;

    return (
        <Layer>
            {speech && (
                <Bubble role="status">
                    <BubbleName>Vortex</BubbleName>
                    <div>{speech.text}</div>
                    {speech.action && (
                        <ActionRow>
                            <SmallBtn
                                onClick={() => {
                                    speech.action!.run();
                                    setSpeech(null);
                                }}
                            >
                                {speech.action.label}
                            </SmallBtn>
                            <LinkBtn onClick={() => setSpeech(null)}>Dismiss</LinkBtn>
                        </ActionRow>
                    )}
                </Bubble>
            )}

            <SpriteWrap
                title="Vortex — click for a tip"
                onClick={() => speak({ text: randomTip() })}
            >
                <HideDot
                    className="vx-hide"
                    title="Hide Vortex (re-enable from Help)"
                    onClick={(e) => {
                        e.stopPropagation();
                        setAssistantEnabled(false);
                    }}
                >
                    ×
                </HideDot>
                <Glow />
                <Popper key={popN} $pop={popN}>
                    <svg viewBox="0 0 100 100" width={84} height={84} style={{ display: "block" }}>
                        <defs>
                            <radialGradient id="vx-body" cx="42%" cy="36%" r="70%">
                                <stop offset="0%" stopColor="#ff8fd4" />
                                <stop offset="45%" stopColor="#ff2d95" />
                                <stop offset="100%" stopColor="#3a0a6b" />
                            </radialGradient>
                            <linearGradient id="vx-rim" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#ff2d95" />
                                <stop offset="100%" stopColor="#00e5d0" />
                            </linearGradient>
                        </defs>

                        {/* body */}
                        <circle cx="50" cy="50" r="33" fill="url(#vx-body)" stroke="url(#vx-rim)" strokeWidth="3" />
                        {/* inner swirl — the vortex motif */}
                        <Swirl
                            d="M50 30 A20 20 0 1 1 30 50"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.55"
                        />
                        {/* eyes */}
                        <Eyes>
                            <ellipse cx="40" cy="46" rx="7" ry="9" fill="#fff" />
                            <ellipse cx="60" cy="46" rx="7" ry="9" fill="#fff" />
                            <circle cx="41.5" cy="47" r="3.4" fill="#1a0033" />
                            <circle cx="61.5" cy="47" r="3.4" fill="#1a0033" />
                            <circle cx="43" cy="45" r="1.1" fill="#fff" />
                            <circle cx="63" cy="45" r="1.1" fill="#fff" />
                        </Eyes>
                        {/* smile */}
                        <path
                            d="M42 62 Q50 69 58 62"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            opacity="0.85"
                        />
                    </svg>
                </Popper>
            </SpriteWrap>
        </Layer>
    );
};

export default VortexAssistant;
