import { createContext, ReactNode, useContext, useMemo, useSyncExternalStore } from "react";
import { Kernel } from "../Kernel";
import { ProgramRegistry } from "../registry";
import { registerBuiltins } from "../bin";
import { createLocalStoragePersistence } from "../persistence";
import { PCB, WindowState } from "../types";

const KernelContext = createContext<Kernel | null>(null);

const viewportCenter = (): WindowState => ({
    x: (typeof window !== "undefined" ? window.innerWidth : 800) / 2,
    y: (typeof window !== "undefined" ? window.innerHeight : 600) / 2,
});

function createKernel(): Kernel {
    const registry = new ProgramRegistry();
    registerBuiltins(registry);
    return new Kernel({
        registry,
        persistence: createLocalStoragePersistence(viewportCenter),
        defaultWindowLocation: viewportCenter,
    });
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
