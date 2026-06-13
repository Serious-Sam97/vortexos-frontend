import { LibOS } from "../kernel/libos";
import { pushRecentDoc } from "./recents";

const IMAGE_EXT = /\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)$/i;
const RICH_EXT = /\.(html?|rtf|doc)$/i;

/**
 * Open a VFS path with the right handler app: folders → Explorer, images → Image Viewer,
 * audio → Media Player, everything else → Notes. Shared by Run and the launcher so the
 * routing lives in one place. Returns false if the path doesn't exist.
 */
export async function openPath(sys: LibOS, path: string): Promise<boolean> {
    let type: string;
    try {
        type = (await sys.stat(path)).type;
    } catch {
        return false;
    }
    if (type === "dir") {
        sys.spawn("explorer", { argv: [path] });
        return true;
    }
    if (IMAGE_EXT.test(path)) sys.spawn("imageviewer", { argv: [path] });
    else if (AUDIO_EXT.test(path)) sys.spawn("mediaplayer", { argv: [path] });
    else if (RICH_EXT.test(path)) sys.spawn("wordpad", { argv: [path] });
    else sys.spawn("notes", { argv: [path] });
    pushRecentDoc(path); // a file was opened — record it for Run's recent docs
    return true;
}
