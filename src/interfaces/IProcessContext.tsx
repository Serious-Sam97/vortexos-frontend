import { Process } from "./Process";
import { Program } from "./Program";

export interface IProcessContext {
    processes: Process[];
    setProcesses: React.Dispatch<React.SetStateAction<Process[]>>;
    changePriority: (process: Process, priority: number) => void;
    closeProcess: (uuid: string) => void;
    ordenatedProcess: Process[];
    addProcess: (tempProcess: Process) => void;
    handleProceessLocationChange: (uuid: string, location: any) => void;
    fetchIcon: (type: string) => string|undefined;
    fetchComponent: (type: string) => React.FC<any> | undefined;
    programs: Program[];
}
