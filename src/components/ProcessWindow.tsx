import React, { Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useProcessContext } from "../contexts/ProcessContext";
import { Button, MenuList, MenuListItem, Separator, Window, WindowHeader } from "react95";
import { Process } from "../interfaces/Process";
import { useOSContext } from "../contexts/OSContext";
import { PidProvider } from "../kernel/react/pid";
import { playMaximize, playMinimize } from "../system/sounds";
import { DrWatson } from "./DrWatson";
import { win98TitleBar } from "../system/win98";

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

/** Eight resize handles around a window — edges + corners. dx/dy say which edges move. */
const RESIZE_HANDLES: { key: string; dx: number; dy: number; cursor: string; box: React.CSSProperties }[] = [
    { key: "n", dx: 0, dy: -1, cursor: "ns-resize", box: { top: -3, left: 10, right: 10, height: 7 } },
    { key: "s", dx: 0, dy: 1, cursor: "ns-resize", box: { bottom: -3, left: 10, right: 10, height: 7 } },
    { key: "w", dx: -1, dy: 0, cursor: "ew-resize", box: { left: -3, top: 10, bottom: 10, width: 7 } },
    { key: "e", dx: 1, dy: 0, cursor: "ew-resize", box: { right: -3, top: 10, bottom: 10, width: 7 } },
    { key: "nw", dx: -1, dy: -1, cursor: "nwse-resize", box: { left: -3, top: -3, width: 14, height: 14 } },
    { key: "ne", dx: 1, dy: -1, cursor: "nesw-resize", box: { right: -3, top: -3, width: 14, height: 14 } },
    { key: "sw", dx: -1, dy: 1, cursor: "nesw-resize", box: { left: -3, bottom: -3, width: 14, height: 14 } },
    { key: "se", dx: 1, dy: 1, cursor: "nwse-resize", box: { right: -3, bottom: -3, width: 14, height: 14 } },
];

const SNAP_THRESHOLD = 22;

/** Aero-style snap target for a cursor near a screen edge (halves, quarters, top=full). */
function computeSnap(cx: number, cy: number): Rect | null {
    const W = window.innerWidth;
    const H = window.innerHeight - TASKBAR_HEIGHT; // work area height
    const nearL = cx <= SNAP_THRESHOLD;
    const nearR = cx >= W - SNAP_THRESHOLD;
    const nearT = cy <= SNAP_THRESHOLD;
    const nearB = cy >= H - SNAP_THRESHOLD;
    if (nearT && nearL) return { x: 0, y: 0, w: W / 2, h: H / 2 };
    if (nearT && nearR) return { x: W / 2, y: 0, w: W / 2, h: H / 2 };
    if (nearB && nearL) return { x: 0, y: H / 2, w: W / 2, h: H / 2 };
    if (nearB && nearR) return { x: W / 2, y: H / 2, w: W / 2, h: H / 2 };
    if (nearL) return { x: 0, y: 0, w: W / 2, h: H };
    if (nearR) return { x: W / 2, y: 0, w: W / 2, h: H };
    if (nearT) return { x: 0, y: 0, w: W, h: H };
    return null;
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
    const [sysMenu, setSysMenu] = useState(false);
    const [size, setSize] = useState<{ w: number; h: number } | null>(null);
    const resizeStart = useRef<{ mouseX: number; mouseY: number; w: number; h: number; left: number; top: number; dx: number; dy: number } | null>(null);

    useEffect(() => {
        if (!sysMenu) return;
        const close = () => setSysMenu(false);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [sysMenu]);

    const windowRef = useRef<HTMLDivElement>(null);
    const dragStart = useRef<{ mouseX: number; mouseY: number; left: number; top: number; w: number; h: number } | null>(null);
    const snapTarget = useRef<Rect | null>(null);

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
        // Near a screen edge → preview the snap tile; otherwise the normal drag ghost.
        const snap = computeSnap(event.clientX, event.clientY);
        snapTarget.current = snap;
        if (snap) {
            setGhost(snap);
        } else {
            const dx = event.clientX - dragStart.current.mouseX;
            const dy = event.clientY - dragStart.current.mouseY;
            setGhost({ x: dragStart.current.left + dx, y: dragStart.current.top + dy, w: dragStart.current.w, h: dragStart.current.h });
        }
    };

    const handleMouseUp = (event: MouseEvent) => {
        setDragging(false);
        const d = dragStart.current;
        const snap = snapTarget.current;
        if (snap && process.uuid) {
            // Tile the window to the snapped region.
            setMaximized(false);
            setSize({ w: snap.w, h: snap.h });
            const next = { x: Math.round(snap.x + snap.w / 2), y: Math.round(snap.y + snap.h / 2) };
            setProperties(next);
            handleProceessLocationChange(process.uuid, next);
        } else if (d && process.uuid) {
            let left = d.left + (event.clientX - d.mouseX);
            let top = d.top + (event.clientY - d.mouseY);
            // keep the title bar reachable: never fully off-screen, never under the taskbar
            left = Math.min(Math.max(left, 80 - d.w), window.innerWidth - 80);
            top = Math.min(Math.max(top, 0), window.innerHeight - TASKBAR_HEIGHT - 28);
            const next = { x: Math.round(left + d.w / 2), y: Math.round(top + d.h / 2) };
            setProperties(next);
            handleProceessLocationChange(process.uuid, next);
        }
        setGhost(null);
        snapTarget.current = null;
        dragStart.current = null;
    };

    const toggleMaximize = () => {
        playMaximize();
        setMaximized((m) => !m);
    };

    const doMinimize = () => {
        playMinimize();
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

    // ── window resizing (drag any edge or corner) ───────────────────────
    // dx/dy ∈ {-1,0,1}: which edges move. The opposite edge stays anchored.
    const MIN_W = 240;
    const MIN_H = 150;
    const onResizeMove = (e: MouseEvent) => {
        const s = resizeStart.current;
        if (!s) return;
        const ddx = e.clientX - s.mouseX;
        const ddy = e.clientY - s.mouseY;
        let w = s.w;
        let h = s.h;
        let left = s.left;
        let top = s.top;
        if (s.dx === 1) w = Math.max(MIN_W, s.w + ddx);
        if (s.dx === -1) {
            w = Math.max(MIN_W, s.w - ddx);
            left = s.left + (s.w - w);
        }
        if (s.dy === 1) h = Math.max(MIN_H, s.h + ddy);
        if (s.dy === -1) {
            h = Math.max(MIN_H, s.h - ddy);
            top = s.top + (s.h - h);
        }
        setSize({ w, h });
        setProperties({ x: left + w / 2, y: top + h / 2 });
    };
    const onResizeUp = () => {
        resizeStart.current = null;
        document.removeEventListener("mousemove", onResizeMove);
        document.removeEventListener("mouseup", onResizeUp);
    };
    const startResize = (dx: number, dy: number) => (e: React.MouseEvent) => {
        if (maximized) return;
        e.preventDefault();
        e.stopPropagation();
        const rect = windowRef.current?.getBoundingClientRect();
        if (!rect) return;
        resizeStart.current = { mouseX: e.clientX, mouseY: e.clientY, w: rect.width, h: rect.height, left: rect.left, top: rect.top, dx, dy };
        document.addEventListener("mousemove", onResizeMove);
        document.addEventListener("mouseup", onResizeUp);
    };

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
              display: isMinimized ? "none" : size ? "flex" : undefined,
              flexDirection: "column",
              animation: size ? undefined : animation,
              minWidth: 240,
              minHeight: 150,
              maxWidth: "100vw",
              maxHeight: `calc(100vh - ${TASKBAR_HEIGHT}px)`,
              ...(size ? { width: size.w, height: size.h } : {}),
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
                    onDoubleClick={toggleMaximize}
                    className="window-title"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        ...win98TitleBar(isActive),
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", overflow: "hidden", position: "relative" }}>
                        <img
                            src={process.icon}
                            onMouseDown={(e) => e.stopPropagation()}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSysMenu((o) => !o);
                            }}
                            onDoubleClick={(e) => {
                                e.stopPropagation();
                                if (process.uuid) closeProcess(process.uuid);
                            }}
                            style={{ width: 18, height: 18, marginRight: 4, cursor: "pointer" }}
                        />
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {process.name}
                        </span>
                        {sysMenu && (
                            <MenuList
                                style={{ position: "absolute", left: 0, top: "100%", width: 150, zIndex: 100002 }}
                                onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
                            >
                                <MenuListItem disabled={!maximized} style={{ cursor: maximized ? "pointer" : "default" }} onClick={() => setMaximized(false)}>
                                    Restore
                                </MenuListItem>
                                <MenuListItem disabled>Move</MenuListItem>
                                <MenuListItem disabled>Size</MenuListItem>
                                <MenuListItem style={{ cursor: "pointer" }} onClick={doMinimize}>
                                    Minimize
                                </MenuListItem>
                                <MenuListItem disabled={maximized} style={{ cursor: maximized ? "default" : "pointer" }} onClick={() => setMaximized(true)}>
                                    Maximize
                                </MenuListItem>
                                <Separator />
                                <MenuListItem style={{ cursor: "pointer" }} onClick={() => process.uuid && closeProcess(process.uuid)}>
                                    Close
                                </MenuListItem>
                            </MenuList>
                        )}
                    </div>

                    <div style={{ display: "flex", gap: 2 }} onMouseDown={stop} onClick={stop}>
                        <ControlButton
                            label="Minimize"
                            onClick={doMinimize}
                            glyph={<span style={{ display: "block", width: 8, height: 2, background: "#000", marginTop: 5 }} />}
                        />
                        <ControlButton
                            label="Maximize"
                            onClick={toggleMaximize}
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
                            ...(maximized || size ? { flex: 1, minHeight: 0, overflow: "auto" } : {}),
                        }}
                    >
                        <PidProvider pid={process.uuid ?? null}>
                            <DrWatson
                                appName={process.name}
                                pid={process.uuid ?? null}
                                onClose={() => process.uuid && closeProcess(process.uuid)}
                            >
                                <Suspense
                                    fallback={<div style={{ padding: 24, textAlign: "center", color: "#000" }}>Loading {process.name}…</div>}
                                >
                                    {React.createElement(process.component)}
                                </Suspense>
                            </DrWatson>
                        </PidProvider>
                    </div>
                ) : (
                    ""
                )}

                {!maximized &&
                    RESIZE_HANDLES.map((hnd) => (
                        <div
                            key={hnd.key}
                            onMouseDown={startResize(hnd.dx, hnd.dy)}
                            style={{ position: "absolute", zIndex: 20, cursor: hnd.cursor, ...hnd.box }}
                        />
                    ))}
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
