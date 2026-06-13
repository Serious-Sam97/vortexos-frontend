/**
 * The signed-in session — token + username — persisted across reloads.
 * This module is the single source of truth for the auth token; networking code
 * (CloudFS, Backlogger) reads `getToken()` to authorize its requests.
 */
export interface Session {
    token: string;
    username: string;
}

const KEY = "vortex.session";

export function getSession(): Session | null {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? (JSON.parse(raw) as Session) : null;
    } catch {
        return null;
    }
}

export function setSession(session: Session): void {
    localStorage.setItem(KEY, JSON.stringify(session));
}

export function clearSession(): void {
    localStorage.removeItem(KEY);
}

export function getToken(): string | null {
    return getSession()?.token ?? null;
}
