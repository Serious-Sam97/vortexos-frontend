import type { LibOS } from "../kernel/libos";

/**
 * Per-user home setup + a one-time migration of the legacy shared `/home/user`.
 *
 * Early VortexOS seeded a single `/home/user` and several apps wrote there
 * regardless of who was signed in, while the desktop used `/home/<username>` —
 * so a real user ended up with TWO home folders. ensureUserHome() merges the
 * legacy `/home/user` into the signed-in user's home (once), then guarantees the
 * standard Documents/Desktop layout and a welcome file.
 */

const WELCOME =
    "Welcome to VortexOS.\r\n\r\n" +
    "This is a real file, stored on a real virtual filesystem.\r\n" +
    "Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r\n";

async function exists(sys: LibOS, p: string): Promise<boolean> {
    return sys.stat(p).then(() => true).catch(() => false);
}

/** Move everything under `src` into `dst`, merging dirs and skipping file collisions. */
async function mergeMove(sys: LibOS, src: string, dst: string): Promise<void> {
    if (!(await exists(sys, dst))) await sys.mkdir(dst).catch(() => {});
    const names = await sys.readdir(src).catch(() => [] as string[]);
    for (const name of names) {
        const s = `${src}/${name}`;
        const d = `${dst}/${name}`;
        const st = await sys.stat(s).catch(() => null);
        if (!st) continue;
        if (st.type === "dir") {
            await mergeMove(sys, s, d);
            await sys.unlink(s).catch(() => {}); // remove the now-empty source dir
        } else if (!(await exists(sys, d))) {
            await sys.rename(s, d).catch(() => {}); // move the file over
        } else {
            await sys.unlink(s).catch(() => {}); // duplicate — drop the legacy copy
        }
    }
}

export async function ensureUserHome(sys: LibOS, user: string): Promise<void> {
    const home = `/home/${user}`;

    // One-time: fold the legacy /home/user into this user's home.
    const FLAG = `vortex.homemerged.${user}`;
    if (user !== "user" && !localStorage.getItem(FLAG)) {
        try {
            if (await exists(sys, "/home/user")) {
                await mergeMove(sys, "/home/user", home);
                await sys.unlink("/home/user").catch(() => {}); // remove if emptied
            }
        } catch {
            /* best-effort migration */
        }
        localStorage.setItem(FLAG, "1");
    }

    // Standard layout + a welcome file on first run.
    await sys.mkdir(home).catch(() => {});
    await sys.mkdir(`${home}/Documents`).catch(() => {});
    await sys.mkdir(`${home}/Desktop`).catch(() => {});
    const files = await sys.readdir(home).catch(() => [] as string[]);
    if (!files.includes("welcome.txt")) {
        await sys.writeTextFile(`${home}/welcome.txt`, WELCOME).catch(() => {});
    }
}
