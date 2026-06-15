import { useEffect, useSyncExternalStore } from "react";
import styled, { keyframes } from "styled-components";
import { useProcessContext } from "../contexts/ProcessContext";
import { subscribeNotifications, getActiveToasts, dismissToast, Toast } from "../system/notifications";
import { playDing } from "../system/sounds";

import InfoIcon from "/w95.png";

const TASKBAR_HEIGHT = 40;
const TOAST_TTL = 6000;

const slideIn = keyframes`
    from { transform: translateX(120%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
`;

const Stack = styled.div`
    position: fixed;
    right: 8px;
    bottom: ${TASKBAR_HEIGHT + 8}px;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    z-index: 100000;
    pointer-events: none;
`;

const Balloon = styled.div<{ $type: string }>`
    width: 260px;
    background: #ffffe1;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 0;
    font-size: 12px;
    pointer-events: auto;
    animation: ${slideIn} 0.18s ease-out;
`;

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--vx-title-active, linear-gradient(90deg, #000080, #1084d0));
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
`;

const accent: Record<string, string> = { info: "#000080", warning: "#806000", error: "#800000" };

const ToastItem: React.FC<{ toast: Toast; onOpenApp: (exec: string, name: string, icon: string) => void }> = ({ toast, onOpenApp }) => {
    useEffect(() => {
        playDing();
        const id = setTimeout(() => dismissToast(toast.id), TOAST_TTL);
        return () => clearTimeout(id);
    }, [toast.id]);

    const clickable = !!toast.action;
    const onClick = () => {
        if (toast.action?.kind === "open-app") {
            onOpenApp(toast.action.exec, toast.action.name, toast.action.icon);
        }
        dismissToast(toast.id);
    };

    return (
        <Balloon $type={toast.type}>
            <TitleBar
                // info uses the era title bar (styled default); warning/error keep
                // their semantic amber/red regardless of era.
                style={toast.type === "info" ? undefined : { background: `linear-gradient(90deg, ${accent[toast.type]}, #1084d0)` }}
            >
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <img src={toast.icon ?? InfoIcon} alt="" style={{ width: 14, height: 14 }} />
                    {toast.title}
                </span>
                <button
                    aria-label="Close notification"
                    onClick={(e) => {
                        e.stopPropagation();
                        dismissToast(toast.id);
                    }}
                    style={{
                        width: 16,
                        height: 14,
                        lineHeight: "10px",
                        fontSize: 11,
                        border: "1px solid #fff",
                        background: "#c0c0c0",
                        color: "#000",
                        cursor: "pointer",
                    }}
                >
                    ×
                </button>
            </TitleBar>
            <div
                onClick={clickable ? onClick : undefined}
                style={{ padding: "8px 10px", cursor: clickable ? "pointer" : "default", color: "#000" }}
            >
                {toast.body}
                {clickable && <div style={{ marginTop: 6, color: "#000080", textDecoration: "underline", fontSize: 11 }}>Click to open</div>}
            </div>
        </Balloon>
    );
};

/** Renders active toast notifications; mounted once on the desktop. */
const ToastHost: React.FC = () => {
    const { addProcess } = useProcessContext();
    const sig = useSyncExternalStore(subscribeNotifications, () => getActiveToasts().map((t) => t.id).join(","));
    void sig;
    const toasts = getActiveToasts();

    const openApp = (exec: string, name: string, icon: string) => {
        addProcess({ name, icon, componentName: exec } as never);
    };

    return (
        <Stack>
            {toasts.map((t) => (
                <ToastItem key={t.id} toast={t} onOpenApp={openApp} />
            ))}
        </Stack>
    );
};

export default ToastHost;
