import { useEffect, useState } from "react";
import { Frame } from "react95";
import { getScores, ScoreEntry, ScoreOrder } from "../../system/scores";

/**
 * A reusable per-user high-score panel. Games embed it and bump `refreshKey` after recording
 * a score to re-fetch. `format` renders the metric (e.g. seconds → "1:23").
 */
export const HighScores: React.FC<{
    game: string;
    order?: ScoreOrder;
    format?: (v: number) => string;
    title?: string;
    refreshKey?: number;
    width?: number;
}> = ({ game, order = "desc", format = (v) => String(v), title = "High Scores", refreshKey, width = 180 }) => {
    const [scores, setScores] = useState<ScoreEntry[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let alive = true;
        getScores(game, order).then((s) => { if (alive) { setScores(s); setLoaded(true); } });
        return () => { alive = false; };
    }, [game, order, refreshKey]);

    return (
        <div style={{ width }}>
            <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 4, color: "#000080" }}>🏆 {title}</div>
            <Frame variant="well" style={{ background: "#fff", padding: 4, minHeight: 60 }}>
                {!loaded ? (
                    <div style={{ fontSize: 11, color: "#888", padding: 4 }}>Loading…</div>
                ) : scores.length === 0 ? (
                    <div style={{ fontSize: 11, color: "#888", padding: 4 }}>No scores yet — be the first!</div>
                ) : (
                    scores.map((s, i) => (
                        <div key={s.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "1px 4px", background: i === 0 ? "#fff7cc" : "transparent" }}>
                            <span style={{ color: "#555", width: 18 }}>{i + 1}.</span>
                            <span style={{ fontFamily: "monospace", fontWeight: i === 0 ? "bold" : "normal" }}>{format(s.value)}</span>
                            <span style={{ color: "#999", fontSize: 10, marginLeft: "auto", paddingLeft: 8 }}>{new Date(s.createdAt).toLocaleDateString()}</span>
                        </div>
                    ))
                )}
            </Frame>
        </div>
    );
};

export default HighScores;
