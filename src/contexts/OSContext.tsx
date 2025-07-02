import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { IOSContext } from "../interfaces/IOSContext";

const OSContext = createContext<IOSContext>({} as IOSContext);

export function OSContextProvider({children}: {children: ReactNode}) {
    const [ cursor, setCursor ] = useState('url(/win-cursor/arrow.cur), auto');
    //IMPLEMENT RIGHT CLICK HERE!!

    const [storage, setStorage] = useState<any[]>([]);

    const [ wallpaper, setWallpaper ] = useState('');

    const userWallpaper = localStorage.getItem('wallpaper');
    useEffect(() => {
        setWallpaper(userWallpaper !== null ? userWallpaper : '')
    }, [userWallpaper]);

    const changeWallpaper = (value: string) => {
        localStorage.setItem('wallpaper', value);
        setWallpaper(value);
    }

    const changeCursor = (cursorType: string) => {
        setCursor(`url(/win-cursor/${cursorType}), auto`);
    }

    return (
        <OSContext.Provider value={{cursor, changeCursor, storage, setStorage, wallpaper, changeWallpaper}}>
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
