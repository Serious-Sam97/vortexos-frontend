import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { useProcessContext } from "../contexts/ProcessContext";
import { VortexLogo } from "./VortexLogo";
import { win98TitleBar } from "../system/win98";
import {
    isWelcomeSeen,
    markWelcomeSeen,
    subscribeOpenWelcome,
    getTipsEnabled,
    openTips,
} from "../system/welcome";

/**
 * The first-run Welcome — a classic Win98 setup-wizard window (colored left
 * sidebar + stepped content) that introduces the real features of VortexOS.
 * Shows automatically the first time each user reaches the desktop, and can be
 * re-opened any time from Help. On finish it hands off to the Tip of the Day.
 */

interface Step {
    title: string;
    body: React.ReactNode;
    action?: { label: string; run: () => void };
}

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 60000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wizard = styled.div`
    width: 540px;
    max-width: 94vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 5px 5px 18px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`;

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`;

const CloseBtn = styled.button`
    width: 18px;
    height: 18px;
    line-height: 1;
    font-size: 12px;
    font-weight: bold;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`;

const Body = styled.div`
    display: flex;
    height: 300px;
`;

const Sidebar = styled.div`
    width: 150px;
    flex-shrink: 0;
    background: linear-gradient(160deg, #1d0540 0%, #3a0a6b 45%, #00231f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px;
`;

const SideText = styled.div`
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
    flex: 1;
    padding: 18px 20px;
    background: #c0c0c0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.55;
`;

const StepTitle = styled.h2`
    margin: 0 0 10px;
    font-size: 17px;
    color: #000080;
`;

const ActionBtn = styled.button`
    align-self: flex-start;
    margin-top: 14px;
    padding: 5px 16px;
    font-size: 13px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #808080;
    box-shadow: inset 0 1px 0 #ffffff;
`;

const Dots = styled.div`
    display: flex;
    gap: 6px;
`;

const Dot = styled.span<{ $on: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $on }) => ($on ? "#000080" : "#808080")};
    box-shadow: ${({ $on }) => ($on ? "0 0 5px #1084d0" : "none")};
`;

const NavBtn = styled.button<{ $primary?: boolean }>`
    min-width: 78px;
    padding: 5px 12px;
    font-size: 13px;
    font-weight: ${({ $primary }) => ($primary ? "bold" : "normal")};
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:disabled {
        color: #808080;
        cursor: default;
    }
    &:active:not(:disabled) {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`;

const Check = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`;

const WelcomeCenter: React.FC = () => {
    const { username, isAuthenticated } = useAuth();
    const { addProcess } = useProcessContext();
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [dontShow, setDontShow] = useState(true);
    const autoChecked = useRef(false);

    const launch = (exec: string, name: string, icon: string) =>
        addProcess({ name, icon, componentName: exec } as never);

    const steps: Step[] = [
        {
            title: `Welcome${username ? `, ${username}` : ""}!`,
            body: (
                <p>
                    This is <b>VortexOS</b> — a desktop operating system that runs in your browser, built on a{" "}
                    <b>real microkernel</b>: a virtual filesystem, processes, a command shell and a window manager.
                    No emulator, no clone. Let's take a quick tour.
                </p>
            ),
        },
        {
            title: "The Start menu & desktop",
            body: (
                <p>
                    Everything launches from the <b>Start</b> button. Drag desktop icons anywhere, right-click the
                    desktop for a menu, and use the taskbar tray for volume, the clock and notifications.
                </p>
            ),
        },
        {
            title: "Command Palette",
            body: (
                <p>
                    Press <b>Ctrl + Space</b> anywhere to open the Command Palette — a fuzzy launcher for every app
                    and system action. It's the fastest way to get around VortexOS.
                </p>
            ),
            action: {
                label: "Try it now",
                run: () => {
                    try {
                        window.dispatchEvent(
                            new KeyboardEvent("keydown", { key: " ", code: "Space", ctrlKey: true, bubbles: true }),
                        );
                    } catch {
                        /* best effort */
                    }
                },
            },
        },
        {
            title: "Apps & games",
            body: (
                <p>
                    Real productivity apps — <b>Notes</b>, <b>Paint</b>, <b>Calculator</b>, <b>WordPad</b> — save to
                    the filesystem. And a full games suite — <b>Solitaire</b>, <b>Minesweeper</b>, <b>FreeCell</b>,{" "}
                    <b>Snake</b> — with high scores synced to your account.
                </p>
            ),
            action: { label: "Play Solitaire", run: () => launch("solitaire", "Solitaire", "/solitaire.svg") },
        },
        {
            title: "Connect & personalize",
            body: (
                <p>
                    Other people are here too. Browse their shared files in <b>Network Neighborhood</b> and chat over{" "}
                    <b>WinPopup</b>. Make it yours in <b>Control Panel</b> — wallpaper, themes, screensavers, and the{" "}
                    <b>Serious Sam Style</b> vaporwave toggle.
                </p>
            ),
            action: {
                label: "Open Control Panel",
                run: () => launch("control_panel", "Control Panel", "/controlpanel.png"),
            },
        },
        {
            title: "You're all set",
            body: (
                <p>
                    That's the tour. You can re-open it any time from <b>Help ▸ Welcome Tour</b>. Welcome aboard —
                    enjoy VortexOS.
                    <br />
                    <br />
                    <i>— a creation by Serious Sam</i>
                </p>
            ),
        },
    ];

    const isLast = step === steps.length - 1;

    // Auto-show once per user on first reaching the desktop.
    useEffect(() => {
        if (!isAuthenticated || autoChecked.current) return;
        autoChecked.current = true;
        if (!isWelcomeSeen(username || "user")) {
            // No cancelling cleanup: under StrictMode the double-invoked effect's
            // cleanup would clear the timer and the ref-guarded re-run wouldn't
            // reschedule it. The ref already guarantees we only schedule once.
            setTimeout(() => {
                setStep(0);
                setOpen(true);
            }, 700);
        }
    }, [isAuthenticated, username]);

    // Re-open on demand (Help, etc.)
    useEffect(
        () =>
            subscribeOpenWelcome(() => {
                setStep(0);
                setOpen(true);
            }),
        [],
    );

    const finish = () => {
        if (dontShow) markWelcomeSeen(username || "user");
        setOpen(false);
        // Hand off to the Tip of the Day, classic startup style.
        if (getTipsEnabled()) setTimeout(() => openTips(), 350);
    };

    if (!open) return null;

    const current = steps[step];

    return createPortal(
        <Backdrop onMouseDown={(e) => e.target === e.currentTarget && finish()}>
            <Wizard role="dialog" aria-label="Welcome to VortexOS">
                <TitleBar style={win98TitleBar(true)}>
                    <span>Welcome to VortexOS</span>
                    <CloseBtn onClick={finish} title="Close">
                        ×
                    </CloseBtn>
                </TitleBar>
                <Body>
                    <Sidebar>
                        <VortexLogo size={92} vapor />
                        <SideText>VortexOS</SideText>
                    </Sidebar>
                    <Content>
                        <StepTitle>{current.title}</StepTitle>
                        <div>{current.body}</div>
                        {current.action && (
                            <ActionBtn onClick={current.action.run}>{current.action.label}</ActionBtn>
                        )}
                    </Content>
                </Body>
                <Footer>
                    <Check>
                        <input
                            type="checkbox"
                            checked={dontShow}
                            onChange={(e) => setDontShow(e.target.checked)}
                        />
                        Don't show this again
                    </Check>
                    <Dots>
                        {steps.map((_, i) => (
                            <Dot key={i} $on={i === step} />
                        ))}
                    </Dots>
                    <div style={{ display: "flex", gap: 8 }}>
                        <NavBtn onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
                            ‹ Back
                        </NavBtn>
                        {isLast ? (
                            <NavBtn $primary onClick={finish}>
                                Finish
                            </NavBtn>
                        ) : (
                            <NavBtn $primary onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
                                Next ›
                            </NavBtn>
                        )}
                    </div>
                </Footer>
            </Wizard>
        </Backdrop>,
        document.body,
    );
};

export default WelcomeCenter;
