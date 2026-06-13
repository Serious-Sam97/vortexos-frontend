import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, MenuList, MenuListItem, Separator } from "react95";
import styled from "styled-components";
import { useProcessContext } from "../contexts/ProcessContext";
import { useOSContext } from "../contexts/OSContext";
import { useAuth } from "../contexts/AuthContext";
import { useUninstalled } from "../system/programs";
import { useQuickLaunch, togglePin, unpin, isPinned } from "../system/quicklaunch";
import { BUILTIN_APPS } from "../kernel/bin";
import SystemTray from "./SystemTray";
import WindowPreview from "./WindowPreview";
import { Tooltip } from "./Tooltip";
import { useDialog } from "./Dialog/DialogProvider";
import { Process } from "../interfaces/Process";
import { playClick } from "../system/sounds";

import w95 from "/w95.png";
import TaskManagerIcon from "/task_manager.png";
import ControlPanelIcon from "/controlpanel.png";
import TerminalIcon from "/terminal.svg";
import ExplorerIcon from "/explorer.png";
import NotesIcon from "/notes.png";
import BackloggerIcon from "/backlogger.png";
import NetworkIcon from "/network.svg";
import WinpopupIcon from "/winpopup.svg";
import CalculatorIcon from "/calculator.svg";
import MinesweeperIcon from "/minesweeper.svg";
import ClockIcon from "/clock.svg";
import PaintIcon from "/paint_file-3.png";
import FindIcon from "/find.svg";
import HelpIcon from "/help.svg";

const TASKBAR_HEIGHT = 40;

const Bar = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${TASKBAR_HEIGHT}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
`;

const TaskButton = styled.button<{ $pressed: boolean }>`
    flex: 0 1 160px;
    min-width: 90px;
    max-width: 160px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 6px;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 12px;
    color: #000;
    background: #c0c0c0;
    cursor: pointer;
    border: 2px solid;
    border-color: ${(p) => (p.$pressed ? "#808080 #ffffff #ffffff #808080" : "#ffffff #808080 #808080 #ffffff")};
`;

const APP_BY_EXEC = new Map(BUILTIN_APPS.map((a) => [a.exec, a]));

const ShowDesktopButton = styled.button`
    width: 26px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`;

const QuickIcon = styled.button`
    width: 26px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`;

const PROGRAMS = [
    { name: "Terminal", icon: TerminalIcon, componentName: "terminal" },
    { name: "Explorer", icon: ExplorerIcon, componentName: "explorer" },
    { name: "Notes", icon: NotesIcon, componentName: "notes" },
    { name: "GameCache", icon: BackloggerIcon, componentName: "backlogger" },
    { name: "Network Neighborhood", icon: NetworkIcon, componentName: "network" },
    { name: "WinPopup", icon: WinpopupIcon, componentName: "messenger" },
    { name: "Task Manager", icon: TaskManagerIcon, componentName: "task_manager" },
    { name: "Control Panel", icon: ControlPanelIcon, componentName: "control_panel" },
    { name: "Calculator", icon: CalculatorIcon, componentName: "calculator" },
    { name: "Minesweeper", icon: MinesweeperIcon, componentName: "minesweeper" },
    { name: "Clock", icon: ClockIcon, componentName: "clock" },
    { name: "Paint", icon: PaintIcon, componentName: "paint" },
];

const WMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { changePriority, processes, addProcess, handleProceessLocationChange } = useProcessContext();
    const { minimized, minimize, restore } = useOSContext();
    const { username, logout } = useAuth();
    const { alert } = useDialog();
    const uninstalled = useUninstalled();
    const user = username || "user";
    const pinned = useQuickLaunch(user);
    const showDeskRef = useRef<string[]>([]);

    // Show Desktop: minimize everything; click again restores what it hid.
    const showDesktop = () => {
        const visible = processes.filter((p) => p.uuid && !minimized.includes(p.uuid));
        if (visible.length) {
            showDeskRef.current = visible.map((p) => p.uuid as string);
            visible.forEach((p) => p.uuid && minimize(p.uuid));
        } else {
            showDeskRef.current.forEach((pid) => restore(pid));
            showDeskRef.current = [];
        }
        playClick();
    };

    const launchExec = (exec: string) => {
        const app = APP_BY_EXEC.get(exec);
        if (!app) return;
        addProcess({ name: app.name, icon: app.icon, componentName: exec } as never);
        playClick();
    };

    // Cap a submenu's height to the space above the taskbar so a long list scrolls
    // in place instead of running off the bottom of the screen.
    const fitSubmenu = (el: HTMLElement | null) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const available = window.innerHeight - TASKBAR_HEIGHT - top - 8;
        el.style.maxHeight = `${Math.max(140, available)}px`;
        el.style.overflowY = "auto";
    };
    const navigate = useNavigate();

    const [taskMenu, setTaskMenu] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        if (!taskMenu) return;
        const close = () => setTaskMenu(null);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [taskMenu]);

    const cascade = () => {
        processes.forEach((p, i) => {
            if (!p.uuid) return;
            restore(p.uuid);
            handleProceessLocationChange(p.uuid, { x: 340 + i * 34, y: 230 + i * 34 });
        });
        setTaskMenu(null);
    };

    const tile = () => {
        const n = processes.length;
        if (n) {
            const cols = Math.ceil(Math.sqrt(n));
            const rows = Math.ceil(n / cols);
            const w = window.innerWidth / cols;
            const h = (window.innerHeight - TASKBAR_HEIGHT) / rows;
            processes.forEach((p, i) => {
                if (!p.uuid) return;
                const c = i % cols;
                const r = Math.floor(i / cols);
                restore(p.uuid);
                handleProceessLocationChange(p.uuid, { x: Math.round(c * w + w / 2), y: Math.round(r * h + h / 2) });
            });
        }
        setTaskMenu(null);
    };

    const minimizeAll = () => {
        processes.forEach((p) => p.uuid && minimize(p.uuid));
        setTaskMenu(null);
    };

    // Close the Start menu when clicking anywhere outside the taskbar.
    useEffect(() => {
        if (!open) return;
        const close = () => {
            setOpen(false);
            setProgramsOpen(false);
            setSettingsOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        document.addEventListener("click", close);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", close);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const launch = (program: { name: string; icon: string; componentName: string }) => {
        addProcess(program as any); // shim resolves the component from /bin by componentName
        setOpen(false);
        setProgramsOpen(false);
    };

    const onTaskClick = (process: Process) => {
        const pid = process.uuid;
        if (!pid) return;
        if (minimized.includes(pid)) {
            restore(pid);
            changePriority(process, 0);
        } else if (process.priority === 0) {
            minimize(pid); // clicking the focused window minimizes it
        } else {
            changePriority(process, 0);
        }
    };

    return (
        <Bar
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTaskMenu({ x: e.clientX, y: e.clientY });
            }}
        >
            {/* Start button + menu */}
            <div style={{ position: "relative" }}>
                <Button
                    onClick={() => {
                        playClick();
                        setOpen((o) => !o);
                        setProgramsOpen(false);
                        setSettingsOpen(false);
                    }}
                    active={open}
                    style={{ fontWeight: "bold", height: 30, display: "flex", alignItems: "center", gap: 4 }}
                >
                    <img src={w95} alt="" style={{ height: 20 }} />
                    Start
                </Button>

                {open && (
                    <div style={{ position: "absolute", bottom: "calc(100% + 3px)", left: 0, display: "flex", boxShadow: "2px 2px 0 rgba(0,0,0,0.4)" }}>
                        {/* vertical Windows-95-style banner */}
                        <div
                            style={{
                                width: 30,
                                background: "linear-gradient(180deg, #00007a 0%, #000033 100%)",
                                borderTop: "2px solid #dfdfdf",
                                borderLeft: "2px solid #dfdfdf",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                    whiteSpace: "nowrap",
                                    color: "#fff",
                                    padding: "12px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                }}
                            >
                                <span style={{ fontWeight: 400, letterSpacing: 1 }}>Vortex</span>
                                <span style={{ fontWeight: "bold", fontSize: 20 }}>95</span>
                            </div>
                        </div>

                        <MenuList style={{ width: 200, position: "static" }}>
                            <div style={{ position: "relative" }} onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
                                <MenuListItem style={{ cursor: "pointer", justifyContent: "space-between" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <img src={ExplorerIcon} style={{ width: 20 }} /> Programs
                                    </span>
                                    <span>▸</span>
                                </MenuListItem>
                                {programsOpen && (
                                    <MenuList ref={fitSubmenu as never} style={{ position: "absolute", left: "100%", top: 0, width: 220 }}>
                                        {PROGRAMS.filter((p) => !uninstalled.has(p.componentName)).map((p) => (
                                            <MenuListItem
                                                key={p.componentName}
                                                style={{ cursor: "pointer", justifyContent: "space-between" }}
                                                onClick={() => launch(p)}
                                                onContextMenu={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    togglePin(user, p.componentName);
                                                }}
                                                title="Right-click to pin/unpin to Quick Launch"
                                            >
                                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                    <img src={p.icon} style={{ width: 20 }} /> {p.name}
                                                </span>
                                                {isPinned(user, p.componentName) && <span style={{ color: "#000080" }}>📌</span>}
                                            </MenuListItem>
                                        ))}
                                    </MenuList>
                                )}
                            </div>
                            <MenuListItem
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    launch({ name: "Explorer", icon: ExplorerIcon, componentName: "explorer", argv: ["/home/user/Documents"] } as any)
                                }
                            >
                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <img src={ExplorerIcon} style={{ width: 20 }} /> Documents
                                </span>
                            </MenuListItem>
                            <div style={{ position: "relative" }} onMouseEnter={() => setSettingsOpen(true)} onMouseLeave={() => setSettingsOpen(false)}>
                                <MenuListItem style={{ cursor: "pointer", justifyContent: "space-between" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <img src={ControlPanelIcon} style={{ width: 20 }} /> Settings
                                    </span>
                                    <span>▸</span>
                                </MenuListItem>
                                {settingsOpen && (
                                    <MenuList ref={fitSubmenu as never} style={{ position: "absolute", left: "100%", top: 0, width: 220 }}>
                                        <MenuListItem
                                            style={{ cursor: "pointer" }}
                                            onClick={() => launch({ name: "Control Panel", icon: ControlPanelIcon, componentName: "control_panel" })}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <img src={ControlPanelIcon} style={{ width: 20 }} /> Control Panel
                                            </span>
                                        </MenuListItem>
                                        <MenuListItem
                                            style={{ cursor: "pointer" }}
                                            onClick={() => launch({ name: "Add/Remove Programs", icon: ControlPanelIcon, componentName: "add_remove" })}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <img src={ControlPanelIcon} style={{ width: 20 }} /> Add/Remove Programs
                                            </span>
                                        </MenuListItem>
                                    </MenuList>
                                )}
                            </div>
                            <MenuListItem style={{ cursor: "pointer" }} onClick={() => launch({ name: "Find Files", icon: FindIcon, componentName: "find" })}>
                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <img src={FindIcon} style={{ width: 20 }} /> Find
                                </span>
                            </MenuListItem>
                            <MenuListItem style={{ cursor: "pointer" }} onClick={() => launch({ name: "Help", icon: HelpIcon, componentName: "help" })}>
                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <img src={HelpIcon} style={{ width: 20 }} /> Help
                                </span>
                            </MenuListItem>
                            <MenuListItem
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    alert({
                                        title: "Run",
                                        message: "Tip: open the Terminal and type a command like `ls` or `help`.",
                                        type: "info",
                                    })
                                }
                            >
                                Run...
                            </MenuListItem>
                            <Separator />
                            <MenuListItem
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setOpen(false);
                                    logout(); // session cleared → Vortex re-renders the login screen
                                }}
                            >
                                Log Off {username}...
                            </MenuListItem>
                            <MenuListItem style={{ cursor: "pointer" }} onClick={() => navigate("/shutdown")}>
                                Shut Down...
                            </MenuListItem>
                        </MenuList>
                    </div>
                )}
            </div>

            {/* Quick Launch — Show Desktop + pinned apps */}
            <div style={{ display: "flex", alignItems: "center", gap: 2, paddingLeft: 4, borderLeft: "1px solid #808080", borderRight: "1px solid #808080", marginLeft: 2, marginRight: 2 }}>
                <Tooltip text="Show Desktop">
                    <ShowDesktopButton onClick={showDesktop} aria-label="Show Desktop">
                        {/* tiny desktop/pencil glyph */}
                        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden>
                            <rect x="1.5" y="2" width="13" height="9" rx="0.5" fill="#000080" stroke="#000" strokeWidth="0.8" />
                            <rect x="5.5" y="11" width="5" height="1.5" fill="#808080" />
                            <rect x="3.5" y="12.5" width="9" height="1.5" fill="#404040" />
                        </svg>
                    </ShowDesktopButton>
                </Tooltip>
                {pinned
                    .filter((exec) => APP_BY_EXEC.has(exec) && !uninstalled.has(exec))
                    .map((exec) => {
                        const app = APP_BY_EXEC.get(exec)!;
                        return (
                            <Tooltip key={exec} text={app.name}>
                                <QuickIcon
                                    onClick={() => launchExec(exec)}
                                    onContextMenu={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        unpin(user, exec);
                                    }}
                                    aria-label={app.name}
                                    title={app.name}
                                >
                                    <img src={app.icon} style={{ width: 18, height: 18 }} />
                                </QuickIcon>
                            </Tooltip>
                        );
                    })}
            </div>

            {/* running windows */}
            <div style={{ display: "flex", flex: 1, gap: 3, overflow: "hidden", marginLeft: 2 }}>
                {processes.map((process: Process) => {
                    const pressed = process.priority === 0 && !minimized.includes(process.uuid ?? "");
                    return (
                        <WindowPreview key={process.uuid} process={process} minimized={minimized.includes(process.uuid ?? "")}>
                            <TaskButton $pressed={pressed} onClick={() => onTaskClick(process)}>
                                <img src={process.icon} style={{ width: 18, height: 18, flexShrink: 0 }} />
                                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {process.name}
                                </span>
                            </TaskButton>
                        </WindowPreview>
                    );
                })}
            </div>

            {/* system tray */}
            <SystemTray username={username} />

            {taskMenu && (
                <MenuList
                    style={{ position: "fixed", left: taskMenu.x, top: taskMenu.y - 112, width: 200, zIndex: 100000 }}
                >
                    <MenuListItem style={{ cursor: "pointer" }} onClick={cascade}>
                        Cascade Windows
                    </MenuListItem>
                    <MenuListItem style={{ cursor: "pointer" }} onClick={tile}>
                        Tile Windows
                    </MenuListItem>
                    <Separator />
                    <MenuListItem style={{ cursor: "pointer" }} onClick={minimizeAll}>
                        Minimize All Windows
                    </MenuListItem>
                </MenuList>
            )}
        </Bar>
    );
};

export default WMenu;
