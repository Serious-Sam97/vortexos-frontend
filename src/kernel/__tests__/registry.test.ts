import { describe, expect, it } from "vitest";
import { ProgramRegistry } from "../registry";

const dummy = () => null;

describe("ProgramRegistry", () => {
    it("registers and retrieves a program by exec name", () => {
        const reg = new ProgramRegistry();
        reg.register({ exec: "notes", name: "Notes", icon: "/n.png", component: dummy });

        expect(reg.has("notes")).toBe(true);
        expect(reg.get("notes")?.name).toBe("Notes");
        expect(reg.component("notes")).toBe(dummy);
    });

    it("returns undefined for an unknown program", () => {
        const reg = new ProgramRegistry();
        expect(reg.has("ghost")).toBe(false);
        expect(reg.get("ghost")).toBeUndefined();
        expect(reg.component("ghost")).toBeUndefined();
    });

    it("overwrites a program registered under the same exec", () => {
        const reg = new ProgramRegistry();
        const a = () => null;
        const b = () => null;
        reg.register({ exec: "x", name: "A", icon: "", component: a });
        reg.register({ exec: "x", name: "B", icon: "", component: b });

        expect(reg.list()).toHaveLength(1);
        expect(reg.component("x")).toBe(b);
    });

    it("lists all registered programs", () => {
        const reg = new ProgramRegistry();
        reg.register({ exec: "a", name: "A", icon: "", component: dummy });
        reg.register({ exec: "b", name: "B", icon: "", component: dummy });
        expect(reg.list().map((p) => p.exec).sort()).toEqual(["a", "b"]);
    });
});
