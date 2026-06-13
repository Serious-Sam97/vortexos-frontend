import { useCallback, useEffect, useState } from "react";
import { Button, Checkbox, Frame, Tab, TabBody, Tabs, WindowContent } from "react95";
import { AppShell, StatusBar, StatusPanel } from "../chrome/AppChrome";
import {
    decodeText,
    listMyFiles,
    listSharers,
    listShares,
    RemoteFile,
    setShared,
    Sharer,
} from "../../system/shareApi";
import { useAuth } from "../../contexts/AuthContext";

const panel: React.CSSProperties = { background: "white", border: "2px solid #808080", height: 230, overflow: "auto", padding: 4 };
const row: React.CSSProperties = { cursor: "pointer", padding: "2px 6px", fontSize: 13 };

const NetworkNeighborhood: React.FC = () => {
    const { username } = useAuth();
    const [tab, setTab] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // ── My Shared Files ──────────────────────────────────────────────────
    const [myFiles, setMyFiles] = useState<RemoteFile[]>([]);
    const refreshMine = useCallback(async () => {
        try {
            setError(null);
            const files = await listMyFiles();
            setMyFiles(files.filter((f) => f.type !== "folder"));
        } catch {
            setError("Could not reach the network. Is the backend running?");
        }
    }, []);

    const toggleShare = async (file: RemoteFile) => {
        try {
            await setShared(file.path, !file.shared);
            setMyFiles((prev) => prev.map((f) => (f.path === file.path ? { ...f, shared: !f.shared } : f)));
        } catch {
            setError("Could not update sharing.");
        }
    };

    // ── Network browse ───────────────────────────────────────────────────
    const [sharers, setSharers] = useState<Sharer[]>([]);
    const [openUser, setOpenUser] = useState<Sharer | null>(null);
    const [shares, setShares] = useState<RemoteFile[]>([]);
    const [viewing, setViewing] = useState<RemoteFile | null>(null);

    const refreshNetwork = useCallback(async () => {
        try {
            setError(null);
            setSharers(await listSharers());
        } catch {
            setError("Could not reach the network. Is the backend running?");
        }
    }, []);

    const openSharer = async (u: Sharer) => {
        setOpenUser(u);
        setViewing(null);
        try {
            setShares(await listShares(u.id));
        } catch {
            setShares([]);
        }
    };

    useEffect(() => {
        refreshMine();
        refreshNetwork();
    }, [refreshMine, refreshNetwork]);

    return (
        <AppShell $minW={460} $minH={320} style={{ padding: 4 }}>
            <Tabs value={tab} onChange={(v: number) => setTab(v)}>
                <Tab value={0}>Network Neighborhood</Tab>
                <Tab value={1}>My Shared Files</Tab>
            </Tabs>
            <TabBody style={{ flex: 1, minHeight: 0 }}>
                <WindowContent style={{ height: "100%" }}>
                    {error && <p style={{ color: "#800000", fontSize: 12 }}>{error}</p>}

                    {tab === 0 && (
                        <div style={{ display: "flex", gap: 8 }}>
                            {/* users → their shares → content viewer */}
                            <div style={{ ...panel, width: 130 }}>
                                {sharers.length === 0 && <p style={{ fontSize: 12, padding: 4 }}>No one is sharing yet.</p>}
                                {sharers.map((u) => (
                                    <div
                                        key={u.id}
                                        style={{ ...row, background: openUser?.id === u.id ? "#000080" : "transparent", color: openUser?.id === u.id ? "#fff" : "#000" }}
                                        onClick={() => openSharer(u)}
                                    >
                                        🖥 {u.username}
                                        {u.username === username ? " (you)" : ""}
                                    </div>
                                ))}
                            </div>
                            <div style={{ ...panel, width: 150 }}>
                                {!openUser && <p style={{ fontSize: 12, padding: 4 }}>Select a computer.</p>}
                                {openUser && shares.length === 0 && <p style={{ fontSize: 12, padding: 4 }}>No shared files.</p>}
                                {shares.map((f) => (
                                    <div
                                        key={f.id}
                                        style={{ ...row, background: viewing?.id === f.id ? "#000080" : "transparent", color: viewing?.id === f.id ? "#fff" : "#000" }}
                                        onClick={() => setViewing(f)}
                                    >
                                        📄 {f.name}
                                    </div>
                                ))}
                            </div>
                            <Frame variant="field" style={{ flex: 1, height: 230, overflow: "auto", background: "white", padding: 6 }}>
                                {viewing ? (
                                    <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: 12, fontFamily: "monospace" }}>
                                        {decodeText(viewing.content)}
                                    </pre>
                                ) : (
                                    <p style={{ fontSize: 12, color: "#555" }}>Open a shared file to view it (read-only).</p>
                                )}
                            </Frame>
                        </div>
                    )}

                    {tab === 1 && (
                        <div>
                            <p style={{ fontSize: 12, marginTop: 0 }}>Tick a file to share it with everyone on the network.</p>
                            <div style={panel}>
                                {myFiles.length === 0 && <p style={{ fontSize: 12, padding: 4 }}>You have no cloud files to share.</p>}
                                {myFiles.map((f) => (
                                    <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "1px 4px" }}>
                                        <Checkbox checked={f.shared} onChange={() => toggleShare(f)} />
                                        <span style={{ fontSize: 13 }}>{f.path.replace("/mnt/cloud", "")}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={refreshMine} style={{ marginTop: 8 }}>
                                Refresh
                            </Button>
                        </div>
                    )}
                </WindowContent>
            </TabBody>
            <StatusBar>
                <StatusPanel $flex={1}>{error ? error : "Network Neighborhood"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default NetworkNeighborhood;
