import { useState } from "react";
import { Button, Frame, Tab, TabBody, Tabs, WindowContent } from "react95";
import ProcessList from "../TaskManager/ProcessList";
import PerfTab from "../TaskManager/PerfTab";
import { useProcessContext } from "../../contexts/ProcessContext";
import { useOSContext } from "../../contexts/OSContext";
import { usePerf } from "../../system/perf";
import { Process } from "../../interfaces/Process";

const ApplicationsTab: React.FC = () => {
    const { processes, changePriority, closeProcess } = useProcessContext();
    const { minimized, restore } = useOSContext();
    const [selected, setSelected] = useState<string | null>(null);

    const switchTo = (p: Process) => {
        if (!p.uuid) return;
        restore(p.uuid);
        changePriority(p, 0);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ fontSize: 12, marginBottom: 6 }}>Task</div>
            <Frame variant="well" style={{ flex: 1, minHeight: 80, overflow: "auto", background: "#fff" }}>
                {processes.length === 0 && <div style={{ padding: 10, color: "#666" }}>No tasks running.</div>}
                {processes.map((p) => {
                    const isMin = !!p.uuid && minimized.includes(p.uuid);
                    return (
                        <div
                            key={p.uuid}
                            onClick={() => setSelected(p.uuid ?? null)}
                            onDoubleClick={() => switchTo(p)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "3px 6px",
                                cursor: "pointer",
                                background: selected === p.uuid ? "#000080" : "transparent",
                                color: selected === p.uuid ? "#fff" : "#000",
                            }}
                        >
                            <img src={p.icon} alt="" style={{ width: 16, height: 16 }} />
                            <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</span>
                            <span style={{ fontSize: 11, opacity: 0.8 }}>{isMin ? "Background" : "Running"}</span>
                        </div>
                    );
                })}
            </Frame>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", marginTop: 8 }}>
                <Button
                    disabled={!selected}
                    onClick={() => {
                        const p = processes.find((x) => x.uuid === selected);
                        if (p?.uuid) closeProcess(p.uuid);
                        setSelected(null);
                    }}
                >
                    End Task
                </Button>
                <Button
                    disabled={!selected}
                    onClick={() => {
                        const p = processes.find((x) => x.uuid === selected);
                        if (p) switchTo(p);
                    }}
                >
                    Switch To
                </Button>
            </div>
        </div>
    );
};

const TaskManager: React.FC = () => {
    const [tab, setTab] = useState(0);
    const perf = usePerf();
    const { processes } = useProcessContext();

    return (
        <>
            <WindowContent style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
                <Tabs value={tab} onChange={(v: number) => setTab(v)}>
                    <Tab value={0}>Applications</Tab>
                    <Tab value={1}>Processes</Tab>
                    <Tab value={2}>Performance</Tab>
                </Tabs>
                <TabBody style={{ flex: 1, minHeight: 0, overflow: "auto" }}>
                    {tab === 0 && <ApplicationsTab />}
                    {tab === 1 && <ProcessList />}
                    {tab === 2 && <PerfTab />}
                </TabBody>
            </WindowContent>
            <Frame variant="well" className="footer" style={{ display: "flex", gap: 16, padding: "2px 8px", fontSize: 11 }}>
                <span>Tasks: {processes.length}</span>
                <span>CPU Usage: {perf.cpu}%</span>
                <span>Mem: {perf.mem}%</span>
            </Frame>
        </>
    );
};

export default TaskManager;
