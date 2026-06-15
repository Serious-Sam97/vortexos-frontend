import axios from "axios";
import type { AppPackage } from "./appPackage";

/**
 * Client for the cloud App Store. Auth token is attached by the global axios
 * interceptor (system/http.ts). The catalogue is public to any signed-in user;
 * publishing is owner-scoped server-side.
 */
const API = import.meta.env.VITE_API_URL ?? "";

export interface AppSummary {
    appId: string;
    name: string;
    version: string;
    author: string;
    description: string;
    icon: string;
    installs: number;
    updatedAt: number;
}

export interface AppListing extends AppSummary {
    packageJson: string;
}

export async function listApps(): Promise<AppSummary[]> {
    const { data } = await axios.get(`${API}/store`);
    return Array.isArray(data) ? data : [];
}

export async function listMyApps(): Promise<AppSummary[]> {
    const { data } = await axios.get(`${API}/store/mine`);
    return Array.isArray(data) ? data : [];
}

/** Fetch the full listing (with the package) and parse the .vxapp out of it. */
export async function getAppPackage(appId: string): Promise<AppPackage> {
    const { data } = await axios.get<AppListing>(`${API}/store/${encodeURIComponent(appId)}`);
    return JSON.parse(data.packageJson) as AppPackage;
}

/** Publish (or update) an app. Sends the manifest summary + the full package JSON. */
export async function publishApp(pkg: AppPackage): Promise<void> {
    const m = pkg.manifest;
    await axios.post(`${API}/store`, {
        appId: m.id,
        name: m.name,
        version: m.version,
        description: m.description ?? "",
        icon: m.icon,
        packageJson: JSON.stringify(pkg),
    });
}

/** Record an install (analytics). Best-effort — never blocks the actual install. */
export async function recordInstall(appId: string): Promise<void> {
    try {
        await axios.post(`${API}/store/${encodeURIComponent(appId)}/install`);
    } catch {
        /* analytics only */
    }
}

export async function unpublishApp(appId: string): Promise<void> {
    await axios.delete(`${API}/store/${encodeURIComponent(appId)}`);
}
