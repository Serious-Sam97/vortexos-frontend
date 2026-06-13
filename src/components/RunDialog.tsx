import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Window, WindowHeader, WindowContent } from "react95";
import { useSys } from "../kernel/react/useSys";
import { Shell } from "../shell/Shell";
import { openPath } from "../system/openPath";
import { BUILTIN_APPS } from "../kernel/bin";
import { useDialog } from "./Dialog/DialogProvider";
import { closeRun, getRunMru, pushRunMru, useRunOpen } from "../system/runDialog";
import { getRecentDocs } from "../system/recents";
import { win98TitleBar } from "../system/win98";

import RunIcon from "/w95.png";

const APP_BY_KEY = new Map<string, (typeof BUILTIN_APPS)[number]>();
for (const a of BUILTIN_APPS) {
    APP_BY_KEY.set(a.exec.toLowerCase(), a);
    APP_BY_KEY.set(a.name.toLowerCase(), a);
}

/**
 * The Windows-95 "Run" dialog. Resolves the typed entry to an action: a known app (by name or
 * exec), a VFS path (file → its handler app, folder → Explorer), or otherwise a shell command
 * run headlessly (output shown; "command not found" → the classic error). Keeps a persisted MRU.
 */
const RunDialog: React.FC = () => {
    const open = useRunOpen();
    const sys = useSys();
    const { alert } = useDialog();
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setValue(getRunMru()[0] ?? "");
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [open]);

    if (!open) return null;

    const submit = async () => {
        const q = value.trim();
        if (!q) return;
        pushRunMru(q);
        closeRun();

        // 1) A known app, by name or exec.
        const app = APP_BY_KEY.get(q.toLowerCase());
        if (app) {
            sys.spawn(app.exec);
            return;
        }
        // 2) A VFS path (~ expands to the home dir).
        if (q.startsWith("/") || q.startsWith("~")) {
            const path = q.startsWith("~") ? q.replace(/^~/, "/home/user") : q;
            const opened = await openPath(sys, path);
            if (!opened) {
                alert({
                    title: "Run",
                    message: `Cannot find '${q}'. Make sure you typed the name correctly, and then try again.`,
                    type: "error",
                });
            }
            return;
        }
        // 3) Otherwise, a shell command — run it headlessly and surface the result.
        const shell = new Shell(sys);
        const res = await shell.run(q);
        const out = res.output?.trim();
        if (res.code !== 0) {
            alert({
                title: "Run",
                message: out || `Cannot find the file '${q}'. Make sure you typed the name correctly, and then try again.`,
                type: "error",
            });
        } else if (out) {
            alert({ title: `Run: ${q}`, message: out, type: "info" });
        }
    };

    return createPortal(
        <div
            style={{ position: "fixed", inset: 0, zIndex: 1400000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.15)" }}
            onMouseDown={closeRun}
        >
            <Window style={{ width: 380 }} onMouseDown={(e) => e.stopPropagation()}>
                <WindowHeader style={{ display: "flex", alignItems: "center", gap: 6, ...win98TitleBar(true) }}>
                    <img src={RunIcon} alt="" style={{ width: 16, height: 16 }} />
                    Run
                </WindowHeader>
                <WindowContent>
                    <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                        <img src={RunIcon} alt="" style={{ width: 32, height: 32 }} />
                        <p style={{ margin: 0, fontSize: 12, lineHeight: 1.4 }}>
                            Type the name of a program, folder, document, or command, and VortexOS will open it for you.
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                        <label style={{ fontSize: 12 }}>Open:</label>
                        <input
                            ref={inputRef}
                            list="run-mru"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") submit();
                                if (e.key === "Escape") closeRun();
                            }}
                            style={{
                                flex: 1,
                                fontFamily: "ms_sans_serif, sans-serif",
                                fontSize: 13,
                                padding: "3px 5px",
                                border: "2px solid",
                                borderColor: "#808080 #fff #fff #808080",
                                background: "#fff",
                            }}
                        />
                        <datalist id="run-mru">
                            {[...getRunMru(), ...getRecentDocs()].map((m) => (
                                <option key={m} value={m} />
                            ))}
                        </datalist>
                    </div>
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                        <Button onClick={submit} style={{ minWidth: 75 }}>
                            OK
                        </Button>
                        <Button onClick={closeRun} style={{ minWidth: 75 }}>
                            Cancel
                        </Button>
                    </div>
                </WindowContent>
            </Window>
        </div>,
        document.body,
    );
};

export default RunDialog;
