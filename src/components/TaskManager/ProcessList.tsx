import { useEffect, useState } from "react";
import { Button, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";
import { useProcessTable } from "../../kernel/react/KernelProvider";
import { useSys } from "../../kernel/react/useSys";
import { processUsage } from "../../system/perf";

/**
 * Task Manager process list — a real syscall client. Reads the live process table from the
 * kernel and terminates processes through `sys.kill()`. Per-process CPU%/memory are stable
 * synthesized figures (no per-process isolation on the main thread until Phase 30).
 */
const ProcessList: React.FC = () => {
    const processes = useProcessTable();
    const sys = useSys();
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setTick((t) => t + 1), 1000);
        return () => clearInterval(id);
    }, []);

    const headers = ["PID", "Name", "CPU", "Mem", "Pri", ""];

    return (
        <Table style={{ width: "100%" }}>
            <TableHead>
                <TableRow>
                    {headers.map((h, i) => (
                        <TableHeadCell key={i}>{h}</TableHeadCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {processes.map((process) => {
                    const u = processUsage(process.pid, tick);
                    return (
                        <TableRow key={process.pid}>
                            <TableDataCell style={{ textAlign: "center" }}>{process.pid.slice(0, 8)}</TableDataCell>
                            <TableDataCell>{process.name}</TableDataCell>
                            <TableDataCell style={{ textAlign: "center" }}>{String(u.cpu).padStart(2, "0")}%</TableDataCell>
                            <TableDataCell style={{ textAlign: "center" }}>{u.mem} MB</TableDataCell>
                            <TableDataCell style={{ textAlign: "center" }}>{process.priority === 0 ? "High" : "Normal"}</TableDataCell>
                            <TableDataCell style={{ textAlign: "center" }}>
                                <Button size="sm" onClick={() => sys.kill(process.pid)}>
                                    End
                                </Button>
                            </TableDataCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default ProcessList;
