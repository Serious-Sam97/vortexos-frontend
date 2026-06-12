import { useMemo } from "react";
import { createLibOS, LibOS } from "../libos";
import { useKernel } from "./KernelProvider";
import { usePid } from "./pid";

/**
 * Returns a `libos` client bound to the calling component's process.
 * Any app rendered inside a window can `const sys = useSys()` and issue syscalls.
 */
export function useSys(): LibOS {
    const kernel = useKernel();
    const pid = usePid();
    return useMemo(() => createLibOS(kernel, pid), [kernel, pid]);
}
