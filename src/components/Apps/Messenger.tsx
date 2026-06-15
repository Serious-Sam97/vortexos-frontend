import { useEffect, useReducer, useState } from "react";
import { Button, Frame, TextInput } from "react95";
import { AppShell, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { getChatLog, getPresence, sendChat, subscribeChat } from "../../system/chat";
import { Avatar, STATUS_LABEL } from "../Avatar";
import { useAuth } from "../../contexts/AuthContext";

/** Re-render whenever presence or the message log changes. */
function useChat() {
    const [, force] = useReducer((x) => x + 1, 0);
    useEffect(() => subscribeChat(force), []);
    return { presence: getPresence(), log: getChatLog() };
}

const panel: React.CSSProperties = { background: "white", border: "2px solid #808080", height: 230, overflow: "auto", padding: 4 };

const Messenger: React.FC = () => {
    const { username } = useAuth();
    const { presence, log } = useChat();
    const [to, setTo] = useState<string | null>(null);
    const [draft, setDraft] = useState("");

    const others = presence.filter((u) => u.name !== username);
    const peer = to ? presence.find((u) => u.name === to) : undefined;

    // Conversation with the selected peer: messages I sent to them + messages from them.
    const convo = to
        ? log.filter((m) => (m.mine && m.to === to) || (!m.mine && m.from === to))
        : [];

    const send = () => {
        if (!to || !draft.trim()) return;
        sendChat(to, draft.trim());
        setDraft("");
    };

    return (
        <AppShell $minW={440} $minH={320}>
            <div style={{ display: "flex", gap: 8, flex: 1, minHeight: 0, padding: 8 }}>
                {/* who's online — rich presence: avatar, status dot, current app */}
                <div style={{ ...panel, width: 168 }}>
                    {others.length === 0 && <p style={{ fontSize: 12, color: "#777", padding: 4 }}>No one else is online.</p>}
                    {others.map((u) => {
                        const sel = to === u.name;
                        return (
                            <div
                                key={u.name}
                                onClick={() => setTo(u.name)}
                                title={`${u.name} — ${STATUS_LABEL[u.status]}${u.activity ? ` · ${u.activity}` : ""}`}
                                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 7, padding: "4px 6px", background: sel ? "#000080" : "transparent", color: sel ? "#fff" : "#000" }}
                            >
                                <Avatar name={u.name} size={26} status={u.status} />
                                <div style={{ minWidth: 0, lineHeight: 1.15 }}>
                                    <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.name}</div>
                                    <div style={{ fontSize: 11, opacity: 0.8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {u.status === "active" && u.activity ? `in ${u.activity}` : STATUS_LABEL[u.status]}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* conversation */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                    {peer && (
                        <Frame variant="well" style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, marginBottom: 6, background: "#fff" }}>
                            <Avatar name={peer.name} size={40} status={peer.status} />
                            <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: 700, fontSize: 14 }}>{peer.name}</div>
                                <div style={{ fontSize: 12, color: "#444" }}>
                                    {STATUS_LABEL[peer.status]}
                                    {peer.activity ? ` · in ${peer.activity}` : ""}
                                </div>
                            </div>
                        </Frame>
                    )}
                    <Frame variant="field" style={{ flex: 1, background: "white", overflow: "auto", padding: 6, marginBottom: 6 }}>
                        {!to && <p style={{ fontSize: 12, color: "#555" }}>Select someone to message.</p>}
                        {to && convo.length === 0 && <p style={{ fontSize: 12, color: "#555" }}>No messages yet. Say hi!</p>}
                        {convo.map((m, i) => (
                            <p key={i} style={{ margin: "2px 0", fontSize: 13 }}>
                                <b>{m.mine ? "You" : m.from}:</b> {m.body}
                            </p>
                        ))}
                    </Frame>
                    <div style={{ display: "flex", gap: 6 }}>
                        <TextInput
                            value={draft}
                            disabled={!to}
                            placeholder={to ? `Message ${to}…` : "Pick a recipient"}
                            onChange={(e) => setDraft(e.target.value)}
                            onKeyDown={(e: React.KeyboardEvent) => {
                                if (e.key === "Enter") send();
                            }}
                            style={{ flex: 1 }}
                        />
                        <Button onClick={send} disabled={!to || !draft.trim()}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
            <StatusBar>
                <StatusPanel $flex={1}>{others.length === 0 ? "No one else is online." : `${others.length} user(s) online`}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Messenger;
