import { lazy } from "react";
import { ProgramRegistry } from "./registry";
import { defineApp } from "../sdk";

import RecycleBin from "../components/Apps/RecycleBin";
import MyComputer from "../components/Apps/MyComputer";
import TaskManager from "../components/Apps/TaskManager";
import Notes from "../components/Apps/Notes";
import WordPad from "../components/Apps/WordPad";
import Explorer from "../components/Apps/Explorer";
import ControlPanel from "../components/Apps/ControlPanel";

// Heavy apps (js-dos emulator, network clients) are code-split and loaded on first launch
// so they don't weigh down boot. ProcessWindow renders them behind a <Suspense> fallback.
const Doom = lazy(() => import("../components/Apps/Doom"));
const DoomII = lazy(() => import("../components/Apps/DoomII"));
const TombRaider = lazy(() => import("../components/Apps/TombRaider"));
const Persia = lazy(() => import("../components/Apps/Persia"));
const Backlogger = lazy(() => import("../components/Apps/Backlogger"));
const Browser = lazy(() => import("../components/Apps/Browser"));
const NightwavePlaza = lazy(() => import("../components/Apps/NightwavePlaza"));
import Terminal from "../components/Apps/Terminal";
import Calculator from "../components/Apps/Calculator";
import Minesweeper from "../components/Apps/Minesweeper";
import Clock from "../components/Apps/Clock";
import Paint from "../components/Apps/Paint";
import Find from "../components/Apps/Find";
import Help from "../components/Apps/Help";
import NetworkNeighborhood from "../components/Apps/NetworkNeighborhood";
import Messenger from "../components/Apps/Messenger";
import ImageViewer from "../components/Apps/ImageViewer";
import MediaPlayer from "../components/Apps/MediaPlayer";
import AddRemovePrograms from "../components/Apps/AddRemovePrograms";

import TrashIcon from "/trash.svg";
import MyComputerIcon from "/my-computer.png";
import TaskManagerIcon from "/task_manager.png";
import DoomIcon from "/doom.png";
import DoomIIIcon from "/doom2.png";
import BackloggerIcon from "/playstation-logo.png";
import NotesIcon from "/notes.png";
import WordPadIcon from "/wordpad.svg";
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

/** Core apps that can't be uninstalled via Add/Remove Programs. */
export const CORE_APPS = new Set([
    "recycle_bin", "my_computer", "task_manager", "explorer", "terminal", "control_panel", "notes", "find", "add_remove",
]);

/**
 * The full catalog of built-in programs. `exec` keys match v1's `componentName` values so
 * the desktop, start menu and persisted windows keep resolving. Add/Remove Programs installs
 * and removes from this catalog at runtime.
 */
export const BUILTIN_APPS = [
        // System / file apps — declare exactly the syscalls they issue.
        defineApp({ exec: "recycle_bin", name: "Recycle Bin", icon: TrashIcon, component: RecycleBin, permissions: ["fs"] }),
        defineApp({ exec: "my_computer", name: "My Computer", icon: MyComputerIcon, component: MyComputer, permissions: ["proc"] }),
        defineApp({ exec: "task_manager", name: "Task Manager", icon: TaskManagerIcon, component: TaskManager, permissions: ["proc"] }),
        defineApp({ exec: "notes", name: "Notes", icon: NotesIcon, component: Notes, permissions: ["fs"] }),
        defineApp({ exec: "wordpad", name: "WordPad", icon: WordPadIcon, component: WordPad, permissions: ["fs"] }),
        defineApp({ exec: "explorer", name: "Explorer", icon: ExplorerIcon, component: Explorer, permissions: ["fs", "proc"] }),
        defineApp({ exec: "terminal", name: "Terminal", icon: TerminalIcon, component: Terminal, permissions: ["fs", "proc"] }),
        defineApp({ exec: "paint", name: "Paint", icon: PaintIcon, component: Paint, permissions: ["fs"] }),
        defineApp({ exec: "imageviewer", name: "Image Viewer", icon: PaintIcon, component: ImageViewer, permissions: ["fs"] }),
        defineApp({ exec: "mediaplayer", name: "Media Player", icon: ClockIcon, component: MediaPlayer, permissions: ["fs"] }),
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
        defineApp({ exec: "add_remove", name: "Add/Remove Programs", icon: MyComputerIcon, component: AddRemovePrograms, permissions: [] }),
        defineApp({ exec: "doom", name: "Doom", icon: DoomIcon, component: Doom, permissions: [] }),
        defineApp({ exec: "doomII", name: "Doom II", icon: DoomIIIcon, component: DoomII, permissions: [] }),
        defineApp({ exec: "tomb", name: "Tomb Raider", icon: TombRaiderIcon, component: TombRaider, permissions: [] }),
        defineApp({ exec: "persia", name: "Prince of Persia", icon: PersiaIcon, component: Persia, permissions: [] }),
];

/** Installs the built-in programs into /bin. */
export function registerBuiltins(registry: ProgramRegistry): void {
    for (const program of BUILTIN_APPS) {
        registry.register(program);
    }
}
