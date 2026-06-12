import { createContext, ReactNode, useContext } from "react";
import { Pid } from "../types";

/**
 * Carries a process's identity down its React subtree, so any component inside a
 * window can discover "which process am I?" via `useSys()`. ProcessWindow wraps each
 * app in a PidProvider. In Phase 3 this disappears — a Worker simply knows its own pid.
 */
const PidContext = createContext<Pid | null>(null);

export function PidProvider({ pid, children }: { pid: Pid | null; children: ReactNode }) {
    return <PidContext.Provider value={pid}>{children}</PidContext.Provider>;
}

export function usePid(): Pid | null {
    return useContext(PidContext);
}
