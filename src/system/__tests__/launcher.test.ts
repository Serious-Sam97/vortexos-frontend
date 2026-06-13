import { describe, expect, it } from "vitest";
import { fuzzyScore, rankApps } from "../launcher";

const APPS = [
    { exec: "control_panel", name: "Control Panel", icon: "" },
    { exec: "calculator", name: "Calculator", icon: "" },
    { exec: "terminal", name: "Terminal", icon: "" },
    { exec: "notes", name: "Notes", icon: "" },
];

describe("launcher fuzzy core", () => {
    it("returns null when the query is not a subsequence", () => {
        expect(fuzzyScore("xyz", "Calculator")).toBeNull();
    });

    it("matches a subsequence and scores exact/prefix higher", () => {
        expect(fuzzyScore("calc", "Calculator")).not.toBeNull();
        const prefix = fuzzyScore("calc", "Calculator")!;
        const scattered = fuzzyScore("ctr", "Calculator")!; // c..t..r subsequence
        expect(prefix).toBeGreaterThan(scattered);
    });

    it("empty query ranks all apps alphabetically", () => {
        expect(rankApps(APPS, "").map((a) => a.name)).toEqual(["Calculator", "Control Panel", "Notes", "Terminal"]);
    });

    it("'cp' fuzzily prefers Control Panel via word-start bonus", () => {
        expect(rankApps(APPS, "cp")[0].name).toBe("Control Panel");
    });

    it("prefix match wins: 'cal' ranks Calculator first", () => {
        expect(rankApps(APPS, "cal")[0].name).toBe("Calculator");
    });

    it("matches against the exec key too", () => {
        const ranked = rankApps(APPS, "control_panel");
        expect(ranked[0].name).toBe("Control Panel");
    });

    it("excludes non-matches from results", () => {
        expect(rankApps(APPS, "zzz")).toHaveLength(0);
    });
});
