/**
 * The Dr. Watson log — a small in-memory record of application faults and kernel panics.
 * Dr. Watson (app error boundaries) and the BSOD (kernel panic) both write here; the
 * notification center and a future log viewer can read it.
 */
export interface CrashEntry {
    kind: "app" | "kernel";
    app: string;
    pid: string | null;
    message: string;
    stack: string;
    ts: number;
}

const CAP = 30;
let log: CrashEntry[] = [];
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

export function logCrash(e: { app: string; pid: string | null; message: string; stack: string; kind?: "app" | "kernel" }): void {
    log = [...log, { kind: e.kind ?? "app", app: e.app, pid: e.pid, message: e.message, stack: e.stack, ts: Date.now() }].slice(-CAP);
    notify();
}

export function getCrashLog(): CrashEntry[] {
    return log;
}

export function subscribeCrashLog(fn: () => void): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}
