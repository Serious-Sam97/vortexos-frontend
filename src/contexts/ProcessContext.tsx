import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { IProcessContext } from "../interfaces/IProcessContext";
import { Process } from "../interfaces/Process";


const ProcessContext = createContext<IProcessContext | null>(null);

export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<Process[]>([]);
    const [ ordenatedProcess, setOrdenatedProcess ] = React.useState<Process[]>([]); 

    useEffect(() => {
        setOrdenatedProcess([...processes].sort((a: Process, b: Process) => a.priority - b.priority));
    }, [processes]);


    const changePriority = (process: Process,  priorityProp: number) => {
        let priority = 0;
        setProcesses(processes.map(p => {
            if (p.uuid === process.uuid) {
                return {
                    ...p,
                    priority: priorityProp,
                };
            }
            return {
                ...p,
                priority: ++priority,
            };
        }));
    };

    const addProcess = (tempProcess: Process) => {
        const process = {
            ...tempProcess,
            uuid: uuidv4(),
            priority: 0,
        };
        setProcesses([...processes.map(p => {
            return {
                ...p,
                priority: p.priority + 1
            };
        }), process]);
    }

    const closeProcess = (uuid: string) => {
        //Set Timeout Zero to run after the changePriority function
        setTimeout(() => {
            setProcesses(processes => processes.filter((p: any) => p.uuid !== uuid));
        }, 0);
    }

    return (
        <ProcessContext.Provider value={{processes, setProcesses, changePriority, closeProcess, ordenatedProcess, addProcess}}>
            {children}
        </ProcessContext.Provider>
    )
}

export function useProcessContext() {
    if (!ProcessContext) {
        throw new Error("useProcessContext must be used within a ProcessContextProvider");
    }

    return useContext(ProcessContext);
}
