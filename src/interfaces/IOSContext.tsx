import { IFile } from "./IFile";

export interface IOSContext {
    cursor: string,
    changeCursor: (cursor: string) => void,
    storage: IFile[],
    setStorage: React.Dispatch<React.SetStateAction<IFile[]>>,
};
