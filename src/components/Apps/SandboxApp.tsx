import { useEffect, useMemo, useRef } from "react";
import { useSys } from "../../kernel/react/useSys";
import { usePid } from "../../kernel/react/pid";
import { useProcessContext } from "../../contexts/ProcessContext";
import { useDialog } from "../Dialog/DialogProvider";
import { notify } from "../../system/notifications";
import { homeDir, getSession } from "../../system/session";
import type { AppPackage } from "../../system/appPackage";

/**
 * The sandboxed user-app runtime. Renders a .vxapp package inside a `sandbox`ed
 * <iframe> (allow-scripts only → unique opaque origin, no access to the OS DOM or
 * storage) and brokers the postMessage SDK bridge: every `window.vortex.*` call the
 * app makes is routed here, permission-checked against the manifest, and answered.
 *
 * fs access is confined to the app's OWN data dir (/home/<user>/.appdata/<id>) — an
 * app can never see another app's files or the rest of the VFS.
 */

// Injected into every app iframe (before the app's own code) to define window.vortex.
const SDK_BOOTSTRAP = `
(function () {
  var pending = {}, seq = 0;
  function call(method, args) {
    return new Promise(function (resolve, reject) {
      var id = ++seq; pending[id] = { resolve: resolve, reject: reject };
      parent.postMessage({ __vortex: true, kind: 'call', id: id, method: method, args: args || {} }, '*');
    });
  }
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || !d.__vortex || d.kind !== 'reply') return;
    var p = pending[d.id]; if (!p) return; delete pending[d.id];
    if (d.error) p.reject(new Error(d.error)); else p.resolve(d.result);
  });
  window.vortex = {
    version: '1.0',
    ui: {
      notify: function (o) { return call('ui.notify', o); },
      alert: function (o) { return call('ui.alert', o); },
      confirm: function (o) { return call('ui.confirm', o); },
      prompt: function (o) { return call('ui.prompt', o); }
    },
    fs: {
      read: function (path) { return call('fs.read', { path: path }); },
      write: function (path, text) { return call('fs.write', { path: path, text: text }); },
      list: function () { return call('fs.list', {}); },
      delete: function (path) { return call('fs.delete', { path: path }); }
    },
    storage: {
      get: function (key) { return call('storage.get', { key: key }); },
      set: function (key, value) { return call('storage.set', { key: key, value: value }); },
      remove: function (key) { return call('storage.remove', { key: key }); },
      keys: function () { return call('storage.keys', {}); }
    },
    system: {
      info: function () { return call('system.info', {}); },
      close: function () { return call('system.close', {}); }
    }
  };
})();
`;

function buildSrcDoc(pkg: AppPackage): string {
    const body = pkg.files[pkg.manifest.entry] ?? "<p>App entry missing.</p>";
    return (
        `<!DOCTYPE html><html><head><meta charset="utf-8">` +
        `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:;">` +
        `<script>${SDK_BOOTSTRAP}</script></head><body>${body}</body></html>`
    );
}

/** Reject path traversal — apps may only touch files inside their own data dir. */
function safeName(path: unknown): string {
    const p = String(path ?? "");
    if (!p || p.includes("..") || p.includes("/") || p.includes("\\")) {
        throw new Error("invalid path (app files are flat, no slashes or '..')");
    }
    return p;
}

const SandboxApp: React.FC<{ app: AppPackage }> = ({ app }) => {
    const sys = useSys();
    const pid = usePid();
    const { closeProcess } = useProcessContext();
    const { alert, confirm, prompt } = useDialog();
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const dataDir = useMemo(() => `${homeDir()}/.appdata/${app.manifest.id}`, [app.manifest.id]);
    const srcDoc = useMemo(() => buildSrcDoc(app), [app]);

    const hasPerm = (p: string) => app.manifest.permissions.includes(p as never);

    // Ensure the app's private data dir exists.
    useEffect(() => {
        (async () => {
            try {
                await sys.mkdir(`${homeDir()}/.appdata`);
            } catch {
                /* exists */
            }
            try {
                await sys.mkdir(dataDir);
            } catch {
                /* exists */
            }
        })();
    }, [sys, dataDir]);

    // The SDK broker: route each call, enforce permissions, answer the iframe.
    useEffect(() => {
        const STORE = `${dataDir}/_storage.json`;
        const readStore = async (): Promise<Record<string, string>> => {
            try {
                const raw = JSON.parse(await sys.readTextFile(STORE));
                return raw && typeof raw === "object" ? raw : {};
            } catch {
                return {};
            }
        };
        const writeStore = (obj: Record<string, string>) => sys.writeTextFile(STORE, JSON.stringify(obj));

        const broker = async (method: string, args: any): Promise<unknown> => {
            switch (method) {
                case "system.info":
                    return {
                        id: app.manifest.id,
                        name: app.manifest.name,
                        version: app.manifest.version,
                        author: app.manifest.author ?? null,
                        user: getSession()?.username ?? "user",
                        sdk: "1.0",
                    };
                case "system.close":
                    if (pid) closeProcess(pid);
                    return true;
                case "ui.notify":
                    notify({ title: String(args?.title ?? app.manifest.name), body: String(args?.body ?? ""), type: "info", icon: app.manifest.icon });
                    return true;
                case "ui.alert":
                    await alert({ title: String(args?.title ?? app.manifest.name), message: String(args?.message ?? "") });
                    return true;
                case "ui.confirm":
                    return await confirm({ title: String(args?.title ?? app.manifest.name), message: String(args?.message ?? "") });
                case "ui.prompt":
                    return await prompt({ title: String(args?.title ?? app.manifest.name), message: String(args?.message ?? ""), default: String(args?.default ?? "") });

                case "fs.read":
                    if (!hasPerm("fs")) throw new Error("permission denied: fs");
                    return await sys.readTextFile(`${dataDir}/${safeName(args?.path)}`);
                case "fs.write":
                    if (!hasPerm("fs")) throw new Error("permission denied: fs");
                    await sys.writeTextFile(`${dataDir}/${safeName(args?.path)}`, String(args?.text ?? ""));
                    return true;
                case "fs.delete":
                    if (!hasPerm("fs")) throw new Error("permission denied: fs");
                    await sys.unlink(`${dataDir}/${safeName(args?.path)}`);
                    return true;
                case "fs.list":
                    if (!hasPerm("fs")) throw new Error("permission denied: fs");
                    return (await sys.readdir(dataDir)).filter((n) => n !== "_storage.json");

                // App-private key/value store (always available — strictly sandboxed to this app).
                case "storage.get": {
                    const s = await readStore();
                    return s[String(args?.key)] ?? null;
                }
                case "storage.set": {
                    const s = await readStore();
                    s[String(args?.key)] = String(args?.value ?? "");
                    await writeStore(s);
                    return true;
                }
                case "storage.remove": {
                    const s = await readStore();
                    delete s[String(args?.key)];
                    await writeStore(s);
                    return true;
                }
                case "storage.keys":
                    return Object.keys(await readStore());

                default:
                    throw new Error("unknown method: " + method);
            }
        };

        const onMessage = (e: MessageEvent) => {
            const win = iframeRef.current?.contentWindow;
            if (!win || e.source !== win) return; // only our own iframe
            const d = e.data;
            if (!d || !d.__vortex || d.kind !== "call") return;
            const reply = (result?: unknown, error?: string) =>
                win.postMessage({ __vortex: true, kind: "reply", id: d.id, result, error }, "*");
            broker(d.method, d.args).then(
                (result) => reply(result),
                (err) => reply(undefined, String(err?.message ?? err)),
            );
        };

        window.addEventListener("message", onMessage);
        return () => window.removeEventListener("message", onMessage);
    }, [sys, pid, dataDir, app, alert, confirm, prompt, closeProcess]);

    return (
        <iframe
            ref={iframeRef}
            title={app.manifest.name}
            sandbox="allow-scripts"
            srcDoc={srcDoc}
            style={{ width: "100%", height: "100%", minHeight: 300, border: "none", background: "#fff", display: "block" }}
        />
    );
};

export default SandboxApp;
