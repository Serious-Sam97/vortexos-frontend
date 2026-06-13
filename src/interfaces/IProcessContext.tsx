import { Process } from "./Process";

export interface IProcessContext {
    processes: Process[];
    changePriority: (process: Process, priority?: number) => void;
    closeProcess: (uuid: string) => void;
    addProcess: (tempProcess: Process) => void;
    handleProceessLocationChange: (uuid: string, location: any) => void;
}
