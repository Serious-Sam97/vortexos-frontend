import { createElement, useSyncExternalStore } from "react";
import { defineApp } from "../sdk";
import type { ProgramRegistry } from "../kernel/registry";
import SandboxApp from "../components/Apps/SandboxApp";
import { getSession } from "./session";
import type { AppPackage } from "./appPackage";

/**
 * The installed user-app store. Per-user (keyed by username, like wallpaper), each
 * installed .vxapp package persisted to localStorage. Each app is registered into the
 * kernel's program registry as a normal program whose component is the sandboxed
 * SandboxApp runtime — so it spawns, windows, taskbars and uninstalls like any app.
 */
const keyFor = () => `vortex.userapps.${getSession()?.username || "user"}`;

function load(): AppPackage[] {
    try {
        const raw = JSON.parse(localStorage.getItem(keyFor()) ?? "[]");
        return Array.isArray(raw) ? raw : [];
    } catch {
        return [];
    }
}

let cache: AppPackage[] = load();
let registryRef: ProgramRegistry | null = null;
let registeredIds: string[] = [];

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function persist(): void {
    localStorage.setItem(keyFor(), JSON.stringify(cache));
}

function registerOne(pkg: AppPackage): void {
    if (!registryRef) return;
    const id = pkg.manifest.id;
    // The host (SandboxApp, our trusted code) always needs `fs` to manage the app's
    // own data dir + private storage; the broker still gates the fs.* SDK on the
    // manifest. The sandboxed iframe can't issue syscalls, so this stays safe.
    const perms = Array.from(new Set([...pkg.manifest.permissions, "fs" as const]));
    registryRef.register(
        defineApp({
            exec: id,
            name: pkg.manifest.name,
            icon: pkg.manifest.icon,
            // Read the latest package at render time (survives in-place updates).
            component: () => createElement(SandboxApp, { app: getUserApp(id) ?? pkg }),
            permissions: perms,
        }),
    );
    if (!registeredIds.includes(id)) registeredIds.push(id);
}

export function getUserApps(): AppPackage[] {
    return cache;
}

export function getUserApp(id: string): AppPackage | undefined {
    return cache.find((a) => a.manifest.id === id);
}

export function isAppInstalled(id: string): boolean {
    return cache.some((a) => a.manifest.id === id);
}

/** Install (or update) an app and register it so it can launch immediately. */
export function installApp(pkg: AppPackage): void {
    cache = [...cache.filter((a) => a.manifest.id !== pkg.manifest.id), pkg];
    persist();
    registerOne(pkg);
    notify();
}

/** Uninstall an app: remove from the store and unregister it. */
export function uninstallApp(id: string): void {
    cache = cache.filter((a) => a.manifest.id !== id);
    persist();
    registryRef?.unregister(id);
    registeredIds = registeredIds.filter((x) => x !== id);
    notify();
}

/**
 * Bind the registry and (re)register the signed-in user's apps. Called on sign-in /
 * user switch: clears the previous user's registered apps, reloads this user's set,
 * and registers them all.
 */
export function syncUserApps(registry: ProgramRegistry): void {
    for (const id of registeredIds) registry.unregister(id);
    registeredIds = [];
    registryRef = registry;
    cache = load();
    for (const pkg of cache) registerOne(pkg);
    notify();
}

function subscribe(fn: () => void): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

/** Reactive list of installed user apps (desktop / Start menu / App Store read this). */
export function useUserApps(): AppPackage[] {
    return useSyncExternalStore(subscribe, getUserApps);
}
