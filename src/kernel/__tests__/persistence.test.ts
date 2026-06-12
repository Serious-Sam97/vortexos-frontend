import { beforeEach, describe, expect, it } from "vitest";
import { createLocalStoragePersistence } from "../persistence";
import { fixedLocation } from "./helpers";

const KEY = "vortex.proctable";
const V1_KEY = "process";

describe("createLocalStoragePersistence", () => {
    beforeEach(() => localStorage.clear());

    it("round-trips the process table through localStorage", () => {
        const p = createLocalStoragePersistence(fixedLocation);
        const table = [serialized("a", "notes")];
        p.save(table);

        expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual(table);
        expect(p.load()).toEqual(table);
    });

    it("returns null when nothing is stored", () => {
        expect(createLocalStoragePersistence(fixedLocation).load()).toBeNull();
    });

    it("returns null (not a throw) on corrupt JSON", () => {
        localStorage.setItem(KEY, "{not json");
        expect(createLocalStoragePersistence(fixedLocation).load()).toBeNull();
    });

    describe("v1 → v2 migration", () => {
        it("migrates legacy `process` records into the v2 shape and persists them", () => {
            localStorage.setItem(
                V1_KEY,
                JSON.stringify([
                    { uuid: "u1", name: "Notes", icon: "/n.png", priority: 1, location: { x: 10, y: 20 }, componentName: "notes" },
                    { uuid: "u2", name: "Doom", icon: "/d.png", priority: 0, componentName: "doom" },
                ]),
            );

            const migrated = createLocalStoragePersistence(fixedLocation).load()!;

            expect(migrated).toHaveLength(2);
            expect(migrated[0]).toMatchObject({
                pid: "u1",
                exec: "notes", // componentName → exec
                name: "Notes",
                priority: 1,
                window: { x: 10, y: 20 }, // location → window
                state: "running",
                cwd: "/home/user",
            });
            // a record with no location falls back to the default window location
            expect(migrated[1].window).toEqual(fixedLocation());

            // migration is written under the v2 key so it only happens once
            expect(JSON.parse(localStorage.getItem(KEY)!)).toHaveLength(2);
        });

        it("drops legacy records that have no componentName", () => {
            localStorage.setItem(V1_KEY, JSON.stringify([{ uuid: "x", name: "junk" }]));
            expect(createLocalStoragePersistence(fixedLocation).load()).toEqual([]);
        });

        it("prefers an existing v2 table over the legacy key", () => {
            localStorage.setItem(KEY, JSON.stringify([serialized("v2", "notes")]));
            localStorage.setItem(V1_KEY, JSON.stringify([{ uuid: "v1", componentName: "doom" }]));

            const loaded = createLocalStoragePersistence(fixedLocation).load()!;
            expect(loaded.map((p) => p.pid)).toEqual(["v2"]);
        });
    });
});

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
