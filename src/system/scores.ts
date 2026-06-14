import axios from "axios";

/**
 * Per-user high scores, synced to the backend `/scores` API. The axios auth interceptor
 * (http.ts) attaches the Bearer token automatically. `value` is the metric — request order
 * "desc" for higher-is-better games (Snake, Solitaire) or "asc" for time games (Minesweeper).
 */
const API = import.meta.env.VITE_API_URL;

export interface ScoreEntry {
    id: number;
    game: string;
    value: number;
    createdAt: number;
}

export type ScoreOrder = "desc" | "asc";

/** Record a score (best-effort; swallows network/auth errors so games never crash). */
export async function recordScore(game: string, value: number): Promise<void> {
    try {
        await axios.post(`${API}/scores`, { game, value });
    } catch {
        /* offline or signed out — high scores are non-critical */
    }
}

/** The current user's top entries for a game (max 10). */
export async function getScores(game: string, order: ScoreOrder = "desc"): Promise<ScoreEntry[]> {
    try {
        const res = await axios.get(`${API}/scores`, { params: { game, order } });
        return Array.isArray(res.data) ? res.data : [];
    } catch {
        return [];
    }
}

/** The current user's single best entry for a game, or null. */
export async function getBest(game: string, order: ScoreOrder = "desc"): Promise<ScoreEntry | null> {
    const list = await getScores(game, order);
    return list[0] ?? null;
}
