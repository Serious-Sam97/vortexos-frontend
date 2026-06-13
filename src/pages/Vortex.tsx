import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import { useOSContext } from "../contexts/OSContext";

const Vortex: React.FC = () => {
    const { cursor, crt } = useOSContext();

    return (
        <div
            style={{ position: "fixed", inset: 0, overflow: "hidden", cursor }}
            onContextMenu={(e) => e.preventDefault()} // suppress the browser menu; the desktop shows its own
        >
            <Desktop />
            <WindowManager />
            <WMenu />

            {crt && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        pointerEvents: "none",
                        zIndex: 1000000,
                        background:
                            "repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
                        mixBlendMode: "multiply",
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 150px rgba(0,0,0,0.55)" }} />
                </div>
            )}
        </div>
    );
};

export default Vortex;
