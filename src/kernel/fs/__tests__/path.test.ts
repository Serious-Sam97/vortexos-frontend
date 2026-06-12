import { describe, expect, it } from "vitest";
import { basename, dirname, isRoot, join, normalize, segments } from "../path";

describe("path utilities", () => {
    it("splits into segments, resolving . and ..", () => {
        expect(segments("/a/b/c")).toEqual(["a", "b", "c"]);
        expect(segments("/a/./b/../c")).toEqual(["a", "c"]);
        expect(segments("//a//b/")).toEqual(["a", "b"]);
        expect(segments("/")).toEqual([]);
    });

    it("normalizes to a canonical absolute path", () => {
        expect(normalize("/a/b/")).toBe("/a/b");
        expect(normalize("a/b")).toBe("/a/b");
        expect(normalize("/a/../b")).toBe("/b");
        expect(normalize("/")).toBe("/");
        expect(normalize("")).toBe("/");
    });

    it("joins parts", () => {
        expect(join("/home", "user", "notes.txt")).toBe("/home/user/notes.txt");
        expect(join("/home/user/", "/sub")).toBe("/home/user/sub");
    });

    it("computes dirname and basename", () => {
        expect(dirname("/a/b/c")).toBe("/a/b");
        expect(dirname("/a")).toBe("/");
        expect(basename("/a/b/c")).toBe("c");
        expect(basename("/")).toBe("");
    });

    it("detects root", () => {
        expect(isRoot("/")).toBe(true);
        expect(isRoot("/a")).toBe(false);
    });
});
