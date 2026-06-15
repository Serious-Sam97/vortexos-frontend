import React from "react";
import type { PresenceStatus } from "../system/chat";

/**
 * A gradient-initial avatar derived deterministically from a username, with an
 * optional presence status dot. Used across the Connected Desktop (presence
 * lists, profile cards, shared cursors).
 */
function hashHue(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(h) % 360;
}

export const STATUS_COLOR: Record<PresenceStatus, string> = {
    active: "#22c55e",
    idle: "#e0a000",
    away: "#9aa0a6",
};

export const STATUS_LABEL: Record<PresenceStatus, string> = {
    active: "Active",
    idle: "Idle",
    away: "Away",
};

/** A stable gradient for a name (also handy for shared-cursor colours). */
export function avatarGradient(name: string): string {
    const hue = hashHue(name);
    return `linear-gradient(135deg, hsl(${hue} 72% 56%), hsl(${(hue + 40) % 360} 72% 42%))`;
}

/** A stable solid colour for a name — used for shared cursors / selections. */
export function nameColor(name: string): string {
    return `hsl(${hashHue(name)} 70% 45%)`;
}

export const Avatar: React.FC<{ name: string; size?: number; status?: PresenceStatus }> = ({ name, size = 32, status }) => {
    const initial = (name.trim()[0] || "?").toUpperCase();
    const dot = Math.max(8, Math.round(size * 0.32));
    return (
        <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
            <div
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: avatarGradient(name),
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: Math.round(size * 0.5),
                    border: "1px solid rgba(0,0,0,0.3)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4)",
                }}
            >
                {initial}
            </div>
            {status && (
                <span
                    title={STATUS_LABEL[status]}
                    style={{
                        position: "absolute",
                        right: -1,
                        bottom: -1,
                        width: dot,
                        height: dot,
                        borderRadius: "50%",
                        background: STATUS_COLOR[status],
                        border: "2px solid #c0c0c0",
                        boxSizing: "border-box",
                    }}
                />
            )}
        </div>
    );
};
