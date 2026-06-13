import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { FileClipboard, IOSContext } from "../interfaces/IOSContext";
import { IWallpaper } from "../interfaces/IWallpaper";

const OSContext = createContext<IOSContext>({} as IOSContext);

export function OSContextProvider({children}: {children: ReactNode}) {
    const [ cursor, setCursor ] = useState('url(/win-cursor/arrow.cur), auto');
    const [ minimized, setMinimized ] = useState<string[]>([]);

    const minimize = (pid: string) => setMinimized(prev => prev.includes(pid) ? prev : [...prev, pid]);
    const restore = (pid: string) => setMinimized(prev => prev.filter(p => p !== pid));

    const [ crt, setCrt ] = useState<boolean>(() => localStorage.getItem('vortex.crt') === '1');
    const toggleCrt = () => setCrt(prev => {
        const next = !prev;
        localStorage.setItem('vortex.crt', next ? '1' : '0');
        return next;
    });

    const [ clipboard, setClipboard ] = useState<FileClipboard | null>(null);

    const [ theme, setThemeState ] = useState<string>(() => localStorage.getItem('vortex.theme') || 'original');
    const setTheme = (next: string) => {
        localStorage.setItem('vortex.theme', next);
        setThemeState(next);
    };

    // Brief hourglass while something is launching/working.
    const [ busy, setBusy ] = useState<boolean>(false);
    const busyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const flashBusy = (ms = 550) => {
        setBusy(true);
        if (busyTimer.current) clearTimeout(busyTimer.current);
        busyTimer.current = setTimeout(() => setBusy(false), ms);
    };

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
        <OSContext.Provider value={{cursor, changeCursor, wallpaper, changeWallpaper, minimized, minimize, restore, crt, toggleCrt, clipboard, setClipboard, theme, setTheme, busy, flashBusy}}>
            {children}
        </OSContext.Provider>
    )
}

export function useOSContext() {
    return useContext(OSContext);
}
