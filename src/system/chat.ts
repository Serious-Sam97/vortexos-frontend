import { getToken } from "./session";

/**
 * The Network "Net Send" client — a singleton WebSocket to the backend's /ws endpoint.
 * Connected after sign-in (the JWT goes in the handshake query string). Tracks who's online
 * and keeps an in-memory message log; components subscribe for re-renders.
 */
export interface ChatMessage {
    from: string; // sender username, or "me" for outgoing
    to?: string;
    body: string;
    ts: number;
    mine?: boolean;
}

let socket: WebSocket | null = null;
let online: string[] = [];
const log: ChatMessage[] = [];
let shouldRun = false;

type Listener = () => void;
const listeners = new Set<Listener>();
const notify = () => listeners.forEach((l) => l());

function wsUrl(token: string): string {
    const base = (import.meta.env.VITE_API_URL ?? "").replace(/^http/, "ws");
    return `${base}/ws?token=${encodeURIComponent(token)}`;
}

export function connectChat(): void {
    const token = getToken();
    if (!token || socket) return;
    shouldRun = true;
    open(token);
}

function open(token: string): void {
    let ws: WebSocket;
    try {
        ws = new WebSocket(wsUrl(token));
    } catch {
        return;
    }
    socket = ws;

    ws.onmessage = (e) => {
        let m: { type?: string; users?: string[]; from?: string; body?: string; ts?: number };
        try {
            m = JSON.parse(e.data);
        } catch {
            return;
        }
        if (m.type === "presence") {
            online = m.users ?? [];
            notify();
        } else if (m.type === "msg" && m.from && m.body) {
            log.push({ from: m.from, body: m.body, ts: m.ts ?? Date.now() });
            notify();
        }
    };
    ws.onclose = () => {
        socket = null;
        online = [];
        notify();
        if (shouldRun) {
            // try to reconnect with whatever token is current
            setTimeout(() => {
                const t = getToken();
                if (shouldRun && t && !socket) open(t);
            }, 2000);
        }
    };
    ws.onerror = () => {
        try {
            ws.close();
        } catch {
            /* ignore */
        }
    };
}

export function disconnectChat(): void {
    shouldRun = false;
    online = [];
    const s = socket;
    socket = null;
    try {
        s?.close();
    } catch {
        /* ignore */
    }
    notify();
}

export function sendChat(to: string, body: string): void {
    if (!socket || socket.readyState !== WebSocket.OPEN || !to || !body) return;
    socket.send(JSON.stringify({ type: "msg", to, body }));
    log.push({ from: "me", to, body, ts: Date.now(), mine: true });
    notify();
}

export function getOnline(): string[] {
    return online;
}

export function getChatLog(): ChatMessage[] {
    return log;
}

export function subscribeChat(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
