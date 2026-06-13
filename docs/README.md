# VortexOS Documentation

VortexOS is a browser-based Windows-9x-style desktop built as a **real microkernel**: apps
are userland processes that reach the system only through a syscall ABI, over a real
virtual filesystem, with a real shell — and, as of Phase 3–4, real accounts and enforced
per-app permissions. The Java/Spring backend (`vortexos/`) provides accounts, auth, and the
persistent cloud drive.

## Start here

- **[ARCHITECTURE-v2.md](ARCHITECTURE-v2.md)** — the big picture: the userland↔kernel
  boundary, the process model (PCB), the syscall ABI, the module map, and the phase roadmap.

## Subsystem deep-dives

| Doc | Covers | Phase |
|---|---|---|
| [FILESYSTEM.md](FILESYSTEM.md) | The VFS: `MemFS` inode tree, the mount table, synthetic `/dev` `/proc` `/bin`, fd tables, `libos`, persistence | 1 |
| [TERMINAL.md](TERMINAL.md) | The shell: tokenize → parse → execute, pipes, redirects, builtins, coreutils over the VFS | 2 |
| [MULTIUSER.md](MULTIUSER.md) | Accounts, Spring Security + JWT, per-user File/Game ownership, the login UI, sessions, and the token-scoped cloud drive | 3 |
| [APP-SDK.md](APP-SDK.md) | `defineApp`, the capability/permission model, and how the kernel enforces it | 4 |

## Plans (not yet built)

- [PHASE-3-PLAN.md](PHASE-3-PLAN.md) — the multi-user plan (now shipped; kept for reference).
- [PHASE-10-PLAN.md](PHASE-10-PLAN.md) — moving app code into isolated Web Workers + a
  compositor (the far-future "go full" rebuild).

Phases 5–9 (Network Neighborhood, OPFS storage, system depth, theming/PWA, app ecosystem)
are sketched in the roadmap table in [ARCHITECTURE-v2.md](ARCHITECTURE-v2.md); each gets its
own `PHASE-N-PLAN.md` when it starts.

## Running it

```bash
# backend (accounts, auth, cloud drive) — port 8082
cd vortexos && ./gradlew bootRun

# frontend — port 5173 (needs .env: VITE_API_URL=http://localhost:8082)
cd vortexos-frontend && npm run dev
```

Tests: `npm test` (frontend, Vitest) and `./gradlew test` (backend, JUnit).
