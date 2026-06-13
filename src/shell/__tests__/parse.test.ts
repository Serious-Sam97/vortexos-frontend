import { describe, expect, it } from "vitest";
import { tokenize } from "../tokenize";
import { parse, ShellSyntaxError } from "../parse";

describe("tokenize", () => {
    it("splits words and operators", () => {
        expect(tokenize("ls -la /home").map((t) => t.value)).toEqual(["ls", "-la", "/home"]);
        expect(tokenize("ls | grep txt").map((t) => t.value)).toEqual(["ls", "|", "grep", "txt"]);
    });

    it("recognizes redirections including >>", () => {
        expect(tokenize("echo hi > a.txt").map((t) => `${t.type}:${t.value}`)).toEqual([
            "word:echo",
            "word:hi",
            "op:>",
            "word:a.txt",
        ]);
        expect(tokenize("echo hi >> a.txt").map((t) => t.value)).toContain(">>");
    });

    it("handles quotes and escapes", () => {
        expect(tokenize('echo "hello world"').map((t) => t.value)).toEqual(["echo", "hello world"]);
        expect(tokenize("echo 'a|b'").map((t) => t.value)).toEqual(["echo", "a|b"]);
        expect(tokenize("echo a\\ b").map((t) => t.value)).toEqual(["echo", "a b"]);
    });
});

describe("parse", () => {
    it("parses a simple command", () => {
        expect(parse("ls -la /home")).toEqual([[{ argv: ["ls", "-la", "/home"] }]]);
    });

    it("parses a pipeline", () => {
        const [pipeline] = parse("cat file | grep x | wc");
        expect(pipeline.map((c) => c.argv[0])).toEqual(["cat", "grep", "wc"]);
    });

    it("attaches redirections to the right command", () => {
        const [[cmd]] = parse("echo hi > out.txt");
        expect(cmd).toEqual({ argv: ["echo", "hi"], stdoutFile: "out.txt", append: false });

        const [[appendCmd]] = parse("echo hi >> out.txt");
        expect(appendCmd.append).toBe(true);

        const [[inCmd]] = parse("sort < in.txt");
        expect(inCmd.stdinFile).toBe("in.txt");
    });

    it("splits multiple statements on ;", () => {
        const statements = parse("mkdir d ; cd d ; ls");
        expect(statements.map((s) => s[0].argv[0])).toEqual(["mkdir", "cd", "ls"]);
    });

    it("returns no statements for blank input", () => {
        expect(parse("")).toEqual([]);
        expect(parse("   ")).toEqual([]);
    });

    it("rejects syntax errors", () => {
        expect(() => parse("ls |")).toThrow(ShellSyntaxError);
        expect(() => parse("echo >")).toThrow(ShellSyntaxError);
        expect(() => parse("| ls")).toThrow(ShellSyntaxError);
    });
});
