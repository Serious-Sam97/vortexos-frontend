import axios from "axios";

const API = import.meta.env.VITE_API_URL ?? "";

export interface Sharer {
    id: number;
    username: string;
}

/** A backend File row as returned by the share/file endpoints. */
export interface RemoteFile {
    id: number;
    name: string;
    path: string;
    type: string;
    content: string | null; // base64
    shared: boolean;
}

/** Users who have at least one shared file. */
export async function listSharers(): Promise<Sharer[]> {
    const { data } = await axios.get(`${API}/share/users`);
    return Array.isArray(data) ? data : [];
}

/** A given user's shared files (with content). */
export async function listShares(ownerId: number): Promise<RemoteFile[]> {
    const { data } = await axios.get(`${API}/share/users/${ownerId}/files`);
    return Array.isArray(data) ? data : [];
}

/** The current user's own cloud files (to choose what to share). */
export async function listMyFiles(): Promise<RemoteFile[]> {
    const { data } = await axios.get(`${API}/files`);
    return Array.isArray(data) ? data : [];
}

/** Mark one of the current user's files shared / unshared. */
export async function setShared(path: string, shared: boolean): Promise<void> {
    await axios.put(`${API}/files/share`, null, { params: { path, shared } });
}

/** Decode a base64 file body to text (best-effort). */
export function decodeText(content: string | null): string {
    if (!content) return "";
    try {
        return decodeURIComponent(escape(atob(content)));
    } catch {
        try {
            return atob(content);
        } catch {
            return "(unable to display this file)";
        }
    }
}
