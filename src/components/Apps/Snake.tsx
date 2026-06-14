import { useEffect, useRef, useState } from "react";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { HighScores } from "../games/HighScores";
import { recordScore } from "../../system/scores";
import { playDing, playChord } from "../../system/sounds";

const GRID = 20;
const CELL = 16;
const SIZE = GRID * CELL;
const SPEED = 110; // ms per step

type P = { x: number; y: number };
const eq = (a: P, b: P) => a.x === b.x && a.y === b.y;

/** Classic Snake — arrow keys / WASD to steer; eat the apples, don't hit the walls or yourself.
 *  Keyboard is scoped to the game window so it doesn't steal keys from other apps. */
const Snake: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const snake = useRef<P[]>([]);
    const dir = useRef<P>({ x: 1, y: 0 });
    const nextDir = useRef<P>({ x: 1, y: 0 });
    const food = useRef<P>({ x: 0, y: 0 });

    const [score, setScore] = useState(0);
    const [status, setStatus] = useState<"ready" | "playing" | "over">("ready");
    const [refresh, setRefresh] = useState(0);
    const statusRef = useRef(status);
    statusRef.current = status;

    const placeFood = () => {
        let p: P;
        do { p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) }; }
        while (snake.current.some((s) => eq(s, p)));
        food.current = p;
    };

    const start = () => {
        snake.current = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
        dir.current = { x: 1, y: 0 };
        nextDir.current = { x: 1, y: 0 };
        placeFood();
        setScore(0);
        setStatus("playing");
        rootRef.current?.focus();
    };

    const draw = () => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#0a1f0a";
        ctx.fillRect(0, 0, SIZE, SIZE);
        // subtle grid
        ctx.strokeStyle = "#0f2f0f";
        for (let i = 0; i <= GRID; i++) {
            ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, SIZE); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i * CELL); ctx.lineTo(SIZE, i * CELL); ctx.stroke();
        }
        // food (apple)
        ctx.fillStyle = "#ff3b3b";
        ctx.fillRect(food.current.x * CELL + 2, food.current.y * CELL + 2, CELL - 4, CELL - 4);
        // snake
        snake.current.forEach((s, i) => {
            ctx.fillStyle = i === 0 ? "#9cff57" : "#3ec70b";
            ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
        });
    };

    useEffect(() => { draw(); }, []);

    useEffect(() => {
        if (status !== "playing") return;
        const id = setInterval(() => {
            const d = nextDir.current;
            dir.current = d;
            const head = snake.current[0];
            const nh: P = { x: head.x + d.x, y: head.y + d.y };
            // wall or self collision
            if (nh.x < 0 || nh.y < 0 || nh.x >= GRID || nh.y >= GRID || snake.current.some((s) => eq(s, nh))) {
                setStatus("over");
                playChord();
                setScore((sc) => { recordScore("snake", sc).then(() => setRefresh((x) => x + 1)); return sc; });
                return;
            }
            snake.current = [nh, ...snake.current];
            if (eq(nh, food.current)) {
                setScore((s) => s + 1);
                playDing();
                placeFood();
            } else {
                snake.current.pop();
            }
            draw();
        }, SPEED);
        return () => clearInterval(id);
    }, [status]);

    const onKey = (e: React.KeyboardEvent) => {
        const k = e.key;
        const set = (x: number, y: number) => {
            // can't reverse directly into yourself
            if (dir.current.x === -x && dir.current.y === -y) return;
            nextDir.current = { x, y };
        };
        if (k === "ArrowUp" || k === "w") { e.preventDefault(); set(0, -1); }
        else if (k === "ArrowDown" || k === "s") { e.preventDefault(); set(0, 1); }
        else if (k === "ArrowLeft" || k === "a") { e.preventDefault(); set(-1, 0); }
        else if (k === "ArrowRight" || k === "d") { e.preventDefault(); set(1, 0); }
        else if (k === " " || k === "Enter") { e.preventDefault(); if (statusRef.current !== "playing") start(); }
    };

    return (
        <AppShell $minW={360} $minH={300}>
            <MenuBar>
                <Menu label="Game">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); start(); }}>New Game<span>Space</span></MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>Snake — arrows or WASD to move</MenuItem></Menu>
            </MenuBar>

            <AppBody style={{ padding: 10, gap: 12, background: "#c0c0c0", overflow: "auto", alignItems: "flex-start" }}>
                <div
                    ref={rootRef}
                    tabIndex={0}
                    onKeyDown={onKey}
                    style={{ outline: "none", position: "relative", border: "2px solid", borderColor: "#808080 #fff #fff #808080" }}
                >
                    <canvas ref={canvasRef} width={SIZE} height={SIZE} style={{ display: "block" }} />
                    {status !== "playing" && (
                        <div
                            onClick={start}
                            style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, background: "rgba(0,0,0,0.6)", color: "#fff", cursor: "pointer", textAlign: "center" }}
                        >
                            <div style={{ fontSize: 20, fontWeight: "bold" }}>{status === "over" ? `Game Over — ${score}` : "🐍 Snake"}</div>
                            <div style={{ fontSize: 12 }}>Click or press Space to play</div>
                            <div style={{ fontSize: 11, opacity: 0.8 }}>Arrow keys / WASD to steer</div>
                        </div>
                    )}
                </div>

                <HighScores game="snake" order="desc" format={(v) => String(v)} title="Top Scores" width={130} refreshKey={refresh} />
            </AppBody>

            <StatusBar>
                <StatusPanel $flex={1}>Score: {score}</StatusPanel>
                <StatusPanel>{status === "over" ? "Game Over" : status === "playing" ? "Go!" : "Ready"}</StatusPanel>
                <StatusPanel>Length: {Math.max(0, snake.current.length)}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Snake;
