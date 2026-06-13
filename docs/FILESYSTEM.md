# VortexOS — How the Filesystem Works

A deep dive into the **virtual filesystem (VFS)** built in Phase 1: an inode tree behind a
mount table, reached only through kernel **syscalls**. It's a real implementation of an OS
filesystem — not a cosmetic mockup — and it's what the rest of the OS (Notes, Explorer, the
[Terminal](./TERMINAL.md)) is built on.

> TL;DR: Files live in an inode tree (`MemFS`). Several filesystems are stitched into one
> namespace by a **mount table** (`/`, `/dev`, `/proc`, `/bin`). Programs never touch
> storage directly — they `open`/`read`/`write` through the kernel, which tracks **file
> descriptors** per process. The whole tree is snapshotted to `localStorage` so it survives
> a reload.

---

## 1. The one rule: everything goes through a syscall

A program can never touch storage directly. It can only ask the kernel — the same way a
real process traps into the OS:

```ts
const fd = await sys.open("/home/user/notes.txt", "w");
await sys.write(fd, encode("hello"));
await sys.close(fd);
```

`sys` is the **libos** client ([src/kernel/libos.ts](../src/kernel/libos.ts)), a thin
wrapper that turns those calls into kernel syscalls. This boundary is the whole point: an
app can't corrupt the filesystem, can't see another app's open files, and (in Phase 3)
won't even share a thread with the kernel.

The filesystem syscalls are: `open` `read` `write` `close` `readdir` `stat` `mkdir`
`unlink`, defined in the `SyscallMap` in [src/kernel/types.ts](../src/kernel/types.ts).

---

## 2. The inode tree: `MemFS`

The writable root of the filesystem is an in-memory **inode tree** —
[src/kernel/fs/MemFS.ts](../src/kernel/fs/MemFS.ts). A node is either a file (with bytes)
or a directory (with named children):

```ts
interface MemNode {
    type: "file" | "dir";
    mtime: number;
    data?: Uint8Array;                 // files
    children?: Map<string, MemNode>;   // directories
}
```

To resolve a path like `/home/user/notes.txt`, it walks the tree segment by segment from
the root, throwing the right errno on the way:

| Situation | Error |
|---|---|
| a missing name | `ENOENT` |
| descending *through* a file | `ENOTDIR` |
| reading a directory | `EISDIR` |
| `mkdir` over an existing name | `EEXIST` |
| `unlink` on a non-empty dir | `ENOTEMPTY` |
| writing to a read-only mount | `EROFS` |

These are the same error codes a real kernel returns, surfaced as a `KernelError` with a
`.code`. All of this logic is **synchronous and pure**, which is exactly why it's so easy
to unit-test ([memfs.test.ts](../src/kernel/fs/__tests__/memfs.test.ts)).

---

## 3. Paths are their own little module

Path handling is boring but load-bearing, so it lives on its own in
[src/kernel/fs/path.ts](../src/kernel/fs/path.ts): `segments`, `normalize`, `join`,
`dirname`, `basename`. `segments` is where `.` and `..` get resolved:

```ts
segments("/a/./b/../c")  // → ["a", "c"]
normalize("/a/b/")       // → "/a/b"
```

Everything else builds on these, so the rest of the FS never has to think about messy input
like double slashes or trailing dots.

---

## 4. One namespace from many filesystems: the mount table

Real systems assemble `/` out of several filesystems mounted at different points. VortexOS
does the same with [src/kernel/fs/Vfs.ts](../src/kernel/fs/Vfs.ts):

```
/        →  MemFS   (writable, persistent — your files)
/dev     →  DevFS   (synthetic devices)
/proc    →  ProcFS  (live process info)
/bin     →  BinFS   (installed programs)
```

When you access a path, the VFS picks the mount with the **longest matching prefix** and
delegates to it with a mount-relative path. So `/dev/null` is routed to `DevFS` (asked for
`/null`) even though `/` also matches — `/dev` is longer, so it wins.

One subtlety: `ls /` should show `dev`, `proc`, `bin` even though those dirs don't exist in
the MemFS root — they're *mount points*. So `readdir` **merges** the real entries with any
mount points whose parent is the directory you're listing:

```
readdir("/")  →  MemFS entries (home, tmp)  +  mount points (dev, proc, bin)
              →  ["bin", "dev", "home", "proc", "tmp"]
```

---

## 5. Synthetic filesystems: files that aren't really files

The fun part of the mount table is that a "filesystem" doesn't have to store anything — it
can *compute* its answers. Three do exactly that, and all implement the same `FileSystem`
interface as MemFS, so the VFS treats them identically:

- **DevFS** ([DevFS.ts](../src/kernel/fs/DevFS.ts)) — `/dev/null` swallows writes and reads
  empty, `/dev/zero` reads zeros, `/dev/random` reads random bytes.
- **ProcFS** ([ProcFS.ts](../src/kernel/fs/ProcFS.ts)) — holds a reference to the kernel's
  process table, so `cat /proc/<pid>` prints a process's live status and `ls /proc` lists
  running PIDs. Nothing is stored; it's generated on read.
- **BinFS** ([BinFS.ts](../src/kernel/fs/BinFS.ts)) — read-only listing of the installed
  programs, so `ls /bin` shows every app.

This is why `cat /proc/123` and `cat /home/user/notes.txt` go down the *exact same* code
path — the difference is entirely behind the mount.

---

## 6. File descriptors: the kernel's side of `open`

`open`/`read`/`write`/`close` don't operate on paths — they operate on **file
descriptors**, small integers the kernel hands back. The kernel keeps a descriptor table
**per process** (`PCB.fds`), plus one for itself. This lives in
[src/kernel/Kernel.ts](../src/kernel/Kernel.ts):

```ts
// open(path, flags):
//   resolve flags (r / w / a / rw), create or truncate as needed,
//   then store { path, flags, offset } under a fresh fd number and return it.
this.fdTable(caller).set(fd, { path, flags, offset });
return fd;
```

- **read(fd, len)** reads the file, slices `[offset, offset+len]`, and advances the offset —
  so sequential reads walk through the file.
- **write(fd, data)** does a read-modify-write at the offset and advances it.
- **close(fd)** drops the entry; using a stale fd → `EBADF`.

Because the table is keyed by the **calling process**, one process literally cannot use
another's descriptor — a small but real isolation property we unit-test directly
([kernel-fs.test.ts](../src/kernel/__tests__/kernel-fs.test.ts)).

---

## 7. libos: ergonomic helpers on top

Raw `open`/`read`/`close` is tedious, so libos adds whole-file convenience helpers that just
compose the primitives:

```ts
async readTextFile(path) {
    const { size } = await this.stat(path);
    const fd = await this.open(path, "r");
    try { return decode(await this.read(fd, size)); }
    finally { await this.close(fd); }   // always closes, even on error
}
```

Apps almost always use `readTextFile` / `writeTextFile`; the low-level fds are there for when
you need streaming or partial reads.

---

## 8. Persistence: the disk

The MemFS tree lives in memory. To survive a reload, the VFS serializes the whole tree to
JSON and stores it in `localStorage` under `vortex.vfs`
([persistence.ts](../src/kernel/fs/persistence.ts)). The VFS fires an `onChange` hook after
any mutation, and the provider re-saves:

```ts
vfs.setOnChange(() => fsPersistence.save(root.serialize()));
```

This is deliberately behind a pluggable `FsPersistence` interface, so the backing store can
later become OPFS or the Java backend's `File` table **without touching the VFS**. On first
boot the provider seeds a starter tree (`/home/user/welcome.txt`, `/tmp`, …).

---

## 9. End to end: what `echo hi > note.txt` actually does

```
Terminal → Shell → sys.writeTextFile("/home/user/note.txt", "hi\n")
   → sys.open(path, "w")     → kernel: create+truncate, store fd { offset: 0 }
   → sys.write(fd, bytes)    → kernel: Vfs.write → route to "/" mount → MemFS.write
                                       → MemFS fires onChange → localStorage updated
   → sys.close(fd)           → kernel: drop fd
```

The file is now real, persisted, and visible to every other app (`Explorer`, `cat`, …)
because they all read the same VFS through the same kernel.

---

## Where to look

| Concern | File |
|---|---|
| Path utilities | [src/kernel/fs/path.ts](../src/kernel/fs/path.ts) |
| Inode filesystem | [src/kernel/fs/MemFS.ts](../src/kernel/fs/MemFS.ts) |
| Synthetic FSes | [DevFS](../src/kernel/fs/DevFS.ts) · [ProcFS](../src/kernel/fs/ProcFS.ts) · [BinFS](../src/kernel/fs/BinFS.ts) |
| Mount table | [src/kernel/fs/Vfs.ts](../src/kernel/fs/Vfs.ts) |
| FS persistence | [src/kernel/fs/persistence.ts](../src/kernel/fs/persistence.ts) |
| fs syscalls + fd tables | [src/kernel/Kernel.ts](../src/kernel/Kernel.ts) |
| Userland FS client | [src/kernel/libos.ts](../src/kernel/libos.ts) |
| Tests | [memfs](../src/kernel/fs/__tests__/memfs.test.ts) · [vfs](../src/kernel/fs/__tests__/vfs.test.ts) · [kernel-fs](../src/kernel/__tests__/kernel-fs.test.ts) |

**Related docs:** [TERMINAL.md](./TERMINAL.md) (the shell that's built on this filesystem) ·
[ARCHITECTURE-v2.md](./ARCHITECTURE-v2.md) (the big picture + phase roadmap).
