import { describe, it, expect } from "vitest";
import { diff, applyOp, transformCaret } from "../codoc";

describe("codoc merge engine", () => {
    it("diffs an insertion in the middle", () => {
        const op = diff("hello world", "hello brave world");
        expect(op).toEqual({ pos: 6, del: 0, ins: "brave " });
        expect(applyOp("hello world", op)).toBe("hello brave world");
    });

    it("diffs a deletion", () => {
        const op = diff("abcdef", "abef");
        expect(applyOp("abcdef", op)).toBe("abef");
        expect(op.del).toBe(2);
        expect(op.ins).toBe("");
    });

    it("diffs a replacement", () => {
        const op = diff("the cat sat", "the dog sat");
        expect(applyOp("the cat sat", op)).toBe("the dog sat");
    });

    it("handles append and empty→text", () => {
        expect(applyOp("hi", diff("hi", "hi there"))).toBe("hi there");
        expect(applyOp("", diff("", "first!"))).toBe("first!");
    });

    it("two peers editing different regions both land (no loss)", () => {
        // base shared by both peers
        const base = "AAAA BBBB";
        // peer 1 edits the front, peer 2 edits the back — concurrently against `base`
        const op1 = diff(base, "XAAAA BBBB"); // insert X at 0
        const op2 = diff(base, "AAAA BBBBY"); // append Y at end
        // apply op1 then op2 (op2's pos is at/after op1's region, so it still lands)
        let merged = applyOp(base, op1);
        // op2 was computed against base; shift it past op1's net change if it's after
        const shifted = { ...op2, pos: transformCaret(op2.pos, op1) };
        merged = applyOp(merged, shifted);
        expect(merged).toBe("XAAAA BBBBY");
    });

    it("re-anchors a caret across a remote insert before it", () => {
        // caret at 10; a remote insert of 3 chars at pos 2 → caret shifts to 13
        expect(transformCaret(10, { pos: 2, del: 0, ins: "xyz" })).toBe(13);
        // caret before the edit is unchanged
        expect(transformCaret(1, { pos: 2, del: 0, ins: "xyz" })).toBe(1);
        // caret inside a deleted span collapses to the insert end
        expect(transformCaret(4, { pos: 2, del: 5, ins: "Z" })).toBe(3);
    });
});
