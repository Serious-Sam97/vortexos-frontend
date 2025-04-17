import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { IOSContext } from "../interfaces/IOSContext";


const OSContext = createContext<IOSContext | null>(null);

export function OSContextProvider({children}: {children: ReactNode}) {
    const [ cursor, setCursor ] = useState('url(/win-cursor/arrow.cur), auto');
    //IMPLEMENT RIGHT CLICK HERE!!

    const changeCursor = (cursorType: string) => {
        setCursor(`url(/win-cursor/${cursorType}), auto`);
    }

    return (
        <OSContext.Provider value={{cursor, changeCursor}}>
            {children}
        </OSContext.Provider>
    )
}

export function useOSContext() {
    if (!OSContext) {
        throw new Error("useProcessContext must be used within a ProcessContextProvider");
    }

    return useContext(OSContext);
}
