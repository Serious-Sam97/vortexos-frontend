import { useEffect, useRef, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { HighScores } from "../games/HighScores";
import { recordScore } from "../../system/scores";
import { playChord } from "../../system/sounds";

type Diff = "beginner" | "intermediate" | "expert";
const CONFIG: Record<Diff, { rows: number; cols: number; mines: number; label: string }> = {
    beginner: { rows: 9, cols: 9, mines: 10, label: "Beginner" },
    intermediate: { rows: 16, cols: 16, mines: 40, label: "Intermediate" },
    expert: { rows: 16, cols: 30, mines: 99, label: "Expert" },
};

interface Cell { mine: boolean; revealed: boolean; flagged: boolean; adj: number }
const NUMBER_COLORS = ["", "#0000ff", "#008000", "#ff0000", "#000080", "#800000", "#008080", "#000000", "#808080"];

const emptyBoard = (rows: number, cols: number): Cell[][] =>
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ mine: false, revealed: false, flagged: false, adj: 0 })));

// Place mines avoiding the first-clicked cell + its neighbours (first click is always safe).
function placeMines(board: Cell[][], mines: number, exclude: Set<string>) {
    const rows = board.length, cols = board[0].length;
    let placed = 0;
    while (placed < mines) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if (board[r][c].mine || exclude.has(`${r},${c}`)) continue;
        board[r][c].mine = true;
        placed++;
    }
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
            if (board[r][c].mine) continue;
            let n = 0;
            for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) n++;
            }
            board[r][c].adj = n;
        }
}

const Minesweeper: React.FC = () => {
    const [diff, setDiff] = useState<Diff>("beginner");
    const cfg = CONFIG[diff];
    const [board, setBoard] = useState<Cell[][]>(() => emptyBoard(cfg.rows, cfg.cols));
    const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
    const [started, setStarted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [refresh, setRefresh] = useState(0);
    const secondsRef = useRef(0);

    const newGame = (d: Diff = diff) => {
        const c = CONFIG[d];
        setDiff(d);
        setBoard(emptyBoard(c.rows, c.cols));
        setStatus("playing"); setStarted(false); setSeconds(0); secondsRef.current = 0;
    };

    useEffect(() => {
        if (status !== "playing" || !started) return;
        const id = setInterval(() => setSeconds((s) => { secondsRef.current = s + 1; return s + 1; }), 1000);
        return () => clearInterval(id);
    }, [status, started]);

    const minesLeft = cfg.mines - board.flat().filter((c) => c.flagged).length;

    const reveal = (r: number, c: number) => {
        if (status !== "playing") return;
        setBoard((prev) => {
            const next = prev.map((row) => row.map((cell) => ({ ...cell })));
            if (!started) {
                const exclude = new Set<string>();
                for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) exclude.add(`${r + dr},${c + dc}`);
                placeMines(next, cfg.mines, exclude);
                setStarted(true);
            }
            const cell = next[r][c];
            if (cell.revealed || cell.flagged) return prev;
            if (cell.mine) {
                next.forEach((row) => row.forEach((x) => x.mine && (x.revealed = true)));
                setStatus("lost");
                return next;
            }
            const stack = [[r, c]];
            while (stack.length) {
                const [cr, cc] = stack.pop()!;
                const cur = next[cr][cc];
                if (cur.revealed || cur.flagged) continue;
                cur.revealed = true;
                if (cur.adj === 0)
                    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                        const nr = cr + dr, nc = cc + dc;
                        if (nr >= 0 && nr < next.length && nc >= 0 && nc < next[0].length && !next[nr][nc].mine) stack.push([nr, nc]);
                    }
            }
            const revealedSafe = next.flat().filter((x) => x.revealed && !x.mine).length;
            if (revealedSafe === cfg.rows * cfg.cols - cfg.mines) {
                setStatus("won");
                playChord();
                recordScore(`minesweeper:${diff}`, secondsRef.current).then(() => setRefresh((x) => x + 1));
            }
            return next;
        });
    };

    const flag = (e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault();
        if (status !== "playing") return;
        setBoard((prev) => prev.map((row, ri) => row.map((cell, ci) => (ri === r && ci === c && !cell.revealed ? { ...cell, flagged: !cell.flagged } : cell))));
    };

    const face = status === "won" ? "😎" : status === "lost" ? "😵" : "🙂";
    const bevel = (pressed: boolean): React.CSSProperties => ({ border: "2px solid", borderColor: pressed ? "#808080 #fff #fff #808080" : "#fff #808080 #808080 #fff" });
    const led = (n: number) => (
        <span style={{ background: "#000", color: "#f00", fontFamily: "monospace", fontSize: 20, padding: "0 4px", minWidth: 42, textAlign: "center", letterSpacing: 1 }}>
            {String(Math.max(0, Math.min(999, n))).padStart(3, "0")}
        </span>
    );

    return (
        <AppShell $minW={260} $minH={300}>
            <MenuBar>
                <Menu label="Game">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); newGame(); }}>New<span>F2</span></MenuItem>
                    <MenuSep />
                    {(Object.keys(CONFIG) as Diff[]).map((d) => (
                        <MenuItem key={d} onMouseDown={(e) => { e.preventDefault(); newGame(d); }}>{diff === d ? "● " : "○ "}{CONFIG[d].label}</MenuItem>
                    ))}
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Minesweeper — VortexOS</MenuItem></Menu>
            </MenuBar>

            <AppBody style={{ padding: 10, gap: 12, background: "#c0c0c0", overflow: "auto", alignItems: "flex-start" }}>
                <div style={{ background: "#c0c0c0", userSelect: "none" }}>
                    <div style={{ ...bevel(true), display: "flex", justifyContent: "space-between", alignItems: "center", padding: 6, marginBottom: 8 }}>
                        {led(minesLeft)}
                        <button onClick={() => newGame()} style={{ ...bevel(false), width: 32, height: 32, fontSize: 18, cursor: "pointer", background: "#c0c0c0" }}>{face}</button>
                        {led(seconds)}
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
                                            width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
                                            fontWeight: "bold", fontSize: 13, cursor: status === "playing" ? "pointer" : "default",
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

                <HighScores game={`minesweeper:${diff}`} order="asc" format={(v) => `${v}s`} title={`${cfg.label} Best`} width={130} refreshKey={refresh} />
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>{cfg.label}</StatusPanel>
                <StatusPanel>{status === "won" ? "You won! 😎" : status === "lost" ? "BOOM 💥" : started ? "Playing…" : "Click to start"}</StatusPanel>
                <StatusPanel>{seconds}s</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Minesweeper;
