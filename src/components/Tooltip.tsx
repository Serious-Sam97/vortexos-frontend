import { ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** A classic Win95 tooltip — pale-yellow box that appears below the cursor after a short hover. */
export const Tooltip: React.FC<{ text: string; children: ReactNode }> = ({ text, children }) => {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const schedule = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setPos({ x, y }), 500);
    };
    const hide = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = null;
        setPos(null);
    };

    return (
        <span style={{ display: "contents" }} onMouseEnter={schedule} onMouseLeave={hide} onMouseDown={hide}>
            {children}
            {pos &&
                text &&
                createPortal(
                    <div
                        style={{
                            position: "fixed",
                            left: pos.x + 12,
                            top: pos.y + 18,
                            background: "#ffffe1",
                            border: "1px solid #000",
                            padding: "1px 5px",
                            fontSize: 12,
                            color: "#000",
                            pointerEvents: "none",
                            zIndex: 3000000,
                            whiteSpace: "nowrap",
                            boxShadow: "1px 1px 1px rgba(0,0,0,0.3)",
                        }}
                    >
                        {text}
                    </div>,
                    document.body,
                )}
        </span>
    );
};

export default Tooltip;
