# Phase 6 — Real Storage (OPFS)

**Goal:** move the filesystem's persistence off `localStorage` (capped at ~5 MB, synchronous)
onto the **Origin Private File System** (OPFS) — a real, large, browser-managed disk — so
the OS can hold real files (Paint PNGs, audio, big documents) and survive across sessions
without hitting the cap.

## The design

The VFS `FileSystem` interface is **synchronous** (`read`/`write`/`readdir` return values,
not promises). OPFS is **asynchronous**. Rewriting the whole VFS to async would be enormous,
so instead:

> Keep the in-memory `MemFS` as the synchronous source of truth, but persist its snapshot to
> **OPFS** (async, debounced) instead of localStorage.

This is a drop-in behind the existing pluggable `FsPersistence` seam — the VFS itself doesn't
change. It removes the size cap and cuts write churn (debounced vs. save-on-every-keystroke).

## Milestones

### M1 · OPFS persistence + async boot
- `FsPersistence.load()` becomes **async** (`Promise<SerializedNode | null>`); `save()` stays
  fire-and-forget but writes to OPFS, **debounced**.
- `createOpfsFsPersistence()` — reads/writes a single snapshot file in OPFS via
  `navigator.storage.getDirectory()`.
- `createFsPersistence()` chooser — OPFS when available, else falls back to localStorage
  (older browsers / insecure contexts).
- **Migration:** on first OPFS boot with no snapshot, import the existing `vortex.vfs`
  localStorage blob so nothing is lost.
- `createKernel()` becomes async (awaits the snapshot load); `KernelProvider` shows a brief
  loading state until the kernel is ready. Test path (injected kernel) stays synchronous.
- **Verify:** write a large file (a Paint PNG / a big text) → it persists across reload via
  OPFS, not localStorage; localStorage no longer holds the tree; migration carries old data.

### M2 · Quota & storage info
- `navigator.storage.estimate()` → show used / available (e.g. the C: drive in My Computer, or
  a Control Panel applet). Handle `QuotaExceeded` gracefully (a dialog, not a crash).

### M3 · (stretch) sturdier cloud sync
- Light conflict handling for `/mnt/cloud` (last-write-wins is current); defer unless time.

## Notes / risks
- Only the **filesystem** snapshot (`vortex.vfs`) moves to OPFS. The process-table snapshot
  (`vortex.proctable`, tiny — window positions) stays on localStorage.
- OPFS needs a secure context (localhost counts) and a recentish browser; the chooser falls
  back to localStorage otherwise, so behavior degrades gracefully.
- Async boot: only the real app path awaits OPFS; tests inject a kernel and stay sync.
