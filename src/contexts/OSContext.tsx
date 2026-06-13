import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { IOSContext } from "../interfaces/IOSContext";
import { IWallpaper } from "../interfaces/IWallpaper";

const OSContext = createContext<IOSContext>({} as IOSContext);

export function OSContextProvider({children}: {children: ReactNode}) {
    const [ cursor, setCursor ] = useState('url(/win-cursor/arrow.cur), auto');
    //IMPLEMENT RIGHT CLICK HERE!!

    const [storage, setStorage] = useState<any[]>([]);
    const [ minimized, setMinimized ] = useState<string[]>([]);

    const minimize = (pid: string) => setMinimized(prev => prev.includes(pid) ? prev : [...prev, pid]);
    const restore = (pid: string) => setMinimized(prev => prev.filter(p => p !== pid));

    const [ crt, setCrt ] = useState<boolean>(() => localStorage.getItem('vortex.crt') === '1');
    const toggleCrt = () => setCrt(prev => {
        const next = !prev;
        localStorage.setItem('vortex.crt', next ? '1' : '0');
        return next;
    });

    const [ wallpaper, setWallpaper ] = useState({
        image: '',
        type: 1,
    });

    const userWallpaper = localStorage.getItem('wallpaper');
    useEffect(() => {
        setWallpaper(
            userWallpaper !== null 
                ? JSON.parse(userWallpaper)
                : {
                    image: '',
                    type: 1,
                }
        )
    }, [userWallpaper]);

    const changeWallpaper = (value: IWallpaper) => {
        localStorage.setItem('wallpaper', JSON.stringify(value));
        setWallpaper(value);
    }

    const changeCursor = (cursorType: string) => {
        setCursor(`url(/win-cursor/${cursorType}), auto`);
    }

    return (
        <OSContext.Provider value={{cursor, changeCursor, storage, setStorage, wallpaper, changeWallpaper, minimized, minimize, restore, crt, toggleCrt}}>
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
