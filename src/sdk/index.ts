import type { FC } from "react";
import type { Permission, ProgramManifest } from "../kernel/types";

export type { Permission } from "../kernel/types";

/**
 * The public App SDK. An app declares itself with `defineApp`, naming the
 * permissions it needs; the kernel enforces those permissions on every syscall
 * the app issues. This is the stable contract that, in Phase 10, lets an app's
 * code move into an isolated Worker without changing how it's declared.
 */
export interface AppDefinition {
    /** Unique program key — its path in /bin and the name spawn() resolves. */
    exec: string;
    /** Default window title. */
    name: string;
    icon: string;
    /** The app's UI. (Phase 10: a Worker entry instead of a React component.) */
    component: FC<any>;
    /**
     * Capabilities the app may use. Enforced by the kernel:
     *   fs    → file syscalls (open/read/write/readdir/stat/mkdir/unlink/rename)
     *   proc  → process control (spawn/kill)
     *   gui   → window control (focus/move) for windows other than the OS shell
     *   net   → network access (declarative for now)
     *   audio → sound output (declarative for now)
     * Omitted = no privileges (least privilege by default).
     */
    permissions?: Permission[];
}

/** Declare an installable VortexOS app. Returns a kernel program manifest. */
export function defineApp(def: AppDefinition): ProgramManifest {
    return {
        exec: def.exec,
        name: def.name,
        icon: def.icon,
        component: def.component,
        permissions: def.permissions ?? [],
    };
}
