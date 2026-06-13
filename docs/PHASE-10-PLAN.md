# Phase 10 — App SDK + Real Web Workers ("go full")

> **Note:** originally Phase 3, then Phase 5, now parked at **Phase 10** — a long-term
> "someday" item. It's the heaviest lift and nothing depends on it landing soon.
> Phase 3 (Multi-user + networking) is done; Phase 4 = App SDK contract (main-thread prep);
> Phases 5–9 are open/unplanned; this rebuild is the distant finale. See the roadmap memory.

**Goal:** make a VortexOS process a *real* isolated process — code running in a Web
Worker that reaches the system **only** through the syscall ABI, with the kernel as the
single authority on the main thread. This covers both headless programs (coreutils, so
each shell `|` becomes a real process) **and** GUI apps (which keep their Win95 look via a
compositor / window-server, since Workers have no DOM).

This is the "go full" path chosen for Phase 3: GUI apps move into Workers too, not just
headless ones.

## The foundation is already in place

- `kernel.syscall(...)` already returns a `Promise` — it was pre-shaped for an async
  (postMessage) transport. The ABI does **not** change in Phase 3; only the *transport*
  and *where app code runs* change.
- `libos.ts` already documents the intent: the same `LibOS` shape gets re-implemented over
  Worker postMessage, so app code that depends on it doesn't change.
- `ProgramManifest.permissions` (`fs | net | gui | proc | audio`) exists but is unenforced.
  Phase 3 makes it real.

## The one hard constraint: Workers have no DOM

So "move apps into Workers" splits into two kinds of program code:

- **Headless** (coreutils, pipelines): pure compute over the VFS via syscalls. Perfect
  Worker processes. This unlocks the headline: `a | b | c` as three isolated PIDs.
- **GUI** (Paint, Notes, …): need pixels on screen. The worker can't touch the DOM, so it
  drives a **compositor** on the main thread. Two surface types cover every app:
  - **canvas surface** — an `OffscreenCanvas` is transferred to the worker; the worker
    renders with a real 2D context. Best for graphical apps (Paint, Minesweeper, Clock).
  - **scene surface** — the worker emits a serializable widget tree (nodes → react95
    components: Button, TextInput, List, …); the main thread reconciles it to real DOM and
    posts input/change events back, keyed by node id. Best for chrome/forms (Calculator,
    Notes, Explorer, Control Panel). Preserves the authentic Win95 widget look.

## Staging (each stage ships + is verified, like the v2 milestones)

### Stage 3.0 — SDK + Worker process runtime + permissions  *(foundation)*
- Public SDK: `defineApp({ manifest, main })`, where `main(ctx)` runs in a worker and
  `ctx` exposes `{ sys: LibOS, argv, exit, surface? }`.
- `ProcessRuntime` interface with two implementations:
  - `WorkerRuntime` — spawns a real `Worker`, the production path.
  - `InlineRuntime` — runs `main` on the main thread; used by tests (jsdom has no Workers)
    and as a fallback. **Keeping an inline runtime is what preserves our test discipline.**
- `SyscallBridge`: worker posts `{seq, name, args}`; main thread calls
  `kernel.syscall(pid, …)` and posts `{seq, ok|err, result}` back. `Uint8Array` buffers are
  transferred, not copied. Worker-side `libos` resolves Promises on the reply.
- **Permission enforcement** in the bridge: a syscall outside the manifest's `permissions`
  is rejected with `EACCES`. Makes the `Permission` type real.
- Manifest gains `kind: "react" | "worker"`. `react` programs spawn exactly as today;
  `worker` programs go through a `ProcessRuntime`. Gradual cutover — both coexist.
- **Verify:** a trivial headless `worker` program issues syscalls that round-trip to a real
  Kernel; a permission-denied syscall throws `EACCES`. Unit-tested via `InlineRuntime`.

### Stage 3.1 — Real processes for the shell (`|` = isolated workers)  *(headline)*
- Port coreutils to worker programs with a `(ctx, stdio) => exitCode` entry, where
  `stdio = { stdin, stdout, stderr }` streams.
- `Pipe` primitive connecting one worker's stdout to the next's stdin. Transport choice:
  - **async streaming** (postMessage chunks) — no special headers; blocking reads modeled
    as `await`. **Default — start here.**
  - **SharedArrayBuffer + Atomics** — true blocking I/O, but needs COOP/COEP headers in
    `vite.config` + dev server. A later, opt-in authenticity upgrade.
- Shell executor spawns one worker per pipeline stage, wires pipes, awaits exits. Builtins
  (`cd`, `export`) stay in the shell's own process.
- **Verify:** `cat welcome.txt | grep real | wc -l` runs as three real PIDs (visible in
  `ps` / Task Manager mid-run), correct output.

### Stage 3.2 — Compositor + GUI worker apps  *(the leap)*
- `WindowServer` (main thread) owns per-window surfaces (canvas + scene, above).
- `ProcessWindow` renders **either** a legacy React component **or** a compositor surface,
  so not-yet-migrated apps keep working during cutover.
- Migrate app-by-app, each verified live:
  - canvas: **Paint → Minesweeper → Clock**.
  - scene: **Calculator** (smallest, first) **→ Notes → Explorer → Control Panel**.
  - Games (Doom, etc.) are external embeds — leave on the React host or wrap later.

### Stage 3.3 — SDK polish + installable apps + docs
- Finalize `defineApp` + manifest format; permission prompts ("App X wants net access").
- Stretch: load a `worker` program whose code lives in a VFS file — a real "install" of a
  third-party app.
- Write `docs/APP-SDK.md`; update `ARCHITECTURE-v2.md`.

## Risks / decisions already made
- **Compositor is mandatory** for GUI-in-worker — it's the bulk of the work (Stage 3.2).
- **Blocking stdin:** async bridge handles request/response fine; true blocking needs
  SAB+Atomics+COOP/COEP. Start async, upgrade later if desired.
- **Tests:** Workers don't exist in jsdom → `InlineRuntime` runs `main` in-thread so the
  bridge, pipes, and app logic stay unit-testable. Real `WorkerRuntime` in prod.
- **Persistence:** window/process state stays in the kernel (already persisted); worker app
  state lives in the worker and is rebuilt by re-running `main()` on reboot.
