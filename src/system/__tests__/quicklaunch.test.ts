import { beforeEach, describe, expect, it } from "vitest";
import { getPinned, isPinned, pin, unpin, togglePin } from "../quicklaunch";

describe("quick launch store", () => {
    beforeEach(() => localStorage.clear());

    it("returns the default pins when a user has none stored", () => {
        expect(getPinned("neo")).toEqual(["terminal", "explorer", "browser"]);
    });

    it("pin appends and persists per-user; unpin removes", () => {
        pin("neo", "calculator");
        expect(isPinned("neo", "calculator")).toBe(true);
        expect(getPinned("neo")).toContain("calculator");
        unpin("neo", "terminal");
        expect(isPinned("neo", "terminal")).toBe(false);
    });

    it("pin is idempotent", () => {
        unpin("neo", "explorer"); // materialize a stored list
        const before = getPinned("neo").length;
        pin("neo", "terminal");
        pin("neo", "terminal");
        expect(getPinned("neo").filter((e) => e === "terminal")).toHaveLength(1);
        expect(getPinned("neo").length).toBe(before); // terminal was already there
    });

    it("togglePin flips state", () => {
        togglePin("neo", "minesweeper");
        expect(isPinned("neo", "minesweeper")).toBe(true);
        togglePin("neo", "minesweeper");
        expect(isPinned("neo", "minesweeper")).toBe(false);
    });

    it("pins are isolated per user", () => {
        pin("alice", "paint");
        expect(isPinned("alice", "paint")).toBe(true);
        expect(isPinned("bob", "paint")).toBe(false);
    });
});
