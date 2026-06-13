# VortexOS — How the Terminal & Shell Work

A deep dive into the **terminal and shell** built in Phase 2. It isn't a string-matcher
(`if cmd === "ls"`) — it's a real shell built like a tiny compiler: **tokenize → parse →
execute**, with the screen (the TTY) on top. Everything it does goes through the kernel and
the [filesystem](./FILESYSTEM.md) via syscalls.

> TL;DR: A command line is a tiny language. The shell tokenizes it, parses it into a
> pipeline of commands, then runs them — feeding each command's output into the next as
> stdin (that's a pipe), or into a file (that's a redirect). Every command is the same tiny
> shape and does all its I/O through syscalls, so `ls`, `cat`, `ps`, and `kill` operate on
> the real OS.

Everything lives in [src/shell/](../src/shell/). We'll trace one line the whole way through:

```
cat fruits | grep ap | wc
```

---

## 1. Tokenize — text into tokens

[tokenize.ts](../src/shell/tokenize.ts) scans the line character by character into *words*
and *operators*, respecting quotes (`"a b"` stays one token) and escapes:

```
[cat] [fruits] [|] [grep] [ap] [|] [wc]
```

Operators recognized: `|` `<` `>` `>>` `;`.

---

## 2. Parse — tokens into structure

[parse.ts](../src/shell/parse.ts) gives the tokens shape. It splits statements on `;`,
pipelines on `|`, and pulls redirections (`>` `>>` `<`) out as fields. The result is plain
data:

```js
[ [ { argv: ["cat", "fruits"] },
    { argv: ["grep", "ap"] },
    { argv: ["wc"] } ] ]      // one statement → a pipeline of three commands
```

Syntax errors are caught *here*, before anything runs — `ls |` (dangling pipe) and
`echo >` (redirect with no file) both throw a `ShellSyntaxError`.

---

## 3. The key abstraction: a command is one tiny shape

Every coreutil in [commands.ts](../src/shell/commands.ts) has the **same** signature — a
function that reads input, writes output, and returns an exit code:

```ts
type Command = (ctx) => Promise<number>;
// ctx = { argv, stdin, cwd, env, sys, out, err }
```

`echo`, `cat`, `grep`, `wc`, `ls`, `ps`… all ~20 of them look identical from the outside.
That uniformity is what makes everything else simple.

---

## 4. Pipes are just passing a string

Because every command reads `ctx.stdin` and writes via `ctx.out`, a pipeline is a loop that
feeds one command's captured output into the next command's stdin
([Shell.ts](../src/shell/Shell.ts)):

```
let input = ""
for each command in the pipeline:
    run it with stdin = input, capturing everything it writes
    input = (its captured output)     // ← the pipe
print the final `input` to the screen
```

So for our example:

```
cat fruits  →  "apple\napricot\nbanana\n"
            ↓ (becomes grep's stdin)
grep ap     →  "apple\napricot\n"
            ↓ (becomes wc's stdin)
wc          →  "2 2 14\n"   →  printed to the terminal
```

The `|` is literally *handing a string from one function to the next*. No magic.

---

## 5. Redirection changes the endpoint

`>` `>>` `<` are the same idea, but an endpoint is a file instead of a pipe:

- `< file` — the command's stdin is read from a file via `sys.readTextFile`.
- `> file` — the command's captured output is written to a file via `sys.writeTextFile`
  (instead of flowing down the pipe).
- `>> file` — same, but appended.

All of it goes through the kernel — the shell never writes to storage directly.

---

## 6. Builtins: commands that change the shell itself

A few things can't be ordinary commands, because they have to mutate the shell's own state:
`cd` changes the working directory, `clear` wipes the screen, `export` sets an env var. The
executor handles these directly. The shell also does **tilde expansion** (`~` → `$HOME`)
before dispatching — a real shell responsibility, which is why `cd ~` and `cat ~/notes.txt`
work.

---

## 7. The bit that makes it a *real OS* shell

The commands never touch the filesystem or processes directly — they call **syscalls**:

| Command | What it calls |
|---|---|
| `ls`, `cat` | `sys.readdir`, `sys.stat`, `sys.readTextFile` |
| `mkdir`, `touch`, `rm` | `sys.mkdir`, `sys.writeTextFile`, `sys.unlink` |
| `ps` | `sys.ps()` — the live process table |
| `kill` | `sys.kill(pid)` — actually terminates a window |

So the shell is just **another userland program** talking to the same kernel as Notes and
Explorer. That's why `cat /proc/<pid>` and `ls /bin` work with zero shell-specific code —
they're ordinary paths the [VFS](./FILESYSTEM.md) resolves. The shell got the entire
filesystem *for free* because Phase 1 already built it.

The full coreutil set: `ls cat echo grep wc head tail mkdir touch rm cp mv ps kill which
whoami uname date env help`, plus the builtins `cd clear export`.

---

## 8. The screen: the TTY

The visible terminal ([Terminal.tsx](../src/components/Apps/Terminal.tsx)) is intentionally
the least clever part: a black `<div>` with a scrollback array and one `<input>`. On Enter
it:

1. echoes the prompt + your command into the scrollback,
2. calls `shell.run(line)` (everything above),
3. appends the output and re-reads `shell.prompt()` so the path updates after `cd`.

Plus up/down arrow history. Each Terminal window owns **one `Shell` instance**, which is why
two terminals can sit in different directories — the `Shell` *is* the session, holding its
own `cwd` and `env`.

---

## How it fits into the OS

```
   Terminal (TTY)
        │ shell.run(line)
        ▼
   Shell ── tokenize → parse → execute
        │     (commands do all I/O via libos)
        ▼  syscalls: readdir / stat / read / write / ps / kill …
   ┌─────────────────────────────┐
   │  KERNEL                      │
   │   ├─ process table + fds     │
   │   └─ VFS (/, /dev, /proc, /bin)
   └─────────────────────────────┘
```

The shell is a peer of Notes and Explorer — none of them is special. They all reach storage
and processes through the same syscall boundary. That layering is the real reason the
terminal came together quickly: **the [filesystem](./FILESYSTEM.md) made the shell possible,
and the shell will make Phase 3 (each `|` as a real isolated Worker process) a natural next
step.**

---

## Where to look

| Concern | File |
|---|---|
| Tokenizer | [src/shell/tokenize.ts](../src/shell/tokenize.ts) |
| Parser | [src/shell/parse.ts](../src/shell/parse.ts) |
| Coreutils | [src/shell/commands.ts](../src/shell/commands.ts) |
| Shell executor | [src/shell/Shell.ts](../src/shell/Shell.ts) |
| Terminal app (TTY) | [src/components/Apps/Terminal.tsx](../src/components/Apps/Terminal.tsx) |
| Tests | [parse](../src/shell/__tests__/parse.test.ts) · [shell](../src/shell/__tests__/shell.test.ts) |

**Related docs:** [FILESYSTEM.md](./FILESYSTEM.md) (the filesystem the shell runs on) ·
[ARCHITECTURE-v2.md](./ARCHITECTURE-v2.md) (the big picture + phase roadmap).
