import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useSys } from "../../kernel/react/useSys";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, MenuSep, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { homeDir } from "../../system/session";
import { addrOf, colLabel, computeSheet, fromCsv, toCsv, type CellMap } from "../../system/spreadsheet";

const COLS = 26;
const ROWS = 60;

const Wrap = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
`;
const FormulaBar = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 6px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    font-size: 12px;
`;
const CellRef = styled.div`
    width: 54px;
    text-align: center;
    font-weight: bold;
    background: #fff;
    border: 1px solid #808080;
    padding: 2px;
`;
const FInput = styled.input`
    flex: 1;
    font-family: "Lucida Console", monospace;
    font-size: 12px;
    padding: 2px 4px;
`;
const GridScroll = styled.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`;
const Table = styled.table`
    border-collapse: collapse;
    font-size: 12px;
    table-layout: fixed;
`;
const Th = styled.th`
    position: sticky;
    top: 0;
    z-index: 2;
    background: #d4d0c8;
    border: 1px solid #808080;
    min-width: 72px;
    height: 18px;
    font-weight: normal;
`;
const RowHead = styled.th`
    position: sticky;
    left: 0;
    z-index: 1;
    background: #d4d0c8;
    border: 1px solid #808080;
    width: 36px;
    font-weight: normal;
`;
const Td = styled.td<{ $sel: boolean; $num: boolean }>`
    border: 1px solid #d0d0d0;
    min-width: 72px;
    max-width: 72px;
    height: 18px;
    padding: 0 4px;
    overflow: hidden;
    white-space: nowrap;
    text-align: ${({ $num }) => ($num ? "right" : "left")};
    outline: ${({ $sel }) => ($sel ? "2px solid #000080" : "none")};
    outline-offset: -2px;
    cursor: cell;
`;
const CellInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 12px;
    font-family: inherit;
    padding: 0;
`;

const VortexCalc: React.FC = () => {
    const sys = useSys();
    const home = homeDir();
    const [cells, setCells] = useState<CellMap>({});
    const [sel, setSel] = useState("A1");
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const [path, setPath] = useState<string | null>(null);
    const [files, setFiles] = useState<string[]>([]);
    const [status, setStatus] = useState("Ready");
    const editRef = useRef<HTMLInputElement>(null);

    const computed = useMemo(() => computeSheet(cells), [cells]);

    useEffect(() => {
        (async () => {
            const [arg] = await sys.argv();
            if (arg) open(arg);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (editing) editRef.current?.focus();
    }, [editing]);

    const refreshFiles = async () => {
        try {
            setFiles((await sys.readdir(home)).filter((f) => f.endsWith(".csv")));
        } catch {
            setFiles([]);
        }
    };

    const open = async (p: string) => {
        try {
            setCells(fromCsv(await sys.readTextFile(p)));
            setPath(p);
            setStatus(`Opened ${p}`);
        } catch (e: any) {
            setStatus(`Open failed: ${e.code ?? e.message}`);
        }
    };

    const save = async () => {
        let p = path;
        if (!p) {
            const name = window.prompt("Save as (name):", "sheet.csv");
            if (!name) return;
            p = `${home}/${name.endsWith(".csv") ? name : name + ".csv"}`;
        }
        try {
            await sys.writeTextFile(p, toCsv(cells, COLS, ROWS));
            setPath(p);
            setStatus(`Saved ${p}`);
        } catch (e: any) {
            setStatus(`Save failed: ${e.code ?? e.message}`);
        }
    };

    const commit = (value: string, move: "down" | "right" | null) => {
        setCells((c) => {
            const n = { ...c };
            if (value === "") delete n[sel];
            else n[sel] = value;
            return n;
        });
        setEditing(false);
        const p = parse(sel);
        if (p && move === "down") setSel(addrOf(p.c, Math.min(ROWS, p.r + 1)));
        else if (p && move === "right") setSel(addrOf(Math.min(COLS - 1, p.c + 1), p.r));
    };

    const parse = (a: string) => {
        const m = /^([A-Z]+)(\d+)$/.exec(a);
        return m ? { c: colIndexLocal(m[1]), r: parseInt(m[2], 10) } : null;
    };
    const colIndexLocal = (label: string) => {
        let n = 0;
        for (const ch of label) n = n * 26 + (ch.charCodeAt(0) - 64);
        return n - 1;
    };

    const beginEdit = (initial?: string) => {
        setDraft(initial !== undefined ? initial : cells[sel] ?? "");
        setEditing(true);
    };

    const onGridKey = (e: React.KeyboardEvent) => {
        if (editing) return;
        const p = parse(sel);
        if (!p) return;
        if (e.key === "Enter" || e.key === "F2") {
            e.preventDefault();
            beginEdit();
        } else if (e.key === "Delete" || e.key === "Backspace") {
            e.preventDefault();
            setCells((c) => {
                const n = { ...c };
                delete n[sel];
                return n;
            });
        } else if (e.key === "ArrowUp") setSel(addrOf(p.c, Math.max(1, p.r - 1)));
        else if (e.key === "ArrowDown") setSel(addrOf(p.c, Math.min(ROWS, p.r + 1)));
        else if (e.key === "ArrowLeft") setSel(addrOf(Math.max(0, p.c - 1), p.r));
        else if (e.key === "ArrowRight" || e.key === "Tab") {
            e.preventDefault();
            setSel(addrOf(Math.min(COLS - 1, p.c + 1), p.r));
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            beginEdit(e.key);
        }
    };

    const fmt = (v: number | string | undefined): string => {
        if (v === undefined || v === "") return "";
        if (typeof v === "number") return Number.isInteger(v) ? String(v) : String(Math.round(v * 1e6) / 1e6);
        return v;
    };

    return (
        <AppShell $minW={620} $minH={420}>
            <MenuBar>
                <Menu label="File" onOpen={refreshFiles}>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); setCells({}); setPath(null); setSel("A1"); }}>New</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); save(); }}>Save (.csv)<span>Ctrl+S</span></MenuItem>
                    <MenuSep />
                    {files.length === 0 ? (
                        <MenuItem $disabled>(no .csv files)</MenuItem>
                    ) : (
                        files.map((f) => <MenuItem key={f} onMouseDown={(e) => { e.preventDefault(); open(`${home}/${f}`); }}>{f}</MenuItem>)
                    )}
                </Menu>
                <Menu label="Help"><MenuItem $disabled>VortexCalc — try =SUM(A1:A3)</MenuItem></Menu>
            </MenuBar>

            <Wrap>
                <FormulaBar>
                    <CellRef>{sel}</CellRef>
                    <FInput
                        value={editing ? draft : cells[sel] ?? ""}
                        onChange={(e) => { setDraft(e.target.value); if (!editing) setEditing(true); }}
                        onFocus={() => { if (!editing) { setDraft(cells[sel] ?? ""); setEditing(true); } }}
                        onKeyDown={(e) => { if (e.key === "Enter") commit(draft, "down"); else if (e.key === "Escape") setEditing(false); }}
                        placeholder="value or =formula"
                    />
                </FormulaBar>

                <AppBody style={{ padding: 0 }}>
                    <GridScroll tabIndex={0} onKeyDown={onGridKey}>
                        <Table>
                            <thead>
                                <tr>
                                    <Th style={{ minWidth: 36, width: 36, left: 0, zIndex: 3 }} />
                                    {Array.from({ length: COLS }, (_, c) => <Th key={c}>{colLabel(c)}</Th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: ROWS }, (_, ri) => {
                                    const r = ri + 1;
                                    return (
                                        <tr key={r}>
                                            <RowHead>{r}</RowHead>
                                            {Array.from({ length: COLS }, (_, c) => {
                                                const addr = addrOf(c, r);
                                                const val = computed[addr];
                                                const isSel = addr === sel;
                                                return (
                                                    <Td
                                                        key={c}
                                                        $sel={isSel}
                                                        $num={typeof val === "number"}
                                                        onClick={() => { setSel(addr); setEditing(false); }}
                                                        onDoubleClick={() => { setSel(addr); beginEdit(); }}
                                                    >
                                                        {isSel && editing ? (
                                                            <CellInput
                                                                ref={editRef}
                                                                value={draft}
                                                                onChange={(e) => setDraft(e.target.value)}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === "Enter") { e.preventDefault(); commit(draft, "down"); }
                                                                    else if (e.key === "Tab") { e.preventDefault(); commit(draft, "right"); }
                                                                    else if (e.key === "Escape") setEditing(false);
                                                                }}
                                                                onBlur={() => commit(draft, null)}
                                                            />
                                                        ) : (
                                                            fmt(val)
                                                        )}
                                                    </Td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </GridScroll>
                </AppBody>
            </Wrap>

            <StatusBar>
                <StatusPanel $flex={1}>{path || "Unsaved sheet"}</StatusPanel>
                <StatusPanel>{sel}</StatusPanel>
                <StatusPanel>{status}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default VortexCalc;
