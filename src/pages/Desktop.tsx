import { useCallback, useEffect, useRef, useState } from "react";
import { useProcessContext } from "../contexts/ProcessContext";
import { useSys } from "../kernel/react/useSys";
import { useFsVersion } from "../kernel/react/KernelProvider";
import { useUninstalled } from "../system/programs";
import { useSettings, setSetting, ICON_METRICS } from "../system/settings";
import ContextMenu, { type CtxItem } from "../components/ContextMenu";
import { iconForEntry } from "../system/fileIcons";
import { ensureUserHome } from "../system/homeMigration";
import { openPath } from "../system/openPath";
import { useAuth } from "../contexts/AuthContext";
import { useDialog } from "../components/Dialog/DialogProvider";
import { recordTrash } from "../system/recycle";
import { join } from "../kernel/fs/path";

import TrashIcon from "/trash.svg";
import MyComputerIcon from "/my-computer.png";
import NetworkIcon from "/network.svg";
import WinpopupIcon from "/winpopup.svg";
import DoomIcon from "/doom.png";
import DoomIIIcon from "/doom2.png";
import BackloggerIcon from "/playstation-logo.png";
import PersiaIcon from "/persia.png";
import TaskManagerIcon from "/task_manager.png";
import TombRaiderIcon from "/tomb.jpg";
import NotesIcon from "/notes.png";
import ExplorerIcon from "/explorer.png";
import BrowserIcon from "/browser.png";
import NightwavePlazaIcon from "/vapor.png";
import TerminalIcon from "/terminal.svg";
import CalculatorIcon from "/calculator.svg";
import MinesweeperIcon from "/minesweeper.svg";
import SolitaireIcon from "/solitaire.svg";
import SnakeIcon from "/snake.svg";
import FreeCellIcon from "/freecell.svg";
import ClockIcon from "/clock.svg";
import PaintIcon from "/paint_file-3.png";

const TASKBAR_HEIGHT = 40;
const RECYCLE = "/Recycle Bin";
const CELL_W = 84;
const CELL_H = 92;

type Kind = "app" | "file" | "dir";
interface Item {
    id: string;
    name: string;
    icon: string;
    kind: Kind;
    componentName?: string;
    path?: string;
}

const APP_SHORTCUTS: Item[] = [
    { id: "app:recycle_bin", name: "Recycle Bin", icon: TrashIcon, kind: "app", componentName: "recycle_bin" },
    { id: "app:backlogger", name: "GameCache", icon: BackloggerIcon, kind: "app", componentName: "backlogger" },
    { id: "app:my_computer", name: "My Computer", icon: MyComputerIcon, kind: "app", componentName: "my_computer" },
    { id: "app:network", name: "Network Neighborhood", icon: NetworkIcon, kind: "app", componentName: "network" },
    { id: "app:messenger", name: "WinPopup", icon: WinpopupIcon, kind: "app", componentName: "messenger" },
    { id: "app:vaporwave", name: "Nightwave Plaza", icon: NightwavePlazaIcon, kind: "app", componentName: "vaporwave" },
    { id: "app:task_manager", name: "Task Manager", icon: TaskManagerIcon, kind: "app", componentName: "task_manager" },
    { id: "app:explorer", name: "Explorer", icon: ExplorerIcon, kind: "app", componentName: "explorer" },
    { id: "app:terminal", name: "Terminal", icon: TerminalIcon, kind: "app", componentName: "terminal" },
    { id: "app:notes", name: "Notes", icon: NotesIcon, kind: "app", componentName: "notes" },
    { id: "app:browser", name: "Browser", icon: BrowserIcon, kind: "app", componentName: "browser" },
    { id: "app:doom", name: "Doom", icon: DoomIcon, kind: "app", componentName: "doom" },
    { id: "app:doomII", name: "Doom II", icon: DoomIIIcon, kind: "app", componentName: "doomII" },
    { id: "app:persia", name: "Prince of Persia", icon: PersiaIcon, kind: "app", componentName: "persia" },
    { id: "app:tomb", name: "Tomb Raider", icon: TombRaiderIcon, kind: "app", componentName: "tomb" },
    { id: "app:calculator", name: "Calculator", icon: CalculatorIcon, kind: "app", componentName: "calculator" },
    { id: "app:minesweeper", name: "Minesweeper", icon: MinesweeperIcon, kind: "app", componentName: "minesweeper" },
    { id: "app:solitaire", name: "Solitaire", icon: SolitaireIcon, kind: "app", componentName: "solitaire" },
    { id: "app:snake", name: "Snake", icon: SnakeIcon, kind: "app", componentName: "snake" },
    { id: "app:freecell", name: "FreeCell", icon: FreeCellIcon, kind: "app", componentName: "freecell" },
    { id: "app:clock", name: "Clock", icon: ClockIcon, kind: "app", componentName: "clock" },
    { id: "app:paint", name: "Paint", icon: PaintIcon, kind: "app", componentName: "paint" },
];

type Positions = Record<string, { x: number; y: number }>;
interface Menu {
    x: number;
    y: number;
    item: Item | null;
}

const loadPositions = (key: string): Positions => {
    try {
        return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
        return {};
    }
};

const Desktop: React.FC = () => {
    const { addProcess } = useProcessContext();
    const sys = useSys();
    const { alert } = useDialog();
    const { username } = useAuth();
    const fsVersion = useFsVersion();
    const uninstalled = useUninstalled();
    const settings = useSettings();
    const metric = ICON_METRICS[settings.desktopIconSize];

    // Each user gets their own Desktop folder and icon arrangement.
    const user = username || "user";
    const DESKTOP_DIR = `/home/${user}/Desktop`;
    const POS_KEY = `vortex.desktop.positions.${user}`;

    const [files, setFiles] = useState<Item[]>([]);
    const [positions, setPositions] = useState<Positions>(() => loadPositions(POS_KEY));
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [menu, setMenu] = useState<Menu | null>(null);
    const [marquee, setMarquee] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

    const rootRef = useRef<HTMLDivElement>(null);
    const drag = useRef<{ ids: string[]; startMouse: { x: number; y: number }; start: Positions } | null>(null);
    const marqueeStart = useRef<{ x: number; y: number } | null>(null);

    const items = [...APP_SHORTCUTS.filter((a) => !a.componentName || !uninstalled.has(a.componentName)), ...files];

    const perCol = Math.max(1, Math.floor((window.innerHeight - TASKBAR_HEIGHT - 20) / CELL_H));
    const positionOf = (id: string, index: number) =>
        positions[id] ?? { x: 12 + Math.floor(index / perCol) * CELL_W, y: 12 + (index % perCol) * CELL_H };

    const refreshFiles = useCallback(async () => {
        try {
            await ensureUserHome(sys, user); // create/migrate the user's home + Desktop
            const names = await sys.readdir(DESKTOP_DIR);
            const mapped = await Promise.all(
                names.map(async (name): Promise<Item> => {
                    const type = await sys.stat(join(DESKTOP_DIR, name)).then((s) => s.type).catch(() => "file");
                    return {
                        id: `file:${name}`,
                        name,
                        icon: iconForEntry(name, type === "dir"),
                        kind: type === "dir" ? "dir" : "file",
                        path: join(DESKTOP_DIR, name),
                    };
                }),
            );
            setFiles(mapped);
        } catch {
            setFiles([]);
        }
    }, [sys, user, DESKTOP_DIR]);

    // Boot jingle plays once on mount.
    useEffect(() => {
        const audio = new Audio("win98.mp3");
        audio.play().catch(() => {});
    }, []);

    // Mirror /home/user/Desktop live: re-read whenever the filesystem mutates, so a
    // Recycle Bin "Restore" (or any external write to the dir) shows up immediately.
    useEffect(() => {
        refreshFiles();
    }, [refreshFiles, fsVersion]);

    useEffect(() => {
        if (!menu) return;
        const close = () => setMenu(null);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [menu]);

    // Persist icon positions whenever they change (per-user key).
    useEffect(() => {
        localStorage.setItem(POS_KEY, JSON.stringify(positions));
    }, [positions, POS_KEY]);

    const openItem = (item: Item) => {
        if (item.kind === "app") addProcess({ componentName: item.componentName, name: item.name, icon: item.icon } as any);
        else if (item.path) void openPath(sys, item.path); // routes by type (folder/image/audio/rich-text/text)
    };

    // ── icon dragging (moves the whole selection) ────────────────────────
    const onIconMouseDown = (e: React.MouseEvent, item: Item, index: number) => {
        if (e.button !== 0) return; // only left-drag; right-click is handled by onContextMenu
        e.stopPropagation();
        setMenu(null);
        const isSel = selected.has(item.id);
        const movingIds = isSel ? [...selected] : [item.id];
        if (!isSel) setSelected(new Set([item.id]));

        const start: Positions = {};
        movingIds.forEach((id) => {
            const idx = items.findIndex((it) => it.id === id);
            start[id] = positionOf(id, idx >= 0 ? idx : index);
        });
        drag.current = { ids: movingIds, startMouse: { x: e.clientX, y: e.clientY }, start };
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", onDragUp);
    };

    const onDragMove = (e: MouseEvent) => {
        const d = drag.current; // capture so the updater never dereferences a cleared ref
        if (!d) return;
        const dx = e.clientX - d.startMouse.x;
        const dy = e.clientY - d.startMouse.y;
        setPositions((prev) => {
            const next = { ...prev };
            for (const id of d.ids) {
                const s = d.start[id];
                next[id] = { x: Math.max(0, s.x + dx), y: Math.max(0, s.y + dy) };
            }
            return next;
        });
    };

    const onDragUp = (e: MouseEvent) => {
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragUp);
        const d = drag.current;
        // Single-click-to-open: a click that didn't move opens the icon.
        if (d && settings.singleClickOpen && d.ids.length === 1) {
            const moved = Math.abs(e.clientX - d.startMouse.x) > 4 || Math.abs(e.clientY - d.startMouse.y) > 4;
            if (!moved) {
                const it = items.find((i) => i.id === d.ids[0]);
                if (it) openItem(it);
            }
        }
        drag.current = null; // positions are persisted by the effect on `positions`
    };

    // ── marquee selection on empty desktop ───────────────────────────────
    const onRootMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setSelected(new Set());
        setMenu(null);
        marqueeStart.current = { x: e.clientX, y: e.clientY };
        document.addEventListener("mousemove", onMarqueeMove);
        document.addEventListener("mouseup", onMarqueeUp);
    };

    const onMarqueeMove = (e: MouseEvent) => {
        if (!marqueeStart.current) return;
        const x = Math.min(e.clientX, marqueeStart.current.x);
        const y = Math.min(e.clientY, marqueeStart.current.y);
        const w = Math.abs(e.clientX - marqueeStart.current.x);
        const h = Math.abs(e.clientY - marqueeStart.current.y);
        setMarquee({ x, y, w, h });
        const hits = new Set<string>();
        items.forEach((it, i) => {
            const p = positionOf(it.id, i);
            if (p.x + CELL_W > x && p.x < x + w && p.y + CELL_H > y && p.y < y + h) hits.add(it.id);
        });
        setSelected(hits);
    };

    const onMarqueeUp = () => {
        document.removeEventListener("mousemove", onMarqueeMove);
        document.removeEventListener("mouseup", onMarqueeUp);
        marqueeStart.current = null;
        setMarquee(null);
    };

    // ── file operations from the desktop ─────────────────────────────────
    const unique = (base: string) => {
        const names = files.map((f) => f.name);
        if (!names.includes(base)) return base;
        const dot = base.lastIndexOf(".");
        const stem = dot > 0 ? base.slice(0, dot) : base;
        const ext = dot > 0 ? base.slice(dot) : "";
        for (let i = 2; ; i++) if (!names.includes(`${stem} (${i})${ext}`)) return `${stem} (${i})${ext}`;
    };

    const newFolder = async () => {
        await sys.mkdir(join(DESKTOP_DIR, unique("New Folder"))).catch((e: any) =>
            alert({ title: "Error", message: e.code ?? "failed", type: "error" }),
        );
        refreshFiles();
    };
    const newTextDocument = async () => {
        await sys.writeTextFile(join(DESKTOP_DIR, unique("New Text Document.txt")), "");
        refreshFiles();
    };
    const moveToBin = async (item: Item) => {
        const bin = await sys.readdir(RECYCLE).catch(() => [] as string[]);
        const name = bin.includes(item.name) ? `${item.name}-${Date.now() % 10000}` : item.name;
        await sys.rename(item.path!, join(RECYCLE, name)).catch(() => {});
        recordTrash(name, item.path!); // remember the original location for Restore
    };
    const deleteFile = async (item: Item) => {
        await moveToBin(item);
        refreshFiles();
    };
    const deleteSelected = async () => {
        const targets = files.filter((f) => selected.has(f.id));
        for (const f of targets) await moveToBin(f);
        refreshFiles();
    };
    const arrangeIcons = () => setPositions({});

    const sortIcons = (by: "name" | "type") => {
        const rank = (it: Item) => (it.kind === "app" ? 0 : it.kind === "dir" ? 1 : 2);
        const sorted = [...items].sort((a, b) => {
            if (by === "type") {
                const d = rank(a) - rank(b);
                if (d !== 0) return d;
            }
            return a.name.localeCompare(b.name);
        });
        const next: Positions = {};
        sorted.forEach((it, i) => {
            next[it.id] = { x: 12 + Math.floor(i / perCol) * CELL_W, y: 12 + (i % perCol) * CELL_H };
        });
        setPositions(next);
    };

    const openControlPanel = () =>
        addProcess({ componentName: "control_panel", name: "Control Panel", icon: "/controlpanel.png" } as never);

    // Delete key removes selected desktop file(s) to the Recycle Bin.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Delete") return;
            const tag = (document.activeElement as HTMLElement | null)?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA") return;
            if (files.some((f) => selected.has(f.id))) deleteSelected();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, files]);

    const openMenu = (e: React.MouseEvent, item: Item | null) => {
        e.preventDefault();
        e.stopPropagation();
        if (item) setSelected(new Set([item.id]));
        setMenu({ x: e.clientX, y: e.clientY, item });
    };

    return (
        <div
            ref={rootRef}
            onMouseDown={onRootMouseDown}
            onContextMenu={(e) => openMenu(e, null)}
            style={{ position: "relative", width: "100%", height: `calc(100vh - ${TASKBAR_HEIGHT}px)`, overflow: "hidden" }}
        >
            {settings.showDesktopIcons &&
                items.map((item, i) => {
                const pos = positionOf(item.id, i);
                const isSel = selected.has(item.id);
                return (
                    <div
                        key={item.id}
                        onMouseDown={(e) => onIconMouseDown(e, item, i)}
                        onDoubleClick={settings.singleClickOpen ? undefined : () => openItem(item)}
                        onContextMenu={(e) => openMenu(e, item)}
                        style={{
                            position: "absolute",
                            left: pos.x,
                            top: pos.y,
                            width: metric.cell,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 3,
                            cursor: "pointer",
                            border: isSel ? "1px dotted #ffffff" : "1px solid transparent",
                        }}
                    >
                        <img src={item.icon} alt={item.name} style={{ height: metric.icon, width: metric.icon, objectFit: "contain" }} draggable={false} />
                        <p
                            style={{
                                marginTop: 2,
                                padding: "0 3px",
                                textAlign: "center",
                                fontSize: metric.font,
                                color: "#fff",
                                textShadow: isSel ? "none" : "1px 1px 0 rgba(0,0,0,0.6)",
                                backgroundColor: isSel ? settings.accentColor : "transparent",
                                wordBreak: "break-word",
                            }}
                        >
                            {item.name}
                        </p>
                    </div>
                );
            })}

            {marquee && (
                <div
                    style={{
                        position: "fixed",
                        left: marquee.x,
                        top: marquee.y,
                        width: marquee.w,
                        height: marquee.h,
                        border: `1px dotted ${settings.accentColor}`,
                        background: `${settings.accentColor}22`,
                        pointerEvents: "none",
                        zIndex: 5,
                    }}
                />
            )}

            {menu &&
                (menu.item ? (
                    <ContextMenu
                        x={menu.x}
                        y={menu.y}
                        onClose={() => setMenu(null)}
                        items={[
                            { label: "Open", glyph: "▸", onClick: () => openItem(menu.item!) },
                            ...(menu.item.kind !== "app"
                                ? ([
                                      { separator: true },
                                      { label: "Delete", glyph: "🗑", onClick: () => deleteFile(menu.item!) },
                                  ] as CtxItem[])
                                : []),
                            { separator: true },
                            {
                                label: "Properties",
                                onClick: () =>
                                    alert({
                                        title: `${menu.item!.name} Properties`,
                                        message: `Name: ${menu.item!.name}\nType: ${menu.item!.kind === "app" ? "Application" : menu.item!.kind === "dir" ? "Folder" : "File"}${menu.item!.path ? `\nLocation: ${menu.item!.path}` : ""}`,
                                        type: "info",
                                    }),
                            },
                        ]}
                    />
                ) : (
                    <ContextMenu
                        x={menu.x}
                        y={menu.y}
                        onClose={() => setMenu(null)}
                        items={[
                            {
                                label: "View",
                                submenu: [
                                    { label: "Large Icons", bullet: settings.desktopIconSize === "large", onClick: () => setSetting("desktopIconSize", "large") },
                                    { label: "Normal Icons", bullet: settings.desktopIconSize === "normal", onClick: () => setSetting("desktopIconSize", "normal") },
                                    { label: "Small Icons", bullet: settings.desktopIconSize === "small", onClick: () => setSetting("desktopIconSize", "small") },
                                    { separator: true },
                                    { label: "Show Desktop Icons", checked: settings.showDesktopIcons, onClick: () => setSetting("showDesktopIcons", !settings.showDesktopIcons) },
                                ],
                            },
                            {
                                label: "Sort Icons",
                                submenu: [
                                    { label: "by Name", onClick: () => sortIcons("name") },
                                    { label: "by Type", onClick: () => sortIcons("type") },
                                ],
                            },
                            { label: "Line up Icons", onClick: arrangeIcons },
                            { label: "Refresh", glyph: "⟳", onClick: refreshFiles },
                            { separator: true },
                            {
                                label: "New",
                                submenu: [
                                    { label: "Folder", icon: ExplorerIcon, onClick: newFolder },
                                    { label: "Text Document", icon: NotesIcon, onClick: newTextDocument },
                                ],
                            },
                            { separator: true },
                            { label: "Properties", onClick: openControlPanel },
                        ]}
                    />
                ))}
        </div>
    );
};

export default Desktop;
