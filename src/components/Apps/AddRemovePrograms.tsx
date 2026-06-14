import { Button, Tab, TabBody, Tabs, WindowContent } from "react95";
import { AppShell, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { useState } from "react";
import { useKernel } from "../../kernel/react/KernelProvider";
import { BUILTIN_APPS, CORE_APPS } from "../../kernel/bin";
import { setInstalled, useUninstalled } from "../../system/programs";

const panel: React.CSSProperties = { background: "white", border: "2px solid #808080", height: 230, overflow: "auto", padding: 4 };
const row: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8, padding: "3px 6px" };

const AddRemovePrograms: React.FC = () => {
    const kernel = useKernel();
    const uninstalled = useUninstalled();
    const [tab, setTab] = useState(0);

    const installed = BUILTIN_APPS.filter((a) => !uninstalled.has(a.exec));
    const available = BUILTIN_APPS.filter((a) => uninstalled.has(a.exec));

    const remove = (exec: string) => {
        kernel.registry.unregister(exec);
        setInstalled(exec, false);
    };
    const install = (exec: string) => {
        const app = BUILTIN_APPS.find((a) => a.exec === exec);
        if (app) kernel.registry.register(app);
        setInstalled(exec, true);
    };

    return (
        <AppShell $minW={420} $minH={320} style={{ padding: 4 }}>
            <Tabs value={tab} onChange={(v: number) => setTab(v)}>
                <Tab value={0}>Install/Uninstall</Tab>
                <Tab value={1}>Add Programs</Tab>
            </Tabs>
            <TabBody style={{ flex: 1, minHeight: 0 }}>
                <WindowContent style={{ height: "100%" }}>
                    {tab === 0 && (
                        <>
                            <p style={{ marginTop: 0, fontSize: 12 }}>
                                Installed programs. Select one and click Remove to uninstall it.
                            </p>
                            <div style={panel}>
                                {installed.map((a) => (
                                    <div key={a.exec} style={row}>
                                        <img src={a.icon} alt="" style={{ width: 18, height: 18 }} />
                                        <span style={{ flex: 1, fontSize: 13 }}>{a.name}</span>
                                        {CORE_APPS.has(a.exec) ? (
                                            <span style={{ fontSize: 11, color: "#555" }}>system</span>
                                        ) : (
                                            <Button size="sm" onClick={() => remove(a.exec)}>Remove</Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {tab === 1 && (
                        <>
                            <p style={{ marginTop: 0, fontSize: 12 }}>
                                Programs available to install.
                            </p>
                            <div style={panel}>
                                {available.length === 0 && <p style={{ fontSize: 12, padding: 4 }}>Everything is installed.</p>}
                                {available.map((a) => (
                                    <div key={a.exec} style={row}>
                                        <img src={a.icon} alt="" style={{ width: 18, height: 18 }} />
                                        <span style={{ flex: 1, fontSize: 13 }}>{a.name}</span>
                                        <Button size="sm" onClick={() => install(a.exec)}>Install</Button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </WindowContent>
            </TabBody>
            <StatusBar>
                <StatusPanel $flex={1}>{installed.length} installed · {available.length} available</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default AddRemovePrograms;
