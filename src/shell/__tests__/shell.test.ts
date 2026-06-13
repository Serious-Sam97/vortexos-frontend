import { beforeEach, describe, expect, it } from "vitest";
import { Shell } from "../Shell";
import { createLibOS } from "../../kernel/libos";
import { Kernel } from "../../kernel/Kernel";
import { makeKernel } from "../../kernel/__tests__/helpers";

describe("Shell", () => {
    let kernel: Kernel;
    let shell: Shell;

    beforeEach(async () => {
        kernel = makeKernel();
        shell = new Shell(createLibOS(kernel, null));
    });

    const run = (line: string) => shell.run(line);

    it("echo and pwd", async () => {
        expect((await run("echo hello world")).output).toBe("hello world\n");
        expect((await run("pwd")).output).toBe("/home/user\n");
    });

    it("cd changes the working directory", async () => {
        await run("cd /");
        expect(shell.cwd).toBe("/");
        expect((await run("pwd")).output).toBe("/\n");
        await run("cd"); // home
        expect(shell.cwd).toBe("/home/user");
        expect((await run("cd /nope")).output).toContain("No such file or directory");
    });

    it("creates, lists, reads and removes files", async () => {
        await run("touch a.txt");
        await run("mkdir docs");
        expect((await run("ls")).output.trim().split(/\s+/).sort()).toEqual(["a.txt", "docs"]);

        await run("echo content > a.txt");
        expect((await run("cat a.txt")).output).toBe("content\n");

        await run("rm a.txt");
        expect((await run("ls")).output.trim()).toBe("docs");
    });

    it("redirects stdout (> and >>)", async () => {
        await run("echo one > log.txt");
        await run("echo two >> log.txt");
        expect((await run("cat log.txt")).output).toBe("one\ntwo\n");
    });

    it("reads stdin from a file (<)", async () => {
        await run("echo alpha > f.txt");
        expect((await run("wc < f.txt")).output).toBe("1 1 6\n");
    });

    it("pipes stdout into stdin across commands", async () => {
        await run("mkdir d1 d2 d3");
        const grepped = (await run("ls | grep d")).output;
        expect(grepped).toContain("d1");
        expect(grepped).toContain("d3");
        // `ls` prints the three names on one space-joined line → wc sees 3 words.
        const wcOut = (await run("ls | wc")).output.trim().split(/\s+/);
        expect(wcOut[1]).toBe("3");
    });

    it("grep filters piped lines", async () => {
        await run("echo apple > fruits.txt");
        await run("echo banana >> fruits.txt");
        await run("echo apricot >> fruits.txt");
        expect((await run("cat fruits.txt | grep ap")).output).toBe("apple\napricot\n");
    });

    it("reports command-not-found and syntax errors", async () => {
        const nf = await run("frobnicate");
        expect(nf.output).toContain("command not found");
        expect(nf.code).toBe(127);

        const se = await run("ls |");
        expect(se.output).toContain("syntax error");
        expect(se.code).toBe(2);
    });

    it("runs multiple statements separated by ;", async () => {
        const r = await run("mkdir project ; cd project ; pwd");
        expect(r.output).toBe("/home/user/project\n");
        expect(shell.cwd).toBe("/home/user/project");
    });

    it("which resolves commands to /bin", async () => {
        expect((await run("which ls cd")).output).toBe("/bin/ls\n/bin/cd\n");
        expect((await run("which nope")).code).toBe(1);
    });

    it("clear signals the terminal to wipe", async () => {
        const r = await run("clear");
        expect(r.clear).toBe(true);
    });

    it("expands ~ to $HOME for cd and command arguments", async () => {
        await run("cd /");
        await run("cd ~");
        expect(shell.cwd).toBe("/home/user");

        await run("echo hi > ~/greeting.txt");
        expect((await run("cat ~/greeting.txt")).output).toBe("hi\n");
    });

    it("ls prints one entry per line (pipe-friendly)", async () => {
        await run("touch x.txt");
        await run("mkdir y");
        expect((await run("ls")).output).toBe("x.txt\ny\n");
    });

    describe("process control", () => {
        it("ps lists running processes and kill terminates them", async () => {
            const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
            expect((await run("ps")).output).toContain(pid.slice(0, 8));

            const killed = await run(`kill ${pid.slice(0, 8)}`);
            expect(killed.output).toContain("killed");
            expect(kernel.getSnapshot()).toHaveLength(0);
        });
    });

    it("reads the synthetic filesystems", async () => {
        const pid = await kernel.syscall(null, "spawn", { exec: "notes" });
        expect((await run("ls /bin")).output).toContain("notes");
        expect((await run(`cat /proc/${pid}`)).output).toContain("exec:     notes");
    });
});
