import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "react95";
import styled, { keyframes } from "styled-components";
import bgImage from "/clouds.jpg";
import w95 from "/w95.png";
import { playStartup } from "../system/sounds";

const fillBar = keyframes`from { width: 0 } to { width: 100% }`;

const Splash = styled.div`
    position: fixed;
    inset: 0;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Boot = styled.div`
    position: fixed;
    inset: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const ProgressTrack = styled.div`
    width: 320px;
    height: 20px;
    margin-top: 48px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;

const ProgressFill = styled.div`
    height: 100%;
    background: linear-gradient(90deg, #000080, #1084d0);
    animation: ${fillBar} 2.1s linear forwards;
`;

const Intro: React.FC = () => {
    const navigate = useNavigate();
    const [booting, setBooting] = useState(false);

    const start = () => {
        playStartup(); // user gesture → audio is allowed to start
        setBooting(true);
        setTimeout(() => navigate("/vortex"), 2300);
    };

    if (booting) {
        return (
            <Boot>
                <img src={w95} width={110} alt="" />
                <h1 style={{ fontWeight: 400, letterSpacing: 3, margin: "16px 0 0" }}>VortexOS</h1>
                <ProgressTrack>
                    <ProgressFill />
                </ProgressTrack>
                <p style={{ color: "#9a9a9a", marginTop: 16, fontSize: 13 }}>Starting VortexOS…</p>
            </Boot>
        );
    }

    return (
        <Splash>
            <img src={w95} width={170} className="logo" alt="" />
            <h1 style={{ margin: "10px 0 4px", color: "#000" }}>VortexOS</h1>
            <Button primary onClick={start} style={{ marginTop: 8 }}>
                Are you ready?
            </Button>
            <p style={{ marginTop: 14, color: "#000" }}>By Serious Sam</p>
        </Splash>
    );
};

export default Intro;
