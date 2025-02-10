/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProcessContextType {
    processes: any[];
    setProcesses: React.Dispatch<React.SetStateAction<any[]>>;
    changePriority: (process: any, priority: any) => void;
    closeProcess: (uuid: string) => void;
    ordenatedProcess: any[];
    addProcess: (tempProcess: any) => void;
}

const ProcessContext = createContext<ProcessContextType | null>(null);

export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<any[]>([]);
    const [ ordenatedProcess, setOrdenatedProcess ] = React.useState<any[]>([]); 

    useEffect(() => {
        setOrdenatedProcess([...processes].sort((a, b) => a.priority > b.priority));
    }, [processes]);


    const changePriority = (process,  priorityProp) => {
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

    const addProcess = (tempProcess) => {
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
    return useContext(ProcessContext);
}
