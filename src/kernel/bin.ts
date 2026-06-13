import { ProgramRegistry } from "./registry";
import { defineApp } from "../sdk";

import RecycleBin from "../components/Apps/RecycleBin";
import MyComputer from "../components/Apps/MyComputer";
import TaskManager from "../components/Apps/TaskManager";
import Doom from "../components/Apps/Doom";
import DoomII from "../components/Apps/DoomII";
import Backlogger from "../components/Apps/Backlogger";
import Notes from "../components/Apps/Notes";
import Browser from "../components/Apps/Browser";
import Explorer from "../components/Apps/Explorer";
import TombRaider from "../components/Apps/TombRaider";
import Persia from "../components/Apps/Persia";
import NightwavePlaza from "../components/Apps/NightwavePlaza";
import ControlPanel from "../components/Apps/ControlPanel";
import Terminal from "../components/Apps/Terminal";
import Calculator from "../components/Apps/Calculator";
import Minesweeper from "../components/Apps/Minesweeper";
import Clock from "../components/Apps/Clock";
import Paint from "../components/Apps/Paint";
import Find from "../components/Apps/Find";
import Help from "../components/Apps/Help";
import NetworkNeighborhood from "../components/Apps/NetworkNeighborhood";
import Messenger from "../components/Apps/Messenger";

import TrashIcon from "/trash.svg";
import MyComputerIcon from "/my-computer.png";
import TaskManagerIcon from "/task_manager.png";
import DoomIcon from "/doom.png";
import DoomIIIcon from "/doom2.png";
import BackloggerIcon from "/backlogger.png";
import NotesIcon from "/notes.png";
import BrowserIcon from "/browser.png";
import ExplorerIcon from "/explorer.png";
import TombRaiderIcon from "/tomb.jpg";
import PersiaIcon from "/persia.png";
import NightwavePlazaIcon from "/vapor.png";
import TerminalIcon from "/terminal.svg";
import CalculatorIcon from "/calculator.svg";
import MinesweeperIcon from "/minesweeper.svg";
import ClockIcon from "/clock.svg";
import PaintIcon from "/paint_file-3.png";
import FindIcon from "/find.svg";
import HelpIcon from "/help.svg";
import NetworkIcon from "/network.svg";
import WinpopupIcon from "/winpopup.svg";

/**
 * Installs the built-in programs into /bin. `exec` keys match v1's `componentName`
 * values so the desktop, start menu and persisted windows keep resolving.
 */
export function registerBuiltins(registry: ProgramRegistry): void {
    const bin = [
        // System / file apps — declare exactly the syscalls they issue.
        defineApp({ exec: "recycle_bin", name: "Recycle Bin", icon: TrashIcon, component: RecycleBin, permissions: ["fs"] }),
        defineApp({ exec: "my_computer", name: "My Computer", icon: MyComputerIcon, component: MyComputer, permissions: ["proc"] }),
        defineApp({ exec: "task_manager", name: "Task Manager", icon: TaskManagerIcon, component: TaskManager, permissions: ["proc"] }),
        defineApp({ exec: "notes", name: "Notes", icon: NotesIcon, component: Notes, permissions: ["fs"] }),
        defineApp({ exec: "explorer", name: "Explorer", icon: ExplorerIcon, component: Explorer, permissions: ["fs", "proc"] }),
        defineApp({ exec: "terminal", name: "Terminal", icon: TerminalIcon, component: Terminal, permissions: ["fs", "proc"] }),
        defineApp({ exec: "paint", name: "Paint", icon: PaintIcon, component: Paint, permissions: ["fs"] }),
        defineApp({ exec: "find", name: "Find Files", icon: FindIcon, component: Find, permissions: ["fs", "proc"] }),
        // Networked apps (net is declarative until networking routes through syscalls).
        defineApp({ exec: "backlogger", name: "GameCache", icon: BackloggerIcon, component: Backlogger, permissions: ["net"] }),
        defineApp({ exec: "network", name: "Network Neighborhood", icon: NetworkIcon, component: NetworkNeighborhood, permissions: ["net"] }),
        defineApp({ exec: "messenger", name: "WinPopup", icon: WinpopupIcon, component: Messenger, permissions: ["net"] }),
        defineApp({ exec: "browser", name: "Browser", icon: BrowserIcon, component: Browser, permissions: ["net"] }),
        defineApp({ exec: "vaporwave", name: "Nightwave Plaza", icon: NightwavePlazaIcon, component: NightwavePlaza, permissions: ["net", "audio"] }),
        // Sandboxed apps — no system access.
        defineApp({ exec: "calculator", name: "Calculator", icon: CalculatorIcon, component: Calculator, permissions: [] }),
        defineApp({ exec: "minesweeper", name: "Minesweeper", icon: MinesweeperIcon, component: Minesweeper, permissions: [] }),
        defineApp({ exec: "clock", name: "Clock", icon: ClockIcon, component: Clock, permissions: [] }),
        defineApp({ exec: "help", name: "Help", icon: HelpIcon, component: Help, permissions: [] }),
        defineApp({ exec: "control_panel", name: "Control Panel", icon: MyComputerIcon, component: ControlPanel, permissions: [] }),
        defineApp({ exec: "doom", name: "Doom", icon: DoomIcon, component: Doom, permissions: [] }),
        defineApp({ exec: "doomII", name: "Doom II", icon: DoomIIIcon, component: DoomII, permissions: [] }),
        defineApp({ exec: "tomb", name: "Tomb Raider", icon: TombRaiderIcon, component: TombRaider, permissions: [] }),
        defineApp({ exec: "persia", name: "Prince of Persia", icon: PersiaIcon, component: Persia, permissions: [] }),
    ];

    for (const program of bin) {
        registry.register(program);
    }
}
