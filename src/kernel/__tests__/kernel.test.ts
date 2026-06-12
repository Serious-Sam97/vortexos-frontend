import { beforeEach, describe, expect, it, vi } from "vitest";
import { Kernel } from "../Kernel";
import { fixedLocation, makeKernel, makeRegistry, memoryPersistence } from "./helpers";

describe("Kernel — process lifecycle", () => {
    let kernel: Kernel;
    beforeEach(() => {
        kernel = makeKernel();
    });

    it("spawn creates a foreground process from a /bin program", async () => {
        const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
        const table = kernel.getSnapshot();

        expect(table).toHaveLength(1);
        const p = table[0];
        expect(p.pid).toBe(pid);
        expect(p.exec).toBe("notes");
        expect(p.name).toBe("Notes"); // from manifest
        expect(p.priority).toBe(0); // foreground
        expect(p.state).toBe("running");
        expect(p.window).toEqual(fixedLocation());
        expect(p.cwd).toBe("/home/user");
    });

    it("spawn records the caller as ppid and accepts name/icon/location overrides", async () => {
        const parent = await kernel.syscall(null, "spawn", { exec: "doom" });
        const child = await kernel.syscall(parent, "spawn", {
            exec: "notes",
            name: "Custom",
            icon: "/custom.png",
            location: { x: 5, y: 6 },
        });

        const p = kernel.getSnapshot().find((x) => x.pid === child)!;
        expect(p.ppid).toBe(parent);
        expect(p.name).toBe("Custom");
        expect(p.icon).toBe("/custom.png");
        expect(p.window).toEqual({ x: 5, y: 6 });
    });

    it("spawn rejects with ENOENT for a program not in /bin", async () => {
        await expect(kernel.syscall(null, "spawn", { exec: "ghost" })).rejects.toThrow("ENOENT");
        expect(kernel.getSnapshot()).toHaveLength(0);
    });

    it("kill removes a process and exit terminates the caller", async () => {
        const a = await kernel.syscall(null, "spawn", { exec: "notes" });
        const b = await kernel.syscall(null, "spawn", { exec: "doom" });

        await kernel.syscall(null, "kill", { pid: a });
        expect(kernel.getSnapshot().map((p) => p.pid)).toEqual([b]);

        await kernel.syscall(b, "exit", { code: 0 });
        expect(kernel.getSnapshot()).toHaveLength(0);
    });

    it("kill and the window syscalls reject ESRCH for an unknown pid", async () => {
        await expect(kernel.syscall(null, "kill", { pid: "nope" })).rejects.toThrow("ESRCH");
        await expect(kernel.syscall(null, "win_focus", { pid: "nope" })).rejects.toThrow("ESRCH");
        await expect(
            kernel.syscall(null, "win_move", { pid: "nope", location: { x: 0, y: 0 } }),
        ).rejects.toThrow("ESRCH");
    });

    it("exit with no caller (kernel) is a no-op", async () => {
        await kernel.syscall(null, "spawn", { exec: "notes" });
        await kernel.syscall(null, "exit", { code: 0 });
        expect(kernel.getSnapshot()).toHaveLength(1);
    });
});

describe("Kernel — scheduler (focus / z-order)", () => {
    let kernel: Kernel;
    beforeEach(() => {
        kernel = makeKernel();
    });

    it("spawning demotes existing processes so the newest is foreground", async () => {
        const a = await kernel.syscall(null, "spawn", { exec: "notes" });
        const b = await kernel.syscall(null, "spawn", { exec: "doom" });
        const c = await kernel.syscall(null, "spawn", { exec: "task_manager" });

        const prio = priorityMap(kernel);
        expect(prio.get(c)).toBe(0); // newest = foreground
        expect(prio.get(b)).toBe(1);
        expect(prio.get(a)).toBe(2);
    });

    it("win_focus brings a process to the front and renumbers the rest", async () => {
        const a = await kernel.syscall(null, "spawn", { exec: "notes" });
        const b = await kernel.syscall(null, "spawn", { exec: "doom" });
        const c = await kernel.syscall(null, "spawn", { exec: "task_manager" });

        await kernel.syscall(null, "win_focus", { pid: a });

        const prio = priorityMap(kernel);
        expect(prio.get(a)).toBe(0);
        // exactly one foreground process, the rest a contiguous 1..n
        const others = [prio.get(b)!, prio.get(c)!].sort();
        expect(others).toEqual([1, 2]);
        expect([...prio.values()].filter((p) => p === 0)).toHaveLength(1);
    });

    it("win_move updates only the target window", async () => {
        const a = await kernel.syscall(null, "spawn", { exec: "notes" });
        const b = await kernel.syscall(null, "spawn", { exec: "doom" });

        await kernel.syscall(null, "win_move", { pid: a, location: { x: 42, y: 99 } });

        const snap = kernel.getSnapshot();
        expect(snap.find((p) => p.pid === a)!.window).toEqual({ x: 42, y: 99 });
        expect(snap.find((p) => p.pid === b)!.window).toEqual(fixedLocation());
    });
});

describe("Kernel — introspection syscalls", () => {
    it("ps returns a read-only view of the table", async () => {
        const kernel = makeKernel();
        await kernel.syscall(null, "spawn", { exec: "notes" });
        const procs = await kernel.syscall(null, "ps", {});

        expect(procs).toHaveLength(1);
        expect(procs[0]).toMatchObject({ exec: "notes", name: "Notes", state: "running", priority: 0 });
        // must not leak runtime internals like fds
        expect(procs[0]).not.toHaveProperty("fds");
    });

    it("getpid echoes the calling pid", async () => {
        const kernel = makeKernel();
        expect(await kernel.syscall("pid-123", "getpid", {})).toBe("pid-123");
        expect(await kernel.syscall(null, "getpid", {})).toBeNull();
    });
});

describe("Kernel — filesystem syscalls are reserved (ENOSYS until Phase 1)", () => {
    const kernel = makeKernel();
    const fsCalls = [
        ["open", { path: "/x", flags: "r" }],
        ["read", { fd: 0, len: 1 }],
        ["write", { fd: 0, data: new Uint8Array() }],
        ["close", { fd: 0 }],
        ["readdir", { path: "/" }],
        ["stat", { path: "/x" }],
    ] as const;

    it.each(fsCalls)("%s rejects with ENOSYS", async (name, args) => {
        await expect(kernel.syscall(null, name as any, args as any)).rejects.toThrow("ENOSYS");
    });

    it("an unknown syscall rejects with ENOSYS", async () => {
        await expect(kernel.syscall(null, "frobnicate" as any, {})).rejects.toThrow("ENOSYS");
    });
});

describe("Kernel — reactive store", () => {
    it("notifies subscribers on every mutation and stops after unsubscribe", async () => {
        const kernel = makeKernel();
        const listener = vi.fn();
        const unsubscribe = kernel.subscribe(listener);

        const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
        await kernel.syscall(null, "win_focus", { pid });
        expect(listener).toHaveBeenCalledTimes(2);

        unsubscribe();
        await kernel.syscall(null, "kill", { pid });
        expect(listener).toHaveBeenCalledTimes(2); // no further calls
    });

    it("getSnapshot is referentially stable between mutations", async () => {
        const kernel = makeKernel();
        const before = kernel.getSnapshot();
        expect(kernel.getSnapshot()).toBe(before); // same ref, no mutation

        await kernel.syscall(null, "spawn", { exec: "notes" });
        expect(kernel.getSnapshot()).not.toBe(before); // new ref after mutation
    });
});

describe("Kernel — persistence", () => {
    it("saves a serialized table (without runtime fields) after each mutation", async () => {
        const persistence = memoryPersistence();
        const kernel = makeKernel({ persistence });

        const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
        expect(persistence.saveCount).toBe(1);
        expect(persistence.saved).toHaveLength(1);
        const record = persistence.saved![0];
        expect(record).toMatchObject({ pid, exec: "notes", priority: 0 });
        expect(record).not.toHaveProperty("fds");
        expect(record).not.toHaveProperty("component");
    });

    it("boots by rehydrating saved processes, dropping any whose program is gone", () => {
        const persistence = memoryPersistence([
            serialized("p1", "notes"),
            serialized("p2", "uninstalled-app"),
        ]);
        const kernel = makeKernel({ registry: makeRegistry(["notes"]), persistence });

        const snap = kernel.getSnapshot();
        expect(snap.map((p) => p.exec)).toEqual(["notes"]); // p2 dropped
        expect(snap[0].fds.size).toBe(0); // hydrated with a fresh fd table
    });
});

function priorityMap(kernel: Kernel): Map<string, number> {
    return new Map(kernel.getSnapshot().map((p) => [p.pid, p.priority]));
}

function serialized(pid: string, exec: string) {
    return {
        pid,
        ppid: null,
        uid: 1000,
        exec,
        name: exec,
        icon: "",
        priority: 0,
        window: { x: 0, y: 0 },
        cwd: "/home/user",
        state: "running" as const,
    };
}
