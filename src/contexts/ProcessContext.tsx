import React, { useMemo } from "react";
import { ReactNode } from "react";
import { IProcessContext } from "../interfaces/IProcessContext";
import { Process } from "../interfaces/Process";
import { useKernel, useProcessTable } from "../kernel/react/KernelProvider";

const ProcessContext = React.createContext<IProcessContext>({} as IProcessContext);

/**
 * Compatibility shim. v1's ProcessContext API is preserved, but every call now forwards
 * to the microkernel via syscalls — the kernel is the source of truth. Existing components
 * (Desktop, WMenu, WindowManager, ProcessWindow, TaskManager) keep working unchanged.
 * New code should prefer `useSys()` / `useProcessTable()` directly.
 */
export function ProcessContextProvider({ children }: { children: ReactNode }) {
    const kernel = useKernel();
    const table = useProcessTable();

    // Map the kernel's PCBs onto v1's `Process` shape, resolving each process's
    // renderable component from the program registry (/bin).
    const processes: Process[] = useMemo(
        () =>
            table.map((p) => ({
                uuid: p.pid,
                priority: p.priority,
                component: kernel.registry.component(p.exec) ?? (() => null),
                selected: false,
                icon: p.icon,
                name: p.name,
                location: p.window,
            })),
        [table, kernel],
    );

    // Callers (desktop / start menu / explorer) pass objects carrying `componentName`.
    const addProcess = (tempProcess: any) => {
        const exec = tempProcess.componentName;
        if (!exec) return;
        kernel.syscall(null, "spawn", { exec, name: tempProcess.name, icon: tempProcess.icon, argv: tempProcess.argv });
    };

    const closeProcess = (uuid: string) => {
        if (uuid) kernel.syscall(null, "kill", { pid: uuid });
    };

    const changePriority = (process: Process) => {
        if (process.uuid) kernel.syscall(null, "win_focus", { pid: process.uuid });
    };

    const handleProceessLocationChange = (uuid: string, location: any) => {
        if (uuid) kernel.syscall(null, "win_move", { pid: uuid, location });
    };

    return (
        <ProcessContext.Provider
            value={{ processes, changePriority, closeProcess, addProcess, handleProceessLocationChange }}
        >
            {children}
        </ProcessContext.Provider>
    );
}

export function useProcessContext() {
    return React.useContext(ProcessContext);
}
