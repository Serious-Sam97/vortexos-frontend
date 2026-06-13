import { IWallpaper } from "./IWallpaper";

export interface IOSContext {
    cursor: string,
    changeCursor: (cursor: string) => void,
    wallpaper: IWallpaper,
    changeWallpaper: (value: IWallpaper) => void,
    minimized: string[],
    minimize: (pid: string) => void,
    restore: (pid: string) => void,
    crt: boolean,
    toggleCrt: () => void,
    clipboard: FileClipboard | null,
    setClipboard: (clip: FileClipboard | null) => void,
    theme: string,
    setTheme: (theme: string) => void,
};

export interface FileClipboard {
    op: "cut" | "copy";
    path: string;
}
