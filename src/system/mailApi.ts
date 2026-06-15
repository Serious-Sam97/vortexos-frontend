import axios from "axios";

/**
 * VortexMail client. Auth token attached by the global axios interceptor. Mail is
 * per-user and persistent; new mail also pushes a "mail" frame over the WebSocket
 * (system/chat.ts → subscribeMail) for live notification.
 */
const API = import.meta.env.VITE_API_URL ?? "";

export type Folder = "inbox" | "sent" | "drafts" | "trash";

export interface MailMsg {
    id: number;
    fromName: string;
    toName: string;
    subject: string;
    body: string;
    createdAt: number;
    read: boolean;
    draft: boolean;
    incoming: boolean;
}

export async function listMail(folder: Folder): Promise<MailMsg[]> {
    const { data } = await axios.get(`${API}/mail`, { params: { folder } });
    return Array.isArray(data) ? data : [];
}

export async function getMail(id: number): Promise<MailMsg> {
    const { data } = await axios.get(`${API}/mail/${id}`);
    return data;
}

export async function sendMail(to: string, subject: string, body: string): Promise<MailMsg> {
    const { data } = await axios.post(`${API}/mail`, { to, subject, body });
    return data;
}

export async function saveDraft(to: string, subject: string, body: string): Promise<MailMsg> {
    const { data } = await axios.post(`${API}/mail/draft`, { to, subject, body });
    return data;
}

export async function sendDraft(id: number, to: string, subject: string, body: string): Promise<MailMsg> {
    const { data } = await axios.post(`${API}/mail/${id}/send`, { to, subject, body });
    return data;
}

export async function setRead(id: number, read: boolean): Promise<void> {
    await axios.put(`${API}/mail/${id}/read`, null, { params: { read } });
}

export async function deleteMail(id: number): Promise<void> {
    await axios.delete(`${API}/mail/${id}`);
}

export async function unreadCount(): Promise<number> {
    try {
        const { data } = await axios.get(`${API}/mail/unread`);
        return data?.count ?? 0;
    } catch {
        return 0;
    }
}

export async function directory(): Promise<string[]> {
    try {
        const { data } = await axios.get(`${API}/mail/directory`);
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}
