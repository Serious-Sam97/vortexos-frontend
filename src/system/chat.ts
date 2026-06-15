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

export type PresenceStatus = "active" | "idle" | "away";
export interface PresenceUser {
    name: string;
    status: PresenceStatus;
    activity?: string; // the app they're currently using, if any
}

/** A relayed shared-surface frame (cursors / drawing / doc edits), stamped with the sender. */
export interface RoomSignal {
    type: "cursor" | "draw" | "edit";
    from: string;
    room?: string;
    [k: string]: unknown;
}

let socket: WebSocket | null = null;
let presence: PresenceUser[] = [];
let online: string[] = []; // names only — kept for existing callers (tray count, etc.)
const log: ChatMessage[] = [];
let shouldRun = false;
let lastStatus = ""; // de-dupe outgoing status frames

type Listener = () => void;
const listeners = new Set<Listener>();
const notify = () => listeners.forEach((l) => l());

// Shared-surface signal bus — separate from the presence/log re-render channel.
type SignalListener = (s: RoomSignal) => void;
const signalListeners = new Set<SignalListener>();
const emitSignal = (s: RoomSignal) => signalListeners.forEach((l) => l(s));

// New-mail push channel (VortexMail) — fired when the server pushes a "mail" frame.
export interface MailEvent {
    from: string;
    subject: string;
    mailId: number;
}
const mailListeners = new Set<(m: MailEvent) => void>();
const emitMail = (m: MailEvent) => mailListeners.forEach((l) => l(m));
export function subscribeMail(fn: (m: MailEvent) => void): () => void {
    mailListeners.add(fn);
    return () => mailListeners.delete(fn);
}

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
        if (socket !== ws) return; // ignore a socket that's been superseded (reconnect race)
        let m: { type?: string; users?: PresenceUser[]; from?: string; body?: string; ts?: number; subject?: string; mailId?: number };
        try {
            m = JSON.parse(e.data);
        } catch {
            return;
        }
        if (m.type === "presence") {
            presence = (m.users ?? []).map((u) => ({ name: u.name, status: u.status ?? "active", activity: u.activity || undefined }));
            online = presence.map((u) => u.name);
            // A fresh connection resets server-side status to "active"; re-assert ours.
            lastStatus = "";
            notify();
        } else if (m.type === "msg" && m.from && m.body) {
            log.push({ from: m.from, body: m.body, ts: m.ts ?? Date.now() });
            notify();
        } else if (m.type === "cursor" || m.type === "draw" || m.type === "edit") {
            emitSignal(m as unknown as RoomSignal);
        } else if (m.type === "mail" && m.from) {
            emitMail({ from: m.from, subject: m.subject ?? "", mailId: m.mailId ?? 0 });
        }
    };
    ws.onclose = () => {
        if (socket !== ws) return; // a newer socket already replaced this one — don't touch it
        socket = null;
        presence = [];
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
    presence = [];
    online = [];
    lastStatus = "";
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

/** Rich presence for everyone currently connected (incl. yourself). */
export function getPresence(): PresenceUser[] {
    return presence;
}

/** Send a shared-surface frame (cursor/draw/edit). The server stamps `from`. */
export function sendSignal(payload: { type: "cursor" | "draw" | "edit"; room?: string; [k: string]: unknown }): void {
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    socket.send(JSON.stringify(payload));
}

/** Subscribe to relayed shared-surface frames from other users. */
export function subscribeSignals(fn: (s: RoomSignal) => void): () => void {
    signalListeners.add(fn);
    return () => signalListeners.delete(fn);
}

/** Report our status + the app we're using; de-duped so we only send on change. */
export function sendStatus(status: PresenceStatus, activity = ""): void {
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    const key = `${status}|${activity}`;
    if (key === lastStatus) return;
    lastStatus = key;
    socket.send(JSON.stringify({ type: "status", status, activity }));
}

/** True while the presence/Net Send socket is open — drives the tray network status icon. */
export function isChatConnected(): boolean {
    return socket?.readyState === WebSocket.OPEN;
}

export function getChatLog(): ChatMessage[] {
    return log;
}

export function subscribeChat(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
