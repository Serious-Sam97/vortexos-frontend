import { beforeEach, describe, expect, it } from "vitest";
import { MemFS } from "../MemFS";

const enc = (s: string) => new TextEncoder().encode(s);
const dec = (b: Uint8Array) => new TextDecoder().decode(b);

describe("MemFS", () => {
    let fs: MemFS;
    beforeEach(() => {
        fs = new MemFS();
    });

    it("creates directories and files and reads them back", () => {
        fs.mkdir("/home");
        fs.mkdir("/home/user");
        fs.write("/home/user/notes.txt", enc("hello"));

        expect(dec(fs.read("/home/user/notes.txt"))).toBe("hello");
        expect(fs.readdir("/")).toEqual(["home"]);
        expect(fs.readdir("/home/user")).toEqual(["notes.txt"]);
    });

    it("stat reports type and size", () => {
        fs.mkdir("/dir");
        fs.write("/file", enc("12345"));

        expect(fs.stat("/dir").type).toBe("dir");
        expect(fs.stat("/file")).toMatchObject({ type: "file", size: 5 });
        expect(typeof fs.stat("/file").mtime).toBe("number");
    });

    it("overwrites a file's contents on re-write", () => {
        fs.write("/f", enc("first"));
        fs.write("/f", enc("second"));
        expect(dec(fs.read("/f"))).toBe("second");
        expect(fs.stat("/f").size).toBe(6);
    });

    it("isolates stored data from the caller's buffer", () => {
        const buf = enc("abc");
        fs.write("/f", buf);
        buf[0] = 0; // mutate caller buffer after write
        expect(dec(fs.read("/f"))).toBe("abc");
    });

    it("unlinks files and empty directories", () => {
        fs.write("/f", enc("x"));
        fs.unlink("/f");
        expect(fs.exists("/f")).toBe(false);

        fs.mkdir("/d");
        fs.unlink("/d");
        expect(fs.exists("/d")).toBe(false);
    });

    it("renames/moves a node", () => {
        fs.mkdir("/a");
        fs.write("/a/f", enc("data"));
        fs.mkdir("/b");
        fs.rename("/a/f", "/b/g");

        expect(fs.exists("/a/f")).toBe(false);
        expect(dec(fs.read("/b/g"))).toBe("data");
    });

    describe("errors", () => {
        it("ENOENT for missing paths", () => {
            expect(() => fs.read("/nope")).toThrow("ENOENT");
            expect(() => fs.stat("/nope")).toThrow("ENOENT");
            expect(() => fs.unlink("/nope")).toThrow("ENOENT");
        });
        it("EISDIR when reading a directory", () => {
            fs.mkdir("/d");
            expect(() => fs.read("/d")).toThrow("EISDIR");
        });
        it("ENOTDIR when descending through a file", () => {
            fs.write("/f", enc("x"));
            expect(() => fs.readdir("/f")).toThrow("ENOTDIR");
            expect(() => fs.write("/f/child", enc("y"))).toThrow("ENOTDIR");
        });
        it("EEXIST when mkdir target exists", () => {
            fs.mkdir("/d");
            expect(() => fs.mkdir("/d")).toThrow("EEXIST");
        });
        it("ENOENT when parent directory is missing", () => {
            expect(() => fs.write("/missing/f", enc("x"))).toThrow("ENOENT");
        });
        it("ENOTEMPTY when unlinking a non-empty directory", () => {
            fs.mkdir("/d");
            fs.write("/d/f", enc("x"));
            expect(() => fs.unlink("/d")).toThrow("ENOTEMPTY");
        });
    });

    it("round-trips through serialize/deserialize", () => {
        fs.mkdir("/home");
        fs.write("/home/a.txt", enc("alpha"));
        fs.write("/b.bin", new Uint8Array([0, 1, 2, 255]));

        const restored = MemFS.deserialize(JSON.parse(JSON.stringify(fs.serialize())));

        expect(dec(restored.read("/home/a.txt"))).toBe("alpha");
        expect([...restored.read("/b.bin")]).toEqual([0, 1, 2, 255]);
        expect(restored.readdir("/").sort()).toEqual(["b.bin", "home"]);
    });
});
