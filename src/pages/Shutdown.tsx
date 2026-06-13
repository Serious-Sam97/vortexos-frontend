import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "react95";
import w95 from "/w95.png";
import { playShutdown } from "../system/sounds";

const Shutdown: React.FC = () => {
    const navigate = useNavigate();
    const [phase, setPhase] = useState<"closing" | "off">("closing");

    useEffect(() => {
        playShutdown();
        const t = setTimeout(() => setPhase("off"), 2600);
        return () => clearTimeout(t);
    }, []);

    if (phase === "closing") {
        return (
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "#008080",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                }}
            >
                <img src={w95} width={110} alt="" />
                <h1 style={{ fontWeight: 400, letterSpacing: 3, margin: "16px 0 0" }}>VortexOS</h1>
                <p style={{ marginTop: 28, fontSize: 14 }}>Please wait while VortexOS shuts down…</p>
            </div>
        );
    }

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 34,
            }}
        >
            <p
                style={{
                    color: "#ffa000",
                    fontSize: 26,
                    textAlign: "center",
                    padding: "0 20px",
                    textShadow: "0 0 10px rgba(255,160,0,0.35)",
                }}
            >
                It's now safe to turn off your computer.
            </p>
            <Button onClick={() => navigate("/")}>Restart</Button>
        </div>
    );
};

export default Shutdown;
