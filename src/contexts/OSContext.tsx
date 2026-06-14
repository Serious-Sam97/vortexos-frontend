import { createContext, useContext, useRef, useState } from "react";
import { ReactNode } from "react";
import { FileClipboard, IOSContext } from "../interfaces/IOSContext";
import { IWallpaper } from "../interfaces/IWallpaper";
import { getSession } from "../system/session";

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

    // "Serious Sam Style" — the vaporwave/retrowave skin. On by default (the VortexOS
    // signature); turning it off reverts the desktop to a clean stock Windows 98 look.
    const [ sssStyle, setSssStyle ] = useState<boolean>(() => localStorage.getItem('vortex.sss') !== '0');
    const toggleSssStyle = () => setSssStyle(prev => {
        const next = !prev;
        localStorage.setItem('vortex.sss', next ? '1' : '0');
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

    // Wallpaper is per-user — keyed by the signed-in username (falls back to the
    // legacy global 'wallpaper' key for anyone who set one before this change).
    const wallpaperKey = () => `vortex.wallpaper.${getSession()?.username || 'user'}`;
    const readWallpaper = (): IWallpaper => {
        const raw = localStorage.getItem(wallpaperKey()) ?? localStorage.getItem('wallpaper');
        if (raw === null) return { image: '', type: 1 };
        try { return JSON.parse(raw); } catch { return { image: '', type: 1 }; }
    };
    const [ wallpaper, setWallpaper ] = useState<IWallpaper>(readWallpaper);

    const changeWallpaper = (value: IWallpaper) => {
        localStorage.setItem(wallpaperKey(), JSON.stringify(value));
        setWallpaper(value);
    }
    // Called after sign-in / user switch so the new user's wallpaper loads.
    const reloadWallpaper = () => setWallpaper(readWallpaper());

    const changeCursor = (cursorType: string) => {
        setCursor(`url(/win-cursor/${cursorType}), auto`);
    }

    return (
        <OSContext.Provider value={{cursor, changeCursor, wallpaper, changeWallpaper, reloadWallpaper, minimized, minimize, restore, crt, toggleCrt, clipboard, setClipboard, theme, setTheme, busy, flashBusy, sssStyle, toggleSssStyle}}>
            {children}
        </OSContext.Provider>
    )
}

export function useOSContext() {
    return useContext(OSContext);
}
