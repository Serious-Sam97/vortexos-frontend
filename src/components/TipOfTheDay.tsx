import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { win98TitleBar } from "../system/win98";
import {
    isWelcomeSeen,
    getTipsEnabled,
    setTipsEnabled,
    subscribeOpenTips,
    tipAt,
    TIPS,
} from "../system/welcome";

/**
 * The classic Win9x "Did you know?" startup tip. Shows once when a returning
 * user reaches the desktop (if enabled), right after the first-run Welcome for
 * new users, and on demand from Help. "Show tips at startup" persists.
 */

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 59000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Win = styled.div`
    width: 440px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 4px 4px 14px rgba(0, 0, 0, 0.45);
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
    gap: 14px;
    padding: 18px 16px;
`;

const Bulb = styled.div`
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fff7c0, #ffd83a 55%, #e0960a);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-shadow: 0 0 14px #ffd83a88;
`;

const TipPanel = styled.div`
    flex: 1;
    background: #ffffff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 12px 14px;
    min-height: 96px;
    font-size: 13px;
    line-height: 1.55;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 6px;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 12px;
`;

const Check = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`;

const Btn = styled.button`
    min-width: 84px;
    padding: 5px 12px;
    font-size: 13px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`;

const TipOfTheDay: React.FC = () => {
    const { username, isAuthenticated } = useAuth();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [enabled, setEnabled] = useState(getTipsEnabled());
    const shownThisSession = useRef(false);

    // Returning users: show once on reaching the desktop, if enabled. (New users
    // get it handed off by the Welcome wizard via openTips().)
    useEffect(() => {
        if (!isAuthenticated || shownThisSession.current) return;
        if (getTipsEnabled() && isWelcomeSeen(username || "user")) {
            shownThisSession.current = true;
            // No cancelling cleanup — see WelcomeCenter: the ref guard already
            // makes this fire once, and StrictMode's cleanup would otherwise
            // clear the timer before the guarded re-run could reschedule it.
            setTimeout(() => {
                setIndex(Math.floor(Date.now() / 86400000) % TIPS.length);
                setEnabled(true);
                setOpen(true);
            }, 900);
        }
    }, [isAuthenticated, username]);

    // On-demand (Help, or the Welcome hand-off).
    useEffect(
        () =>
            subscribeOpenTips(() => {
                shownThisSession.current = true;
                setEnabled(getTipsEnabled());
                setOpen(true);
            }),
        [],
    );

    const toggle = (on: boolean) => {
        setEnabled(on);
        setTipsEnabled(on);
    };

    if (!open) return null;

    return createPortal(
        <Backdrop>
            <Win role="dialog" aria-label="Tip of the Day">
                <TitleBar style={win98TitleBar(true)}>
                    <span>Tip of the Day</span>
                    <CloseBtn onClick={() => setOpen(false)} title="Close">
                        ×
                    </CloseBtn>
                </TitleBar>
                <Body>
                    <Bulb>💡</Bulb>
                    <TipPanel>
                        <Heading>Did you know…</Heading>
                        <div>{tipAt(index)}</div>
                    </TipPanel>
                </Body>
                <Footer>
                    <Check>
                        <input type="checkbox" checked={enabled} onChange={(e) => toggle(e.target.checked)} />
                        Show tips at startup
                    </Check>
                    <div style={{ display: "flex", gap: 8 }}>
                        <Btn onClick={() => setIndex((i) => i + 1)}>Next Tip</Btn>
                        <Btn onClick={() => setOpen(false)}>Close</Btn>
                    </div>
                </Footer>
            </Win>
        </Backdrop>,
        document.body,
    );
};

export default TipOfTheDay;
