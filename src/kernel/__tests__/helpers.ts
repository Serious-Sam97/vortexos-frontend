import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { Persistence, SerializedPCB, WindowState } from "../types";

/** A registry preloaded with stub programs (no heavy app imports). */
export function makeRegistry(execs: string[] = ["notes", "task_manager", "doom"]): ProgramRegistry {
    const reg = new ProgramRegistry();
    for (const exec of execs) {
        reg.register({
            exec,
            name: titleCase(exec),
            icon: `/${exec}.png`,
            component: () => null,
            permissions: [],
        });
    }
    return reg;
}

/** An in-memory persistence adapter that records what was last saved. */
export function memoryPersistence(initial: SerializedPCB[] | null = null) {
    let store: SerializedPCB[] | null = initial;
    const adapter = {
        saved: null as SerializedPCB[] | null,
        saveCount: 0,
        load: () => store,
        save: (table: SerializedPCB[]) => {
            store = table;
            adapter.saved = table;
            adapter.saveCount += 1;
        },
    };
    return adapter satisfies Persistence & { saved: SerializedPCB[] | null; saveCount: number };
}

export const fixedLocation = (): WindowState => ({ x: 111, y: 222 });

export function makeKernel(
    opts: { registry?: ProgramRegistry; persistence?: Persistence } = {},
): Kernel {
    return new Kernel({
        registry: opts.registry ?? makeRegistry(),
        persistence: opts.persistence,
        defaultWindowLocation: fixedLocation,
    });
}

function titleCase(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
