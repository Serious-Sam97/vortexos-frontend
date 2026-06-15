import React, { Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useProcessContext } from "../contexts/ProcessContext";
import { MenuList, MenuListItem, Separator, Window, WindowHeader } from "react95";
import { Process } from "../interfaces/Process";
import { useOSContext } from "../contexts/OSContext";
import { PidProvider } from "../kernel/react/pid";
import { playMaximize, playMinimize } from "../system/sounds";
import { DrWatson } from "./DrWatson";
import { win98TitleBar } from "../system/win98";
import { useSettings } from "../system/settings";
import { useMobileShell, useViewport, taskbarHeight } from "../system/viewport";

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
    const settings = useSettings();
    const mobile = useMobileShell();
    // Touch chrome (bigger hit targets) on phones AND coarse-pointer tablets,
    // even when those tablets keep floating windows. Never on a mouse desktop.
    const touch = mobile || useViewport().coarse;

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
            document.addEventListener("pointermove", handleMouseMove);
            document.addEventListener("pointerup", handleMouseUp);
        } else {
            changeCursor("arrow.cur");
            document.removeEventListener("pointermove", handleMouseMove);
            document.removeEventListener("pointerup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("pointermove", handleMouseMove);
            document.removeEventListener("pointerup", handleMouseUp);
        };
    }, [dragging]);

    // ── classic wireframe drag: move only an outline, commit on release ──
    // Pointer events unify mouse + touch + pen so the WM is drag-able by finger.
    const handleMouseDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (maximized || mobile) return; // mobile windows are full-screen; no dragging
        if (process.uuid) changePriority(process, 0);
        const rect = windowRef.current?.getBoundingClientRect();
        if (!rect) return;
        dragStart.current = { mouseX: event.clientX, mouseY: event.clientY, left: rect.left, top: rect.top, w: rect.width, h: rect.height };
        setGhost({ x: rect.left, y: rect.top, w: rect.width, h: rect.height });
        setDragging(true);
    };

    const handleMouseMove = (event: PointerEvent) => {
        if (!dragStart.current) return;
        // Near a screen edge → preview the snap tile (when snapping is enabled);
        // otherwise either move the window live or show the classic wireframe ghost.
        const snap = settings.windowSnap ? computeSnap(event.clientX, event.clientY) : null;
        snapTarget.current = snap;
        if (snap) {
            setGhost(snap);
            return;
        }
        const dx = event.clientX - dragStart.current.mouseX;
        const dy = event.clientY - dragStart.current.mouseY;
        const w = dragStart.current.w;
        const h = dragStart.current.h;
        if (settings.liveDrag && process.uuid) {
            // Move the actual window in real time — keep the title bar on-screen.
            let left = dragStart.current.left + dx;
            let top = dragStart.current.top + dy;
            left = Math.min(Math.max(left, 80 - w), window.innerWidth - 80);
            top = Math.min(Math.max(top, 0), window.innerHeight - TASKBAR_HEIGHT - 28);
            setProperties({ x: Math.round(left + w / 2), y: Math.round(top + h / 2) });
            setGhost(null);
        } else {
            setGhost({ x: dragStart.current.left + dx, y: dragStart.current.top + dy, w, h });
        }
    };

    const handleMouseUp = (event: PointerEvent) => {
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

    // ── mobile title-bar gesture: swipe the title down to minimize the window ──
    const swipe = useRef<{ x: number; y: number } | null>(null);
    const onTitlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        handleMouseDown(e); // desktop/tablet drag; a no-op on the full-screen mobile shell
        if (mobile) swipe.current = { x: e.clientX, y: e.clientY };
    };
    const onTitlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (mobile && swipe.current) {
            const dy = e.clientY - swipe.current.y;
            const dx = Math.abs(e.clientX - swipe.current.x);
            if (dy > 60 && dx < 80) doMinimize();
        }
        swipe.current = null;
    };

    // ── window resizing (drag any edge or corner) ───────────────────────
    // dx/dy ∈ {-1,0,1}: which edges move. The opposite edge stays anchored.
    const MIN_W = 240;
    const MIN_H = 150;
    const onResizeMove = (e: PointerEvent) => {
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
        document.removeEventListener("pointermove", onResizeMove);
        document.removeEventListener("pointerup", onResizeUp);
    };
    const startResize = (dx: number, dy: number) => (e: React.PointerEvent) => {
        if (maximized) return;
        e.preventDefault();
        e.stopPropagation();
        const rect = windowRef.current?.getBoundingClientRect();
        if (!rect) return;
        resizeStart.current = { mouseX: e.clientX, mouseY: e.clientY, w: rect.width, h: rect.height, left: rect.left, top: rect.top, dx, dy };
        document.addEventListener("pointermove", onResizeMove);
        document.addEventListener("pointerup", onResizeUp);
    };

    const animation = maximized ? undefined : minimizing ? "winMinimize 150ms ease-in forwards" : "winOpen 140ms ease-out";

    // On the touch shell every window is full-screen above the taskbar (the
    // running-apps strip is the switcher); no free-floating, snap or resize.
    const fullScreen = maximized || mobile;
    // Era window-corner rounding (XP/Aero round the top; classic = 0). Full-screen /
    // maximized windows stay square so they fill the screen edges flush.
    const radius = fullScreen ? "0" : "var(--vx-title-radius, 0)";
    // On the mobile shell, clear the notch (safe-area top) so the title bar is tappable.
    const topInset = mobile ? "env(safe-area-inset-top, 0px)" : "0px";
    const windowStyle: React.CSSProperties = fullScreen
        ? {
              position: "fixed",
              top: topInset,
              left: 0,
              width: "100vw",
              height: `calc(100vh - ${taskbarHeight(mobile)}px - ${topInset})`,
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
              borderRadius: radius,
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
                role="dialog"
                aria-label={process.name}
                style={windowStyle}
            >
                <WindowHeader
                    onPointerDown={onTitlePointerDown}
                    onPointerUp={onTitlePointerUp}
                    onDoubleClick={toggleMaximize}
                    className="window-title"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        touchAction: "none",
                        borderRadius: radius,
                        // Aero glass (no-op on classic eras: the var is unset → "none").
                        backdropFilter: "var(--vx-title-blur, none)",
                        WebkitBackdropFilter: "var(--vx-title-blur, none)" as never,
                        ...win98TitleBar(isActive),
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", overflow: "hidden", position: "relative" }}>
                        <img
                            src={process.icon}
                            onPointerDown={(e) => e.stopPropagation()}
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

                    <div style={{ display: "flex", gap: 2 }} onPointerDown={stop} onClick={stop}>
                        <ControlButton
                            label="Minimize"
                            big={touch}
                            onClick={doMinimize}
                            glyph={<span style={{ display: "block", width: 8, height: 2, background: "currentColor", marginTop: 5 }} />}
                        />
                        {!mobile && (
                            <ControlButton
                                label="Maximize"
                                big={touch}
                                onClick={toggleMaximize}
                                glyph={<span style={{ display: "block", width: 9, height: 8, border: "1px solid currentColor", borderTopWidth: 2 }} />}
                            />
                        )}
                        <ControlButton
                            label="Close"
                            big={touch}
                            close
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
                            ...(fullScreen || size ? { flex: 1, minHeight: 0, overflow: "auto" } : {}),
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

                {!fullScreen &&
                    RESIZE_HANDLES.map((hnd) => (
                        <div
                            key={hnd.key}
                            onPointerDown={startResize(hnd.dx, hnd.dy)}
                            style={{ position: "absolute", zIndex: 20, cursor: hnd.cursor, touchAction: "none", ...hnd.box }}
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

/**
 * Window control button. Classic Win9x gray-bevel look by default; each era
 * restyles it via the `.vx-ctrl` / `.vx-ctrl-close` classes (see index.css —
 * XP rounded blue + red close, Aero glass, Vortex neon, DOS flat). Glyphs use
 * currentColor so they follow the per-era button colour.
 */
const Ctrl = styled.button<{ $big?: boolean }>`
    width: ${({ $big }) => ($big ? 32 : 20)}px;
    height: ${({ $big }) => ($big ? 26 : 18)}px;
    min-width: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`;

const ControlButton: React.FC<{
    glyph: React.ReactNode;
    onClick: () => void;
    label: string;
    big?: boolean;
    close?: boolean;
}> = ({ glyph, onClick, label, big, close }) => (
    <Ctrl
        aria-label={label}
        onClick={onClick}
        $big={big}
        className={close ? "vx-ctrl vx-ctrl-close" : "vx-ctrl vx-ctrl-minmax"}
    >
        {glyph}
    </Ctrl>
);

export default ProcessWindow;
