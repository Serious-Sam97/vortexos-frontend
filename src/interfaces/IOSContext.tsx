import { IFile } from "./IFile";
import { IWallpaper } from "./IWallpaper";

export interface IOSContext {
    cursor: string,
    changeCursor: (cursor: string) => void,
    storage: IFile[],
    setStorage: (data: Array<Array<IFile>>) => void,
    wallpaper: IWallpaper,
    changeWallpaper: (value: IWallpaper) => void,
};
