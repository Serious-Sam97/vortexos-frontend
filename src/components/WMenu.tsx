import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, MenuList, MenuListItem, Separator } from "react95";
import styled from "styled-components";
import { useProcessContext } from "../contexts/ProcessContext";
import { useOSContext } from "../contexts/OSContext";
import { useAuth } from "../contexts/AuthContext";
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

const Tray = styled.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
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

function useClock(): string {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 10000);
        return () => clearInterval(id);
    }, []);
    let h = now.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, "0");
    return `${h}:${m} ${ampm}`;
}

const WMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { changePriority, processes, addProcess, handleProceessLocationChange } = useProcessContext();
    const { minimized, minimize, restore } = useOSContext();
    const { username, logout } = useAuth();
    const { alert } = useDialog();
    const clock = useClock();
    const navigate = useNavigate();

    const [taskMenu, setTaskMenu] = useState<{ x: number; y: number } | null>(null);
    const [showDate, setShowDate] = useState(false);

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
                                width: 28,
                                background: "linear-gradient(180deg, #00007a 0%, #000033 100%)",
                                borderTop: "2px solid #dfdfdf",
                                borderLeft: "2px solid #dfdfdf",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                padding: "10px 0",
                            }}
                        >
                            <div style={{ transform: "rotate(-90deg)", transformOrigin: "center", whiteSpace: "nowrap", color: "#fff" }}>
                                <span style={{ fontWeight: 400, letterSpacing: 1 }}>Vortex</span>
                                <span style={{ fontWeight: "bold", fontSize: 20, marginLeft: 4 }}>95</span>
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
                                    <MenuList style={{ position: "absolute", left: "100%", top: 0, width: 180 }}>
                                        {PROGRAMS.map((p) => (
                                            <MenuListItem key={p.componentName} style={{ cursor: "pointer" }} onClick={() => launch(p)}>
                                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                    <img src={p.icon} style={{ width: 20 }} /> {p.name}
                                                </span>
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
                                    <MenuList style={{ position: "absolute", left: "100%", top: 0, width: 175 }}>
                                        <MenuListItem
                                            style={{ cursor: "pointer" }}
                                            onClick={() => launch({ name: "Control Panel", icon: ControlPanelIcon, componentName: "control_panel" })}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <img src={ControlPanelIcon} style={{ width: 20 }} /> Control Panel
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

            {/* running windows */}
            <div style={{ display: "flex", flex: 1, gap: 3, overflow: "hidden", marginLeft: 2 }}>
                {processes.map((process: Process) => {
                    const pressed = process.priority === 0 && !minimized.includes(process.uuid ?? "");
                    return (
                        <TaskButton key={process.uuid} $pressed={pressed} onClick={() => onTaskClick(process)}>
                            <img src={process.icon} style={{ width: 18, height: 18, flexShrink: 0 }} />
                            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {process.name}
                            </span>
                        </TaskButton>
                    );
                })}
            </div>

            {/* system tray */}
            <Tray className="tray-clock" onMouseEnter={() => setShowDate(true)} onMouseLeave={() => setShowDate(false)}>
                {username && <span style={{ marginRight: 8, opacity: 0.85 }}>{username}</span>}
                {clock}
            </Tray>

            {showDate && (
                <div
                    style={{
                        position: "fixed",
                        right: 8,
                        bottom: TASKBAR_HEIGHT + 6,
                        background: "#ffffe1",
                        border: "1px solid #000",
                        padding: "2px 6px",
                        fontSize: 11,
                        zIndex: 100000,
                        pointerEvents: "none",
                    }}
                >
                    {new Date().toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            )}

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
