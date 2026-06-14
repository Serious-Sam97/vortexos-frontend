import { createContext, ReactNode, useCallback, useContext, useEffect, useState, useSyncExternalStore } from "react";
import { Kernel, PanicInfo } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { registerBuiltins } from "../bin";
import { createLocalStoragePersistence } from "../persistence";
import { Vfs } from "../fs/Vfs";
import { MemFS } from "../fs/MemFS";
import { DevFS } from "../fs/DevFS";
import { ProcFS } from "../fs/ProcFS";
import { BinFS } from "../fs/BinFS";
import { CloudFS, createCloudApi } from "../fs/CloudFS";
import { createFsPersistence } from "../fs/persistence";
import { getUninstalled } from "../../system/programs";
import { PCB, WindowState } from "../types";

const KernelContext = createContext<Kernel | null>(null);

const viewportCenter = (): WindowState => ({
    x: (typeof window !== "undefined" ? window.innerWidth : 800) / 2,
    y: (typeof window !== "undefined" ? window.innerHeight : 600) / 2,
});

/** Build the root filesystem on first boot. Per-user homes under /home are
 *  created on sign-in (see ensureUserHome), so no generic /home/user is seeded. */
function seedRoot(): MemFS {
    const fs = new MemFS();
    fs.mkdir("/home");
    fs.mkdir("/tmp");
    fs.mkdir("/mnt");
    fs.mkdir("/Recycle Bin");
    return fs;
}

async function createKernel(): Promise<{ kernel: Kernel; drives: CloudFS[] }> {
    const registry = new ProgramRegistry();
    registerBuiltins(registry);
    // Honour apps the user removed via Add/Remove Programs.
    for (const exec of getUninstalled()) registry.unregister(exec);
    const kernel = new Kernel({
        registry,
        persistence: createLocalStoragePersistence(viewportCenter),
        defaultWindowLocation: viewportCenter,
    });

    // Assemble and mount the VFS. The FS snapshot now lives in OPFS (large, async) when
    // available — load it before building the tree.
    const fsPersistence = createFsPersistence();
    const saved = await fsPersistence.load();
    const root = saved ? MemFS.deserialize(saved) : seedRoot();

    if (!root.exists("/mnt")) root.mkdir("/mnt"); // mount point for /mnt/cloud (restored trees)

    const vfs = new Vfs();
    vfs.mount("/", root);
    vfs.mount("/dev", new DevFS());
    vfs.mount("/proc", new ProcFS(() => kernel.processInfo()));
    vfs.mount("/bin", new BinFS(() => kernel.registry.list().map((p) => ({ exec: p.exec, name: p.name }))));

    // Server-backed drives, loaded after sign-in (they need a token), not at boot.
    // onLoaded → vfs.touch() so reactive views learn the mirror changed.
    const api = import.meta.env.VITE_API_URL ?? "";
    // Per-user private drive.
    const cloud = new CloudFS("/mnt/cloud", createCloudApi(api, "/files"), () => vfs.touch());
    vfs.mount("/mnt/cloud", cloud);
    // Shared public drive — same files for everyone.
    const publicDrive = new CloudFS("/mnt/public", createCloudApi(api, "/public/files"), () => vfs.touch());
    vfs.mount("/mnt/public", publicDrive);

    vfs.subscribe(() => fsPersistence.save(root.serialize()));
    kernel.mountVfs(vfs);

    if (!saved) fsPersistence.save(root.serialize()); // persist the freshly seeded tree
    return { kernel, drives: [cloud, publicDrive] };
}

/** Reloads the network drives for the current user (no-op with an injected test kernel). */
const CloudContext = createContext<() => Promise<void>>(async () => {});

export function KernelProvider({ children, kernel: injected }: { children: ReactNode; kernel?: Kernel }) {
    // An injected kernel (tests) is available synchronously; the real kernel loads its FS
    // snapshot from OPFS asynchronously, so it arrives after a brief boot.
    const [boot, setBoot] = useState<{ kernel: Kernel; drives: CloudFS[] } | null>(
        injected ? { kernel: injected, drives: [] } : null,
    );

    useEffect(() => {
        if (injected) {
            setBoot({ kernel: injected, drives: [] });
            return;
        }
        let cancelled = false;
        void createKernel().then((built) => {
            if (!cancelled) setBoot(built);
        });
        return () => {
            cancelled = true;
        };
    }, [injected]);

    const drives = boot?.drives ?? [];
    const reloadCloud = useCallback(async () => {
        await Promise.all(drives.map((d) => d.reload()));
    }, [drives]);

    // Brief loading screen while the OPFS snapshot is read and the kernel is assembled.
    if (!boot) {
        return (
            <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#008080", color: "#fff", fontSize: 14 }}>
                Starting VortexOS…
            </div>
        );
    }

    return (
        <KernelContext.Provider value={boot.kernel}>
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

/** The current kernel panic (null = healthy). Drives the Blue Screen of Death. */
export function usePanic(): PanicInfo | null {
    const kernel = useKernel();
    return useSyncExternalStore(kernel.subscribePanic, kernel.getPanic);
}
