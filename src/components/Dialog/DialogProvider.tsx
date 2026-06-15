import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button, TextInput, Window, WindowContent, WindowHeader } from "react95";
import { playDing } from "../../system/sounds";
import { win98TitleBar } from "../../system/win98";

type DialogType = "info" | "warning" | "error";
type DialogKind = "alert" | "confirm" | "prompt";

interface DialogRequest {
    kind: DialogKind;
    title: string;
    message: string;
    type: DialogType;
    defaultValue?: string;
    resolve: (value: void | boolean | string | null) => void;
}

interface DialogApi {
    alert: (opts: { title?: string; message: string; type?: DialogType }) => Promise<void>;
    confirm: (opts: { title?: string; message: string; type?: DialogType }) => Promise<boolean>;
    prompt: (opts: { title?: string; message: string; default?: string }) => Promise<string | null>;
}

const DialogContext = createContext<DialogApi>({
    alert: async () => {},
    confirm: async () => false,
    prompt: async () => null,
});

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
    const [input, setInput] = useState("");
    // The keydown (Enter) handler is bound once per dialog, so it can't read the
    // latest `input` state directly — keep it in a ref that's always current.
    const inputRef2 = useRef("");
    inputRef2.current = input;
    const okRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const restoreFocus = useRef<HTMLElement | null>(null);

    const alert = useCallback<DialogApi["alert"]>((opts) => {
        playDing();
        return new Promise<void>((resolve) => {
            setDialog({ kind: "alert", title: opts.title ?? "VortexOS", message: opts.message, type: opts.type ?? "info", resolve: () => resolve() });
        });
    }, []);

    const confirm = useCallback<DialogApi["confirm"]>((opts) => {
        playDing();
        return new Promise<boolean>((resolve) => {
            setDialog({
                kind: "confirm",
                title: opts.title ?? "VortexOS",
                message: opts.message,
                type: opts.type ?? "warning",
                resolve: (v) => resolve(Boolean(v)),
            });
        });
    }, []);

    const prompt = useCallback<DialogApi["prompt"]>((opts) => {
        playDing();
        return new Promise<string | null>((resolve) => {
            setDialog({
                kind: "prompt",
                title: opts.title ?? "VortexOS",
                message: opts.message,
                type: "info",
                defaultValue: opts.default ?? "",
                resolve: (v) => resolve(v == null ? null : String(v)),
            });
        });
    }, []);

    const finish = (value: void | boolean | string | null) => {
        dialog?.resolve(value);
        setDialog(null);
        restoreFocus.current?.focus?.(); // return focus to whatever opened the dialog
    };

    // OK / primary action. Reads the live input via the ref so Enter (whose handler
    // was bound when the dialog opened) submits what the user actually typed.
    const submit = () => {
        if (!dialog) return;
        if (dialog.kind === "prompt") finish(inputRef2.current);
        else if (dialog.kind === "confirm") finish(true);
        else finish(undefined);
    };
    // Cancel / dismiss (X, Cancel button, Escape).
    const cancel = () => {
        if (!dialog) return;
        if (dialog.kind === "prompt") finish(null);
        else if (dialog.kind === "confirm") finish(false);
        else finish(undefined);
    };

    useEffect(() => {
        if (!dialog) return;
        setInput(dialog.defaultValue ?? "");
        // Move focus into the dialog (and remember where to return it).
        restoreFocus.current = document.activeElement as HTMLElement | null;
        // Prompts focus the field; everything else focuses OK.
        (dialog.kind === "prompt" ? inputRef.current : okRef.current)?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                submit();
                return;
            }
            if (e.key === "Escape") {
                cancel();
                return;
            }
            // Trap Tab inside the dialog so focus can't escape to the desktop behind it.
            if (e.key === "Tab" && panelRef.current) {
                const focusables = panelRef.current.querySelectorAll<HTMLElement>("button, [href], input, [tabindex]:not([tabindex='-1'])");
                if (!focusables.length) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dialog]);

    return (
        <DialogContext.Provider value={{ alert, confirm, prompt }}>
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
                    <Window
                        ref={panelRef}
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="vortex-dialog-title"
                        aria-describedby="vortex-dialog-msg"
                        style={{ minWidth: "min(330px, 92vw)", maxWidth: "min(420px, 94vw)" }}
                    >
                        <WindowHeader style={{ display: "flex", alignItems: "center", justifyContent: "space-between", ...win98TitleBar(true) }}>
                            <span id="vortex-dialog-title">{dialog.title}</span>
                            <Button
                                onClick={cancel}
                                aria-label="Close"
                                style={{ width: 20, height: 18, minWidth: 0, padding: 0, fontWeight: "bold" }}
                            >
                                ✕
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                                <DialogIcon type={dialog.type} />
                                <p id="vortex-dialog-msg" style={{ whiteSpace: "pre-line", lineHeight: 1.4 }}>{dialog.message}</p>
                            </div>
                            {dialog.kind === "prompt" && (
                                <div style={{ marginTop: 12 }}>
                                    <TextInput
                                        ref={inputRef as never}
                                        value={input}
                                        onChange={(e) => setInput((e.target as HTMLInputElement).value)}
                                        fullWidth
                                    />
                                </div>
                            )}
                            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
                                <Button ref={okRef} onClick={submit} style={{ minWidth: 84 }} primary>
                                    OK
                                </Button>
                                {dialog.kind !== "alert" && (
                                    <Button onClick={cancel} style={{ minWidth: 84 }}>
                                        Cancel
                                    </Button>
                                )}
                            </div>
                        </WindowContent>
                    </Window>
                </div>
            )}
        </DialogContext.Provider>
    );
}
