import { useEffect, useRef, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { HighScores } from "../games/HighScores";
import { recordScore } from "../../system/scores";
import { playChord } from "../../system/sounds";

/** FreeCell. Four free cells, four foundations, eight cascades. Build the foundations A→K by
 *  suit. Move a run of cards if you have enough free cells + empty columns. Click to pick up,
 *  click a destination to drop; double-click sends a card to its foundation. */

type Suit = 0 | 1 | 2 | 3;
interface Card { suit: Suit; rank: number }
const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const isRed = (s: Suit) => s === 1 || s === 2;

type Pile = "free" | "found" | "tab";
interface Sel { pile: Pile; col: number; idx: number }
interface State { free: (Card | null)[]; found: Card[][]; tab: Card[][] }

const CARD_W = 52;
const CARD_H = 72;
const FAN = 18;

function freshDeal(): State {
    const deck: Card[] = [];
    for (let s = 0 as Suit; s < 4; s = (s + 1) as Suit) for (let r = 1; r <= 13; r++) deck.push({ suit: s, rank: r });
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const tab: Card[][] = [[], [], [], [], [], [], [], []];
    deck.forEach((c, i) => tab[i % 8].push(c));
    return { free: [null, null, null, null], found: [[], [], [], []], tab };
}

const validRun = (cards: Card[]) => cards.every((c, i) => i === 0 || (isRed(cards[i - 1].suit) !== isRed(c.suit) && cards[i - 1].rank === c.rank + 1));

const FreeCell: React.FC = () => {
    const [st, setSt] = useState<State>(freshDeal);
    const [sel, setSel] = useState<Sel | null>(null);
    const [moves, setMoves] = useState(0);
    const [secs, setSecs] = useState(0);
    const [won, setWon] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const recorded = useRef(false);

    useEffect(() => {
        if (won) return;
        const id = setInterval(() => setSecs((s) => s + 1), 1000);
        return () => clearInterval(id);
    }, [won]);

    const newGame = () => { setSt(freshDeal()); setSel(null); setMoves(0); setSecs(0); setWon(false); recorded.current = false; };
    const clone = (s: State): State => ({ free: [...s.free], found: s.found.map((f) => [...f]), tab: s.tab.map((t) => [...t]) });

    const checkWin = (s: State) => {
        if (s.found.every((f) => f.length === 13)) {
            setWon(true);
            if (!recorded.current) { recorded.current = true; playChord(); recordScore("freecell", secs).then(() => setRefresh((r) => r + 1)); }
        }
    };
    const commit = (s: State) => { setMoves((m) => m + 1); setSt(s); setSel(null); checkWin(s); };

    const canFound = (card: Card, f: Card[]) => (f.length === 0 ? card.rank === 1 : f[f.length - 1].suit === card.suit && card.rank === f[f.length - 1].rank + 1);
    const canTab = (card: Card, col: Card[]) => (col.length === 0 ? true : isRed(col[col.length - 1].suit) !== isRed(card.suit) && col[col.length - 1].rank === card.rank + 1);
    const maxMove = (destEmpty: boolean) => {
        const freeN = st.free.filter((c) => c === null).length;
        const emptyCols = st.tab.filter((t) => t.length === 0).length - (destEmpty ? 1 : 0);
        return (freeN + 1) * Math.pow(2, Math.max(0, emptyCols));
    };

    const movingCards = (s: State, from: Sel): Card[] => {
        if (from.pile === "free") { const c = s.free[from.col]; return c ? [c] : []; }
        if (from.pile === "found") return s.found[from.col].slice(-1);
        return s.tab[from.col].slice(from.idx);
    };
    const removeFrom = (s: State, from: Sel) => {
        if (from.pile === "free") s.free[from.col] = null;
        else if (from.pile === "found") s.found[from.col].pop();
        else s.tab[from.col] = s.tab[from.col].slice(0, from.idx);
    };

    const tryMove = (from: Sel, to: { pile: Pile; col: number }): boolean => {
        const moving = movingCards(st, from);
        if (!moving.length) return false;
        const s = clone(st);
        const cards = movingCards(s, from);
        if (to.pile === "free") {
            if (cards.length !== 1 || s.free[to.col] !== null) return false;
            removeFrom(s, from); s.free[to.col] = cards[0]; commit(s); return true;
        }
        if (to.pile === "found") {
            if (cards.length !== 1 || !canFound(cards[0], s.found[to.col])) return false;
            removeFrom(s, from); s.found[to.col].push(cards[0]); commit(s); return true;
        }
        // tableau (possibly a run)
        if (!validRun(cards)) return false;
        const destEmpty = s.tab[to.col].length === 0;
        if (!canTab(cards[0], s.tab[to.col]) || cards.length > maxMove(destEmpty)) return false;
        removeFrom(s, from); s.tab[to.col].push(...cards); commit(s); return true;
    };

    const autoToFoundation = (from: Sel): boolean => {
        const cards = movingCards(st, from);
        if (cards.length !== 1) return false;
        for (let f = 0; f < 4; f++) if (canFound(cards[0], st.found[f])) return tryMove(from, { pile: "found", col: f });
        return false;
    };

    const clickTab = (col: number, idx: number) => {
        if (won) return;
        if (!sel) {
            // only pick up a valid run
            if (validRun(st.tab[col].slice(idx))) setSel({ pile: "tab", col, idx });
            return;
        }
        if (sel.pile === "tab" && sel.col === col && sel.idx === idx) { setSel(null); return; }
        if (tryMove(sel, { pile: "tab", col })) return;
        if (validRun(st.tab[col].slice(idx))) setSel({ pile: "tab", col, idx }); else setSel(null);
    };
    const clickFree = (col: number) => {
        if (won) return;
        if (sel) { if (tryMove(sel, { pile: "free", col })) return; }
        if (st.free[col]) setSel(isSel("free", col, 0) ? null : { pile: "free", col, idx: 0 });
        else setSel(null);
    };
    const clickFound = (col: number) => {
        if (won || !sel) return;
        if (!tryMove(sel, { pile: "found", col })) setSel(null);
    };

    const isSel = (pile: Pile, col: number, idx: number) => sel?.pile === pile && sel.col === col && sel.idx === idx;

    const CardView = ({ card, selected, onClick, onDouble }: { card: Card; selected?: boolean; onClick?: () => void; onDouble?: () => void }) => (
        <div onClick={onClick} onDoubleClick={onDouble} style={{
            width: CARD_W, height: CARD_H, boxSizing: "border-box", borderRadius: 4, cursor: "pointer", background: "#fff",
            border: selected ? "2px solid #ffd000" : "1px solid #000", color: isRed(card.suit) ? "#c00000" : "#000",
            position: "relative", userSelect: "none", boxShadow: selected ? "0 0 6px #ffd000" : "1px 1px 1px rgba(0,0,0,0.3)",
        }}>
            <div style={{ position: "absolute", top: 2, left: 4, fontSize: 12, fontWeight: "bold", lineHeight: 1 }}>{RANKS[card.rank]}<div>{SUITS[card.suit]}</div></div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{SUITS[card.suit]}</div>
        </div>
    );
    const Slot = ({ label, onClick }: { label?: string; onClick?: () => void }) => (
        <div onClick={onClick} style={{ width: CARD_W, height: CARD_H, borderRadius: 4, border: "1px dashed rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{label}</div>
    );

    return (
        <AppShell $minW={560} $minH={480}>
            <MenuBar>
                <Menu label="Game"><MenuItem onMouseDown={(e) => { e.preventDefault(); newGame(); }}>New Game<span>F2</span></MenuItem></Menu>
                <Menu label="Help"><MenuItem $disabled>FreeCell — VortexOS</MenuItem></Menu>
            </MenuBar>

            <AppBody style={{ background: "#1f7a3d", padding: 10, gap: 14, overflow: "auto" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                        {st.free.map((c, i) => (
                            <div key={i} onClick={() => clickFree(i)}>
                                {c ? <CardView card={c} selected={isSel("free", i, 0)} onClick={() => clickFree(i)} onDouble={() => autoToFoundation({ pile: "free", col: i, idx: 0 })} /> : <Slot />}
                            </div>
                        ))}
                        <div style={{ flex: 1 }} />
                        {st.found.map((f, i) => (
                            <div key={i} onClick={() => clickFound(i)}>
                                {f.length ? <CardView card={f[f.length - 1]} /> : <Slot label={SUITS[i]} onClick={() => clickFound(i)} />}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                        {st.tab.map((col, c) => (
                            <div key={c} style={{ position: "relative", width: CARD_W, minHeight: CARD_H }} onClick={() => col.length === 0 && clickTab(c, 0)}>
                                {col.length === 0 && <Slot onClick={() => clickTab(c, 0)} />}
                                {col.map((card, i) => (
                                    <div key={i} style={{ position: "absolute", top: i * FAN, left: 0 }}>
                                        <CardView card={card} selected={isSel("tab", c, i)} onClick={() => clickTab(c, i)} onDouble={() => autoToFoundation({ pile: "tab", col: c, idx: i })} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {won && (
                        <div style={{ marginTop: 16, padding: 12, background: "#ffffcc", border: "2px solid #000080", textAlign: "center", fontWeight: "bold" }}>
                            🎉 Solved in {secs}s, {moves} moves! <span style={{ cursor: "pointer", color: "#000080", textDecoration: "underline" }} onClick={newGame}>Play again</span>
                        </div>
                    )}
                </div>

                <HighScores game="freecell" order="asc" format={(v) => `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}`} title="Best Times" width={140} refreshKey={refresh} />
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>Time {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, "0")}</StatusPanel>
                <StatusPanel>Moves: {moves}</StatusPanel>
                <StatusPanel>{won ? "Solved! 🎉" : "FreeCell"}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default FreeCell;
