import { describe, expect, it, vi } from "vitest";
import { ReactNode } from "react";
import { act, renderHook } from "@testing-library/react";

// Keep these unit tests light — don't load the real /bin (js-dos, axios, …).
vi.mock("../../bin", () => ({ registerBuiltins: () => {} }));

import { KernelProvider, useKernel, useProcessTable } from "../KernelProvider";
import { useSys } from "../useSys";
import { PidProvider } from "../pid";
import { Kernel } from "../../Kernel";
import { makeKernel } from "../../__tests__/helpers";

const wrap =
    (kernel: Kernel, pid?: string) =>
    ({ children }: { children: ReactNode }) =>
        (
            <KernelProvider kernel={kernel}>
                {pid ? <PidProvider pid={pid}>{children}</PidProvider> : children}
            </KernelProvider>
        );

describe("KernelProvider + hooks", () => {
    it("useProcessTable re-renders when the kernel changes", async () => {
        const kernel = makeKernel();
        const { result } = renderHook(() => ({ table: useProcessTable(), sys: useSys() }), {
            wrapper: wrap(kernel),
        });

        expect(result.current.table).toHaveLength(0);
        await act(async () => {
            await result.current.sys.spawn("notes");
        });
        expect(result.current.table).toHaveLength(1);
        expect(result.current.table[0].exec).toBe("notes");
    });

    it("useSys binds syscalls to the surrounding process's pid", async () => {
        const kernel = makeKernel();
        const { result } = renderHook(() => useSys(), { wrapper: wrap(kernel, "proc-42") });
        expect(await result.current.getpid()).toBe("proc-42");
    });

    it("useSys reports a null pid when not inside a process window", async () => {
        const kernel = makeKernel();
        const { result } = renderHook(() => useSys(), { wrapper: wrap(kernel) });
        expect(await result.current.getpid()).toBeNull();
    });

    it("useKernel throws when used outside a KernelProvider", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        expect(() => renderHook(() => useKernel())).toThrow(/KernelProvider/);
        spy.mockRestore();
    });
});
