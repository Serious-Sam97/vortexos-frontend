import React, { useMemo } from "react";
import { ReactNode } from "react";
import { IProcessContext } from "../interfaces/IProcessContext";
import { Process } from "../interfaces/Process";
import { useKernel, useProcessTable } from "../kernel/react/KernelProvider";
import ExplorerIcon from "/explorer.png";
import NotesIcon from "/notes.png";
import Explorer from "../components/Apps/Explorer";
import Notes from "../components/Apps/Notes";
import { Program } from "../interfaces/Program";

const ProcessContext = React.createContext<IProcessContext>({} as IProcessContext);

/**
 * Compatibility shim. v1's ProcessContext API is preserved exactly, but every call now
 * forwards to the microkernel via syscalls — the kernel is the source of truth. Existing
 * components (Desktop, WMenu, WindowManager, ProcessWindow, TaskManager, Explorer) keep
 * working unchanged. New code should prefer `useSys()` / `useProcessTable()` directly.
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

    // The desktop / start menu / explorer pass objects carrying `componentName`.
    const addProcess = (tempProcess: any) => {
        const exec = tempProcess.componentName;
        if (!exec) return;
        kernel.syscall(null, "spawn", {
            exec,
            name: tempProcess.name,
            icon: tempProcess.icon,
            argv: tempProcess.argv,
        });
    };

    const closeProcess = (uuid: string) => {
        if (uuid) kernel.syscall(null, "kill", { pid: uuid });
    };

    const changePriority = (process: Process, _priority: number) => {
        if (process.uuid) kernel.syscall(null, "win_focus", { pid: process.uuid });
    };

    const handleProceessLocationChange = (uuid: string, location: any) => {
        if (uuid) kernel.syscall(null, "win_move", { pid: uuid, location });
    };

    const fetchComponent = (componentName: string) => kernel.registry.component(componentName);

    const fetchIcon = (type: string) => {
        switch (type) {
            case "folder":
                return ExplorerIcon;
            case "notes":
                return NotesIcon;
        }
    };

    const programs: Program[] = [
        { name: "File", icon: ExplorerIcon, componentName: "explorer", component: Explorer },
        { name: "Notes", icon: NotesIcon, componentName: "notes", component: Notes },
    ];

    return (
        <ProcessContext.Provider
            value={{
                processes,
                setProcesses: () => {}, // unused by consumers; kernel owns the table
                changePriority,
                closeProcess,
                ordenatedProcess: processes,
                addProcess,
                handleProceessLocationChange,
                fetchIcon,
                fetchComponent,
                programs,
            }}
        >
            {children}
        </ProcessContext.Provider>
    );
}

export function useProcessContext() {
    return React.useContext(ProcessContext);
}
