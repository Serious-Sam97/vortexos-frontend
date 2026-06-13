# VortexOS v2.0 — Architecture

> Goal: turn the v1 *metaphor* (a window manager that looks like an OS) into a real
> microkernel where userland programs can only touch the system through a **syscall ABI**.

## The boundary

In v1 every app was a React component in the same heap — it could reach anything.
In v2.0 an app can only cross into the system by issuing a **syscall**. The kernel owns
the process table, the scheduler (focus / z-order), IPC, the VFS, and the compositor.

```
USERLAND  ─ apps (today: in-thread, sandboxed by capability · Phase 10: Web Workers)
   │  syscall ABI  (open · read · write · spawn · kill · win_*)
KERNEL    ─ process table · scheduler · IPC · VFS · compositor
   │
DRIVERS   ─ OPFS · IndexedDB · AudioWorklet · fetch
   │
BACKEND   ─ Java/Spring: persistent disk (File table) · users · auth
```

## Roadmap

The roadmap was re-sequenced after the multi-user work: the heavy Worker/compositor rebuild
moved to the end (Phase 10) so lighter, higher-value phases land first. The capability/SDK
contract and a real login both shipped on the main thread, de-risking that eventual rebuild.

| Phase | Builds | Status |
|---|---|---|
| **0 · Microkernel** | syscall ABI, `libos`, process table (PCB), program registry (`/bin`), compatibility shim | **done** |
| **1 · Filesystem** | inode VFS, mount table (`/` `/dev` `/proc` `/bin` `/mnt/cloud`), fs syscalls + fd table | **done** — [FILESYSTEM.md](FILESYSTEM.md) |
| **2 · Terminal + shell** | `/bin/sh` (tokenizer/parser/executor), pipes + redirects + `;`, ~20 coreutils, Terminal app | **done** — [TERMINAL.md](TERMINAL.md) |
| **3 · Multi-user + networking** | backend accounts + Spring Security/JWT, per-user File/Game ownership, login UI, session, token-scoped `/mnt/cloud` | **done** — [MULTIUSER.md](MULTIUSER.md) |
| **4 · App SDK contract** | `defineApp` + manifest + **enforced capability permissions** (main-thread) | **done** — [APP-SDK.md](APP-SDK.md) |
| 5 · Network Neighborhood | shared `/mnt/public`, browse others' shares, WinPopup/Net Send + presence over WebSocket | planned |
| 6 · Real storage | move the VFS onto OPFS (large files, quota), better cloud sync/conflict handling | planned |
| 7 · System depth | WordPad/Media Player/Image Viewer, shell scripting (`.bat`, vars/functions), Registry, Event Viewer | planned |
| 8 · Theming & reach | theme packs (95/98/2000), screensavers, accessibility, installable PWA | planned |
| 9 · App ecosystem | package format, Add/Remove Programs, app gallery installing from the cloud | planned |
| 10 · Workers + compositor | move app code into isolated Web Workers reaching the kernel only via the ABI | planned — [PHASE-10-PLAN.md](PHASE-10-PLAN.md) |

Plan docs for in-flight phases live alongside this file (e.g. [PHASE-3-PLAN.md](PHASE-3-PLAN.md)).

### Phase 2 notes

Shell lives in `src/shell/`: `tokenize` → `parse` (statements of pipelines with redirects) → `Shell` (executor). `Shell` holds cwd/env and wires stdout→stdin across pipes, applies `>`/`>>`/`<` via libos, expands `~`, and runs builtins (`cd`/`clear`/`export`). Coreutils in `commands.ts` (ls, cat, echo, grep, wc, head, tail, mkdir, touch, rm, cp, mv, ps, kill, which, …) are `(ctx) => exit code` units that do all I/O through `sys` (libos) — so they operate on the real VFS, and `ps`/`kill` are real process control. The `Terminal` app is a TTY hosting one `Shell` per window. NOTE: the shell + coreutils currently run **inside the Terminal process** (not yet one-process-per-command); real per-command processes connected by pipe fds land with Workers in Phase 3.

### Phase 1 notes

VFS lives in `src/kernel/fs/`: `MemFS` (writable inode tree, the root), synthetic `DevFS`/`ProcFS`/`BinFS`, and `Vfs` (longest-prefix mount table with merged readdir). The kernel owns per-process fd tables (`PCB.fds`); `open/read/write/close/readdir/stat/mkdir/unlink` are real. Persistence is a **localStorage JSON snapshot** of the root tree (`vortex.vfs`) behind a pluggable `FsPersistence` — OPFS/IndexedDB or the backend `File` table can drop in later without touching the VFS. `/mnt/cloud` (backend-synced) is deferred to a later sub-step (needs backend write endpoints).

## Process model (Phase 0)

A process is a **PCB** (process control block) owned by the kernel:

```
PCB { pid, ppid, uid, exec, name, icon, state, priority, window{x,y}, cwd, fds, exitCode }
```

- `exec` — the registry key (the "binary" in `/bin`). Replaces v1's `fetchComponent` switch.
- `priority` — 0 = focused/foreground; the scheduler renumbers the rest. This IS the z-order.
- `fds` — file-descriptor table. Empty in Phase 0; the VFS fills it in Phase 1.

Phase 0 keeps **one window per process** and runs app code in the main thread, but only
*through* syscalls — so the Phase 3 move to Web Workers needs no app changes.

## Syscall ABI

Promise-based. Userland never calls the kernel directly — it uses the `libos` wrapper:

```ts
const sys = useSys();                       // bound to the calling process's pid
const pid = await sys.spawn("notes");       // exec a program from /bin
await sys.kill(pid);                         // terminate
const procs = await sys.ps();                // process table snapshot
await sys.focus(pid);                        // bring to front (scheduler)
await sys.move({ x, y }, pid);               // move its window
const fd = await sys.open("/home/notes.txt", "rw");   // fs (since Phase 1)
```

Each syscall an app issues is also checked against the app's declared capabilities — a call
the app lacks permission for throws `EACCES`. See [APP-SDK.md](APP-SDK.md).

### Syscall table

| Group | Syscall | Phase 0 |
|---|---|---|
| Process | `spawn(exec, opts)` `exit(code)` `kill(pid)` `getpid()` `ps()` | ✅ |
| Window | `win_focus(pid)` `win_move(pid, loc)` | ✅ (`win_create` implicit) |
| FS | `open` `read` `write` `close` `readdir` `stat` `mkdir` `unlink` `rename` | ✅ (Phase 1) |
| IPC | `pipe` `ipc_send` `ipc_recv` `signal` | ⏳ Phase 10 (real pipes need Workers) |
| Net | `net_fetch` `socket` | ⏳ Phase 5 |

Unimplemented syscalls throw `KernelError('ENOSYS')` — the surface is stable now so
callers written today keep working as the kernel grows.

## Module map (Phase 0)

```
src/kernel/
  types.ts            PCB, SyscallMap, errno, ProcInfo, WindowState
  registry.ts         ProgramRegistry — the "/bin" of installed programs
  bin.ts              registers the built-in apps into the registry
  persistence.ts      localStorage adapter + migration from v1's `process` key
  Kernel.ts           the microkernel: process table, syscall dispatch, scheduler, persist
  libos.ts            userland syscall client (createLibOS)
  react/
    KernelProvider.tsx  singleton kernel + reactive process table (useSyncExternalStore)
    pid.tsx             PidContext + PidProvider (a process's identity in the tree)
    useSys.ts           hook → libos bound to the current process's pid
  index.ts            barrel
```

The v1 `ProcessContext` is now a **thin compatibility shim** that forwards its old API
(`addProcess`/`closeProcess`/`changePriority`/…) to kernel syscalls, so every existing
component (Desktop, WMenu, WindowManager, ProcessWindow, TaskManager, Explorer) keeps
working unchanged while the kernel becomes the source of truth.

### Bonus fixes (Phase 0)

- v1's `addProcess` persisted the *stale* process array (wrote old state to localStorage);
  the kernel persists the new state atomically.
- v1's `changePriority` never persisted focus order; the kernel does.
