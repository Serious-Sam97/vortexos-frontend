import { useState } from "react";
import { Button, Frame } from "react95";

type Op = "+" | "-" | "×" | "÷";

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState("0");
    const [acc, setAcc] = useState<number | null>(null);
    const [op, setOp] = useState<Op | null>(null);
    const [fresh, setFresh] = useState(true); // next digit starts a new number

    const apply = (a: number, b: number, o: Op): number => {
        switch (o) {
            case "+": return a + b;
            case "-": return a - b;
            case "×": return a * b;
            case "÷": return b === 0 ? NaN : a / b;
        }
    };

    const inputDigit = (d: string) => {
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
        const current = parseFloat(display);
        if (acc !== null && op && !fresh) {
            const result = apply(acc, current, op);
            setAcc(result);
            setDisplay(String(result));
        } else {
            setAcc(current);
        }
        setOp(o);
        setFresh(true);
    };

    const equals = () => {
        if (acc === null || !op) return;
        const result = apply(acc, parseFloat(display), op);
        setDisplay(Number.isFinite(result) ? String(result) : "Error");
        setAcc(null);
        setOp(null);
        setFresh(true);
    };

    const clear = () => {
        setDisplay("0");
        setAcc(null);
        setOp(null);
        setFresh(true);
    };

    const negate = () => setDisplay(String(parseFloat(display) * -1));
    const percent = () => setDisplay(String(parseFloat(display) / 100));

    const key = (label: string, onClick: () => void, accent?: boolean) => (
        <Button onClick={onClick} style={{ width: 44, height: 36, fontWeight: accent ? "bold" : "normal" }}>
            {label}
        </Button>
    );

    return (
        <div style={{ padding: 8, width: 212 }}>
            <Frame variant="well" style={{ padding: 6, marginBottom: 8, textAlign: "right", fontFamily: "monospace", fontSize: 20, overflow: "hidden" }}>
                {display}
            </Frame>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 44px)", gap: 4 }}>
                {key("C", clear)}
                {key("±", negate)}
                {key("%", percent)}
                {key("÷", () => chooseOp("÷"), true)}
                {key("7", () => inputDigit("7"))}
                {key("8", () => inputDigit("8"))}
                {key("9", () => inputDigit("9"))}
                {key("×", () => chooseOp("×"), true)}
                {key("4", () => inputDigit("4"))}
                {key("5", () => inputDigit("5"))}
                {key("6", () => inputDigit("6"))}
                {key("-", () => chooseOp("-"), true)}
                {key("1", () => inputDigit("1"))}
                {key("2", () => inputDigit("2"))}
                {key("3", () => inputDigit("3"))}
                {key("+", () => chooseOp("+"), true)}
                {key("0", () => inputDigit("0"))}
                {key(".", () => inputDigit("."))}
                <Button onClick={equals} style={{ gridColumn: "span 2", width: 92, height: 36, fontWeight: "bold" }}>
                    =
                </Button>
            </div>
        </div>
    );
};

export default Calculator;
