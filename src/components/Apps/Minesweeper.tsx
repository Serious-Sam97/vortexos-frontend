import { useCallback, useEffect, useState } from "react";

const ROWS = 9;
const COLS = 9;
const MINES = 10;

interface Cell {
    mine: boolean;
    revealed: boolean;
    flagged: boolean;
    adj: number;
}

const NUMBER_COLORS = ["", "#0000ff", "#008000", "#ff0000", "#000080", "#800000", "#008080", "#000000", "#808080"];

function generate(): Cell[][] {
    const board: Cell[][] = Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => ({ mine: false, revealed: false, flagged: false, adj: 0 })),
    );
    let placed = 0;
    while (placed < MINES) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        if (!board[r][c].mine) {
            board[r][c].mine = true;
            placed++;
        }
    }
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c].mine) continue;
            let n = 0;
            for (let dr = -1; dr <= 1; dr++)
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].mine) n++;
                }
            board[r][c].adj = n;
        }
    }
    return board;
}

const Minesweeper: React.FC = () => {
    const [board, setBoard] = useState<Cell[][]>(generate);
    const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");

    const reset = () => {
        setBoard(generate());
        setStatus("playing");
    };

    const minesLeft = board.flat().filter((c) => c.mine).length - board.flat().filter((c) => c.flagged).length;

    const reveal = (r: number, c: number) => {
        if (status !== "playing") return;
        setBoard((prev) => {
            const next = prev.map((row) => row.map((cell) => ({ ...cell })));
            const cell = next[r][c];
            if (cell.revealed || cell.flagged) return prev;

            if (cell.mine) {
                next.forEach((row) => row.forEach((x) => x.mine && (x.revealed = true)));
                setStatus("lost");
                return next;
            }
            // flood fill
            const stack = [[r, c]];
            while (stack.length) {
                const [cr, cc] = stack.pop()!;
                const cur = next[cr][cc];
                if (cur.revealed || cur.flagged) continue;
                cur.revealed = true;
                if (cur.adj === 0) {
                    for (let dr = -1; dr <= 1; dr++)
                        for (let dc = -1; dc <= 1; dc++) {
                            const nr = cr + dr;
                            const nc = cc + dc;
                            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !next[nr][nc].mine) stack.push([nr, nc]);
                        }
                }
            }
            return next;
        });
    };

    const flag = (e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault();
        if (status !== "playing") return;
        setBoard((prev) =>
            prev.map((row, ri) =>
                row.map((cell, ci) => (ri === r && ci === c && !cell.revealed ? { ...cell, flagged: !cell.flagged } : cell)),
            ),
        );
    };

    const checkWin = useCallback(() => {
        const revealedSafe = board.flat().filter((c) => c.revealed && !c.mine).length;
        if (status === "playing" && revealedSafe === ROWS * COLS - MINES) setStatus("won");
    }, [board, status]);

    useEffect(checkWin, [checkWin]);

    const face = status === "won" ? "😎" : status === "lost" ? "😵" : "🙂";
    const bevel = (pressed: boolean): React.CSSProperties => ({
        border: "2px solid",
        borderColor: pressed ? "#808080 #fff #fff #808080" : "#fff #808080 #808080 #fff",
    });

    return (
        <div style={{ padding: 10, background: "#c0c0c0", userSelect: "none" }}>
            <div style={{ ...bevel(true), display: "flex", justifyContent: "space-between", alignItems: "center", padding: 6, marginBottom: 8 }}>
                <span style={{ background: "#000", color: "#f00", fontFamily: "monospace", fontSize: 20, padding: "0 6px", minWidth: 44, textAlign: "center" }}>
                    {String(Math.max(0, minesLeft)).padStart(3, "0")}
                </span>
                <button onClick={reset} style={{ ...bevel(false), width: 32, height: 32, fontSize: 18, cursor: "pointer", background: "#c0c0c0" }}>
                    {face}
                </button>
                <span style={{ width: 44, textAlign: "center", fontWeight: "bold" }}>
                    {status === "won" ? "WIN" : status === "lost" ? "BOOM" : ""}
                </span>
            </div>
            <div style={{ ...bevel(true), display: "inline-block", padding: 3 }}>
                {board.map((row, r) => (
                    <div key={r} style={{ display: "flex" }}>
                        {row.map((cell, c) => (
                            <div
                                key={c}
                                onClick={() => reveal(r, c)}
                                onContextMenu={(e) => flag(e, r, c)}
                                style={{
                                    width: 22,
                                    height: 22,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: 13,
                                    cursor: status === "playing" ? "pointer" : "default",
                                    background: cell.revealed && cell.mine ? "#f00" : "#c0c0c0",
                                    color: NUMBER_COLORS[cell.adj] || "#000",
                                    ...(cell.revealed ? { border: "1px solid #808080" } : bevel(false)),
                                }}
                            >
                                {cell.flagged ? "🚩" : cell.revealed ? (cell.mine ? "💣" : cell.adj || "") : ""}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Minesweeper;
