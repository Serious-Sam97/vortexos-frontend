import { describe, expect, it, vi } from "vitest";
import { makeKernel } from "./helpers";

describe("kernel panic surface (BSOD)", () => {
    it("starts healthy (no panic)", () => {
        expect(makeKernel().getPanic()).toBeNull();
    });

    it("panic() sets state, notifies subscribers, and fills authentic defaults", () => {
        const kernel = makeKernel();
        const seen = vi.fn();
        kernel.subscribePanic(seen);
        kernel.panic({ message: "test fault" });
        const p = kernel.getPanic();
        expect(p?.message).toBe("test fault");
        expect(p?.code).toBe("0E"); // default exception code
        expect(p?.address).toMatch(/^0028:/); // plausible segment:offset
        expect(p?.recoverable).toBe(true); // default
        expect(seen).toHaveBeenCalledOnce();
    });

    it("clearPanic() recovers (press any key to continue)", () => {
        const kernel = makeKernel();
        kernel.panic({ message: "x" });
        kernel.clearPanic();
        expect(kernel.getPanic()).toBeNull();
    });

    it("an unexpected (non-KernelError) fault inside a syscall triggers a panic", async () => {
        const kernel = makeKernel();
        // Force a raw fault deep in dispatch.
        (kernel as unknown as { sysPs: () => unknown }).sysPs = () => {
            throw new TypeError("boom");
        };
        await expect(kernel.syscall(null, "ps", {})).rejects.toThrow("boom");
        expect(kernel.getPanic()?.message).toBe("boom");
        expect(kernel.getPanic()?.syscall).toBe("ps");
    });

    it("an expected KernelError does NOT panic (normal userland failure)", async () => {
        const kernel = makeKernel();
        // killing a non-existent pid throws ESRCH (a KernelError) — userland error, not a fault.
        await expect(kernel.syscall(null, "kill", { pid: "nope" })).rejects.toBeTruthy();
        expect(kernel.getPanic()).toBeNull();
    });
});
