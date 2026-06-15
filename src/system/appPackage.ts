import type { Permission } from "../kernel/types";

/**
 * THE PLATFORM — the .vxapp package format.
 *
 * A user app is a sandboxed HTML/JS bundle. Its code runs in a `sandbox`ed <iframe>
 * (a unique opaque origin — no DOM/storage access to the OS) and talks to VortexOS
 * only through the postMessage SDK bridge (window.vortex), which is permission-gated
 * against the manifest below. This is the safe, main-thread "platform" that bridges
 * to the Phase 30 Worker runtime.
 *
 * A package is plain JSON (manifest + a files map), so it round-trips through the VFS
 * and the cloud App Store unchanged.
 */
export interface AppManifest {
    /** Reverse-DNS-ish unique id, e.g. "com.sam.notes". Also the program `exec`. */
    id: string;
    name: string;
    version: string; // semver-ish, e.g. "1.0.0"
    /** Icon as a data: URL (packages are self-contained — no external asset refs). */
    icon: string;
    author?: string;
    description?: string;
    /**
     * Capabilities the app may use, enforced by the SDK broker (and the kernel for fs):
     *   fs  → read/write its OWN sandboxed data dir (never the rest of the VFS)
     *   net → outbound fetch (declarative for now)
     * UI basics (notify/alert/info/close) need no permission.
     */
    permissions: Permission[];
    /** The entry file in `files` (an HTML body fragment + inline <script>/<style>). */
    entry: string;
}

export interface AppPackage {
    manifest: AppManifest;
    /** Bundled files by name → text content (the entry + any extra assets). */
    files: Record<string, string>;
}

/** Validate an untrusted value as an AppPackage, or throw a friendly error. */
export function parsePackage(value: unknown): AppPackage {
    const pkg = value as AppPackage;
    const m = pkg?.manifest;
    if (!m || typeof m !== "object") throw new Error("Invalid package: missing manifest");
    for (const field of ["id", "name", "version", "icon", "entry"] as const) {
        if (typeof m[field] !== "string" || !m[field]) throw new Error(`Invalid package: manifest.${field} required`);
    }
    if (!/^[a-z0-9.\-_]+$/i.test(m.id)) throw new Error("Invalid package: id must be alphanumeric/dot/dash");
    if (!Array.isArray(m.permissions)) (m as AppManifest).permissions = [];
    if (!pkg.files || typeof pkg.files !== "object" || typeof pkg.files[m.entry] !== "string") {
        throw new Error(`Invalid package: files["${m.entry}"] (the entry) is missing`);
    }
    return pkg;
}

export function serializePackage(pkg: AppPackage): string {
    return JSON.stringify(pkg, null, 2);
}

/** A tiny self-contained sample app — proves the sandbox + SDK end-to-end. */
export const SAMPLE_APP: AppPackage = {
    manifest: {
        id: "com.vortex.hello",
        name: "Hello Vortex",
        version: "1.0.0",
        author: "Serious Sam",
        description: "A sample sandboxed app — counts clicks, saves to its own file, and sends a notification.",
        permissions: ["fs"],
        icon:
            "data:image/svg+xml;utf8," +
            encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%23ff2d95"/><stop offset="1" stop-color="%2300e5d0"/></linearGradient></defs><rect x="5" y="5" width="38" height="38" rx="8" fill="url(%23g)"/><text x="24" y="32" font-size="22" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold">H</text></svg>`,
            ),
        entry: "index.html",
    },
    files: {
        "index.html": `
<style>
  body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; padding: 18px; background: #f4f4f8; color: #111; }
  h2 { margin: 0 0 4px; }
  p.sub { margin: 0 0 16px; color: #555; font-size: 13px; }
  .count { font-size: 44px; font-weight: 800; color: #6a1b9a; margin: 8px 0 16px; }
  button { font: inherit; padding: 8px 16px; margin-right: 8px; border: 1px solid #888; border-radius: 5px;
           background: linear-gradient(180deg,#fff,#e8e8f0); cursor: pointer; }
  button:hover { background: linear-gradient(180deg,#fff,#dce0ee); }
  .log { margin-top: 14px; font-size: 12px; color: #777; white-space: pre-wrap; }
</style>
<h2>Hello, Vortex 👋</h2>
<p class="sub">A sandboxed app running in its own iframe, talking to the OS via <code>window.vortex</code>.</p>
<div class="count" id="count">0</div>
<button id="inc">Click me</button>
<button id="ping">Send a notification</button>
<div class="log" id="log"></div>
<script>
  const $ = (id) => document.getElementById(id);
  let n = 0;
  const log = (m) => { $('log').textContent = m; };
  async function boot() {
    const info = await vortex.system.info();
    log('Loaded ' + info.name + ' v' + info.version + ' as ' + info.user);
    try { n = parseInt(await vortex.fs.read('count.txt')) || 0; } catch (e) { n = 0; }
    $('count').textContent = n;
  }
  $('inc').onclick = async () => {
    n++; $('count').textContent = n;
    await vortex.fs.write('count.txt', String(n));
    log('Saved count = ' + n + ' to my data file.');
  };
  $('ping').onclick = () => vortex.ui.notify({ title: 'Hello Vortex', body: 'Greetings from a sandboxed app! Count is ' + n });
  boot();
</script>`,
    },
};
