/**
 * Fuzzy launcher core — shared by the command palette and the Run dialog. Pure functions
 * (no React/DOM) so they're unit-testable and reusable.
 */

/**
 * Subsequence fuzzy match with scoring. Returns null when `query` isn't a subsequence of
 * `text`; otherwise a score where higher is better. Bonuses for consecutive matches and for
 * matching at word starts (so "cp" ranks "Control Panel" highly).
 */
export function fuzzyScore(query: string, text: string): number | null {
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    if (q === "") return 1;

    let score = 0;
    let qi = 0;
    let prevMatch = -2;
    for (let ti = 0; ti < t.length && qi < q.length; ti++) {
        if (t[ti] === q[qi]) {
            score += 1;
            if (ti === prevMatch + 1) score += 3; // consecutive run
            const atWordStart = ti === 0 || t[ti - 1] === " " || t[ti - 1] === "/" || t[ti - 1] === "-" || t[ti - 1] === "_";
            if (atWordStart) score += 5;
            if (ti === 0) score += 2; // very front
            prevMatch = ti;
            qi++;
        }
    }
    if (qi < q.length) return null; // not all of the query was consumed
    // Prefer shorter targets and exact prefixes.
    score -= t.length * 0.05;
    if (t.startsWith(q)) score += 4;
    if (t === q) score += 10;
    return score;
}

export interface RankableApp {
    exec: string;
    name: string;
    icon: string;
}

/** Rank installed apps against a query, best first. Empty query returns all (alphabetical). */
export function rankApps<T extends RankableApp>(apps: readonly T[], query: string): T[] {
    if (query.trim() === "") {
        return [...apps].sort((a, b) => a.name.localeCompare(b.name));
    }
    const scored: Array<{ app: T; score: number }> = [];
    for (const app of apps) {
        // Match against the name, and also the exec key (so "ctrlpanel"/"cp" both work).
        const s = Math.max(fuzzyScore(query, app.name) ?? -Infinity, (fuzzyScore(query, app.exec) ?? -Infinity) - 2);
        if (s > -Infinity) scored.push({ app, score: s });
    }
    scored.sort((a, b) => b.score - a.score || a.app.name.localeCompare(b.app.name));
    return scored.map((s) => s.app);
}
