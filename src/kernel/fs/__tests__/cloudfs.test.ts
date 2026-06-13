import { describe, expect, it } from "vitest";
import { CloudApi, CloudFile, CloudFS } from "../CloudFS";

const enc = (s: string) => new TextEncoder().encode(s);
const dec = (b: Uint8Array) => new TextDecoder().decode(b);

function fakeApi(initial: CloudFile[] = []) {
    const calls: any[][] = [];
    const api: CloudApi = {
        async list() {
            return initial;
        },
        async upsert(path, name, type, content) {
            calls.push(["upsert", path, type, content]);
        },
        async remove(path) {
            calls.push(["remove", path]);
        },
        async rename(from, to) {
            calls.push(["rename", from, to]);
        },
    };
    return { api, calls };
}

describe("CloudFS", () => {
    it("loads the backend table into the mirror", async () => {
        const { api } = fakeApi([
            { path: "/mnt/cloud/docs", name: "docs", type: "folder" },
            { path: "/mnt/cloud/docs/a.txt", name: "a.txt", type: "file", content: btoa("hi") },
        ]);
        const cloud = new CloudFS("/mnt/cloud", api);
        await cloud.init();

        expect(cloud.readdir("/")).toContain("docs");
        expect(dec(cloud.read("/docs/a.txt"))).toBe("hi");
    });

    it("writes through to the backend and updates the mirror", async () => {
        const { api, calls } = fakeApi();
        const cloud = new CloudFS("/mnt/cloud", api);
        await cloud.init();

        cloud.write("/note.txt", enc("x"));
        expect(dec(cloud.read("/note.txt"))).toBe("x"); // mirror updates synchronously
        await cloud.flush();
        expect(calls).toContainEqual(["upsert", "/mnt/cloud/note.txt", "file", btoa("x")]);
    });

    it("mkdir / unlink / rename hit the backend with full paths", async () => {
        const { api, calls } = fakeApi();
        const cloud = new CloudFS("/mnt/cloud", api);
        await cloud.init();

        cloud.mkdir("/d");
        cloud.write("/d/f.txt", enc("y"));
        cloud.unlink("/d/f.txt");
        cloud.rename("/d", "/e");
        await cloud.flush();

        expect(calls).toContainEqual(["upsert", "/mnt/cloud/d", "folder", null]);
        expect(calls).toContainEqual(["remove", "/mnt/cloud/d/f.txt"]);
        expect(calls).toContainEqual(["rename", "/mnt/cloud/d", "/mnt/cloud/e"]);
    });

    it("survives an offline backend (empty mount)", async () => {
        const api: CloudApi = {
            async list() {
                throw new Error("offline");
            },
            async upsert() {},
            async remove() {},
            async rename() {},
        };
        const cloud = new CloudFS("/mnt/cloud", api);
        await cloud.init();
        expect(cloud.readdir("/")).toEqual([]);
    });
});
