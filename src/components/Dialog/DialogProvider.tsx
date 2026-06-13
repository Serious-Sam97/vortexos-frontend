import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { playDing } from "../../system/sounds";

type DialogType = "info" | "warning" | "error";

interface DialogRequest {
    title: string;
    message: string;
    type: DialogType;
    resolve: () => void;
}

interface DialogApi {
    alert: (opts: { title?: string; message: string; type?: DialogType }) => Promise<void>;
}

const DialogContext = createContext<DialogApi>({ alert: async () => {} });

export const useDialog = () => useContext(DialogContext);

const DialogIcon: React.FC<{ type: DialogType }> = ({ type }) => {
    const base: React.CSSProperties = {
        width: 34,
        height: 34,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "50%",
    };
    if (type === "error") return <div style={{ ...base, background: "#d40000", fontSize: 20 }}>✕</div>;
    if (type === "warning")
        return (
            <div style={{ width: 36, height: 34, flexShrink: 0, position: "relative" }}>
                <div
                    style={{
                        width: 0,
                        height: 0,
                        borderLeft: "18px solid transparent",
                        borderRight: "18px solid transparent",
                        borderBottom: "32px solid #ffd000",
                    }}
                />
                <span style={{ position: "absolute", left: 15, top: 9, fontWeight: "bold", color: "#000" }}>!</span>
            </div>
        );
    return <div style={{ ...base, background: "#000080", fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: 22 }}>i</div>;
};

export function DialogProvider({ children }: { children: ReactNode }) {
    const [dialog, setDialog] = useState<DialogRequest | null>(null);

    const alert = useCallback<DialogApi["alert"]>((opts) => {
        playDing();
        return new Promise<void>((resolve) => {
            setDialog({ title: opts.title ?? "VortexOS", message: opts.message, type: opts.type ?? "info", resolve });
        });
    }, []);

    const close = () => {
        dialog?.resolve();
        setDialog(null);
    };

    useEffect(() => {
        if (!dialog) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === "Escape") close();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dialog]);

    return (
        <DialogContext.Provider value={{ alert }}>
            {children}
            {dialog && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 100000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.08)",
                    }}
                >
                    <Window style={{ minWidth: 330, maxWidth: 420 }}>
                        <WindowHeader style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span>{dialog.title}</span>
                            <Button
                                onClick={close}
                                style={{ width: 20, height: 18, minWidth: 0, padding: 0, fontWeight: "bold" }}
                            >
                                ✕
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                                <DialogIcon type={dialog.type} />
                                <p style={{ whiteSpace: "pre-line", lineHeight: 1.4 }}>{dialog.message}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                                <Button onClick={close} style={{ minWidth: 84 }} primary>
                                    OK
                                </Button>
                            </div>
                        </WindowContent>
                    </Window>
                </div>
            )}
        </DialogContext.Provider>
    );
}
