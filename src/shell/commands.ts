import { LibOS } from "../kernel/libos";
import { join, normalize, basename } from "../kernel/fs/path";
import { openCredits, markEgg } from "../system/easter";

export interface CommandContext {
    argv: string[]; // [name, ...args]
    stdin: string;
    cwd: string;
    env: Record<string, string>;
    sys: LibOS;
    out: (s: string) => void;
    err: (s: string) => void;
}

export type Command = (ctx: CommandContext) => Promise<number>;

/** Resolve an argument to an absolute path relative to the shell's cwd. */
export function resolve(cwd: string, p: string): string {
    return p.startsWith("/") ? normalize(p) : join(cwd, p);
}

function splitArgs(argv: string[]): { flags: Set<string>; operands: string[] } {
    const flags = new Set<string>();
    const operands: string[] = [];
    for (const a of argv.slice(1)) {
        if (a.length > 1 && a[0] === "-" && a[1] !== "-") {
            for (const ch of a.slice(1)) flags.add(ch);
        } else {
            operands.push(a);
        }
    }
    return { flags, operands };
}

const errno = (e: any): string => e?.code ?? e?.message ?? "error";

const echo: Command = async ({ argv, out }) => {
    out(argv.slice(1).join(" ") + "\n");
    return 0;
};

const pwd: Command = async ({ cwd, out }) => {
    out(cwd + "\n");
    return 0;
};

const whoami: Command = async ({ env, out }) => {
    out((env.USER ?? "user") + "\n");
    return 0;
};

const uname: Command = async ({ argv, out }) => {
    out(argv.includes("-a") ? "VortexOS 2.0 vortex web microkernel\n" : "VortexOS\n");
    return 0;
};

const dateCmd: Command = async ({ out }) => {
    out(new Date().toString() + "\n");
    return 0;
};

const VORTEX_BANNER = String.raw`
         .-""""-.
       .'        '.        V O R T E X   O S
      /   .--.     \       ----------------------------
     |   /    \     |      Version 2.0 · Experimental Edition
     |   \    /     |      a creation by Serious Sam
      \   '--'  o  /
       '.        .'        "No emulator. No clone."
         '-....-'           a real microkernel, in a browser.
`;

const vortexCmd: Command = async ({ out }) => {
    markEgg("vortex");
    out(VORTEX_BANNER + "\n");
    out("Try 'credits' to roll the credits. The Konami code does something too...\n");
    return 0;
};

const creditsCmd: Command = async ({ out }) => {
    markEgg("credits");
    openCredits();
    out("Rolling the credits... \u{1F300}\n");
    return 0;
};

const xyzzy: Command = async ({ out }) => {
    out("Nothing happens.\n");
    return 0;
};

const env: Command = async ({ env, out }) => {
    for (const [k, v] of Object.entries(env)) out(`${k}=${v}\n`);
    return 0;
};

const ls: Command = async ({ argv, cwd, sys, out, err }) => {
    const { flags, operands } = splitArgs(argv);
    const targets = operands.length ? operands : ["."];
    let code = 0;
    for (const target of targets) {
        const path = resolve(cwd, target);
        try {
            const st = await sys.stat(path);
            const names = st.type === "dir" ? await sys.readdir(path) : [basename(path)];
            if (flags.has("l")) {
                for (const name of names) {
                    const childPath = st.type === "dir" ? join(path, name) : path;
                    const cs = await sys.stat(childPath);
                    const t = cs.type === "dir" ? "d" : cs.type === "dev" ? "c" : "-";
                    out(`${t}  ${String(cs.size).padStart(6)}  ${name}\n`);
                }
            } else if (names.length) {
                out(names.join("\n") + "\n"); // one per line — correct for pipes
            }
        } catch (e) {
            err(`ls: cannot access '${target}': ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

const cat: Command = async ({ argv, cwd, stdin, sys, out, err }) => {
    const { operands } = splitArgs(argv);
    if (operands.length === 0) {
        out(stdin);
        return 0;
    }
    let code = 0;
    for (const file of operands) {
        try {
            out(await sys.readTextFile(resolve(cwd, file)));
        } catch (e) {
            err(`cat: ${file}: ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

const mkdir: Command = async ({ argv, cwd, sys, err }) => {
    const { flags, operands } = splitArgs(argv);
    let code = 0;
    for (const dir of operands) {
        const path = resolve(cwd, dir);
        try {
            if (flags.has("p")) {
                let acc = "";
                for (const seg of path.split("/").filter(Boolean)) {
                    acc += "/" + seg;
                    if (!(await sys.stat(acc).then(() => true).catch(() => false))) await sys.mkdir(acc);
                }
            } else {
                await sys.mkdir(path);
            }
        } catch (e) {
            err(`mkdir: ${dir}: ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

const touch: Command = async ({ argv, cwd, sys, err }) => {
    const { operands } = splitArgs(argv);
    let code = 0;
    for (const file of operands) {
        const path = resolve(cwd, file);
        try {
            const exists = await sys.stat(path).then(() => true).catch(() => false);
            if (!exists) await sys.writeTextFile(path, "");
        } catch (e) {
            err(`touch: ${file}: ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

async function removeRecursive(sys: LibOS, path: string): Promise<void> {
    const st = await sys.stat(path);
    if (st.type === "dir") {
        for (const child of await sys.readdir(path)) await removeRecursive(sys, join(path, child));
    }
    await sys.unlink(path);
}

const rm: Command = async ({ argv, cwd, sys, err }) => {
    const { flags, operands } = splitArgs(argv);
    let code = 0;
    for (const target of operands) {
        const path = resolve(cwd, target);
        try {
            if (flags.has("r")) await removeRecursive(sys, path);
            else await sys.unlink(path);
        } catch (e) {
            err(`rm: ${target}: ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

const cp: Command = async ({ argv, cwd, sys, err }) => {
    const { operands } = splitArgs(argv);
    if (operands.length < 2) {
        err("cp: usage: cp <src> <dst>\n");
        return 1;
    }
    const src = resolve(cwd, operands[0]);
    let dst = resolve(cwd, operands[1]);
    try {
        if (await sys.stat(dst).then((s) => s.type === "dir").catch(() => false)) dst = join(dst, basename(src));
        await sys.writeFile(dst, await sys.readFile(src));
        return 0;
    } catch (e) {
        err(`cp: ${errno(e)}\n`);
        return 1;
    }
};

const mv: Command = async (ctx) => {
    const code = await cp(ctx);
    if (code !== 0) return code;
    const { operands } = splitArgs(ctx.argv);
    await ctx.sys.unlink(resolve(ctx.cwd, operands[0])).catch(() => {});
    return 0;
};

const ps: Command = async ({ sys, out }) => {
    const procs = await sys.ps();
    out("PID       NAME                 STATE     PRIO\n");
    for (const p of procs) {
        out(`${p.pid.slice(0, 8)}  ${p.name.padEnd(20).slice(0, 20)}  ${p.state.padEnd(8)}  ${p.priority}\n`);
    }
    return 0;
};

const kill: Command = async ({ argv, sys, out, err }) => {
    const { operands } = splitArgs(argv);
    if (operands.length === 0) {
        err("kill: usage: kill <pid>\n");
        return 1;
    }
    const procs = await sys.ps();
    let code = 0;
    for (const ref of operands) {
        const match = procs.find((p) => p.pid === ref || p.pid.startsWith(ref));
        if (!match) {
            err(`kill: ${ref}: no such process\n`);
            code = 1;
            continue;
        }
        await sys.kill(match.pid);
        out(`killed ${match.pid.slice(0, 8)} (${match.name})\n`);
    }
    return code;
};

const which: Command = async ({ argv, out, err }) => {
    const { operands } = splitArgs(argv);
    let code = 0;
    for (const name of operands) {
        if (name in COMMANDS || BUILTINS.includes(name)) out(`/bin/${name}\n`);
        else {
            err(`${name} not found\n`);
            code = 1;
        }
    }
    return code;
};

const grep: Command = async ({ argv, cwd, stdin, sys, out, err }) => {
    const { flags, operands } = splitArgs(argv);
    if (operands.length === 0) {
        err("grep: usage: grep <pattern> [file...]\n");
        return 1;
    }
    const [pattern, ...files] = operands;
    const needle = flags.has("i") ? pattern.toLowerCase() : pattern;
    const matches = (line: string) => (flags.has("i") ? line.toLowerCase() : line).includes(needle);

    const sources: string[] = [];
    if (files.length === 0) sources.push(stdin);
    else {
        for (const f of files) {
            try {
                sources.push(await sys.readTextFile(resolve(cwd, f)));
            } catch (e) {
                err(`grep: ${f}: ${errno(e)}\n`);
            }
        }
    }
    let found = false;
    for (const text of sources) {
        for (const line of text.split("\n")) {
            if (line !== "" && matches(line)) {
                out(line + "\n");
                found = true;
            }
        }
    }
    return found ? 0 : 1;
};

const wc: Command = async ({ argv, cwd, stdin, sys, out, err }) => {
    const { operands } = splitArgs(argv);
    const count = (text: string) => ({
        lines: text === "" ? 0 : text.replace(/\n$/, "").split("\n").length,
        words: text.split(/\s+/).filter(Boolean).length,
        chars: text.length,
    });
    if (operands.length === 0) {
        const c = count(stdin);
        out(`${c.lines} ${c.words} ${c.chars}\n`);
        return 0;
    }
    let code = 0;
    for (const f of operands) {
        try {
            const c = count(await sys.readTextFile(resolve(cwd, f)));
            out(`${c.lines} ${c.words} ${c.chars} ${f}\n`);
        } catch (e) {
            err(`wc: ${f}: ${errno(e)}\n`);
            code = 1;
        }
    }
    return code;
};

function linesOf(text: string): string[] {
    const lines = text.split("\n");
    if (lines[lines.length - 1] === "") lines.pop();
    return lines;
}

function countFlag(argv: string[], fallback: number): number {
    const i = argv.indexOf("-n");
    const n = i >= 0 ? Number(argv[i + 1]) : NaN;
    return Number.isFinite(n) ? n : fallback;
}

const head: Command = async ({ argv, cwd, stdin, sys, out, err }) => {
    const n = countFlag(argv, 10);
    const files = splitArgs(argv).operands.filter((o) => !/^\d+$/.test(o));
    const emit = (text: string) => linesOf(text).slice(0, n).forEach((l) => out(l + "\n"));
    if (files.length === 0) {
        emit(stdin);
        return 0;
    }
    try {
        for (const f of files) emit(await sys.readTextFile(resolve(cwd, f)));
        return 0;
    } catch (e) {
        err(`head: ${errno(e)}\n`);
        return 1;
    }
};

const tail: Command = async ({ argv, cwd, stdin, sys, out, err }) => {
    const n = countFlag(argv, 10);
    const files = splitArgs(argv).operands.filter((o) => !/^\d+$/.test(o));
    const emit = (text: string) => linesOf(text).slice(-n).forEach((l) => out(l + "\n"));
    if (files.length === 0) {
        emit(stdin);
        return 0;
    }
    try {
        for (const f of files) emit(await sys.readTextFile(resolve(cwd, f)));
        return 0;
    } catch (e) {
        err(`tail: ${errno(e)}\n`);
        return 1;
    }
};

const help: Command = async ({ out }) => {
    out("VortexOS shell — available commands:\n");
    out([...Object.keys(COMMANDS), ...BUILTINS].sort().join("  ") + "\n");
    out("Pipes (|), redirects (> >> <) and ; are supported.\n");
    return 0;
};

/** Builtins are handled by the Shell itself (they mutate shell/terminal state). */
export const BUILTINS = ["cd", "clear", "export"];

/** The coreutils — external commands resolved via PATH (/bin). */
export const COMMANDS: Record<string, Command> = {
    echo,
    pwd,
    whoami,
    uname,
    date: dateCmd,
    env,
    ls,
    cat,
    mkdir,
    touch,
    rm,
    cp,
    mv,
    ps,
    kill,
    which,
    grep,
    wc,
    head,
    tail,
    help,
    vortex: vortexCmd,
    credits: creditsCmd,
    xyzzy,
};
