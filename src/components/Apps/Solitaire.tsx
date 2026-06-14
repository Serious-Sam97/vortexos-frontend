import { useEffect, useRef, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { HighScores } from "../games/HighScores";
import { recordScore } from "../../system/scores";
import { playChord } from "../../system/sounds";

/** Klondike Solitaire. Click a card to pick it up, click a destination to drop it; double-click
 *  sends a card to its foundation. Build the four foundations A→K by suit to win. */

type Suit = 0 | 1 | 2 | 3; // ♠ ♥ ♦ ♣
interface Card { suit: Suit; rank: number; up: boolean }
const SUITS = ["♠", "♥", "♦", "♣"];
const isRed = (s: Suit) => s === 1 || s === 2;
const RANKS = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

type Pile = "stock" | "waste" | "found" | "tab";
interface Sel { pile: Pile; col: number; idx: number }

interface State {
    stock: Card[];
    waste: Card[];
    found: Card[][]; // 4
    tab: Card[][]; // 7
}

const CARD_W = 56;
const CARD_H = 78;
const FAN = 20;

function freshDeal(): State {
    const deck: Card[] = [];
    for (let s = 0 as Suit; s < 4; s = (s + 1) as Suit) for (let r = 1; r <= 13; r++) deck.push({ suit: s, rank: r, up: false });
    // Fisher–Yates
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const tab: Card[][] = [[], [], [], [], [], [], []];
    let k = 0;
    for (let c = 0; c < 7; c++) {
        for (let n = 0; n <= c; n++) {
            const card = deck[k++];
            card.up = n === c;
            tab[c].push(card);
        }
    }
    const stock = deck.slice(k).map((c) => ({ ...c, up: false }));
    return { stock, waste: [], found: [[], [], [], []], tab };
}

const Solitaire: React.FC = () => {
    const [st, setSt] = useState<State>(freshDeal);
    const [sel, setSel] = useState<Sel | null>(null);
    const [moves, setMoves] = useState(0);
    const [secs, setSecs] = useState(0);
    const [won, setWon] = useState(false);
    const [draw3, setDraw3] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const recorded = useRef(false);

    useEffect(() => {
        if (won) return;
        const id = setInterval(() => setSecs((s) => s + 1), 1000);
        return () => clearInterval(id);
    }, [won]);

    const newGame = () => {
        setSt(freshDeal()); setSel(null); setMoves(0); setSecs(0); setWon(false); recorded.current = false;
    };

    const checkWin = (s: State) => {
        if (s.found.every((f) => f.length === 13)) {
            setWon(true);
            if (!recorded.current) {
                recorded.current = true;
                playChord();
                recordScore("solitaire", secs).then(() => setRefresh((r) => r + 1));
            }
        }
    };

    const commit = (s: State) => { setMoves((m) => m + 1); setSt(s); setSel(null); checkWin(s); };
    const clone = (s: State): State => ({ stock: [...s.stock], waste: [...s.waste], found: s.found.map((f) => [...f]), tab: s.tab.map((t) => [...t]) });

    // --- stock / waste ---
    const drawStock = () => {
        const s = clone(st);
        if (s.stock.length === 0) {
            s.stock = s.waste.reverse().map((c) => ({ ...c, up: false }));
            s.waste = [];
        } else {
            const n = draw3 ? 3 : 1;
            for (let i = 0; i < n && s.stock.length; i++) {
                const c = s.stock.pop()!; c.up = true; s.waste.push(c);
            }
        }
        setSt(s); setSel(null);
    };

    // --- move validation ---
    const canFound = (card: Card, f: Card[]) =>
        f.length === 0 ? card.rank === 1 : f[f.length - 1].suit === card.suit && card.rank === f[f.length - 1].rank + 1;
    const canTab = (card: Card, col: Card[]) =>
        col.length === 0 ? card.rank === 13 : col[col.length - 1].up && isRed(col[col.length - 1].suit) !== isRed(card.suit) && col[col.length - 1].rank === card.rank + 1;

    const movingCards = (s: State, from: Sel): Card[] => {
        if (from.pile === "waste") return s.waste.slice(-1);
        if (from.pile === "found") return s.found[from.col].slice(-1);
        return s.tab[from.col].slice(from.idx);
    };
    const removeFrom = (s: State, from: Sel) => {
        if (from.pile === "waste") s.waste.pop();
        else if (from.pile === "found") s.found[from.col].pop();
        else {
            s.tab[from.col] = s.tab[from.col].slice(0, from.idx);
            const col = s.tab[from.col];
            if (col.length && !col[col.length - 1].up) col[col.length - 1].up = true; // flip newly exposed
        }
    };

    const tryMove = (from: Sel, to: { pile: Pile; col: number }): boolean => {
        const cards = movingCards(st, from);
        if (!cards.length) return false;
        const s = clone(st);
        const moving = movingCards(s, from);
        if (to.pile === "found") {
            if (moving.length !== 1 || !canFound(moving[0], s.found[to.col])) return false;
            removeFrom(s, from); s.found[to.col].push(moving[0]); commit(s); return true;
        }
        if (to.pile === "tab") {
            if (!canTab(moving[0], s.tab[to.col])) return false;
            removeFrom(s, from); s.tab[to.col].push(...moving); commit(s); return true;
        }
        return false;
    };

    const autoToFoundation = (from: Sel): boolean => {
        const cards = movingCards(st, from);
        if (cards.length !== 1) return false;
        for (let f = 0; f < 4; f++) if (canFound(cards[0], st.found[f])) return tryMove(from, { pile: "found", col: f });
        return false;
    };

    // --- click handling ---
    const clickCard = (pile: Pile, col: number, idx: number, card: Card) => {
        if (won) return;
        if (pile === "tab" && !card.up) return; // can't pick a face-down card
        if (!sel) { setSel({ pile, col, idx }); return; }
        // clicking the same selection deselects
        if (sel.pile === pile && sel.col === col && sel.idx === idx) { setSel(null); return; }
        // try to move the current selection onto this card's pile
        const dest = pile === "found" ? { pile, col } : { pile: "tab" as Pile, col };
        if (tryMove(sel, dest)) return;
        // otherwise reselect the clicked card
        setSel({ pile, col, idx });
    };
    const clickEmpty = (pile: Pile, col: number) => {
        if (won || !sel) return;
        if (!tryMove(sel, { pile, col })) setSel(null);
    };

    const isSel = (pile: Pile, col: number, idx: number) => sel?.pile === pile && sel.col === col && sel.idx === idx;

    const CardView = ({ card, sel: selected, onClick, onDouble }: { card: Card; sel?: boolean; onClick?: () => void; onDouble?: () => void }) => (
        <div
            onClick={onClick}
            onDoubleClick={onDouble}
            style={{
                width: CARD_W, height: CARD_H, boxSizing: "border-box", borderRadius: 4, cursor: "pointer",
                border: selected ? "2px solid #ffd000" : "1px solid #000",
                background: card.up ? "#fff" : "linear-gradient(135deg, #1064d0 25%, #0a3d80 25% 50%, #1064d0 50% 75%, #0a3d80 75%)",
                backgroundSize: card.up ? undefined : "10px 10px",
                color: isRed(card.suit) ? "#c00000" : "#000", position: "relative", userSelect: "none", flexShrink: 0,
                boxShadow: selected ? "0 0 6px #ffd000" : "1px 1px 1px rgba(0,0,0,0.3)",
            }}
        >
            {card.up && (
                <>
                    <div style={{ position: "absolute", top: 2, left: 4, fontSize: 13, fontWeight: "bold", lineHeight: 1 }}>{RANKS[card.rank]}<div>{SUITS[card.suit]}</div></div>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{SUITS[card.suit]}</div>
                </>
            )}
        </div>
    );

    const Slot = ({ children, onClick }: { children?: React.ReactNode; onClick?: () => void }) => (
        <div onClick={onClick} style={{ width: CARD_W, height: CARD_H, borderRadius: 4, border: "1px dashed rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", flexShrink: 0 }}>{children}</div>
    );

    return (
        <AppShell $minW={560} $minH={460}>
            <MenuBar>
                <Menu label="Game">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); newGame(); }}>New Game<span>F2</span></MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setDraw3((d) => !d); }}>{draw3 ? "● " : "○ "}Draw three</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Solitaire — VortexOS</MenuItem></Menu>
            </MenuBar>

            <AppBody style={{ background: "#1f7a3d", padding: 10, gap: 14, overflow: "auto" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    {/* top row: stock, waste, foundations */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                        <div onClick={drawStock}>
                            {st.stock.length ? <CardView card={{ suit: 0, rank: 0, up: false }} /> : <Slot><div style={{ color: "#fff", textAlign: "center", lineHeight: `${CARD_H}px` }}>↻</div></Slot>}
                        </div>
                        <div>
                            {st.waste.length ? <CardView card={st.waste[st.waste.length - 1]} sel={isSel("waste", 0, st.waste.length - 1)} onClick={() => clickCard("waste", 0, st.waste.length - 1, st.waste[st.waste.length - 1])} onDouble={() => autoToFoundation({ pile: "waste", col: 0, idx: st.waste.length - 1 })} /> : <Slot />}
                        </div>
                        <div style={{ flex: 1 }} />
                        {st.found.map((f, i) => (
                            <div key={i} onClick={() => f.length === 0 && clickEmpty("found", i)}>
                                {f.length ? <CardView card={f[f.length - 1]} sel={isSel("found", i, f.length - 1)} onClick={() => clickCard("found", i, f.length - 1, f[f.length - 1])} /> : <Slot onClick={() => clickEmpty("found", i)}><div style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: `${CARD_H}px`, fontSize: 24 }}>{SUITS[i]}</div></Slot>}
                            </div>
                        ))}
                    </div>

                    {/* tableau */}
                    <div style={{ display: "flex", gap: 8 }}>
                        {st.tab.map((col, c) => (
                            <div key={c} style={{ position: "relative", width: CARD_W, minHeight: CARD_H }} onClick={() => col.length === 0 && clickEmpty("tab", c)}>
                                {col.length === 0 && <Slot onClick={() => clickEmpty("tab", c)} />}
                                {col.map((card, i) => (
                                    <div key={i} style={{ position: "absolute", top: i * FAN, left: 0 }}>
                                        <CardView card={card} sel={isSel("tab", c, i)} onClick={() => clickCard("tab", c, i, card)} onDouble={() => card.up && autoToFoundation({ pile: "tab", col: c, idx: i })} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {won && (
                        <div style={{ marginTop: 16, padding: 12, background: "#ffffcc", border: "2px solid #000080", textAlign: "center", fontWeight: "bold" }}>
                            🎉 You won in {secs}s and {moves} moves! <span style={{ cursor: "pointer", color: "#000080", textDecoration: "underline" }} onClick={newGame}>Play again</span>
                        </div>
                    )}
                </div>

                <HighScores game="solitaire" order="asc" format={(v) => `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}`} title="Best Times" width={150} refreshKey={refresh} />
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>Time {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, "0")}</StatusPanel>
                <StatusPanel>Moves: {moves}</StatusPanel>
                <StatusPanel>{won ? "You won! 🎉" : `Stock: ${st.stock.length}`}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Solitaire;
