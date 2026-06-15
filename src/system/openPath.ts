import { LibOS } from "../kernel/libos";
import { pushRecentDoc } from "./recents";

const IMAGE_EXT = /\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)$/i;
const VIDEO_EXT = /\.(mp4|m4v|webm|ogv|mov|mkv)$/i;
const RICH_EXT = /\.(html?|rtf|doc)$/i;
const CODE_EXT = /\.(js|jsx|ts|tsx|mjs|cjs|css|scss|less|json|md|markdown|sh|bash|py|xml)$/i;

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
    else if (VIDEO_EXT.test(path)) sys.spawn("video", { argv: [path] });
    else if (AUDIO_EXT.test(path)) sys.spawn("mediaplayer", { argv: [path] });
    else if (/\.csv$/i.test(path)) sys.spawn("vortexcalc", { argv: [path] });
    else if (/\.pdf$/i.test(path)) sys.spawn("docviewer", { argv: [path] });
    else if (/\.(md|markdown)$/i.test(path)) sys.spawn("markdown", { argv: [path] });
    else if (CODE_EXT.test(path)) sys.spawn("vortexcode", { argv: [path] });
    else if (RICH_EXT.test(path)) sys.spawn("wordpad", { argv: [path] });
    else sys.spawn("notes", { argv: [path] });
    pushRecentDoc(path); // a file was opened — record it for Run's recent docs
    return true;
}
