import { ReactNode, useEffect, useRef, useState } from "react";
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
const MenuBarRow = styled.div`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`;

const MenuLabel = styled.button<{ $open: boolean }>`
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

export const MenuItem = styled.div<{ $disabled?: boolean }>`
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding: 3px 18px 3px 22px;
    font-size: 12px;
    cursor: ${(p) => (p.$disabled ? "default" : "pointer")};
    color: ${(p) => (p.$disabled ? "#808080" : "#000")};
    white-space: nowrap;
    &:hover {
        background: ${(p) => (p.$disabled ? "transparent" : "#000080")};
        color: ${(p) => (p.$disabled ? "#808080" : "#fff")};
    }
`;

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

export const MenuBar: React.FC<{ children: ReactNode }> = ({ children }) => <MenuBarRow>{children}</MenuBarRow>;

/** A single top-level menu (e.g. "File") with a click-to-open dropdown. */
export const Menu: React.FC<{ label: string; accel?: string; children: ReactNode; disabled?: boolean; onOpen?: () => void }> = ({ label, accel, children, disabled, onOpen }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!open) return;
        const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, [open]);
    const toggle = () => {
        if (disabled) return;
        setOpen((o) => {
            if (!o) onOpen?.();
            return !o;
        });
    };
    return (
        <div ref={ref} style={{ position: "relative" }}>
            <MenuLabel $open={open} disabled={disabled} onClick={toggle}>
                <Accel label={label} accel={accel} />
            </MenuLabel>
            {open && <Dropdown onClick={() => setOpen(false)}>{children}</Dropdown>}
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

export const ToolButton = styled.button<{ $active?: boolean }>`
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
