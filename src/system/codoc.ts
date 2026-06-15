/**
 * Hand-built collaborative-text merge — the pragmatic (non-CRDT) core of the
 * shared document. A local change is reduced to ONE contiguous edit op via a
 * common-prefix/suffix diff; peers apply the op and re-anchor their caret. Two
 * people editing different regions both land cleanly; overlapping edits resolve
 * last-write-wins without corruption. Pure + unit-tested (no DOM, no network).
 */
export interface EditOp {
    pos: number; // index where the change starts
    del: number; // chars removed at pos
    ins: string; // chars inserted at pos
}

/** Minimal single-span diff between two strings. */
export function diff(prev: string, next: string): EditOp {
    if (prev === next) return { pos: prev.length, del: 0, ins: "" };
    const max = Math.min(prev.length, next.length);
    let p = 0;
    while (p < max && prev[p] === next[p]) p++;
    let s = 0;
    while (s < max - p && prev[prev.length - 1 - s] === next[next.length - 1 - s]) s++;
    return { pos: p, del: prev.length - p - s, ins: next.slice(p, next.length - s) };
}

/** Apply an op to a string. */
export function applyOp(text: string, op: EditOp): string {
    return text.slice(0, op.pos) + op.ins + text.slice(op.pos + op.del);
}

/**
 * Re-anchor a caret/offset after a remote op was applied to the same text.
 * Before the edit → unchanged; after it → shifted by the net length change;
 * inside the deleted span → collapses to the end of the inserted text.
 */
export function transformCaret(caret: number, op: EditOp): number {
    if (caret <= op.pos) return caret;
    if (caret >= op.pos + op.del) return caret + (op.ins.length - op.del);
    return op.pos + op.ins.length;
}
