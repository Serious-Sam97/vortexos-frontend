import axios from "axios";

/**
 * Client for the shared BBS. Auth token is attached by the global axios
 * interceptor (system/http.ts). The board is public — everyone sees all threads.
 */
const API = import.meta.env.VITE_API_URL ?? "";

export interface BbsThread {
    id: number;
    title: string;
    authorName: string;
    body: string;
    createdAt: number;
    replyCount: number;
}

export interface BbsPost {
    id: number;
    authorId: number;
    authorName: string;
    parentId: number | null;
    title: string | null;
    body: string;
    createdAt: number;
}

export async function listThreads(): Promise<BbsThread[]> {
    const { data } = await axios.get(`${API}/bbs`);
    return Array.isArray(data) ? data : [];
}

export async function getThread(id: number): Promise<{ thread: BbsPost; replies: BbsPost[] }> {
    const { data } = await axios.get(`${API}/bbs/${id}`);
    return data;
}

export async function createThread(title: string, body: string): Promise<BbsPost> {
    const { data } = await axios.post(`${API}/bbs`, { title, body });
    return data;
}

export async function reply(id: number, body: string): Promise<BbsPost> {
    const { data } = await axios.post(`${API}/bbs/${id}/reply`, { body });
    return data;
}
