import { useEffect, useRef, useState } from "react";
import { Button, Frame } from "react95";

/**
 * VortexOS Calculator — Standard / Scientific / Programmer modes, like Windows 98's calc.
 * Memory keys (MC/MR/MS/M+/M-), keyboard input (scoped to the window so it doesn't steal
 * keys from other apps), degree-based trig, and base conversion in programmer mode.
 */
type Mode = "standard" | "scientific" | "programmer";
type Op = "+" | "-" | "×" | "÷" | "x^y" | "Mod" | "And" | "Or" | "Xor" | "Lsh" | "Rsh";

const apply = (a: number, b: number, o: Op): number => {
    switch (o) {
        case "+": return a + b;
        case "-": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? NaN : a / b;
        case "x^y": return Math.pow(a, b);
        case "Mod": return b === 0 ? NaN : a % b;
        case "And": return (a & b) >>> 0;
        case "Or": return (a | b) >>> 0;
        case "Xor": return (a ^ b) >>> 0;
        case "Lsh": return (a << b) >>> 0;
        case "Rsh": return (a >> b) >>> 0;
    }
};

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState("0");
    const [acc, setAcc] = useState<number | null>(null);
    const [op, setOp] = useState<Op | null>(null);
    const [fresh, setFresh] = useState(true);
    const [mem, setMem] = useState(0);
    const [mode, setMode] = useState<Mode>("standard");
    const [base, setBase] = useState<10 | 16 | 8 | 2>(10);
    const [degrees, setDegrees] = useState(true);
    const [menu, setMenu] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => rootRef.current?.focus(), []);

    const value = () => (mode === "programmer" ? parseInt(display, base) || 0 : parseFloat(display) || 0);
    const show = (n: number) => {
        if (!Number.isFinite(n)) return setDisplay("Error");
        if (mode === "programmer") {
            const i = Math.trunc(n) >>> 0;
            setDisplay(i.toString(base).toUpperCase());
        } else {
            // trim float noise
            setDisplay(String(Math.round(n * 1e10) / 1e10));
        }
    };

    const digitAllowed = (d: string) => {
        if (mode !== "programmer") return true;
        const v = parseInt(d, 16);
        return !isNaN(v) && v < base;
    };

    const inputDigit = (d: string) => {
        if (d === "." && mode === "programmer") return;
        if (!digitAllowed(d)) return;
        if (fresh) {
            setDisplay(d === "." ? "0." : d);
            setFresh(false);
        } else if (d === ".") {
            if (!display.includes(".")) setDisplay(display + ".");
        } else {
            setDisplay(display === "0" ? d : display + d);
        }
    };

    const chooseOp = (o: Op) => {
        const current = value();
        if (acc !== null && op && !fresh) {
            const r = apply(acc, current, op);
            setAcc(r);
            show(r);
        } else {
            setAcc(current);
        }
        setOp(o);
        setFresh(true);
    };

    const equals = () => {
        if (acc === null || !op) return;
        show(apply(acc, value(), op));
        setAcc(null);
        setOp(null);
        setFresh(true);
    };

    const clear = () => { setDisplay("0"); setAcc(null); setOp(null); setFresh(true); };
    const clearEntry = () => { setDisplay("0"); setFresh(true); };
    const backspace = () => { setDisplay((d) => (d.length > 1 ? d.slice(0, -1) : "0")); };

    // unary functions (immediate)
    const rad = (x: number) => (degrees ? (x * Math.PI) / 180 : x);
    const unary = (fn: (x: number) => number) => { show(fn(value())); setFresh(true); };
    const fact = (n: number) => { n = Math.trunc(n); if (n < 0) return NaN; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };

    const setBaseKeep = (b: 10 | 16 | 8 | 2) => { const v = value(); setBase(b); setDisplay((Math.trunc(v) >>> 0).toString(b).toUpperCase()); setFresh(true); };

    // memory
    const mc = () => setMem(0);
    const mr = () => { show(mem); setFresh(true); };
    const ms = () => setMem(value());
    const mPlus = () => setMem((m) => m + value());
    const mMinus = () => setMem((m) => m - value());

    const onKey = (e: React.KeyboardEvent) => {
        const k = e.key;
        if (/^[0-9]$/.test(k)) return inputDigit(k);
        if (mode === "programmer" && /^[a-fA-F]$/.test(k)) return inputDigit(k.toUpperCase());
        if (k === ".") return inputDigit(".");
        if (k === "+") return chooseOp("+");
        if (k === "-") return chooseOp("-");
        if (k === "*") return chooseOp("×");
        if (k === "/") { e.preventDefault(); return chooseOp("÷"); }
        if (k === "Enter" || k === "=") { e.preventDefault(); return equals(); }
        if (k === "Backspace") return backspace();
        if (k === "Escape") return clear();
    };

    const Key = ({ label, onClick, accent, w = 40 }: { label: string; onClick: () => void; accent?: boolean; w?: number }) => (
        <Button onClick={onClick} onMouseDown={(e) => e.preventDefault()} style={{ width: w, height: 30, fontSize: 12, padding: 0, color: accent ? "#a00000" : undefined, fontWeight: accent ? "bold" : "normal" }}>
            {label}
        </Button>
    );

    const memBar = (
        <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
            <Frame variant="well" style={{ width: 28, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{mem !== 0 ? "M" : ""}</Frame>
            <Key label="MC" onClick={mc} w={30} /><Key label="MR" onClick={mr} w={30} /><Key label="MS" onClick={ms} w={30} /><Key label="M+" onClick={mPlus} w={30} /><Key label="M-" onClick={mMinus} w={30} />
        </div>
    );

    const standardPad = (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 40px)", gap: 4 }}>
            <Key label="Back" onClick={backspace} accent /><Key label="CE" onClick={clearEntry} accent /><Key label="C" onClick={clear} accent /><Key label="±" onClick={() => unary((x) => -x)} /><Key label="√" onClick={() => unary(Math.sqrt)} />
            <Key label="7" onClick={() => inputDigit("7")} /><Key label="8" onClick={() => inputDigit("8")} /><Key label="9" onClick={() => inputDigit("9")} /><Key label="÷" onClick={() => chooseOp("÷")} accent /><Key label="%" onClick={() => unary((x) => x / 100)} />
            <Key label="4" onClick={() => inputDigit("4")} /><Key label="5" onClick={() => inputDigit("5")} /><Key label="6" onClick={() => inputDigit("6")} /><Key label="×" onClick={() => chooseOp("×")} accent /><Key label="1/x" onClick={() => unary((x) => 1 / x)} />
            <Key label="1" onClick={() => inputDigit("1")} /><Key label="2" onClick={() => inputDigit("2")} /><Key label="3" onClick={() => inputDigit("3")} /><Key label="-" onClick={() => chooseOp("-")} accent /><Key label="=" onClick={equals} accent />
            <Key label="0" onClick={() => inputDigit("0")} w={84} /><Key label="." onClick={() => inputDigit(".")} /><Key label="+" onClick={() => chooseOp("+")} accent />
        </div>
    );

    const sciPad = (
        <>
            <div style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 12 }}>
                <label><input type="radio" checked={degrees} onChange={() => setDegrees(true)} /> Deg</label>
                <label><input type="radio" checked={!degrees} onChange={() => setDegrees(false)} /> Rad</label>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 40px)", gap: 4 }}>
                <Key label="sin" onClick={() => unary((x) => Math.sin(rad(x)))} /><Key label="cos" onClick={() => unary((x) => Math.cos(rad(x)))} /><Key label="tan" onClick={() => unary((x) => Math.tan(rad(x)))} /><Key label="x²" onClick={() => unary((x) => x * x)} /><Key label="x^y" onClick={() => chooseOp("x^y")} accent /><Key label="C" onClick={clear} accent />
                <Key label="log" onClick={() => unary(Math.log10)} /><Key label="ln" onClick={() => unary(Math.log)} /><Key label="n!" onClick={() => unary(fact)} /><Key label="√" onClick={() => unary(Math.sqrt)} /><Key label="1/x" onClick={() => unary((x) => 1 / x)} /><Key label="Back" onClick={backspace} accent />
                <Key label="π" onClick={() => { show(Math.PI); setFresh(true); }} /><Key label="e" onClick={() => { show(Math.E); setFresh(true); }} /><Key label="±" onClick={() => unary((x) => -x)} /><Key label="(" onClick={() => {}} /><Key label=")" onClick={() => {}} /><Key label="%" onClick={() => unary((x) => x / 100)} />
                <Key label="7" onClick={() => inputDigit("7")} /><Key label="8" onClick={() => inputDigit("8")} /><Key label="9" onClick={() => inputDigit("9")} /><Key label="÷" onClick={() => chooseOp("÷")} accent /><Key label="×" onClick={() => chooseOp("×")} accent /><Key label="=" onClick={equals} accent />
                <Key label="4" onClick={() => inputDigit("4")} /><Key label="5" onClick={() => inputDigit("5")} /><Key label="6" onClick={() => inputDigit("6")} /><Key label="-" onClick={() => chooseOp("-")} accent /><Key label="+" onClick={() => chooseOp("+")} accent /><Key label="." onClick={() => inputDigit(".")} />
                <Key label="1" onClick={() => inputDigit("1")} /><Key label="2" onClick={() => inputDigit("2")} /><Key label="3" onClick={() => inputDigit("3")} /><Key label="0" onClick={() => inputDigit("0")} /><Key label="0" onClick={() => inputDigit("0")} /><Key label="00" onClick={() => { inputDigit("0"); inputDigit("0"); }} />
            </div>
        </>
    );

    const HEX = ["A", "B", "C", "D", "E", "F"];
    const progPad = (
        <>
            <div style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 12 }}>
                {([["Hex", 16], ["Dec", 10], ["Oct", 8], ["Bin", 2]] as const).map(([lbl, b]) => (
                    <label key={b}><input type="radio" checked={base === b} onChange={() => setBaseKeep(b)} /> {lbl}</label>
                ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 40px)", gap: 4 }}>
                <Key label="And" onClick={() => chooseOp("And")} accent /><Key label="Or" onClick={() => chooseOp("Or")} accent /><Key label="Xor" onClick={() => chooseOp("Xor")} accent /><Key label="Not" onClick={() => unary((x) => ~Math.trunc(x) >>> 0)} accent /><Key label="Lsh" onClick={() => chooseOp("Lsh")} accent /><Key label="Rsh" onClick={() => chooseOp("Rsh")} accent />
                <Key label="Mod" onClick={() => chooseOp("Mod")} accent /><Key label="C" onClick={clear} accent /><Key label="CE" onClick={clearEntry} accent /><Key label="Back" onClick={backspace} accent /><Key label="±" onClick={() => unary((x) => -Math.trunc(x))} /><Key label="=" onClick={equals} accent />
                {HEX.slice(0, 3).map((h) => <Key key={h} label={h} onClick={() => inputDigit(h)} />)}
                <Key label="7" onClick={() => inputDigit("7")} /><Key label="8" onClick={() => inputDigit("8")} /><Key label="9" onClick={() => inputDigit("9")} />
                {HEX.slice(3).map((h) => <Key key={h} label={h} onClick={() => inputDigit(h)} />)}
                <Key label="4" onClick={() => inputDigit("4")} /><Key label="5" onClick={() => inputDigit("5")} /><Key label="6" onClick={() => inputDigit("6")} />
                <Key label="÷" onClick={() => chooseOp("÷")} accent /><Key label="×" onClick={() => chooseOp("×")} accent /><Key label="-" onClick={() => chooseOp("-")} accent />
                <Key label="1" onClick={() => inputDigit("1")} /><Key label="2" onClick={() => inputDigit("2")} /><Key label="3" onClick={() => inputDigit("3")} />
                <Key label="+" onClick={() => chooseOp("+")} accent /><Key label="0" onClick={() => inputDigit("0")} w={84} />
            </div>
        </>
    );

    const widthByMode = mode === "standard" ? 232 : 268;

    return (
        <div ref={rootRef} tabIndex={0} onKeyDown={onKey} style={{ outline: "none", padding: 6, width: widthByMode }}>
            {/* Win98-style menu bar */}
            <div style={{ display: "flex", gap: 12, padding: "2px 4px", marginBottom: 4, fontSize: 12, position: "relative" }}>
                <span style={{ position: "relative" }}>
                    <span style={{ cursor: "pointer" }} onClick={() => setMenu((m) => !m)}><u>V</u>iew</span>
                    {menu && (
                        <Frame style={{ position: "absolute", top: 18, left: 0, zIndex: 10, padding: 2, width: 130 }}>
                            {(["standard", "scientific", "programmer"] as Mode[]).map((m) => (
                                <div key={m} onClick={() => { setMode(m); setMenu(false); clear(); if (m !== "programmer") setBase(10); }}
                                    style={{ padding: "3px 8px", cursor: "pointer", textTransform: "capitalize", background: mode === m ? "#000080" : undefined, color: mode === m ? "#fff" : undefined }}>
                                    {mode === m ? "● " : "○ "}{m}
                                </div>
                            ))}
                        </Frame>
                    )}
                </span>
                <span style={{ color: "#666" }}><u>E</u>dit</span>
                <span style={{ color: "#666" }}><u>H</u>elp</span>
            </div>

            <Frame variant="well" style={{ padding: 6, marginBottom: 8, textAlign: "right", fontFamily: "monospace", fontSize: 20, overflow: "hidden", minHeight: 24 }}>
                {display}
            </Frame>
            {memBar}
            {mode === "standard" && standardPad}
            {mode === "scientific" && sciPad}
            {mode === "programmer" && progPad}
        </div>
    );
};

export default Calculator;
