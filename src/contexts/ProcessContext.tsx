import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { IProcessContext } from "../interfaces/IProcessContext";
import { Process } from "../interfaces/Process";
import RecycleBin from "../components/Apps/RecycleBin";
import MyComputer from "../components/Apps/MyComputer";
import TaskManager from "../components/Apps/TaskManager";
import Doom from "../components/Apps/Doom";
import Backlogger from "../components/Apps/Backlogger";


const ProcessContext = createContext<IProcessContext | null>(null);

export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<Process[]>([]);
    const [ ordenatedProcess, setOrdenatedProcess ] = React.useState<Process[]>([]);

    useEffect(() => {
        const storedProcesses = localStorage.getItem('process');
        if (storedProcesses) {
            setProcesses([
                ...JSON.parse(storedProcesses).map(process => {
                    return {
                        ...process,
                        component: fetchComponent(process.componentName)
                    }
                })
            ]);
        }
    }, []);

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
        const allProcess = [...processes.map(p => {
            return {
                ...p,
                priority: p.priority + 1
            };
        }), process];

        setProcesses(allProcess);
        localStorage.setItem('process', JSON.stringify(allProcess));
    }

    const closeProcess = (uuid: string) => {
        //Set Timeout Zero to run after the changePriority function
        setTimeout(() => {
            const allProcess = processes.filter((p: Process) => p.uuid !== uuid);
            setProcesses(allProcess);
            localStorage.setItem('process', JSON.stringify(allProcess));
        }, 0);
    }

    const fetchComponent = (componentName: string) => {
        switch(componentName) {
            case 'recycle_bin':
                return RecycleBin;
                break;
            case 'my_computer':
                return MyComputer;
                break;
            case 'task_manager':
                return TaskManager;
                break;
            case 'doom':
                return Doom;
                break;
            case 'Backlogger':
                return Backlogger;
                break;
        }
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
