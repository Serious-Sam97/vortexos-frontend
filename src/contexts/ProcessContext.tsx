/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface ProcessContextType {
    processes: any[];
    setProcesses: React.Dispatch<React.SetStateAction<any[]>>;
    changePriority: (process: any, priority: any) => void;
}

const ProcessContext = createContext<ProcessContextType | null>(null);



export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<any[]>([]);
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

    return (
        <ProcessContext.Provider value={{processes, setProcesses, changePriority}}>
            {children}
        </ProcessContext.Provider>
    )
}

export function useProcessContext() {
    return useContext(ProcessContext);
}
