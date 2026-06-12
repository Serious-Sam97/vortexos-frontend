import { createContext, ReactNode, useContext, useMemo, useSyncExternalStore } from "react";
import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { registerBuiltins } from "../bin";
import { createLocalStoragePersistence } from "../persistence";
import { Vfs } from "../fs/Vfs";
import { MemFS } from "../fs/MemFS";
import { DevFS } from "../fs/DevFS";
import { ProcFS } from "../fs/ProcFS";
import { BinFS } from "../fs/BinFS";
import { createLocalStorageFsPersistence } from "../fs/persistence";
import { PCB, WindowState } from "../types";

const KernelContext = createContext<Kernel | null>(null);

const viewportCenter = (): WindowState => ({
    x: (typeof window !== "undefined" ? window.innerWidth : 800) / 2,
    y: (typeof window !== "undefined" ? window.innerHeight : 600) / 2,
});

const WELCOME =
    "Welcome to VortexOS.\r\n\r\n" +
    "This is a real file, stored on a real virtual filesystem.\r\n" +
    "Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r\n";

/** Build the root filesystem on first boot. */
function seedRoot(): MemFS {
    const fs = new MemFS();
    fs.mkdir("/home");
    fs.mkdir("/home/user");
    fs.mkdir("/home/user/Documents");
    fs.mkdir("/tmp");
    fs.write("/home/user/welcome.txt", new TextEncoder().encode(WELCOME));
    return fs;
}

function createKernel(): Kernel {
    const registry = new ProgramRegistry();
    registerBuiltins(registry);
    const kernel = new Kernel({
        registry,
        persistence: createLocalStoragePersistence(viewportCenter),
        defaultWindowLocation: viewportCenter,
    });

    // Assemble and mount the VFS.
    const fsPersistence = createLocalStorageFsPersistence();
    const saved = fsPersistence.load();
    const root = saved ? MemFS.deserialize(saved) : seedRoot();

    const vfs = new Vfs();
    vfs.mount("/", root);
    vfs.mount("/dev", new DevFS());
    vfs.mount("/proc", new ProcFS(() => kernel.processInfo()));
    vfs.mount("/bin", new BinFS(() => kernel.registry.list().map((p) => ({ exec: p.exec, name: p.name }))));
    vfs.setOnChange(() => fsPersistence.save(root.serialize()));
    kernel.mountVfs(vfs);

    if (!saved) fsPersistence.save(root.serialize()); // persist the freshly seeded tree
    return kernel;
}

export function KernelProvider({ children, kernel: injected }: { children: ReactNode; kernel?: Kernel }) {
    // One kernel per app session. An injected kernel (tests) takes precedence.
    const kernel = useMemo(() => injected ?? createKernel(), [injected]);
    return <KernelContext.Provider value={kernel}>{children}</KernelContext.Provider>;
}

export function useKernel(): Kernel {
    const kernel = useContext(KernelContext);
    if (!kernel) throw new Error("useKernel must be used within a KernelProvider");
    return kernel;
}

/** Reactive, immutable snapshot of the process table — re-renders on any kernel change. */
export function useProcessTable(): readonly PCB[] {
    const kernel = useKernel();
    return useSyncExternalStore(kernel.subscribe, kernel.getSnapshot);
}
