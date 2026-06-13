import { createContext, ReactNode, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { registerBuiltins } from "../bin";
import { createLocalStoragePersistence } from "../persistence";
import { Vfs } from "../fs/Vfs";
import { MemFS } from "../fs/MemFS";
import { DevFS } from "../fs/DevFS";
import { ProcFS } from "../fs/ProcFS";
import { BinFS } from "../fs/BinFS";
import { CloudFS, createCloudApi } from "../fs/CloudFS";
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
    fs.mkdir("/home/user/Desktop");
    fs.mkdir("/tmp");
    fs.mkdir("/mnt");
    fs.mkdir("/Recycle Bin");
    fs.write("/home/user/welcome.txt", new TextEncoder().encode(WELCOME));
    return fs;
}

function createKernel(): { kernel: Kernel; cloud: CloudFS } {
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

    if (!root.exists("/mnt")) root.mkdir("/mnt"); // mount point for /mnt/cloud (restored trees)

    const vfs = new Vfs();
    vfs.mount("/", root);
    vfs.mount("/dev", new DevFS());
    vfs.mount("/proc", new ProcFS(() => kernel.processInfo()));
    vfs.mount("/bin", new BinFS(() => kernel.registry.list().map((p) => ({ exec: p.exec, name: p.name }))));

    // Server-backed cloud drive: mirrors the per-user backend File table, syncs through to
    // it. Loaded after sign-in (CloudProvider effect), not at boot, since it needs a token.
    // onLoaded → vfs.touch() so reactive views learn the mirror changed.
    const cloud = new CloudFS("/mnt/cloud", createCloudApi(import.meta.env.VITE_API_URL ?? ""), () => vfs.touch());
    vfs.mount("/mnt/cloud", cloud);

    vfs.subscribe(() => fsPersistence.save(root.serialize()));
    kernel.mountVfs(vfs);

    if (!saved) fsPersistence.save(root.serialize()); // persist the freshly seeded tree
    return { kernel, cloud };
}

/** Reloads the /mnt/cloud mirror for the current user (no-op with an injected test kernel). */
const CloudContext = createContext<() => Promise<void>>(async () => {});

export function KernelProvider({ children, kernel: injected }: { children: ReactNode; kernel?: Kernel }) {
    // One kernel per app session. An injected kernel (tests) takes precedence.
    const { kernel, cloud } = useMemo(
        () => (injected ? { kernel: injected, cloud: null } : createKernel()),
        [injected],
    );
    const reloadCloud = useCallback(async () => {
        await cloud?.reload();
    }, [cloud]);

    return (
        <KernelContext.Provider value={kernel}>
            <CloudContext.Provider value={reloadCloud}>{children}</CloudContext.Provider>
        </KernelContext.Provider>
    );
}

/** Reload the signed-in user's cloud drive (called when authentication changes). */
export function useReloadCloud(): () => Promise<void> {
    return useContext(CloudContext);
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

/** Reactive filesystem mutation counter — re-renders a component on any FS change. */
export function useFsVersion(): number {
    const kernel = useKernel();
    return useSyncExternalStore(kernel.subscribeFs, kernel.fsVersion);
}
