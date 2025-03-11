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
import Notes from "../components/Apps/Notes";
import Browser from "../components/Apps/Browser";


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
            location: {
                x: window.innerWidth/2,
                y: window.innerHeight/2
            },
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

    //TODO: Move this to a separated file and improve logic && flow
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
            case 'backlogger':
                return Backlogger;
                break;
            case 'notes':
                return Notes;
                break;
            case 'browser':
                return Browser;
                break;
        }
    }

    const handleProceessLocationChange = (uuid: string, location: any) => {

        const lsProcess = localStorage.getItem('process');

        if (!lsProcess) {
            return;
        }

        const allProcess = [
            ...JSON.parse(lsProcess).map((process: Process) => {
                if (process.uuid === uuid) {
                    return {
                        ...process,
                        location
                    }
                }

                return process;
            })
        ];

        localStorage.removeItem('process');
        localStorage.setItem('process', JSON.stringify(allProcess));
    }

    return (
        <ProcessContext.Provider value={{processes, setProcesses, changePriority, closeProcess, ordenatedProcess, addProcess, handleProceessLocationChange}}>
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
