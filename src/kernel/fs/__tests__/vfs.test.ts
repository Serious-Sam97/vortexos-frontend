import { beforeEach, describe, expect, it } from "vitest";
import { Vfs } from "../Vfs";
import { MemFS } from "../MemFS";
import { DevFS } from "../DevFS";
import { ProcFS } from "../ProcFS";
import { BinFS } from "../BinFS";
import { ProcInfo } from "../../types";

const dec = (b: Uint8Array) => new TextDecoder().decode(b);
const enc = (s: string) => new TextEncoder().encode(s);

const PROCS: ProcInfo[] = [
    { pid: "abcd1234-0000", ppid: null, uid: 1000, exec: "notes", name: "Notes", state: "running", priority: 0 },
];
const BINS = [
    { exec: "notes", name: "Notes" },
    { exec: "doom", name: "Doom" },
];

describe("Vfs mount table", () => {
    let vfs: Vfs;
    let root: MemFS;

    beforeEach(() => {
        root = new MemFS();
        root.mkdir("/home");
        root.mkdir("/home/user");
        vfs = new Vfs();
        vfs.mount("/", root);
        vfs.mount("/dev", new DevFS());
        vfs.mount("/proc", new ProcFS(() => PROCS));
        vfs.mount("/bin", new BinFS(() => BINS));
    });

    it("merges child mount points into the root listing", () => {
        expect(vfs.readdir("/")).toEqual(["bin", "dev", "home", "proc"]);
    });

    it("routes writes/reads to the root filesystem", () => {
        vfs.write("/home/user/notes.txt", enc("hi"));
        expect(dec(vfs.read("/home/user/notes.txt"))).toBe("hi");
        expect(vfs.exists("/home/user/notes.txt")).toBe(true);
    });

    it("routes by longest matching prefix, not the root mount", () => {
        // /dev/null must hit DevFS even though "/" also matches.
        expect(vfs.stat("/dev").type).toBe("dir");
        expect(vfs.read("/dev/null").length).toBe(0);
    });

    describe("change notification", () => {
        it("notifies subscribers and bumps version on every mutation, stops after unsubscribe", () => {
            let hits = 0;
            const unsubscribe = vfs.subscribe(() => hits++);
            expect(vfs.version()).toBe(0);

            vfs.write("/home/user/a.txt", enc("a"));
            vfs.mkdir("/home/user/d");
            vfs.rename("/home/user/a.txt", "/home/user/b.txt");
            vfs.unlink("/home/user/b.txt");
            expect(hits).toBe(4);
            expect(vfs.version()).toBe(4);

            unsubscribe();
            vfs.write("/home/user/c.txt", enc("c"));
            expect(hits).toBe(4); // listener no longer fires
            expect(vfs.version()).toBe(5); // version still advances
        });

        it("does not fire when a mutation throws (read-only mount)", () => {
            let hits = 0;
            vfs.subscribe(() => hits++);
            expect(() => vfs.write("/bin/x", enc("y"))).toThrow("EROFS");
            expect(hits).toBe(0);
        });
    });

    describe("/dev", () => {
        it("lists and reads devices", () => {
            expect(vfs.readdir("/dev")).toEqual(["null", "random", "zero"]);
            expect(vfs.read("/dev/zero")).toEqual(new Uint8Array(256));
            expect(vfs.read("/dev/random").length).toBe(256);
        });
        it("/dev/null swallows writes; other devices are read-only", () => {
            expect(() => vfs.write("/dev/null", enc("x"))).not.toThrow();
            expect(() => vfs.write("/dev/zero", enc("x"))).toThrow("EROFS");
        });
    });

    describe("/proc", () => {
        it("exposes a file per process plus a summary", () => {
            expect(vfs.readdir("/proc")).toContain("processes");
            expect(vfs.readdir("/proc")).toContain("abcd1234-0000");
            expect(dec(vfs.read("/proc/abcd1234-0000"))).toContain("name:     Notes");
            expect(dec(vfs.read("/proc/processes"))).toContain("PID");
        });
    });

    describe("/bin", () => {
        it("lists installed programs and is read-only", () => {
            expect(vfs.readdir("/bin")).toEqual(["doom", "notes"]);
            expect(dec(vfs.read("/bin/notes"))).toContain("exec=notes");
            expect(() => vfs.mkdir("/bin/x")).toThrow("EROFS");
            expect(() => vfs.write("/bin/x", enc("y"))).toThrow("EROFS");
        });
    });
});
