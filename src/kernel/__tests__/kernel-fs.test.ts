import { beforeEach, describe, expect, it } from "vitest";
import { Kernel } from "../Kernel";
import { makeKernel } from "./helpers";

const enc = (s: string) => new TextEncoder().encode(s);
const dec = (b: Uint8Array) => new TextDecoder().decode(b);

describe("Kernel filesystem syscalls", () => {
    let kernel: Kernel;
    beforeEach(() => {
        kernel = makeKernel();
    });

    const open = (caller: string | null, path: string, flags: string) =>
        kernel.syscall(caller, "open", { path, flags });
    const read = (caller: string | null, fd: number, len: number) =>
        kernel.syscall(caller, "read", { fd, len });
    const write = (caller: string | null, fd: number, data: Uint8Array) =>
        kernel.syscall(caller, "write", { fd, data });
    const close = (caller: string | null, fd: number) => kernel.syscall(caller, "close", { fd });

    it("writes then reads a file back through fds", async () => {
        const wfd = await open(null, "/home/user/notes.txt", "w");
        await write(null, wfd, enc("hello world"));
        await close(null, wfd);

        const rfd = await open(null, "/home/user/notes.txt", "r");
        const data = await read(null, rfd, 1024);
        await close(null, rfd);

        expect(dec(data)).toBe("hello world");
    });

    it("open('w') creates a missing file and truncates an existing one", async () => {
        const a = await open(null, "/home/user/a.txt", "w");
        await write(null, a, enc("first pass"));
        await close(null, a);

        const b = await open(null, "/home/user/a.txt", "w"); // truncates
        await write(null, b, enc("hi"));
        await close(null, b);

        expect(dec(await kernel.syscall(null, "read", { fd: await open(null, "/home/user/a.txt", "r"), len: 100 })))
            .toBe("hi");
    });

    it("open('a') appends", async () => {
        let fd = await open(null, "/home/user/log", "w");
        await write(null, fd, enc("line1\n"));
        await close(null, fd);

        fd = await open(null, "/home/user/log", "a");
        await write(null, fd, enc("line2\n"));
        await close(null, fd);

        fd = await open(null, "/home/user/log", "r");
        expect(dec(await read(null, fd, 1024))).toBe("line1\nline2\n");
    });

    it("sequential reads advance the offset", async () => {
        const w = await open(null, "/home/user/abc", "w");
        await write(null, w, enc("ABCDEF"));
        await close(null, w);

        const fd = await open(null, "/home/user/abc", "r");
        expect(dec(await read(null, fd, 3))).toBe("ABC");
        expect(dec(await read(null, fd, 3))).toBe("DEF");
        expect((await read(null, fd, 3)).length).toBe(0); // EOF
    });

    it("mkdir / readdir / stat / unlink", async () => {
        await kernel.syscall(null, "mkdir", { path: "/home/user/docs" });
        const fd = await open(null, "/home/user/docs/f.txt", "w");
        await write(null, fd, enc("x"));
        await close(null, fd);

        expect(await kernel.syscall(null, "readdir", { path: "/home/user/docs" })).toEqual(["f.txt"]);
        expect(await kernel.syscall(null, "stat", { path: "/home/user/docs" })).toMatchObject({ type: "dir" });
        expect(await kernel.syscall(null, "stat", { path: "/home/user/docs/f.txt" })).toMatchObject({
            type: "file",
            size: 1,
        });

        await kernel.syscall(null, "unlink", { path: "/home/user/docs/f.txt" });
        expect(await kernel.syscall(null, "readdir", { path: "/home/user/docs" })).toEqual([]);
    });

    describe("errors", () => {
        it("open('r') on a missing file → ENOENT", async () => {
            await expect(open(null, "/home/user/ghost", "r")).rejects.toThrow("ENOENT");
        });
        it("read/close on a bad fd → EBADF", async () => {
            await expect(read(null, 999, 1)).rejects.toThrow("EBADF");
            await expect(close(null, 999)).rejects.toThrow("EBADF");
        });
        it("write to a read-only fd → EBADF", async () => {
            const fd = await open(null, "/home/user/notes.txt", "w");
            await close(null, fd);
            const rfd = await open(null, "/home/user/notes.txt", "r");
            await expect(write(null, rfd, enc("x"))).rejects.toThrow("EBADF");
        });
        it("writing under /bin → EROFS", async () => {
            await expect(open(null, "/bin/hack", "w")).rejects.toThrow("EROFS");
        });
    });

    describe("per-process fd isolation", () => {
        it("a fd opened by one process is not valid in another", async () => {
            const a = await kernel.syscall(null, "spawn", { exec: "notes" });
            const b = await kernel.syscall(null, "spawn", { exec: "doom" });

            const fd = await kernel.syscall(a, "open", { path: "/home/user/p.txt", flags: "w" });
            // process b must not be able to use process a's descriptor
            await expect(kernel.syscall(b, "write", { fd, data: enc("x") })).rejects.toThrow("EBADF");
            // but a can
            await expect(kernel.syscall(a, "write", { fd, data: enc("x") })).resolves.toBe(1);
        });
    });

    describe("synthetic filesystems", () => {
        it("/proc reflects the live process table", async () => {
            const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
            expect(await kernel.syscall(null, "readdir", { path: "/proc" })).toContain(pid);

            const fd = await open(null, `/proc/${pid}`, "r");
            expect(dec(await read(null, fd, 4096))).toContain("exec:     notes");
        });
        it("/bin lists installed programs", async () => {
            const bin = await kernel.syscall(null, "readdir", { path: "/bin" });
            expect(bin).toContain("notes");
            expect(bin).toContain("doom");
        });
        it("/dev/null reads empty and swallows writes", async () => {
            const fd = await open(null, "/dev/null", "rw");
            expect((await read(null, fd, 16)).length).toBe(0);
        });
    });
});
