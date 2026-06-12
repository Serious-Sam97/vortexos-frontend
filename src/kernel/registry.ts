import type { FC } from "react";
import { ProgramManifest } from "./types";

/**
 * The program registry — the kernel's "/bin". Maps an `exec` name to its manifest.
 * Replaces v1's hardcoded `fetchComponent` switch with a real, extensible table,
 * which is what makes apps installable in Phase 3.
 */
export class ProgramRegistry {
    private programs = new Map<string, ProgramManifest>();

    register(manifest: ProgramManifest): void {
        this.programs.set(manifest.exec, manifest);
    }

    get(exec: string): ProgramManifest | undefined {
        return this.programs.get(exec);
    }

    /** Resolve a program's renderable code by exec name. */
    component(exec: string): FC<any> | undefined {
        return this.programs.get(exec)?.component;
    }

    has(exec: string): boolean {
        return this.programs.has(exec);
    }

    list(): ProgramManifest[] {
        return [...this.programs.values()];
    }
}
