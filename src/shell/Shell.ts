import { LibOS } from "../kernel/libos";
import { parse, ParsedCommand, Pipeline } from "./parse";
import { COMMANDS, resolve } from "./commands";

export interface ShellResult {
    output: string;
    clear: boolean;
    code: number;
}

/**
 * The command interpreter. Holds the session's cwd and environment, parses a line into
 * statements, and runs each pipeline — wiring stdout→stdin between piped commands and
 * applying file redirections. All I/O goes through the kernel via `sys` (libos).
 */
export class Shell {
    cwd: string;
    env: Record<string, string>;

    constructor(private sys: LibOS, cwd = "/home/user", env: Record<string, string> = {}) {
        this.cwd = cwd;
        this.env = { HOME: "/home/user", USER: "user", PATH: "/bin", ...env };
    }

    prompt(): string {
        const path = this.cwd === this.env.HOME ? "~" : this.cwd;
        return `${this.env.USER}@vortex:${path}$ `;
    }

    async run(line: string): Promise<ShellResult> {
        let output = "";
        let clear = false;
        let code = 0;
        const out = (s: string) => {
            output += s;
        };

        let statements: Pipeline[];
        try {
            statements = parse(line);
        } catch (e: any) {
            return { output: `sh: ${e.message}\n`, clear: false, code: 2 };
        }

        for (const pipeline of statements) {
            const result = await this.runPipeline(pipeline, out);
            code = result.code;
            if (result.clear) {
                clear = true;
                output = "";
            }
        }
        return { output, clear, code };
    }

    /** Expand a leading ~ to $HOME, as a shell does before invoking commands. */
    private expand(token: string): string {
        if (token === "~") return this.env.HOME;
        if (token.startsWith("~/")) return this.env.HOME + token.slice(1);
        return token;
    }

    private expandCommand(cmd: ParsedCommand): ParsedCommand {
        return {
            argv: cmd.argv.map((a) => this.expand(a)),
            stdinFile: cmd.stdinFile ? this.expand(cmd.stdinFile) : undefined,
            stdoutFile: cmd.stdoutFile ? this.expand(cmd.stdoutFile) : undefined,
            append: cmd.append,
        };
    }

    private async runPipeline(
        rawPipeline: Pipeline,
        out: (s: string) => void,
    ): Promise<{ code: number; clear?: boolean }> {
        const pipeline = rawPipeline.map((c) => this.expandCommand(c));
        // Single-command builtins mutate shell/terminal state.
        if (pipeline.length === 1) {
            const name = pipeline[0].argv[0];
            if (name === "cd") return { code: await this.cd(pipeline[0].argv, out) };
            if (name === "clear") return { code: 0, clear: true };
            if (name === "export") return { code: this.export(pipeline[0].argv) };
        }

        let input = "";
        let code = 0;
        for (const cmd of pipeline) {
            const name = cmd.argv[0];
            const run = COMMANDS[name];

            let stdin = input;
            if (cmd.stdinFile) {
                try {
                    stdin = await this.sys.readTextFile(resolve(this.cwd, cmd.stdinFile));
                } catch (e: any) {
                    out(`sh: ${cmd.stdinFile}: ${e.code ?? "error"}\n`);
                    return { code: 1 };
                }
            }
            if (!run) {
                out(`sh: ${name}: command not found\n`);
                return { code: 127 };
            }

            let captured = "";
            code = await run({
                argv: cmd.argv,
                stdin,
                cwd: this.cwd,
                env: this.env,
                sys: this.sys,
                out: (s) => (captured += s),
                err: out,
            });

            input = await this.applyStdout(cmd, captured, out);
        }
        out(input);
        return { code };
    }

    /** Send a command's stdout to its redirect file, or pass it down the pipe. */
    private async applyStdout(cmd: ParsedCommand, captured: string, out: (s: string) => void): Promise<string> {
        if (!cmd.stdoutFile) return captured;
        const path = resolve(this.cwd, cmd.stdoutFile);
        try {
            const prefix = cmd.append ? await this.sys.readTextFile(path).catch(() => "") : "";
            await this.sys.writeTextFile(path, prefix + captured);
        } catch (e: any) {
            out(`sh: ${cmd.stdoutFile}: ${e.code ?? "error"}\n`);
        }
        return "";
    }

    private async cd(argv: string[], out: (s: string) => void): Promise<number> {
        const target = argv[1] ? resolve(this.cwd, argv[1]) : this.env.HOME;
        try {
            const st = await this.sys.stat(target);
            if (st.type !== "dir") {
                out(`cd: not a directory: ${argv[1]}\n`);
                return 1;
            }
            this.cwd = target;
            return 0;
        } catch {
            out(`cd: ${argv[1]}: No such file or directory\n`);
            return 1;
        }
    }

    private export(argv: string[]): number {
        for (const assignment of argv.slice(1)) {
            const eq = assignment.indexOf("=");
            if (eq > 0) this.env[assignment.slice(0, eq)] = assignment.slice(eq + 1);
        }
        return 0;
    }
}
