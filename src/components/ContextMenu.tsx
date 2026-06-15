import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useMobileShell } from "../system/viewport";

/**
 * An authentic Windows 98 right-click menu: raised panel, icon gutter, hover
 * highlight, separators, check/radio marks, shortcut hints, and one level of
 * fly-out submenus (which flip to the left near the screen edge). Portalled to
 * document.body so it's never clipped, and closes on Escape.
 */
export interface CtxItem {
    separator?: boolean;
    label?: string;
    icon?: string; // image src shown in the gutter
    glyph?: string; // text glyph alternative (e.g. an emoji)
    checked?: boolean; // shows a ✓ in the gutter
    bullet?: boolean; // shows a ● in the gutter (radio)
    shortcut?: string; // right-aligned hint, e.g. "Ctrl+C"
    disabled?: boolean;
    onClick?: () => void;
    submenu?: CtxItem[];
}

const Panel = styled.div`
    position: fixed;
    z-index: 100000;
    min-width: 168px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 2px;
    font-size: 13px;
    user-select: none;
`;

const Row = styled.div<{ $disabled?: boolean; $touch?: boolean }>`
    display: flex;
    align-items: center;
    height: ${({ $touch }) => ($touch ? "36px" : "22px")};
    padding: 0 6px 0 0;
    color: ${({ $disabled }) => ($disabled ? "#808080" : "#000")};
    cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
    white-space: nowrap;
    &:hover {
        background: ${({ $disabled }) => ($disabled ? "transparent" : "#000080")};
        color: ${({ $disabled }) => ($disabled ? "#808080" : "#fff")};
    }
    &:hover .ctx-shortcut {
        color: #cfd6ff;
    }
`;

const Gutter = styled.div`
    width: 22px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`;

const Shortcut = styled.span`
    margin-left: auto;
    padding-left: 22px;
    font-size: 11px;
    color: #555;
`;

const Sep = styled.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;

const Arrow = styled.span`
    margin-left: auto;
    padding-left: 14px;
    font-size: 10px;
`;

const SUBMENU_W = 176;

const Menu: React.FC<{ items: CtxItem[]; x: number; y: number; onClose: () => void; touch: boolean }> = ({ items, x, y, onClose, touch }) => {
    const [openSub, setOpenSub] = useState<{ index: number; x: number; y: number } | null>(null);

    // Position a fly-out beside its parent row, flipping left near the right edge
    // and clamping on-screen (so it stays reachable even on a narrow phone).
    const subPosFor = (i: number, el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        const toLeft = r.right + SUBMENU_W > window.innerWidth;
        let sx = toLeft ? r.left - SUBMENU_W + 3 : r.right - 3;
        sx = Math.max(4, Math.min(sx, window.innerWidth - SUBMENU_W - 4));
        return { index: i, x: sx, y: r.top - 3 };
    };

    return (
        <Panel
            style={{ left: x, top: y }}
            // Stop pointer/mouse-down AND click from bubbling to owners. Owners now
            // open marquee/selection on pointerdown (touch pass), and the menu is a
            // React-tree child of the desktop — without stopping pointerdown, a real
            // click's pointerdown reaches the desktop root and closes the menu BEFORE
            // the click fires, so the chosen option never runs.
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
        >
            {items.map((it, i) => {
                if (it.separator) return <Sep key={i} />;
                const hasSub = !!it.submenu?.length;
                return (
                    <Row
                        key={i}
                        $disabled={it.disabled}
                        $touch={touch}
                        // Desktop: open the fly-out on hover. Touch has no hover, so it
                        // opens on tap (handled in onClick) instead.
                        onMouseEnter={touch ? undefined : (e) => {
                            if (hasSub && !it.disabled) setOpenSub(subPosFor(i, e.currentTarget as HTMLElement));
                            else setOpenSub(null);
                        }}
                        onClick={(e) => {
                            if (it.disabled) return;
                            if (hasSub) {
                                // Tap toggles the fly-out (touch); on desktop hover already opened it.
                                if (touch) setOpenSub((s) => (s?.index === i ? null : subPosFor(i, e.currentTarget as HTMLElement)));
                                return;
                            }
                            it.onClick?.();
                            onClose();
                        }}
                    >
                        <Gutter>{it.checked ? "✓" : it.bullet ? "●" : it.glyph ? it.glyph : it.icon ? <img src={it.icon} alt="" style={{ width: 16, height: 16, objectFit: "contain" }} /> : ""}</Gutter>
                        <span>{it.label}</span>
                        {it.shortcut && !hasSub && <Shortcut className="ctx-shortcut">{it.shortcut}</Shortcut>}
                        {hasSub && <Arrow>▶</Arrow>}
                        {hasSub && openSub?.index === i && (
                            <Menu items={it.submenu!} x={openSub.x} y={openSub.y} onClose={onClose} touch={touch} />
                        )}
                    </Row>
                );
            })}
        </Panel>
    );
};

const ContextMenu: React.FC<{ items: CtxItem[]; x: number; y: number; onClose: () => void }> = ({ items, x, y, onClose }) => {
    const touch = useMobileShell();
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    // Keep the menu on-screen (taller rows on touch).
    const rowH = touch ? 36 : 22;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const px = Math.min(x, vw - 180);
    const py = Math.min(y, vh - items.length * rowH - 12);
    return createPortal(<Menu items={items} x={px} y={Math.max(4, py)} onClose={onClose} touch={touch} />, document.body);
};

export default ContextMenu;
