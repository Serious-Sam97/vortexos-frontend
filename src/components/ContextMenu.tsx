import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

/**
 * An authentic Windows 98 right-click menu: raised panel, icon gutter, hover
 * highlight, separators, check/radio marks, and one level of fly-out submenus.
 * Portalled to document.body so it's never clipped by its anchor.
 */
export interface CtxItem {
    separator?: boolean;
    label?: string;
    icon?: string; // image src shown in the gutter
    glyph?: string; // text glyph alternative (e.g. an emoji)
    checked?: boolean; // shows a ✓ in the gutter
    bullet?: boolean; // shows a ● in the gutter (radio)
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

const Row = styled.div<{ $disabled?: boolean }>`
    display: flex;
    align-items: center;
    height: 22px;
    padding: 0 6px 0 0;
    color: ${({ $disabled }) => ($disabled ? "#808080" : "#000")};
    cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
    white-space: nowrap;
    &:hover {
        background: ${({ $disabled }) => ($disabled ? "transparent" : "#000080")};
        color: ${({ $disabled }) => ($disabled ? "#808080" : "#fff")};
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

const Menu: React.FC<{ items: CtxItem[]; x: number; y: number; onClose: () => void }> = ({ items, x, y, onClose }) => {
    const [openSub, setOpenSub] = useState<{ index: number; x: number; y: number } | null>(null);

    return (
        <Panel
            style={{ left: x, top: y }}
            onMouseDown={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
        >
            {items.map((it, i) => {
                if (it.separator) return <Sep key={i} />;
                const hasSub = !!it.submenu?.length;
                return (
                    <Row
                        key={i}
                        $disabled={it.disabled}
                        onMouseEnter={(e) => {
                            if (hasSub && !it.disabled) {
                                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setOpenSub({ index: i, x: r.right - 3, y: r.top - 3 });
                            } else {
                                setOpenSub(null);
                            }
                        }}
                        onClick={() => {
                            if (it.disabled || hasSub) return;
                            it.onClick?.();
                            onClose();
                        }}
                    >
                        <Gutter>{it.checked ? "✓" : it.bullet ? "●" : it.glyph ? it.glyph : it.icon ? <img src={it.icon} alt="" style={{ width: 16, height: 16, objectFit: "contain" }} /> : ""}</Gutter>
                        <span>{it.label}</span>
                        {hasSub && <Arrow>▶</Arrow>}
                        {hasSub && openSub?.index === i && (
                            <Menu items={it.submenu!} x={openSub.x} y={openSub.y} onClose={onClose} />
                        )}
                    </Row>
                );
            })}
        </Panel>
    );
};

const ContextMenu: React.FC<{ items: CtxItem[]; x: number; y: number; onClose: () => void }> = ({ items, x, y, onClose }) => {
    // Keep the menu on-screen.
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const px = Math.min(x, vw - 180);
    const py = Math.min(y, vh - items.length * 22 - 12);
    return createPortal(<Menu items={items} x={px} y={Math.max(4, py)} onClose={onClose} />, document.body);
};

export default ContextMenu;
