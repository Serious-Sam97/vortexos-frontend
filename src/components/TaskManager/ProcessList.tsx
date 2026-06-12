import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";
import { useProcessTable } from "../../kernel/react/KernelProvider";
import { useSys } from "../../kernel/react/useSys";

/**
 * Task Manager process list — now a real syscall client. It reads the live process
 * table straight from the kernel and terminates processes through `sys.kill()`,
 * proving the userland → syscall → kernel path end to end.
 */
const ProcessList: React.FC = () => {
    const processes = useProcessTable();
    const sys = useSys();

    const headers: string[] = ["PID", "Name", "Priority", ""];

    return (
        <>
            <Table style={{ width: "50vw" }}>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableHeadCell key={header}>{header}</TableHeadCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {processes.map((process) => (
                        <TableRow key={process.pid}>
                            <TableDataCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                {process.pid.slice(0, 8)}
                            </TableDataCell>
                            <TableDataCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                {process.name}
                            </TableDataCell>
                            <TableDataCell style={{ textAlign: "center", verticalAlign: "middle" }}>
                                {process.priority === 0 ? "High" : "Normal"}
                            </TableDataCell>
                            <TableDataCell
                                onClick={() => sys.kill(process.pid)}
                                style={{ textAlign: "center", verticalAlign: "middle", cursor: "pointer" }}
                            >
                                Delete
                            </TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default ProcessList;
