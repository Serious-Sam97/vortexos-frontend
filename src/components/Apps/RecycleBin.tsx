import { useCallback, useEffect, useState } from "react";
import { Button, Frame, Toolbar, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { LibOS } from "../../kernel/libos";
import { dirname, join } from "../../kernel/fs/path";
import { forgetTrash, originalPathOf } from "../../system/recycle";
import FolderIcon from "/explorer.png";
import FileIcon from "/notes.png";

const RECYCLE = "/Recycle Bin";
const RESTORE_TO = "/home/user";

interface Item {
    name: string;
    type: "file" | "dir" | "dev";
}

async function removeTree(sys: LibOS, path: string): Promise<void> {
    const st = await sys.stat(path);
    if (st.type === "dir") {
        for (const child of await sys.readdir(path)) await removeTree(sys, join(path, child));
    }
    await sys.unlink(path);
}

const RecycleBin: React.FC = () => {
    const sys = useSys();
    const [items, setItems] = useState<Item[]>([]);
    const [selected, setSelected] = useState<string | null>(null);

    const refresh = useCallback(async () => {
        await sys.mkdir(RECYCLE).catch(() => {});
        const names = await sys.readdir(RECYCLE).catch(() => [] as string[]);
        const stats = await Promise.all(
            names.map(async (name): Promise<Item> => {
                try {
                    return { name, type: (await sys.stat(join(RECYCLE, name))).type };
                } catch {
                    return { name, type: "file" };
                }
            }),
        );
        setItems(stats);
        setSelected(null);
    }, [sys]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    const restore = async () => {
        if (!selected) return;
        // restore to where it came from; fall back to home if the parent is gone
        let dest = originalPathOf(selected) ?? join(RESTORE_TO, selected);
        const parentExists = await sys.stat(dirname(dest)).then(() => true).catch(() => false);
        if (!parentExists) dest = join(RESTORE_TO, selected);
        await sys.rename(join(RECYCLE, selected), dest).catch(() => {});
        forgetTrash(selected);
        await refresh();
    };

    const empty = async () => {
        for (const item of items) {
            await removeTree(sys, join(RECYCLE, item.name)).catch(() => {});
            forgetTrash(item.name);
        }
        await refresh();
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 420, minHeight: 280 }}>
            <Toolbar>
                <Button variant="menu" size="sm" onClick={restore} disabled={!selected}>
                    Restore
                </Button>
                <Button variant="menu" size="sm" onClick={empty} disabled={items.length === 0}>
                    Empty Recycle Bin
                </Button>
            </Toolbar>
            <WindowContent
                style={{ flex: 1, minHeight: 0, overflow: "auto", backgroundColor: "white", border: "3px solid gray", borderRadius: 5 }}
                onClick={() => setSelected(null)}
            >
                {items.length === 0 ? (
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#555" }}>
                        The Recycle Bin is empty.
                    </div>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {items.map((item) => (
                            <div
                                key={item.name}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelected(item.name);
                                }}
                                style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", width: 90, padding: 8 }}
                            >
                                <img
                                    src={item.type === "dir" ? FolderIcon : FileIcon}
                                    alt={item.type}
                                    style={{ height: 48, filter: selected === item.name ? "sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)" : "none" }}
                                />
                                <p style={{ textAlign: "center", wordBreak: "break-all", color: selected === item.name ? "white" : "black", backgroundColor: selected === item.name ? "#000080" : "transparent" }}>
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </WindowContent>
            <Frame variant="well" className="footer">
                {items.length} object(s)
            </Frame>
        </div>
    );
};

export default RecycleBin;
