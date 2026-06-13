import { afterEach, describe, expect, it, vi } from "vitest";
import {
    createFsPersistence,
    createLocalStorageFsPersistence,
    createOpfsFsPersistence,
} from "../persistence";
import { SerializedNode } from "../types";

const tree = { type: "dir", children: { "a.txt": { type: "file", content: "aGk=" } } } as unknown as SerializedNode;
const tick = () => new Promise((r) => setTimeout(r, 0));

afterEach(() => {
    localStorage.clear();
    vi.unstubAllGlobals();
});

describe("localStorage FS persistence", () => {
    it("round-trips a tree (async load)", async () => {
        const p = createLocalStorageFsPersistence();
        p.save(tree);
        expect(await p.load()).toEqual(tree);
    });

    it("returns null when nothing is stored", async () => {
        expect(await createLocalStorageFsPersistence().load()).toBeNull();
    });
});

describe("createFsPersistence chooser", () => {
    it("falls back to localStorage when OPFS is unavailable", async () => {
        // jsdom has no navigator.storage.getDirectory → fallback path.
        const p = createFsPersistence();
        p.save(tree);
        expect(localStorage.getItem("vortex.vfs")).not.toBeNull();
        expect(await p.load()).toEqual(tree);
    });
});

/** Minimal in-memory OPFS stand-in (jsdom has no real OPFS). */
function fakeOpfs() {
    const files = new Map<string, string>();
    const dir = {
        async getFileHandle(name: string, opts?: { create?: boolean }) {
            if (!files.has(name) && !opts?.create) throw new Error("NotFound");
            if (!files.has(name)) files.set(name, "");
            return {
                async getFile() {
                    return { async text() { return files.get(name) ?? ""; } };
                },
                async createWritable() {
                    return {
                        async write(data: string) { files.set(name, String(data)); },
                        async close() {},
                    };
                },
            };
        },
    };
    return { files, dir };
}

describe("OPFS FS persistence", () => {
    it("migrates an existing localStorage snapshot into OPFS on first load", async () => {
        const opfs = fakeOpfs();
        vi.stubGlobal("navigator", { storage: { getDirectory: async () => opfs.dir } });
        localStorage.setItem("vortex.vfs", JSON.stringify(tree));

        const p = createOpfsFsPersistence();
        const loaded = await p.load();

        expect(loaded).toEqual(tree); // returned the migrated tree
        expect(localStorage.getItem("vortex.vfs")).toBeNull(); // localStorage cleared
        await tick(); // let the async copy flush
        expect(JSON.parse(opfs.files.get("vortex.vfs.json")!)).toEqual(tree); // now in OPFS
    });

    it("loads a previously written OPFS snapshot (debounced save)", async () => {
        const opfs = fakeOpfs();
        vi.stubGlobal("navigator", { storage: { getDirectory: async () => opfs.dir } });

        const p = createOpfsFsPersistence();
        p.save(tree);
        await new Promise((r) => setTimeout(r, 350)); // past the 300ms debounce
        expect(JSON.parse(opfs.files.get("vortex.vfs.json")!)).toEqual(tree);
        expect(await p.load()).toEqual(tree);
    });
});
