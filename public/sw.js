// VortexOS service worker — makes the OS installable and available offline.
// Runtime cache: serve from network, fall back to cache when offline.
const CACHE = "vortex-runtime-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
    const req = event.request;
    if (req.method !== "GET" || !req.url.startsWith("http")) return;
    // Don't intercept API / WebSocket traffic to the backend.
    if (req.url.includes("/auth/") || req.url.includes("/files") || req.url.includes("/games") || req.url.includes("/ws")) return;

    event.respondWith(
        fetch(req)
            .then((res) => {
                const copy = res.clone();
                caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
                return res;
            })
            .catch(() => caches.match(req)),
    );
});
