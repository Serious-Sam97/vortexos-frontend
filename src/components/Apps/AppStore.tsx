import { useCallback, useEffect, useState } from "react";
import { Button } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, Toolbar, ToolButton, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useDialog } from "../Dialog/DialogProvider";
import { notify } from "../../system/notifications";
import { listApps, listMyApps, getAppPackage, recordInstall, unpublishApp, type AppSummary } from "../../system/storeApi";
import { parsePackage } from "../../system/appPackage";
import { installApp, uninstallApp, isAppInstalled, useUserApps } from "../../system/userApps";

type View = "store" | "mine";

const AppStore: React.FC = () => {
    const { alert, confirm } = useDialog();
    useUserApps(); // re-render when install set changes
    const [view, setView] = useState<View>("store");
    const [apps, setApps] = useState<AppSummary[]>([]);
    const [selected, setSelected] = useState<AppSummary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState<string | null>(null);

    const refresh = useCallback(
        async (v: View) => {
            setLoading(true);
            setError(null);
            try {
                setApps(v === "mine" ? await listMyApps() : await listApps());
            } catch (e) {
                setError("Couldn't reach the App Store. Is the server running and are you signed in?");
                setApps([]);
            }
            setLoading(false);
        },
        [],
    );

    useEffect(() => {
        void refresh(view);
        setSelected(null);
    }, [view, refresh]);

    const install = async (app: AppSummary) => {
        setBusy(app.appId);
        try {
            const pkg = parsePackage(await getAppPackage(app.appId));
            installApp(pkg);
            void recordInstall(app.appId);
            notify({ title: "App Store", body: `${pkg.manifest.name} installed`, type: "info", icon: pkg.manifest.icon });
            void refresh(view);
        } catch (e) {
            await alert({ title: "Install failed", message: String((e as Error)?.message ?? e), type: "error" });
        }
        setBusy(null);
    };

    const uninstall = async (app: AppSummary) => {
        if (!(await confirm({ title: "Uninstall", message: `Remove "${app.name}" and its data shortcut?` }))) return;
        uninstallApp(app.appId);
        notify({ title: "App Store", body: `${app.name} removed`, type: "info", icon: app.icon });
    };

    const unpublish = async (app: AppSummary) => {
        if (!(await confirm({ title: "Unpublish", message: `Remove "${app.name}" from the store for everyone?` }))) return;
        try {
            await unpublishApp(app.appId);
            notify({ title: "App Store", body: `${app.name} unpublished`, type: "info" });
            setSelected(null);
            void refresh(view);
        } catch (e) {
            await alert({ title: "Unpublish failed", message: String((e as Error)?.message ?? e), type: "error" });
        }
    };

    const Detail: React.FC<{ app: AppSummary }> = ({ app }) => {
        const installed = isAppInstalled(app.appId);
        return (
            <div style={{ padding: 16 }}>
                <button onClick={() => setSelected(null)} style={{ marginBottom: 12, background: "none", border: "none", color: "#000080", cursor: "pointer", padding: 0 }}>
                    ◀ Back to {view === "mine" ? "My Apps" : "Store"}
                </button>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <img src={app.icon} alt="" style={{ width: 64, height: 64, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                        <h2 style={{ margin: "0 0 2px" }}>{app.name}</h2>
                        <div style={{ fontSize: 12, color: "#555" }}>v{app.version} · by {app.author} · {app.installs} install{app.installs === 1 ? "" : "s"}</div>
                        <p style={{ marginTop: 10, lineHeight: 1.5 }}>{app.description || "No description provided."}</p>
                        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                            {installed ? (
                                <Button onClick={() => uninstall(app)}>Uninstall</Button>
                            ) : (
                                <Button primary disabled={busy === app.appId} onClick={() => install(app)}>
                                    {busy === app.appId ? "Installing…" : "Install"}
                                </Button>
                            )}
                            {view === "mine" && <Button onClick={() => unpublish(app)}>Unpublish</Button>}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <AppShell $minW={520} $minH={360}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); void refresh(view); }}>Refresh</MenuItem>
                </Menu>
                <Menu label="Help">
                    <MenuItem $disabled>Vortex App Store — install &amp; publish sandboxed apps</MenuItem>
                </Menu>
            </MenuBar>
            <Toolbar>
                <ToolButton $active={view === "store"} onClick={() => setView("store")}>🛍 Store</ToolButton>
                <ToolButton $active={view === "mine"} onClick={() => setView("mine")}>📦 My Apps</ToolButton>
            </Toolbar>
            <AppBody style={{ padding: 3 }}>
                <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "#fff", border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}>
                    {selected ? (
                        <Detail app={selected} />
                    ) : loading ? (
                        <div style={{ padding: 24, color: "#666" }}>Loading…</div>
                    ) : error ? (
                        <div style={{ padding: 24, color: "#900" }}>{error}</div>
                    ) : apps.length === 0 ? (
                        <div style={{ padding: 24, color: "#666" }}>
                            {view === "mine" ? "You haven't published any apps yet. Build one in VortexCode and publish it!" : "No apps in the store yet. Be the first to publish!"}
                        </div>
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10, padding: 12 }}>
                            {apps.map((app) => (
                                <button
                                    key={app.appId}
                                    onClick={() => setSelected(app)}
                                    style={{ textAlign: "center", cursor: "pointer", background: "#f7f7fa", border: "1px solid #ccc", borderRadius: 6, padding: 12 }}
                                >
                                    <img src={app.icon} alt="" style={{ width: 48, height: 48 }} />
                                    <div style={{ fontWeight: "bold", fontSize: 13, marginTop: 6 }}>{app.name}</div>
                                    <div style={{ fontSize: 11, color: "#666" }}>v{app.version}</div>
                                    <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                                        {isAppInstalled(app.appId) ? "✓ Installed" : `${app.installs} install${app.installs === 1 ? "" : "s"}`}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{view === "mine" ? "My published apps" : "Vortex App Store"}</StatusPanel>
                <StatusPanel>{apps.length} app{apps.length === 1 ? "" : "s"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default AppStore;
