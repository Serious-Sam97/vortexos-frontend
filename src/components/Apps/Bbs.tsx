import { useCallback, useEffect, useState } from "react";
import { Button, Frame, TextInput } from "react95";
import { AppShell, AppBody, Toolbar, ToolButton, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { Avatar } from "../Avatar";
import { listThreads, getThread, createThread, reply, type BbsThread, type BbsPost } from "../../system/bbs";

/**
 * The Vortex BBS — a shared, persistent bulletin board. Browse threads, open one
 * to read replies, post a new thread, or reply. Public to all signed-in users.
 */
type View = { kind: "list" } | { kind: "thread"; id: number } | { kind: "compose" };

const when = (ms: number) => new Date(ms).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

const Bbs: React.FC = () => {
    const [view, setView] = useState<View>({ kind: "list" });
    const [threads, setThreads] = useState<BbsThread[]>([]);
    const [detail, setDetail] = useState<{ thread: BbsPost; replies: BbsPost[] } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [replyText, setReplyText] = useState("");

    const refreshList = useCallback(async () => {
        setError(null);
        try {
            setThreads(await listThreads());
        } catch {
            setError("Couldn't reach the board. Is the network up?");
        }
    }, []);

    const openThread = useCallback(async (id: number) => {
        setError(null);
        setDetail(null);
        setView({ kind: "thread", id });
        try {
            setDetail(await getThread(id));
        } catch {
            setError("Couldn't load that thread.");
        }
    }, []);

    useEffect(() => {
        if (view.kind === "list") refreshList();
    }, [view, refreshList]);

    const submitThread = async () => {
        if (!title.trim() || !body.trim()) return;
        setBusy(true);
        try {
            const created = await createThread(title.trim(), body.trim());
            setTitle("");
            setBody("");
            openThread(created.id);
        } catch {
            setError("Couldn't post the thread.");
        } finally {
            setBusy(false);
        }
    };

    const submitReply = async () => {
        if (view.kind !== "thread" || !replyText.trim()) return;
        setBusy(true);
        try {
            await reply(view.id, replyText.trim());
            setReplyText("");
            setDetail(await getThread(view.id));
        } catch {
            setError("Couldn't post the reply.");
        } finally {
            setBusy(false);
        }
    };

    const PostCard = ({ p, title: t }: { p: BbsPost; title?: string | null }) => (
        <Frame variant="well" style={{ background: "#fff", padding: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <Avatar name={p.authorName} size={24} />
                <b>{p.authorName}</b>
                <span style={{ marginLeft: "auto", fontSize: 11, color: "#666" }}>{when(p.createdAt)}</span>
            </div>
            {t && <div style={{ fontWeight: 700, marginBottom: 2 }}>{t}</div>}
            <div style={{ whiteSpace: "pre-wrap", fontSize: 13 }}>{p.body}</div>
        </Frame>
    );

    return (
        <AppShell $minW={460} $minH={340}>
            <Toolbar style={{ gap: 4 }}>
                <ToolButton onClick={() => setView({ kind: "list" })}>🏠 Board</ToolButton>
                <ToolButton onClick={() => setView({ kind: "compose" })}>✚ New Thread</ToolButton>
                {view.kind === "list" && <ToolButton onClick={refreshList}>⟳ Refresh</ToolButton>}
            </Toolbar>
            <AppBody>
                <div style={{ flex: 1, minWidth: 0, overflow: "auto", padding: 10, background: "#c0c0c0" }}>
                    {error && <Frame variant="well" style={{ background: "#fff", padding: 8, marginBottom: 8, color: "#900" }}>{error}</Frame>}

                    {view.kind === "list" && (
                        <>
                            {threads.length === 0 && !error && <p style={{ fontSize: 13, color: "#444" }}>No threads yet — start one!</p>}
                            {threads.map((t) => (
                                <Frame
                                    key={t.id}
                                    variant="well"
                                    style={{ background: "#fff", padding: 8, marginBottom: 6, cursor: "pointer" }}
                                    onClick={() => openThread(t.id)}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <Avatar name={t.authorName} size={26} />
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <div style={{ fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.title}</div>
                                            <div style={{ fontSize: 11, color: "#666" }}>by {t.authorName} · {when(t.createdAt)} · 💬 {t.replyCount}</div>
                                        </div>
                                    </div>
                                </Frame>
                            ))}
                        </>
                    )}

                    {view.kind === "thread" && (
                        <>
                            {!detail && !error && <p style={{ fontSize: 13 }}>Loading…</p>}
                            {detail && (
                                <>
                                    <PostCard p={detail.thread} title={detail.thread.title} />
                                    <div style={{ fontSize: 12, color: "#444", margin: "6px 2px" }}>{detail.replies.length} repl{detail.replies.length === 1 ? "y" : "ies"}</div>
                                    {detail.replies.map((r) => <PostCard key={r.id} p={r} />)}
                                    <Frame variant="field" style={{ background: "#fff", padding: 8, marginTop: 8 }}>
                                        <TextInput multiline rows={3} value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Write a reply…" style={{ width: "100%" }} />
                                        <div style={{ marginTop: 6, textAlign: "right" }}>
                                            <Button onClick={submitReply} disabled={busy || !replyText.trim()}>Post Reply</Button>
                                        </div>
                                    </Frame>
                                </>
                            )}
                        </>
                    )}

                    {view.kind === "compose" && (
                        <Frame variant="field" style={{ background: "#fff", padding: 10 }}>
                            <div style={{ fontWeight: 700, marginBottom: 8 }}>New Thread</div>
                            <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ width: "100%", marginBottom: 8 }} />
                            <TextInput multiline rows={6} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Say something to everyone…" style={{ width: "100%" }} />
                            <div style={{ marginTop: 8, display: "flex", gap: 6, justifyContent: "flex-end" }}>
                                <Button onClick={() => setView({ kind: "list" })}>Cancel</Button>
                                <Button onClick={submitThread} disabled={busy || !title.trim() || !body.trim()} primary>Post</Button>
                            </div>
                        </Frame>
                    )}
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>Vortex BBS — shared board</StatusPanel>
                <StatusPanel>{threads.length} thread(s)</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Bbs;
