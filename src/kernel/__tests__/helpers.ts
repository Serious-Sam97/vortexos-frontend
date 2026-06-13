import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { Vfs } from "../fs/Vfs";
import { MemFS } from "../fs/MemFS";
import { DevFS } from "../fs/DevFS";
import { ProcFS } from "../fs/ProcFS";
import { BinFS } from "../fs/BinFS";
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
            // Test stubs are fully privileged; permission enforcement is exercised by
            // dedicated tests that register programs with restricted permissions.
            permissions: ["fs", "net", "gui", "proc", "audio"],
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
    opts: { registry?: ProgramRegistry; persistence?: Persistence; mountFs?: boolean } = {},
): Kernel {
    const kernel = new Kernel({
        registry: opts.registry ?? makeRegistry(),
        persistence: opts.persistence,
        defaultWindowLocation: fixedLocation,
    });
    if (opts.mountFs !== false) kernel.mountVfs(buildTestVfs(kernel));
    return kernel;
}

/** A VFS with the standard mounts and a seeded /home/user, for kernel tests. */
export function buildTestVfs(kernel: Kernel): Vfs {
    const root = new MemFS();
    root.mkdir("/home");
    root.mkdir("/home/user");
    const vfs = new Vfs();
    vfs.mount("/", root);
    vfs.mount("/dev", new DevFS());
    vfs.mount("/proc", new ProcFS(() => kernel.processInfo()));
    vfs.mount("/bin", new BinFS(() => kernel.registry.list().map((p) => ({ exec: p.exec, name: p.name }))));
    return vfs;
}

function titleCase(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
