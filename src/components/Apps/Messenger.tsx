import { useEffect, useReducer, useState } from "react";
import { Button, Frame, TextInput } from "react95";
import { getChatLog, getOnline, sendChat, subscribeChat } from "../../system/chat";
import { useAuth } from "../../contexts/AuthContext";

/** Re-render whenever presence or the message log changes. */
function useChat() {
    const [, force] = useReducer((x) => x + 1, 0);
    useEffect(() => subscribeChat(force), []);
    return { online: getOnline(), log: getChatLog() };
}

const panel: React.CSSProperties = { background: "white", border: "2px solid #808080", height: 230, overflow: "auto", padding: 4 };

const Messenger: React.FC = () => {
    const { username } = useAuth();
    const { online, log } = useChat();
    const [to, setTo] = useState<string | null>(null);
    const [draft, setDraft] = useState("");

    const others = online.filter((u) => u !== username);

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
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 440, minHeight: 320 }}>
            <p style={{ margin: "4px 8px", fontSize: 12 }}>
                {others.length === 0 ? "No one else is online." : `${others.length} user(s) online`}
            </p>
            <div style={{ display: "flex", gap: 8, flex: 1, minHeight: 0, padding: 8 }}>
                {/* who's online */}
                <div style={{ ...panel, width: 130 }}>
                    {others.map((u) => (
                        <div
                            key={u}
                            onClick={() => setTo(u)}
                            style={{ cursor: "pointer", padding: "2px 6px", fontSize: 13, background: to === u ? "#000080" : "transparent", color: to === u ? "#fff" : "#000" }}
                        >
                            🟢 {u}
                        </div>
                    ))}
                </div>

                {/* conversation */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
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
        </div>
    );
};

export default Messenger;
