import { Persistence, SerializedPCB, WindowState } from "./types";

const KEY = "vortex.proctable";
const V1_KEY = "process"; // v1 ProcessContext persisted here

/**
 * localStorage-backed persistence for the process table, with a one-time migration
 * from v1's `process` key so a user's open windows survive the upgrade.
 */
export function createLocalStoragePersistence(
    defaultLocation: () => WindowState,
): Persistence {
    return {
        load(): SerializedPCB[] | null {
            const current = localStorage.getItem(KEY);
            if (current) return safeParse(current);

            // Migrate v1 → v2 once.
            const legacy = localStorage.getItem(V1_KEY);
            if (legacy) {
                const migrated = migrateV1(legacy, defaultLocation);
                if (migrated) localStorage.setItem(KEY, JSON.stringify(migrated));
                return migrated;
            }
            return null;
        },
        save(table: SerializedPCB[]): void {
            localStorage.setItem(KEY, JSON.stringify(table));
        },
    };
}

function safeParse(raw: string): SerializedPCB[] | null {
    try {
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : null;
    } catch {
        return null;
    }
}

/** v1 stored `{ uuid, name, icon, priority, location, componentName }` records. */
function migrateV1(raw: string, defaultLocation: () => WindowState): SerializedPCB[] | null {
    let legacy: any[];
    try {
        legacy = JSON.parse(raw);
    } catch {
        return null;
    }
    if (!Array.isArray(legacy)) return null;

    return legacy
        .filter((p) => p && p.componentName)
        .map((p) => ({
            pid: p.uuid ?? crypto.randomUUID(),
            ppid: null,
            uid: 1000,
            exec: p.componentName,
            name: p.name ?? p.componentName,
            icon: p.icon ?? "",
            priority: typeof p.priority === "number" ? p.priority : 0,
            window: {
                x: p.location?.x ?? defaultLocation().x,
                y: p.location?.y ?? defaultLocation().y,
            },
            cwd: "/home/user",
            state: "running" as const,
        }));
}
