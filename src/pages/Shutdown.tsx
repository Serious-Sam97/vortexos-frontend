import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { useOSContext } from "../contexts/OSContext";
import { VortexLogo } from "../components/VortexLogo";
import { playShutdown } from "../system/sounds";

const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`;

const Full = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`;

const Closing = styled(Full)<{ $vapor: boolean }>`
    background: ${({ $vapor }) =>
        $vapor
            ? "radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)"
            : "#008080"};
    animation: ${fadeIn} 0.4s ease;
`;

const Wordmark = styled.h1<{ $vapor: boolean }>`
    margin: 22px 0 0;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({ $vapor }) =>
        $vapor
            ? "linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)"
            : "linear-gradient(90deg, #ffffff, #cfe9e9)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Off = styled(Full)`
    background: #000;
    gap: 34px;
`;

const SafeText = styled.p`
    color: #ffa000;
    font-size: 26px;
    text-align: center;
    padding: 0 20px;
    text-shadow: 0 0 10px rgba(255, 160, 0, 0.35);
    animation: ${fadeIn} 0.6s ease;
`;

const RestartButton = styled.button`
    padding: 9px 26px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    box-shadow: 0 0 18px #ff2d9555;
    transition: transform 0.12s ease;
    &:hover {
        transform: scale(1.04);
    }
`;

const Shutdown: React.FC = () => {
    const navigate = useNavigate();
    const { sssStyle } = useOSContext();
    const vapor = sssStyle;
    const [phase, setPhase] = useState<"closing" | "off">("closing");

    useEffect(() => {
        playShutdown();
        const t = setTimeout(() => setPhase("off"), 2600);
        return () => clearTimeout(t);
    }, []);

    if (phase === "closing") {
        return (
            <Closing $vapor={vapor}>
                <VortexLogo size={120} vapor={vapor} />
                <Wordmark $vapor={vapor}>VortexOS</Wordmark>
                <p style={{ marginTop: 26, fontSize: 14, color: vapor ? "#cfcfe0" : "#fff" }}>
                    Please wait while VortexOS shuts down…
                </p>
            </Closing>
        );
    }

    return (
        <Off>
            <SafeText>It's now safe to turn off your computer.</SafeText>
            <RestartButton onClick={() => navigate("/")}>Restart</RestartButton>
        </Off>
    );
};

export default Shutdown;
