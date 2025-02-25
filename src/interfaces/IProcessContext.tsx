import { Process } from "./Process";

export interface IProcessContext {
    processes: Process[];
    setProcesses: React.Dispatch<React.SetStateAction<Process[]>>;
    changePriority: (process: Process, priority: number) => void;
    closeProcess: (uuid: string) => void;
    ordenatedProcess: Process[];
    addProcess: (tempProcess: Process) => void;
    handleProceessLocationChange: (uuid: string, location: any) => void;
}
