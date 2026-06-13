# VortexOS — Frontend

A browser-based Windows-9x-style desktop that is a **real microkernel**, not just a UI that
looks like one. Apps are userland *processes* that can only touch the system through a
**syscall ABI**, over a real virtual filesystem, with a real shell, real accounts, and
kernel-enforced per-app permissions.

Built with **React + TypeScript + Vite** and **[react95](https://react95.io/)** for the
authentic 95/98 look. The [backend](../vortexos) (Spring Boot, port 8082) supplies accounts,
auth, and the cloud drive.

## Run

```bash
npm install
# .env (already present):  VITE_API_URL=http://localhost:8082
npm run dev          # http://localhost:5173
```

Login, the cloud drive (`/mnt/cloud`), and the GameCache app need the backend running
(`cd ../vortexos && ./gradlew bootRun`). Everything else (kernel, VFS, shell, most apps)
works offline.

```bash
npm run build        # tsc -b && vite build
npm test             # Vitest + jsdom (122 tests)
```

## What's inside

```
src/
  kernel/              the microkernel — the heart of the system
    Kernel.ts          process table, syscall dispatch + permission enforcement, scheduler
    types.ts           PCB, SyscallMap, Permission, errno
    registry.ts        ProgramRegistry — the "/bin" of installed programs
    bin.ts             registers the built-in apps (via defineApp)
    libos.ts           userland syscall client (createLibOS)
    fs/                the VFS: MemFS, Vfs mount table, DevFS/ProcFS/BinFS, CloudFS, paths
    react/             KernelProvider, useSys, PidProvider (React ↔ kernel glue)
  sdk/                 defineApp + the public app/permission contract
  shell/               tokenize → parse → Shell executor + ~20 coreutils
  system/              sounds, session, authApi, http (axios interceptor)
  contexts/            AuthContext, OSContext, ProcessContext (v1 compat shim)
  components/
    Apps/              every app (Notes, Explorer, Paint, Terminal, GameCache, …)
    Login/             the Win9x login screen
    ...                WindowManager, ProcessWindow, WMenu (taskbar/Start), dialogs
  pages/               Intro (boot), Vortex (the desktop), Desktop, Shutdown
```

## How it works

The design is documented in **[docs/](docs/README.md)** — start with
[ARCHITECTURE-v2.md](docs/ARCHITECTURE-v2.md) for the big picture, then the subsystem
deep-dives: [FILESYSTEM.md](docs/FILESYSTEM.md), [TERMINAL.md](docs/TERMINAL.md),
[MULTIUSER.md](docs/MULTIUSER.md), and [APP-SDK.md](docs/APP-SDK.md).

The roadmap (phases 0–10) and its status live in
[ARCHITECTURE-v2.md](docs/ARCHITECTURE-v2.md); phases 0–4 are built.

## Tooling note

Bootstrapped from Vite's React-TypeScript template; ESLint is configured in
`eslint.config.js`. Tests live in `__tests__/` directories and are excluded from the
`tsc -b` build.
