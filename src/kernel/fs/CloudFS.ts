import { Stat } from "../types";
import { FileSystem } from "./types";
import { MemFS } from "./MemFS";
import { dirname, segments } from "./path";

/** A backend File row (content is base64-encoded). */
export interface CloudFile {
    path: string;
    name: string;
    type: string; // "file" | "folder"
    content?: string | null;
}

/** Transport to the backend File API. Injected so CloudFS is testable offline. */
export interface CloudApi {
    list(): Promise<CloudFile[]>;
    upsert(path: string, name: string, type: string, content: string | null): Promise<void>;
    remove(path: string): Promise<void>;
    rename(from: string, to: string): Promise<void>;
}

function bytesToB64(bytes: Uint8Array): string {
    let s = "";
    for (const b of bytes) s += String.fromCharCode(b);
    return btoa(s);
}
function b64ToBytes(b64: string): Uint8Array {
    const s = atob(b64);
    const out = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
    return out;
}

/**
 * A network filesystem mounted at /mnt/cloud. It keeps an in-memory MemFS mirror so the
 * VFS's synchronous interface is satisfied instantly, and writes through to the backend
 * File table asynchronously (eventually consistent). On boot it loads the table once.
 */
export class CloudFS implements FileSystem {
    readonly readonly = false;
    private mirror = new MemFS();
    /** Per-path promise chains so concurrent writes to one path don't race the backend. */
    private chains = new Map<string, Promise<void>>();

    constructor(
        private mountPoint: string,
        private api: CloudApi,
        private onLoaded: () => void = () => {},
    ) {}

    /** Load the backend table into the mirror. Safe to call once at boot. */
    async init(): Promise<void> {
        try {
            const files = await this.api.list();
            const mine = files.filter((f) => f.path === this.mountPoint || f.path.startsWith(this.mountPoint + "/"));
            const rel = (p: string) => (p === this.mountPoint ? "/" : p.slice(this.mountPoint.length));

            for (const f of mine.filter((f) => f.type === "folder").sort((a, b) => a.path.length - b.path.length)) {
                this.ensureDir(rel(f.path));
            }
            for (const f of mine.filter((f) => f.type !== "folder")) {
                const r = rel(f.path);
                this.ensureDir(dirname(r));
                this.mirror.write(r, f.content ? b64ToBytes(f.content) : new Uint8Array());
            }
        } catch {
            // backend unreachable → an empty cloud, mount still works
        }
        this.onLoaded();
    }

    private ensureDir(path: string): void {
        let acc = "";
        for (const seg of segments(path)) {
            acc += "/" + seg;
            if (!this.mirror.exists(acc)) this.mirror.mkdir(acc);
        }
    }

    private full(rel: string): string {
        return rel === "/" ? this.mountPoint : this.mountPoint + rel;
    }
    private nameOf(path: string): string {
        return path.slice(path.lastIndexOf("/") + 1);
    }

    // ── sync reads from the mirror ───────────────────────────────────────
    stat(path: string): Stat {
        return this.mirror.stat(path);
    }
    readdir(path: string): string[] {
        return this.mirror.readdir(path);
    }
    read(path: string): Uint8Array {
        return this.mirror.read(path);
    }

    /** Queue a server op on `path`'s chain so ops to the same path run in order. */
    private chain(path: string, op: () => Promise<void>): void {
        const prev = this.chains.get(path) ?? Promise.resolve();
        const next = prev.then(op).catch(() => {});
        this.chains.set(path, next);
    }

    /** Await all in-flight write-throughs (used by tests). */
    async flush(): Promise<void> {
        await Promise.all(this.chains.values());
    }

    // ── mutations: update mirror now, write through to the server in order ─
    write(path: string, data: Uint8Array): void {
        this.mirror.write(path, data);
        const b64 = bytesToB64(data);
        this.chain(path, () => this.api.upsert(this.full(path), this.nameOf(path), "file", b64));
    }
    mkdir(path: string): void {
        this.mirror.mkdir(path);
        this.chain(path, () => this.api.upsert(this.full(path), this.nameOf(path), "folder", null));
    }
    unlink(path: string): void {
        this.mirror.unlink(path);
        this.chain(path, () => this.api.remove(this.full(path)));
    }
    rename(from: string, to: string): void {
        this.mirror.rename(from, to);
        this.chain(from, () => this.api.rename(this.full(from), this.full(to)));
    }
}

/** The real fetch-based transport to the Spring backend. */
export function createCloudApi(baseUrl: string): CloudApi {
    const json = { "Content-Type": "application/json" };
    return {
        async list() {
            const r = await fetch(`${baseUrl}/files`);
            return r.ok ? r.json() : [];
        },
        async upsert(path, name, type, content) {
            await fetch(`${baseUrl}/files`, { method: "POST", headers: json, body: JSON.stringify({ path, name, type, content }) });
        },
        async remove(path) {
            await fetch(`${baseUrl}/files?path=${encodeURIComponent(path)}`, { method: "DELETE" });
        },
        async rename(from, to) {
            await fetch(`${baseUrl}/files/rename?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`, { method: "PUT" });
        },
    };
}
