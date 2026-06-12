import { beforeEach, describe, expect, it } from "vitest";
import { createLibOS, LibOS } from "../libos";
import { Kernel } from "../Kernel";
import { makeKernel } from "./helpers";

describe("createLibOS — userland syscall client", () => {
    let kernel: Kernel;
    let sys: LibOS;
    beforeEach(() => {
        kernel = makeKernel();
        sys = createLibOS(kernel, "shell-pid");
    });

    it("spawn / ps / kill drive the kernel process table", async () => {
        const pid = await sys.spawn("notes");
        expect((await sys.ps()).map((p) => p.pid)).toContain(pid);

        await sys.kill(pid);
        expect(await sys.ps()).toHaveLength(0);
    });

    it("spawn forwards name/icon overrides", async () => {
        const pid = await sys.spawn("doom", { name: "DOOM!", icon: "/x.png" });
        const proc = (await sys.ps()).find((p) => p.pid === pid)!;
        expect(proc.name).toBe("DOOM!");
    });

    it("getpid returns the pid the client is bound to", async () => {
        expect(await sys.getpid()).toBe("shell-pid");
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

    it("filesystem calls reject with ENOSYS until Phase 1", async () => {
        await expect(sys.open("/etc/passwd")).rejects.toThrow("ENOSYS");
        await expect(sys.readdir("/")).rejects.toThrow("ENOSYS");
        await expect(sys.stat("/x")).rejects.toThrow("ENOSYS");
    });
});
