import { useEffect, useState } from "react";

export interface StorageInfo {
    usage: number; // bytes used
    quota: number; // bytes available
    supported: boolean;
}

/** Best-effort disk usage via the Storage API (OPFS + caches + localStorage). */
export async function getStorageEstimate(): Promise<StorageInfo> {
    try {
        if (navigator.storage?.estimate) {
            const { usage = 0, quota = 0 } = await navigator.storage.estimate();
            return { usage, quota, supported: true };
        }
    } catch {
        /* ignore */
    }
    return { usage: 0, quota: 0, supported: false };
}

export function formatBytes(n: number): string {
    if (n <= 0) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.min(units.length - 1, Math.floor(Math.log(n) / Math.log(1024)));
    return `${(n / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/** Reactive storage estimate, refreshed on mount. */
export function useStorageEstimate(): StorageInfo | null {
    const [info, setInfo] = useState<StorageInfo | null>(null);
    useEffect(() => {
        let alive = true;
        void getStorageEstimate().then((i) => {
            if (alive) setInfo(i);
        });
        return () => {
            alive = false;
        };
    }, []);
    return info;
}
