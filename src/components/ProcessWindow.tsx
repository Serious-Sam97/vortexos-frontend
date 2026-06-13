import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useProcessContext } from "../contexts/ProcessContext";
import { Button, Window, WindowHeader } from "react95";
import { Process } from "../interfaces/Process";
import { useOSContext } from "../contexts/OSContext";
import { PidProvider } from "../kernel/react/pid";

interface ProcessWindowProp {
    process: Process;
}

const TASKBAR_HEIGHT = 40;

interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}

const ProcessWindow: React.FC<ProcessWindowProp> = ({ process }) => {
    const { changePriority, closeProcess, handleProceessLocationChange } = useProcessContext();
    const { changeCursor, minimized, minimize } = useOSContext();

    const [properties, setProperties] = useState({
        x: process.location?.x ?? 0,
        y: process.location?.y ?? 0,
    });
    const [dragging, setDragging] = useState(false);
    const [ghost, setGhost] = useState<Rect | null>(null);
    const [maximized, setMaximized] = useState(false);
    const [minimizing, setMinimizing] = useState(false);

    const windowRef = useRef<HTMLDivElement>(null);
    const dragStart = useRef<{ mouseX: number; mouseY: number; left: number; top: number; w: number; h: number } | null>(null);

    const isActive = process.priority === 0;
    const isMinimized = !!process.uuid && minimized.includes(process.uuid);

    // Sync external position changes (cascade / tile) into the local position,
    // except while the user is dragging.
    useEffect(() => {
        if (!dragging) setProperties({ x: process.location?.x ?? 0, y: process.location?.y ?? 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [process.location?.x, process.location?.y]);

    useEffect(() => {
        if (dragging) {
            changeCursor("Grabbing.cur");
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        } else {
            changeCursor("arrow.cur");
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);

    // ── classic wireframe drag: move only an outline, commit on release ──
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (maximized) return;
        if (process.uuid) changePriority(process, 0);
        const rect = windowRef.current?.getBoundingClientRect();
        if (!rect) return;
        dragStart.current = { mouseX: event.clientX, mouseY: event.clientY, left: rect.left, top: rect.top, w: rect.width, h: rect.height };
        setGhost({ x: rect.left, y: rect.top, w: rect.width, h: rect.height });
        setDragging(true);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!dragStart.current) return;
        const dx = event.clientX - dragStart.current.mouseX;
        const dy = event.clientY - dragStart.current.mouseY;
        setGhost({ x: dragStart.current.left + dx, y: dragStart.current.top + dy, w: dragStart.current.w, h: dragStart.current.h });
    };

    const handleMouseUp = (event: MouseEvent) => {
        setDragging(false);
        if (dragStart.current && process.uuid) {
            const dx = event.clientX - dragStart.current.mouseX;
            const dy = event.clientY - dragStart.current.mouseY;
            const next = { x: properties.x + dx, y: properties.y + dy };
            setProperties(next);
            handleProceessLocationChange(process.uuid, next);
        }
        setGhost(null);
        dragStart.current = null;
    };

    const doMinimize = () => {
        if (!process.uuid) return;
        if (maximized) {
            minimize(process.uuid);
            return;
        }
        setMinimizing(true);
        setTimeout(() => {
            if (process.uuid) minimize(process.uuid);
            setMinimizing(false);
        }, 150);
    };

    const stop = (e: React.MouseEvent) => e.stopPropagation();

    const animation = maximized ? undefined : minimizing ? "winMinimize 150ms ease-in forwards" : "winOpen 140ms ease-out";

    const windowStyle: React.CSSProperties = maximized
        ? {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: `calc(100vh - ${TASKBAR_HEIGHT}px)`,
              transform: "none",
              zIndex: isActive ? 9999 : process.priority + 1,
              userSelect: "none",
              display: isMinimized ? "none" : "flex",
              flexDirection: "column",
          }
        : {
              position: "absolute",
              top: `${properties.y}px`,
              left: `${properties.x}px`,
              transform: "translate(-50%, -50%)",
              zIndex: isActive ? 9999 : process.priority + 1,
              userSelect: "none",
              display: isMinimized ? "none" : undefined,
              animation,
          };

    return (
        <>
            <Window
                ref={windowRef}
                onClick={() => changePriority(process, 0)}
                key={process.uuid}
                resizable={!maximized}
                className="window"
                style={windowStyle}
            >
                <WindowHeader
                    onMouseDown={handleMouseDown}
                    onDoubleClick={() => setMaximized((m) => !m)}
                    className="window-title"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: isActive ? undefined : "#808080",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
                        <img src={process.icon} style={{ width: 18, height: 18, marginRight: 4 }} />
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {process.name}
                        </span>
                    </div>

                    <div style={{ display: "flex", gap: 2 }} onMouseDown={stop} onClick={stop}>
                        <ControlButton
                            label="Minimize"
                            onClick={doMinimize}
                            glyph={<span style={{ display: "block", width: 8, height: 2, background: "#000", marginTop: 5 }} />}
                        />
                        <ControlButton
                            label="Maximize"
                            onClick={() => setMaximized((m) => !m)}
                            glyph={<span style={{ display: "block", width: 9, height: 8, border: "1px solid #000", borderTopWidth: 2 }} />}
                        />
                        <ControlButton
                            label="Close"
                            onClick={() => process.uuid && closeProcess(process.uuid)}
                            glyph={<span style={{ fontWeight: "bold", fontSize: 11, lineHeight: "10px" }}>✕</span>}
                        />
                    </div>
                </WindowHeader>

                {process.component ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            ...(maximized ? { flex: 1, minHeight: 0, overflow: "auto" } : {}),
                        }}
                    >
                        <PidProvider pid={process.uuid ?? null}>{React.createElement(process.component)}</PidProvider>
                    </div>
                ) : (
                    ""
                )}
            </Window>

            {ghost &&
                createPortal(
                    <div
                        style={{
                            position: "fixed",
                            left: ghost.x,
                            top: ghost.y,
                            width: ghost.w,
                            height: ghost.h,
                            border: "2px dotted #fff",
                            mixBlendMode: "difference",
                            pointerEvents: "none",
                            zIndex: 100001,
                        }}
                    />,
                    document.body,
                )}
        </>
    );
};

const ControlButton: React.FC<{ glyph: React.ReactNode; onClick: () => void; label: string }> = ({ glyph, onClick, label }) => (
    <Button
        aria-label={label}
        onClick={onClick}
        style={{ width: 20, height: 18, minWidth: 0, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
        {glyph}
    </Button>
);

export default ProcessWindow;
