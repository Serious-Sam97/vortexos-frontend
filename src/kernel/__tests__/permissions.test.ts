import { beforeEach, describe, expect, it } from "vitest";
import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { buildTestVfs, fixedLocation } from "./helpers";

/** A registry where each program declares exactly the permissions under test. */
function restrictedRegistry(): ProgramRegistry {
    const reg = new ProgramRegistry();
    const stub = (exec: string, permissions: ("fs" | "net" | "gui" | "proc" | "audio")[]) =>
        reg.register({ exec, name: exec, icon: `/${exec}.png`, component: () => null, permissions });
    stub("fsapp", ["fs"]);
    stub("procapp", ["proc"]);
    stub("sandbox", []); // no privileges at all
    return reg;
}

describe("syscall permission enforcement", () => {
    let kernel: Kernel;

    beforeEach(() => {
        kernel = new Kernel({ registry: restrictedRegistry(), defaultWindowLocation: fixedLocation });
        kernel.mountVfs(buildTestVfs(kernel));
    });

    const spawn = (exec: string) => kernel.syscall(null, "spawn", { exec });

    it("allows a syscall the program declared a permission for", async () => {
        const pid = await spawn("fsapp");
        await expect(kernel.syscall(pid, "readdir", { path: "/home/user" })).resolves.toEqual([]);
    });

    it("denies a file syscall to a program without 'fs'", async () => {
        const pid = await spawn("sandbox");
        await expect(kernel.syscall(pid, "readdir", { path: "/home/user" })).rejects.toThrow("EACCES");
        await expect(kernel.syscall(pid, "open", { path: "/home/user/x", flags: "w" })).rejects.toThrow("EACCES");
    });

    it("denies process control to a program without 'proc'", async () => {
        const pid = await spawn("fsapp"); // has fs, not proc
        await expect(kernel.syscall(pid, "spawn", { exec: "sandbox" })).rejects.toThrow("EACCES");
        await expect(kernel.syscall(pid, "kill", { pid })).rejects.toThrow("EACCES");
    });

    it("allows process control to a program with 'proc'", async () => {
        const pid = await spawn("procapp");
        await expect(kernel.syscall(pid, "spawn", { exec: "sandbox" })).resolves.toEqual(expect.any(String));
    });

    it("never gates self-identity / listing / exit syscalls", async () => {
        const pid = await spawn("sandbox"); // no permissions
        await expect(kernel.syscall(pid, "getpid", {})).resolves.toBe(pid);
        await expect(kernel.syscall(pid, "getargv", {})).resolves.toEqual([]);
        await expect(kernel.syscall(pid, "ps", {})).resolves.toEqual(expect.any(Array));
        await expect(kernel.syscall(pid, "exit", {})).resolves.toBeUndefined();
    });

    it("treats the kernel/desktop (caller null) as fully trusted", async () => {
        // No process, no permissions — the OS itself bypasses all checks.
        await expect(kernel.syscall(null, "readdir", { path: "/home/user" })).resolves.toEqual([]);
        await expect(kernel.syscall(null, "mkdir", { path: "/home/user/d" })).resolves.toBeUndefined();
    });
});
