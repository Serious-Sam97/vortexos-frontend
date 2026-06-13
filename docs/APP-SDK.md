# VortexOS — How the App SDK & Permissions Work

> Every app declares itself with one function, `defineApp`, and names the capabilities it
> needs. The kernel **enforces** those capabilities on every syscall the app issues. This
> is the stable contract that, when app code eventually moves into isolated Web Workers
> (Phase 10), won't have to change.

## 1. The one rule: an app may only do what it declared

In v1 an app was a React component in the shared heap — it could reach anything. In v2 an
app reaches the system only through syscalls (see [FILESYSTEM.md](FILESYSTEM.md)), and as
of Phase 4 the kernel checks each syscall against the app's declared **permissions**. An
app that calls `open()` without the `fs` capability is denied with `EACCES`, exactly like a
real OS refusing an unprivileged process.

## 2. Declaring an app: `defineApp`

`src/sdk/index.ts` is the public App SDK. An app is a manifest:

```ts
import { defineApp } from "../sdk";

export default defineApp({
    exec: "notes",          // unique key — its path in /bin, what spawn("notes") resolves
    name: "Notes",          // default window title
    icon: NotesIcon,
    component: Notes,        // the UI (Phase 10: a Worker entry instead of a React component)
    permissions: ["fs"],    // capabilities the kernel will allow (default: none)
});
```

`permissions` defaults to `[]` — **least privilege**. An app that declares nothing can
still run and draw a window; it just can't touch the filesystem, spawn processes, etc.

## 3. The capability set

`Permission` (in `src/kernel/types.ts`) is one of:

| Capability | Grants | Enforced today? |
|---|---|---|
| `fs`    | file syscalls: `open` `read` `write` `close` `readdir` `stat` `mkdir` `unlink` `rename` | ✅ |
| `proc`  | process control: `spawn` `kill` | ✅ |
| `gui`   | window control for windows other than your own: `win_focus` `win_move` | ✅ |
| `net`   | network access | declarative¹ |
| `audio` | sound output | declarative¹ |

¹ `net`/`audio` are declared on apps (e.g. the Browser declares `net`) but aren't gated
yet, because networking and sound don't route through syscalls — apps use `fetch`/Web
Audio directly. When those subsystems get syscalls, the capability is already declared.

Syscalls **not** in the table are never gated: `getpid` `getargv` `ps` `exit`. A process
can always learn its own identity, list processes, and exit.

## 4. How enforcement works

The check lives in the kernel, at the single chokepoint every syscall passes through —
`Kernel.dispatch`:

```ts
private enforcePermission(caller: Pid | null, name: SyscallName): void {
    if (caller === null) return;              // the OS itself is trusted (see §5)
    const required = SYSCALL_PERMISSION[name]; // e.g. open → "fs"
    if (!required) return;                     // ungated syscall
    const pcb = this.processes.get(caller);
    if (!pcb) throw new KernelError("ESRCH", `no process ${caller}`);
    const granted = this.registry.get(pcb.exec)?.permissions ?? [];
    if (!granted.includes(required))
        throw new KernelError("EACCES", `'${pcb.exec}' lacks '${required}' for ${name}`);
}
```

The kernel resolves the caller's PCB → its `exec` → its manifest → its `permissions`, and
rejects the call if the required capability is missing. Because it's at `dispatch`, *every*
path (libos helpers, the shell's coreutils, a Worker bridge later) is covered for free.

## 5. Who is "trusted": `caller === null`

The desktop, taskbar, and window manager aren't processes — they drive the kernel through
the v1 compatibility shim (`src/contexts/ProcessContext.tsx`), which issues syscalls with
`caller = null`. The kernel treats `null` as the OS itself and **bypasses** permission
checks. So:

- The desktop can spawn any app, move/focus any window, and read `/home/user/Desktop`
  without declaring anything (it also has no `PidProvider`, so `useSys()` there is bound to
  `null` too).
- An **app** (rendered inside a `ProcessWindow`, which wraps it in a `PidProvider` carrying
  its pid) issues syscalls as *its* pid — and is checked.

This is the privilege boundary: OS-level UI is trusted; userland apps are sandboxed to
what they declared.

## 6. What the built-ins declare

`src/kernel/bin.ts` registers every built-in via `defineApp`. The grants match each app's
actual syscall usage:

| App | Permissions | Why |
|---|---|---|
| `terminal`, `explorer`, `find` | `fs`, `proc` | read/write files **and** spawn (Notes/Explorer; the shell's `ps`/`kill`) |
| `recycle_bin`, `notes`, `paint` | `fs` | file I/O only |
| `my_computer`, `task_manager` | `proc` | spawn Explorer / kill processes |
| `backlogger`, `browser` | `net` | talk to the backend / load pages |
| `vaporwave` | `net`, `audio` | streams audio |
| `calculator`, `minesweeper`, `clock`, `help`, `control_panel`, games | `[]` | fully sandboxed |

Granting more than an app uses is a (small) security smell; granting less breaks the app
with `EACCES`. The audit that set these is the same one to repeat when an app changes.

## 7. Adding a new app

1. Write the component, calling `useSys()` for any system access.
2. `defineApp({ ... })` it — declare **only** the permissions its syscalls need.
3. Register it in `src/kernel/bin.ts`.
4. Add a shortcut where users launch it (desktop `APP_SHORTCUTS`, Start menu `PROGRAMS`).

That's the whole contract. An installable, third-party app store (Phase 9) and Worker
isolation (Phase 10) both build on exactly this manifest.

## Where to look

- `src/sdk/index.ts` — `defineApp`, `AppDefinition`, `Permission`.
- `src/kernel/types.ts` — `Permission`, `ProgramManifest`.
- `src/kernel/Kernel.ts` — `SYSCALL_PERMISSION` map + `enforcePermission`.
- `src/kernel/bin.ts` — every built-in's declaration.
- `src/kernel/__tests__/permissions.test.ts` — enforcement tests (allow / deny / ungated / trusted).
