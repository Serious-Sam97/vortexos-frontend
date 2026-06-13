import { tokenize } from "./tokenize";

export interface ParsedCommand {
    argv: string[];
    stdinFile?: string;
    stdoutFile?: string;
    append?: boolean;
}

/** A pipeline: commands connected by `|`. */
export type Pipeline = ParsedCommand[];

export class ShellSyntaxError extends Error {}

/**
 * Parse a command line into statements (split on `;`), each a pipeline of commands
 * (split on `|`) carrying their input/output redirections.
 */
export function parse(line: string): Pipeline[] {
    const tokens = tokenize(line);
    const statements: Pipeline[] = [];
    let pipeline: Pipeline = [];
    let cmd: ParsedCommand | null = null;
    let pipePending = false; // saw `|`, still waiting for the next command

    const flushCmd = () => {
        if (cmd) pipeline.push(cmd);
        cmd = null;
    };
    const flushPipeline = () => {
        if (pipePending) throw new ShellSyntaxError("syntax error near `|`");
        flushCmd();
        if (pipeline.length) statements.push(pipeline);
        pipeline = [];
    };

    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];

        if (t.type === "word") {
            if (!cmd) cmd = { argv: [] };
            cmd.argv.push(t.value);
            pipePending = false;
            continue;
        }

        if (t.value === ";") {
            flushPipeline();
            continue;
        }
        if (t.value === "|") {
            if (!cmd || cmd.argv.length === 0) throw new ShellSyntaxError("syntax error near `|`");
            flushCmd();
            pipePending = true;
            continue;
        }

        // redirection — consumes the following word as a filename
        const next = tokens[i + 1];
        if (!next || next.type !== "word") throw new ShellSyntaxError(`syntax error near \`${t.value}\``);
        if (!cmd) cmd = { argv: [] };
        if (t.value === "<") cmd.stdinFile = next.value;
        else {
            cmd.stdoutFile = next.value;
            cmd.append = t.value === ">>";
        }
        i++; // consume the filename
    }
    flushPipeline();

    for (const st of statements) {
        for (const c of st) {
            if (c.argv.length === 0) throw new ShellSyntaxError("syntax error: empty command");
        }
    }
    return statements;
}
