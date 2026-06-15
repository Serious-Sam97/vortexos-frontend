import { createContext, ReactNode, useContext, useEffect, useId, useRef, useState } from "react";
import styled from "styled-components";

/**
 * Shared Windows-98 application chrome. Every app composes these so the whole OS reads as one
 * tight, authentic 98 product — proper menu bars with accelerators, IE4 "coolbar" toolbars
 * (flat until hover, sunken when pressed), and sunken status bars with a resize grip. No loose,
 * bare-React surfaces.
 */

// ── AppShell: menu / toolbar / content / status, full-height flex column ───────────────
export const AppShell = styled.div<{ $minW?: number; $minH?: number }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: ${(p) => p.$minW ?? 360}px;
    min-height: ${(p) => p.$minH ?? 240}px;
    background: #c0c0c0;
`;

export const AppBody = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    overflow: hidden;
`;

// ── Menu bar ───────────────────────────────────────────────────────────────────────────
const MenuBarRow = styled.div.attrs({ className: "vx-menubar" })`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`;

const MenuLabel = styled.button.attrs({ className: "vx-menulabel" })<{ $open: boolean }>`
    border: none;
    background: ${(p) => (p.$open ? "#000080" : "transparent")};
    color: ${(p) => (p.$open ? "#fff" : "#000")};
    padding: 0 8px;
    font-size: 12px;
    cursor: default;
    font-family: inherit;
    &:hover {
        background: #000080;
        color: #fff;
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 9999;
    padding: 2px;
`;

const MenuItemRow = styled.div.attrs({ className: "vx-menuitem" })<{ $disabled?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 18px 3px 6px;
    font-size: 12px;
    cursor: ${(p) => (p.$disabled ? "default" : "pointer")};
    color: ${(p) => (p.$disabled ? "#808080" : "#000")};
    white-space: nowrap;
    &:hover {
        background: ${(p) => (p.$disabled ? "transparent" : "#000080")};
        color: ${(p) => (p.$disabled ? "#808080" : "#fff")};
    }
`;

/**
 * A dropdown menu item with an optional 16px icon in the left gutter and an optional
 * right-aligned shortcut hint (pass it as a second child <span>).
 */
export const MenuItem: React.FC<{
    icon?: string;
    $disabled?: boolean;
    children: ReactNode;
    onMouseDown?: (e: React.MouseEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
    title?: string;
}> = ({ icon, children, ...rest }) => (
    <MenuItemRow {...rest}>
        <span style={{ width: 16, flexShrink: 0, display: "inline-flex", justifyContent: "center" }}>
            {icon && <img src={icon} alt="" style={{ width: 16, height: 16 }} />}
        </span>
        <span style={{ flex: 1, display: "flex", justifyContent: "space-between", gap: 18 }}>{children}</span>
    </MenuItemRow>
);

export const MenuSep = styled.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;

/** A label with the first matching letter underlined (Win98 keyboard accelerator). */
function Accel({ label, accel }: { label: string; accel?: string }) {
    const ch = accel ?? label[0];
    const i = label.toLowerCase().indexOf(ch.toLowerCase());
    if (i < 0) return <>{label}</>;
    return (
        <>
            {label.slice(0, i)}
            <u>{label[i]}</u>
            {label.slice(i + 1)}
        </>
    );
}

// A menu bar coordinates its menus so the whole bar behaves like real Windows: clicking one
// menu opens it, and while ANY menu is open, hovering another top-level menu switches to it.
interface MenuBarCtx {
    openId: string | null;
    setOpenId: (id: string | null) => void;
}
const MenuBarContext = createContext<MenuBarCtx>({ openId: null, setOpenId: () => {} });

export const MenuBar: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [openId, setOpenId] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (openId === null) return;
        const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpenId(null); };
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenId(null); };
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
    }, [openId]);
    return (
        <MenuBarContext.Provider value={{ openId, setOpenId }}>
            <MenuBarRow ref={ref}>{children}</MenuBarRow>
        </MenuBarContext.Provider>
    );
};

/** A single top-level menu (e.g. "File"). Click to open; hover-switches while the bar is active. */
export const Menu: React.FC<{ label: string; accel?: string; children: ReactNode; disabled?: boolean; onOpen?: () => void }> = ({ label, accel, children, disabled, onOpen }) => {
    const id = useId();
    const { openId, setOpenId } = useContext(MenuBarContext);
    const open = openId === id;

    const openMe = () => { if (disabled) return; onOpen?.(); setOpenId(id); };
    const onClick = () => (disabled ? undefined : open ? setOpenId(null) : openMe());
    // hover-to-switch: only when the bar is already showing some other menu
    const onEnter = () => { if (!disabled && openId !== null && openId !== id) openMe(); };

    return (
        <div style={{ position: "relative" }} onMouseEnter={onEnter}>
            <MenuLabel $open={open} disabled={disabled} onClick={onClick}>
                <Accel label={label} accel={accel} />
            </MenuLabel>
            {open && <Dropdown onClick={() => setOpenId(null)}>{children}</Dropdown>}
        </div>
    );
};

// ── Toolbar (IE4 coolbar) ────────────────────────────────────────────────────────────
export const Toolbar = styled.div`
    display: flex;
    align-items: center;
    gap: 1px;
    padding: 2px 2px 2px 6px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    flex-shrink: 0;
    flex-wrap: wrap;
    position: relative;
    /* the coolbar gripper */
    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 4px;
        bottom: 4px;
        width: 3px;
        border-left: 1px solid #ffffff;
        border-right: 1px solid #808080;
    }
`;

export const ToolButton = styled.button.attrs({ className: "vx-toolbtn" })<{ $active?: boolean }>`
    min-width: 23px;
    height: 22px;
    padding: 0 5px;
    font-size: 12px;
    font-family: inherit;
    color: #000;
    cursor: default;
    background: #c0c0c0;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 1px solid;
    border-color: ${(p) => (p.$active ? "#808080 #ffffff #ffffff #808080" : "transparent")};
    &:hover {
        border-color: ${(p) => (p.$active ? "#808080 #ffffff #ffffff #808080" : "#ffffff #808080 #808080 #ffffff")};
    }
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
    &:disabled {
        color: #808080;
        border-color: transparent;
    }
`;

export const ToolSep = styled.div`
    width: 2px;
    height: 18px;
    margin: 0 3px;
    border-left: 1px solid #808080;
    border-right: 1px solid #ffffff;
`;

// ── Status bar ──────────────────────────────────────────────────────────────────────
const StatusRow = styled.div`
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 2px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    flex-shrink: 0;
    font-size: 11px;
`;

export const StatusPanel = styled.div<{ $flex?: number }>`
    flex: ${(p) => p.$flex ?? 0} 1 auto;
    min-width: 0;
    padding: 1px 6px;
    border: 1px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StatusBar: React.FC<{ children: ReactNode }> = ({ children }) => (
    <StatusRow>
        {children}
        <div style={{ width: 14, alignSelf: "stretch", position: "relative" }}>
            {/* resize grip dots */}
            <svg viewBox="0 0 14 14" width="14" height="100%" style={{ position: "absolute", bottom: 0, right: 0 }}>
                {[0, 1, 2].map((r) => [0, 1, 2].filter((c) => c >= r).map((c) => (
                    <g key={`${r}-${c}`}>
                        <rect x={4 + c * 3} y={4 + r * 3} width="2" height="2" fill="#ffffff" />
                        <rect x={4 + c * 3} y={4 + r * 3} width="1" height="1" fill="#808080" />
                    </g>
                )))}
            </svg>
        </div>
    </StatusRow>
);
