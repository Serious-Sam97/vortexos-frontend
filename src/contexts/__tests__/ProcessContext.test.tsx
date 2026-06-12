import { describe, expect, it, vi } from "vitest";
import { ReactNode } from "react";
import { act, renderHook } from "@testing-library/react";

// The shim pulls in KernelProvider → /bin. Stub /bin so we don't load js-dos/axios.
vi.mock("../../kernel/bin", () => ({ registerBuiltins: () => {} }));

import { ProcessContextProvider, useProcessContext } from "../ProcessContext";
import { KernelProvider } from "../../kernel/react/KernelProvider";
import { makeKernel, makeRegistry } from "../../kernel/__tests__/helpers";

function setup() {
    const kernel = makeKernel({ registry: makeRegistry(["notes", "doom"]) });
    const wrapper = ({ children }: { children: ReactNode }) => (
        <KernelProvider kernel={kernel}>
            <ProcessContextProvider>{children}</ProcessContextProvider>
        </KernelProvider>
    );
    return renderHook(() => useProcessContext(), { wrapper });
}

describe("ProcessContext compatibility shim", () => {
    it("addProcess spawns via the kernel and maps a PCB onto the v1 Process shape", () => {
        const { result } = setup();

        act(() => result.current.addProcess({ componentName: "notes", name: "Notes", icon: "/n.png" }));

        expect(result.current.processes).toHaveLength(1);
        const p = result.current.processes[0];
        expect(p.name).toBe("Notes");
        expect(p.uuid).toBeTruthy();
        expect(p.priority).toBe(0);
        expect(typeof p.component).toBe("function"); // resolved from the registry
    });

    it("ignores spawn objects that carry no componentName", () => {
        const { result } = setup();
        act(() => result.current.addProcess({ name: "Nope", icon: "" }));
        expect(result.current.processes).toHaveLength(0);
    });

    it("changePriority forwards to the kernel scheduler (focus)", () => {
        const { result } = setup();
        act(() => result.current.addProcess({ componentName: "notes", name: "Notes", icon: "" }));
        act(() => result.current.addProcess({ componentName: "doom", name: "Doom", icon: "" }));

        const notes = result.current.processes.find((p) => p.name === "Notes")!;
        expect(notes.priority).toBe(1); // demoted by the Doom spawn

        act(() => result.current.changePriority(notes, 0));
        expect(result.current.processes.find((p) => p.name === "Notes")!.priority).toBe(0);
    });

    it("handleProceessLocationChange moves the window", () => {
        const { result } = setup();
        act(() => result.current.addProcess({ componentName: "notes", name: "Notes", icon: "" }));
        const uuid = result.current.processes[0].uuid!;

        act(() => result.current.handleProceessLocationChange(uuid, { x: 50, y: 60 }));
        expect(result.current.processes[0].location).toEqual({ x: 50, y: 60 });
    });

    it("closeProcess kills the process", () => {
        const { result } = setup();
        act(() => result.current.addProcess({ componentName: "doom", name: "Doom", icon: "" }));
        const uuid = result.current.processes[0].uuid!;

        act(() => result.current.closeProcess(uuid));
        expect(result.current.processes).toHaveLength(0);
    });

    it("exposes registry lookups and the Explorer program list", () => {
        const { result } = setup();
        expect(typeof result.current.fetchComponent("notes")).toBe("function");
        expect(result.current.fetchComponent("ghost")).toBeUndefined();
        expect(result.current.fetchIcon("folder")).toBeTruthy();
        expect(result.current.programs.map((p) => p.componentName)).toEqual(["explorer", "notes"]);
    });
});
