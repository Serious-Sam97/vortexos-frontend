import { IFile } from "./IFile";

export interface IOSContext {
    cursor: string,
    changeCursor: (cursor: string) => void,
    storage: IFile[],
    setStorage: (data: Array<Array<IFile>>) => void,
    wallpaper: string,
    changeWallpaper: (value: string) => void,
};
