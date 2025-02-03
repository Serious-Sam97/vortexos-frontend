/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

interface ProcessContextType {
    processes: any[];
    setProcesses: React.Dispatch<React.SetStateAction<any[]>>;
    changePriority: (process: any, priority: any) => void;
    closeProcess: (uuid: string) => void;
    ordenatedProcess: any[];
}

const ProcessContext = createContext<ProcessContextType | null>(null);



export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<any[]>([]);
    const [ ordenatedProcess, setOrdenatedProcess ] = React.useState<any[]>([]);

    useEffect(() => {
        setOrdenatedProcess(processes.sort((a, b) => a.priority > b.priority));
        console.log(processes.sort((a, b) => a.priority > b.priority));
    }, [processes]);

    const changePriority = (process,  priority) => {
        setProcesses(processes.map(p => {
            if (p.uuid === process.uuid) {
                return {
                    ...p,
                    priority,
                };
            }
            return {
                ...p,
                priority: priority + 1,
            };
        }));
    };

    const closeProcess = (uuid: string) => {
        //Set Timeout Zero to run after the changePriority function
        setTimeout(() => {
            setProcesses(processes => processes.filter((p: any) => p.uuid !== uuid));
        }, 0);
    }

    return (
        <ProcessContext.Provider value={{processes, setProcesses, changePriority, closeProcess, ordenatedProcess}}>
            {children}
        </ProcessContext.Provider>
    )
}

export function useProcessContext() {
    return useContext(ProcessContext);
}
