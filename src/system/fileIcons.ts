import FolderIcon from "/explorer.png";
import FileIcon from "/notes.png";
import ImageIcon from "/image-file.svg";

const IMAGE_RE = /\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;

/** Pick a desktop/Explorer icon for a file by name + whether it's a directory. */
export function iconForEntry(name: string, isDir: boolean): string {
    if (isDir) return FolderIcon;
    if (IMAGE_RE.test(name)) return ImageIcon;
    return FileIcon;
}

export { FolderIcon, FileIcon, ImageIcon };
