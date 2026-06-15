import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, ToolSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useSys } from "../../kernel/react/useSys";
import { useDialog } from "../Dialog/DialogProvider";
import { notify } from "../../system/notifications";
import { subscribeMail } from "../../system/chat";
import {
    listMail, getMail, sendMail, saveDraft, sendDraft, deleteMail, unreadCount, directory,
    type Folder, type MailMsg,
} from "../../system/mailApi";

const FOLDERS: { key: Folder; label: string; icon: string }[] = [
    { key: "inbox", label: "Inbox", icon: "📥" },
    { key: "sent", label: "Sent", icon: "📤" },
    { key: "drafts", label: "Drafts", icon: "📝" },
    { key: "trash", label: "Trash", icon: "🗑" },
];

interface Compose {
    to: string;
    subject: string;
    body: string;
    draftId?: number;
}

const fmtDate = (ms: number) => new Date(ms).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

const VortexMail: React.FC = () => {
    const sys = useSys();
    const { alert, confirm } = useDialog();
    const [folder, setFolder] = useState<Folder>("inbox");
    const [list, setList] = useState<MailMsg[]>([]);
    const [selected, setSelected] = useState<MailMsg | null>(null);
    const [compose, setCompose] = useState<Compose | null>(null);
    const [unread, setUnread] = useState(0);
    const [dir, setDir] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const folderRef = useRef(folder);
    folderRef.current = folder;

    const refreshUnread = useCallback(() => { void unreadCount().then(setUnread); }, []);

    const load = useCallback(async (f: Folder) => {
        setError(null);
        try {
            setList(await listMail(f));
        } catch {
            setError("Couldn't reach VortexMail. Is the server running and are you signed in?");
            setList([]);
        }
        refreshUnread();
    }, [refreshUnread]);

    useEffect(() => { setSelected(null); setCompose(null); void load(folder); }, [folder, load]);
    useEffect(() => { void directory().then(setDir); refreshUnread(); }, [refreshUnread]);

    // Launched with a recipient argv (e.g. "Send Mail" from Contacts) → open compose.
    useEffect(() => {
        (async () => {
            const [to] = await sys.argv();
            if (to) setCompose({ to, subject: "", body: "" });
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Live: new mail arrives → refresh inbox + the unread badge.
    useEffect(() => subscribeMail(() => {
        refreshUnread();
        if (folderRef.current === "inbox") void load("inbox");
    }), [load, refreshUnread]);

    const open = async (m: MailMsg) => {
        if (m.draft) {
            setCompose({ to: m.toName, subject: m.subject, body: m.body, draftId: m.id });
            return;
        }
        try {
            const full = await getMail(m.id);
            setSelected(full);
            if (folder === "inbox" && !m.read) void load("inbox"); // read state changed
        } catch {
            setSelected(m);
        }
    };

    const doSend = async () => {
        if (!compose) return;
        if (!compose.to.trim()) { await alert({ title: "VortexMail", message: "Please enter a recipient.", type: "warning" }); return; }
        try {
            if (compose.draftId) await sendDraft(compose.draftId, compose.to.trim(), compose.subject, compose.body);
            else await sendMail(compose.to.trim(), compose.subject, compose.body);
            notify({ title: "VortexMail", body: `Sent to ${compose.to.trim()}`, type: "info" });
            setCompose(null);
            void load(folder);
        } catch (e: any) {
            await alert({ title: "Send failed", message: e?.response?.status === 404 ? `No user named "${compose.to.trim()}".` : String(e?.message ?? e), type: "error" });
        }
    };

    const doSaveDraft = async () => {
        if (!compose) return;
        try {
            await saveDraft(compose.to, compose.subject, compose.body);
            notify({ title: "VortexMail", body: "Draft saved", type: "info" });
            setCompose(null);
            if (folder === "drafts") void load("drafts");
        } catch (e: any) {
            await alert({ title: "Save failed", message: String(e?.message ?? e), type: "error" });
        }
    };

    const doDelete = async (m: MailMsg) => {
        if (folder === "trash" && !(await confirm({ title: "Delete", message: "Permanently delete this message?" }))) return;
        await deleteMail(m.id);
        setSelected(null);
        void load(folder);
    };

    const reply = (m: MailMsg) => setCompose({
        to: m.fromName,
        subject: m.subject.startsWith("Re:") ? m.subject : `Re: ${m.subject}`,
        body: `\n\n----- ${m.fromName} wrote: -----\n${m.body}`,
    });

    /* ---------------------------------------------------------------- compose */
    if (compose) {
        return (
            <AppShell $minW={540} $minH={380}>
                <MenuBar>
                    <Menu label="File"><MenuItem onMouseDown={(e) => { e.preventDefault(); void doSend(); }}>Send</MenuItem><MenuItem onMouseDown={(e) => { e.preventDefault(); setCompose(null); }}>Discard</MenuItem></Menu>
                </MenuBar>
                <Toolbar>
                    <ToolButton onClick={doSend}>📨 Send</ToolButton>
                    <ToolButton onClick={doSaveDraft}>💾 Save Draft</ToolButton>
                    <ToolSep />
                    <ToolButton onClick={() => setCompose(null)}>✕ Close</ToolButton>
                </Toolbar>
                <AppBody style={{ flexDirection: "column", padding: 10, gap: 8, background: "#fff" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 60 }}>To:</span>
                        <input list="vm-dir" value={compose.to} onChange={(e) => setCompose({ ...compose, to: e.target.value })} placeholder="username" style={{ flex: 1 }} />
                        <datalist id="vm-dir">{dir.map((u) => <option key={u} value={u} />)}</datalist>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 60 }}>Subject:</span>
                        <input value={compose.subject} onChange={(e) => setCompose({ ...compose, subject: e.target.value })} style={{ flex: 1 }} />
                    </label>
                    <textarea
                        value={compose.body}
                        onChange={(e) => setCompose({ ...compose, body: e.target.value })}
                        style={{ flex: 1, minHeight: 180, resize: "none", fontFamily: "inherit", fontSize: 13, padding: 6 }}
                    />
                </AppBody>
                <StatusBar><StatusPanel $flex={1}>New Message</StatusPanel></StatusBar>
            </AppShell>
        );
    }

    /* ------------------------------------------------------------ mailbox view */
    return (
        <AppShell $minW={560} $minH={380}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setCompose({ to: "", subject: "", body: "" }); }}>New Message</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); void load(folder); }}>Refresh</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>VortexMail — mail between Vortex users</MenuItem></Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton onClick={() => setCompose({ to: "", subject: "", body: "" })}>✉ New</ToolButton>
                <ToolButton disabled={!selected} onClick={() => selected && reply(selected)}>↩ Reply</ToolButton>
                <ToolButton disabled={!selected} onClick={() => selected && doDelete(selected)}>🗑 Delete</ToolButton>
                <ToolSep />
                <ToolButton onClick={() => void load(folder)}>⟳ Refresh</ToolButton>
            </Toolbar>
            <AppBody style={{ padding: 0 }}>
                {/* folders sidebar */}
                <div style={{ width: 132, flexShrink: 0, background: "#e7e7ee", borderRight: "1px solid #aaa", padding: 6 }}>
                    {FOLDERS.map((f) => (
                        <div
                            key={f.key}
                            onClick={() => setFolder(f.key)}
                            style={{ padding: "5px 8px", cursor: "pointer", borderRadius: 3, fontWeight: folder === f.key ? "bold" : "normal", background: folder === f.key ? "#000080" : "transparent", color: folder === f.key ? "#fff" : "#000", display: "flex", justifyContent: "space-between" }}
                        >
                            <span>{f.icon} {f.label}</span>
                            {f.key === "inbox" && unread > 0 && <span style={{ background: "#d40000", color: "#fff", borderRadius: 8, padding: "0 6px", fontSize: 11 }}>{unread}</span>}
                        </div>
                    ))}
                </div>
                {/* list + reading pane */}
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: "0 0 44%", minHeight: 0, overflow: "auto", background: "#fff", borderBottom: "2px solid #808080" }}>
                        {error ? (
                            <div style={{ padding: 16, color: "#900" }}>{error}</div>
                        ) : list.length === 0 ? (
                            <div style={{ padding: 16, color: "#888" }}>No messages in {folder}.</div>
                        ) : (
                            list.map((m) => {
                                const who = folder === "inbox" || folder === "trash" ? m.fromName : `To: ${m.toName || "(none)"}`;
                                const unreadRow = folder === "inbox" && !m.read;
                                return (
                                    <div
                                        key={m.id}
                                        onClick={() => open(m)}
                                        style={{ padding: "6px 10px", cursor: "pointer", borderBottom: "1px solid #eee", background: selected?.id === m.id ? "#cfe0ff" : "transparent", fontWeight: unreadRow ? "bold" : "normal" }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{unreadRow ? "● " : ""}{who}</span>
                                            <span style={{ color: "#888", fontSize: 11, flexShrink: 0 }}>{fmtDate(m.createdAt)}</span>
                                        </div>
                                        <div style={{ color: "#333", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.subject || "(no subject)"}</div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", padding: 12 }}>
                        {selected ? (
                            <>
                                <div style={{ fontSize: 17, fontWeight: "bold", marginBottom: 4 }}>{selected.subject || "(no subject)"}</div>
                                <div style={{ fontSize: 12, color: "#555", borderBottom: "1px solid #ddd", paddingBottom: 6, marginBottom: 8 }}>
                                    From <b>{selected.fromName}</b> to <b>{selected.toName}</b> · {fmtDate(selected.createdAt)}
                                </div>
                                <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{selected.body}</div>
                                <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                                    <Button onClick={() => reply(selected)}>↩ Reply</Button>
                                    <Button onClick={() => doDelete(selected)}>🗑 Delete</Button>
                                </div>
                            </>
                        ) : (
                            <div style={{ color: "#aaa", textAlign: "center", marginTop: 30 }}>Select a message to read it.</div>
                        )}
                    </div>
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{FOLDERS.find((f) => f.key === folder)?.label}</StatusPanel>
                <StatusPanel>{list.length} message{list.length === 1 ? "" : "s"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VortexMail;
