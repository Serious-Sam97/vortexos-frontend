import { beforeEach, describe, expect, it } from "vitest";
import { createLibOS, LibOS } from "../libos";
import { Kernel } from "../Kernel";
import { makeKernel } from "./helpers";

describe("createLibOS — userland syscall client", () => {
    let kernel: Kernel;
    let sys: LibOS;
    let shellPid: string;
    beforeEach(async () => {
        kernel = makeKernel();
        // Bind the client to a real, fully-privileged process (stub programs grant all
        // permissions) so gated syscalls pass the kernel's capability check.
        shellPid = await kernel.syscall(null, "spawn", { exec: "task_manager" });
        sys = createLibOS(kernel, shellPid);
    });

    it("spawn / ps / kill drive the kernel process table", async () => {
        const pid = await sys.spawn("notes");
        expect((await sys.ps()).map((p) => p.pid)).toContain(pid);

        await sys.kill(pid);
        expect((await sys.ps()).map((p) => p.pid)).not.toContain(pid);
    });

    it("spawn forwards name/icon overrides", async () => {
        const pid = await sys.spawn("doom", { name: "DOOM!", icon: "/x.png" });
        const proc = (await sys.ps()).find((p) => p.pid === pid)!;
        expect(proc.name).toBe("DOOM!");
    });

    it("getpid returns the pid the client is bound to", async () => {
        expect(await sys.getpid()).toBe(shellPid);
    });

    it("argv returns the bound process's launch arguments", async () => {
        const pid = await sys.spawn("notes", { argv: ["/home/user/a.txt", "--readonly"] });
        const childSys = createLibOS(kernel, pid);
        expect(await childSys.argv()).toEqual(["/home/user/a.txt", "--readonly"]);
    });

    it("focus and move target the kernel scheduler / window", async () => {
        const a = await sys.spawn("notes");
        const b = await sys.spawn("doom");

        await sys.focus(a);
        const focused = (await sys.ps()).find((p) => p.pid === a)!;
        expect(focused.priority).toBe(0);

        await sys.move({ x: 7, y: 8 }, b);
        expect(kernel.getSnapshot().find((p) => p.pid === b)!.window).toEqual({ x: 7, y: 8 });
    });

    it("move defaults to the bound process when no target is given", async () => {
        const self = createLibOS(kernel, await sys.spawn("notes"));
        const pid = await self.getpid();
        await self.move({ x: 1, y: 2 });
        expect(kernel.getSnapshot().find((p) => p.pid === pid)!.window).toEqual({ x: 1, y: 2 });
    });

    it("filesystem syscalls operate on the mounted VFS", async () => {
        const fsSys = createLibOS(kernel, null); // kernel-level fds
        expect(await fsSys.readdir("/")).toContain("home");
        expect(await fsSys.stat("/home")).toMatchObject({ type: "dir" });
        await expect(fsSys.open("/does/not/exist", "r")).rejects.toThrow("ENOENT");
    });

    it("whole-file helpers round-trip text and clean up fds", async () => {
        const fsSys = createLibOS(kernel, null);
        await fsSys.mkdir("/home/user/notes");
        await fsSys.writeTextFile("/home/user/notes/todo.txt", "buy milk");

        expect(await fsSys.readTextFile("/home/user/notes/todo.txt")).toBe("buy milk");

        await fsSys.unlink("/home/user/notes/todo.txt");
        expect(await fsSys.readdir("/home/user/notes")).toEqual([]);
    });
});
