/**
 * VortexOS identity stats — the live numbers behind the "About" panel: how long
 * this session has been up and how many times this machine has been booted.
 * BOOT_TIME is captured once at module load (i.e. page load).
 */

export const BOOT_TIME = Date.now();

const BOOT_COUNT_KEY = "vortex.bootcount";
let bootCount = 0;

/** Called once at startup (from main.tsx) to tick the boot counter. */
export function recordBoot(): void {
    const prev = parseInt(localStorage.getItem(BOOT_COUNT_KEY) ?? "0", 10);
    bootCount = (Number.isFinite(prev) ? prev : 0) + 1;
    localStorage.setItem(BOOT_COUNT_KEY, String(bootCount));
}

export function getBootCount(): number {
    if (bootCount) return bootCount;
    const v = parseInt(localStorage.getItem(BOOT_COUNT_KEY) ?? "0", 10);
    return Number.isFinite(v) ? v : 0;
}

export function uptimeMs(): number {
    return Date.now() - BOOT_TIME;
}

/** "M:SS" under an hour, "H:MM:SS" beyond. */
export function formatUptime(ms: number): string {
    const total = Math.floor(ms / 1000);
    const s = total % 60;
    const m = Math.floor(total / 60) % 60;
    const h = Math.floor(total / 3600);
    const pad = (n: number) => String(n).padStart(2, "0");
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}
