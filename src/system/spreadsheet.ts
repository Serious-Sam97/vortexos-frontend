/**
 * A tiny spreadsheet formula engine for VortexCalc — cell references (A1),
 * ranges (A1:B3), arithmetic (+ - * / ^ %), parentheses, and a set of functions
 * (SUM/AVERAGE/MIN/MAX/COUNT/IF/ABS/ROUND/SQRT/POW). Hand-built recursive-descent
 * evaluator with cycle detection. No dependency.
 */

export type CellMap = Record<string, string>; // "A1" -> raw text (a value or "=formula")
export type CellValue = number | string;

/* ----------------------------------------------------------- addressing */
export function colLabel(i: number): string {
    let s = "";
    i++;
    while (i > 0) {
        const r = (i - 1) % 26;
        s = String.fromCharCode(65 + r) + s;
        i = Math.floor((i - 1) / 26);
    }
    return s;
}
export function colIndex(label: string): number {
    let n = 0;
    for (const ch of label.toUpperCase()) n = n * 26 + (ch.charCodeAt(0) - 64);
    return n - 1;
}
export function parseAddr(addr: string): { c: number; r: number } | null {
    const m = /^([A-Za-z]+)(\d+)$/.exec(addr.trim());
    if (!m) return null;
    return { c: colIndex(m[1]), r: parseInt(m[2], 10) };
}
export function addrOf(c: number, r: number): string {
    return colLabel(c) + r;
}

/* ----------------------------------------------------------- evaluation */
const FUNCS: Record<string, (args: number[]) => number> = {
    SUM: (a) => a.reduce((x, y) => x + y, 0),
    AVERAGE: (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0),
    AVG: (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0),
    MIN: (a) => (a.length ? Math.min(...a) : 0),
    MAX: (a) => (a.length ? Math.max(...a) : 0),
    COUNT: (a) => a.length,
    ABS: (a) => Math.abs(a[0] ?? 0),
    ROUND: (a) => {
        const f = Math.pow(10, a[1] ?? 0);
        return Math.round((a[0] ?? 0) * f) / f;
    },
    SQRT: (a) => Math.sqrt(a[0] ?? 0),
    POW: (a) => Math.pow(a[0] ?? 0, a[1] ?? 0),
    IF: (a) => (a[0] ? a[1] : a[2]),
};

class EvalError extends Error {
    constructor(public tag: string) {
        super(tag);
    }
}

// Tokenizer for a formula (the part after "=").
type Tok = { t: "num" | "ref" | "range" | "func" | "op" | "lp" | "rp" | "comma"; v: string };
function tokenize(src: string): Tok[] {
    const toks: Tok[] = [];
    const re = /\s*([A-Za-z]+\d+:[A-Za-z]+\d+|[A-Za-z]+\d+|[A-Za-z]+|\d+\.?\d*|[-+*/^%(),])/g;
    let m: RegExpExecArray | null;
    let lastEnd = 0;
    while ((m = re.exec(src))) {
        if (m.index !== lastEnd && src.slice(lastEnd, m.index).trim()) throw new EvalError("#ERR");
        const x = m[1];
        if (/^[A-Za-z]+\d+:[A-Za-z]+\d+$/.test(x)) toks.push({ t: "range", v: x });
        else if (/^[A-Za-z]+\d+$/.test(x)) toks.push({ t: "ref", v: x });
        else if (/^[A-Za-z]+$/.test(x)) toks.push({ t: "func", v: x.toUpperCase() });
        else if (/^\d/.test(x)) toks.push({ t: "num", v: x });
        else if (x === "(") toks.push({ t: "lp", v: x });
        else if (x === ")") toks.push({ t: "rp", v: x });
        else if (x === ",") toks.push({ t: "comma", v: x });
        else toks.push({ t: "op", v: x });
        lastEnd = re.lastIndex;
    }
    return toks;
}

/** Resolve a single cell to a number (non-numeric/empty → 0). */
type Resolver = (addr: string) => CellValue;

function expandRange(range: string, resolve: Resolver): number[] {
    const [a, b] = range.split(":");
    const pa = parseAddr(a), pb = parseAddr(b);
    if (!pa || !pb) throw new EvalError("#REF");
    const out: number[] = [];
    for (let r = Math.min(pa.r, pb.r); r <= Math.max(pa.r, pb.r); r++)
        for (let c = Math.min(pa.c, pb.c); c <= Math.max(pa.c, pb.c); c++) {
            const v = resolve(addrOf(c, r));
            if (typeof v === "number" && !Number.isNaN(v)) out.push(v);
        }
    return out;
}

function evalFormula(src: string, resolve: Resolver): number {
    const toks = tokenize(src);
    let i = 0;
    const peek = () => toks[i];
    const eat = () => toks[i++];

    function parseExpr(): number {
        let v = parseTerm();
        while (peek() && peek().t === "op" && (peek().v === "+" || peek().v === "-")) {
            const op = eat().v;
            const r = parseTerm();
            v = op === "+" ? v + r : v - r;
        }
        return v;
    }
    function parseTerm(): number {
        let v = parseFactor();
        while (peek() && peek().t === "op" && (peek().v === "*" || peek().v === "/" || peek().v === "%")) {
            const op = eat().v;
            const r = parseFactor();
            v = op === "*" ? v * r : op === "/" ? v / r : v % r;
        }
        return v;
    }
    function parseFactor(): number {
        let v = parseUnary();
        if (peek() && peek().t === "op" && peek().v === "^") {
            eat();
            v = Math.pow(v, parseFactor());
        }
        return v;
    }
    function parseUnary(): number {
        if (peek() && peek().t === "op" && peek().v === "-") {
            eat();
            return -parseUnary();
        }
        return parsePrimary();
    }
    function parsePrimary(): number {
        const tk = peek();
        if (!tk) throw new EvalError("#ERR");
        if (tk.t === "num") return Number(eat().v);
        if (tk.t === "ref") {
            const v = resolve(eat().v);
            return typeof v === "number" ? v : v === "" ? 0 : NaN;
        }
        if (tk.t === "lp") {
            eat();
            const v = parseExpr();
            if (!peek() || peek().t !== "rp") throw new EvalError("#ERR");
            eat();
            return v;
        }
        if (tk.t === "func") {
            const name = eat().v;
            if (!peek() || peek().t !== "lp") throw new EvalError("#ERR");
            eat();
            const args: number[] = [];
            if (peek() && peek().t !== "rp") {
                do {
                    if (peek() && peek().t === "range") args.push(...expandRange(eat().v, resolve));
                    else args.push(parseExpr());
                } while (peek() && peek().t === "comma" && eat());
            }
            if (!peek() || peek().t !== "rp") throw new EvalError("#ERR");
            eat();
            const fn = FUNCS[name];
            if (!fn) throw new EvalError("#NAME");
            return fn(args);
        }
        throw new EvalError("#ERR");
    }

    const result = parseExpr();
    if (i !== toks.length) throw new EvalError("#ERR");
    return result;
}

/** Compute the display value of every non-empty cell, with cycle detection. */
export function computeSheet(cells: CellMap): Record<string, CellValue> {
    const cache: Record<string, CellValue> = {};
    const visiting = new Set<string>();

    const resolve: Resolver = (addr) => {
        const raw = cells[addr];
        if (raw === undefined || raw === "") return "";
        if (raw[0] !== "=") {
            const n = Number(raw);
            return raw.trim() !== "" && !Number.isNaN(n) ? n : raw;
        }
        if (addr in cache) return cache[addr];
        if (visiting.has(addr)) return "#CYCLE";
        visiting.add(addr);
        let v: CellValue;
        try {
            v = evalFormula(raw.slice(1), resolve);
            if (typeof v === "number" && Number.isNaN(v)) v = "#ERR";
        } catch (e) {
            v = e instanceof EvalError ? e.tag : "#ERR";
        }
        visiting.delete(addr);
        cache[addr] = v;
        return v;
    };

    const out: Record<string, CellValue> = {};
    for (const addr of Object.keys(cells)) if (cells[addr] !== "") out[addr] = resolve(addr);
    return out;
}

/* --------------------------------------------------------------- CSV I/O */
export function toCsv(cells: CellMap, cols: number, rows: number): string {
    const lines: string[] = [];
    let maxR = 0, maxC = 0;
    for (const addr of Object.keys(cells)) {
        if (cells[addr] === "") continue;
        const p = parseAddr(addr);
        if (p) {
            maxR = Math.max(maxR, p.r);
            maxC = Math.max(maxC, p.c);
        }
    }
    maxR = Math.min(maxR || 1, rows);
    maxC = Math.min(maxC || 1, cols - 1);
    for (let r = 1; r <= maxR; r++) {
        const row: string[] = [];
        for (let c = 0; c <= maxC; c++) {
            const v = cells[addrOf(c, r)] ?? "";
            row.push(/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
        }
        lines.push(row.join(","));
    }
    return lines.join("\n");
}

export function fromCsv(text: string): CellMap {
    const cells: CellMap = {};
    const rows = text.replace(/\r\n/g, "\n").split("\n");
    rows.forEach((line, ri) => {
        const fields: string[] = [];
        let cur = "", inQ = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (inQ) {
                if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
                else if (ch === '"') inQ = false;
                else cur += ch;
            } else if (ch === '"') inQ = true;
            else if (ch === ",") { fields.push(cur); cur = ""; }
            else cur += ch;
        }
        fields.push(cur);
        fields.forEach((f, ci) => {
            if (f !== "") cells[addrOf(ci, ri + 1)] = f;
        });
    });
    return cells;
}
