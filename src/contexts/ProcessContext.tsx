/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

interface ProcessContextType {
    processes: any[];
    setProcesses: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProcessContext = createContext<ProcessContextType | null>(null);

import { ReactNode } from "react";

export function ProcessContextProvider({children}: {children: ReactNode}) {
    const [processes, setProcesses] = useState<any[]>([]);

    return (
        <ProcessContext.Provider value={{processes, setProcesses}}>
            {children}
        </ProcessContext.Provider>
    )
}

export function useProcessContext() {
    return useContext(ProcessContext);
}
