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
const VortexCode = lazy(() => import("../components/Apps/VortexCode"));
const VortexCalc = lazy(() => import("../components/Apps/VortexCalc"));
const MarkdownStudio = lazy(() => import("../components/Apps/MarkdownStudio"));
const DocViewer = lazy(() => import("../components/Apps/DocViewer"));
const TimeMachine = lazy(() => import("../components/Apps/TimeMachine"));
const AppStore = lazy(() => import("../components/Apps/AppStore"));
const VortexMail = lazy(() => import("../components/Apps/VortexMail"));
const Calendar = lazy(() => import("../components/Apps/Calendar"));
const Contacts = lazy(() => import("../components/Apps/Contacts"));
const Tasks = lazy(() => import("../components/Apps/Tasks"));
const Office = lazy(() => import("../components/Apps/Office"));
import Terminal from "../components/Apps/Terminal";
import Calculator from "../components/Apps/Calculator";
import Minesweeper from "../components/Apps/Minesweeper";
import Solitaire from "../components/Apps/Solitaire";
import Snake from "../components/Apps/Snake";
import FreeCell from "../components/Apps/FreeCell";
import Clock from "../components/Apps/Clock";
import Paint from "../components/Apps/Paint";
import Find from "../components/Apps/Find";
import Help from "../components/Apps/Help";
import NetworkNeighborhood from "../components/Apps/NetworkNeighborhood";
import Messenger from "../components/Apps/Messenger";
import Lounge from "../components/Apps/Lounge";
import CoWrite from "../components/Apps/CoWrite";
import Bbs from "../components/Apps/Bbs";
import Whiteboard from "../components/Apps/Whiteboard";
import VortexAmp from "../components/Apps/VortexAmp";
import VortexViz from "../components/Apps/VortexViz";
import Synth from "../components/Apps/Synth";
import ShaderPlayground from "../components/Apps/ShaderPlayground";
import VideoPlayer from "../components/Apps/VideoPlayer";
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
import VortexCodeIcon from "/vortexcode.svg";
import VortexCalcIcon from "/vortexcalc.svg";
import MarkdownIcon from "/markdown.svg";
import DocViewerIcon from "/docviewer.svg";
import BrowserIcon from "/browser.png";
import ExplorerIcon from "/explorer.png";
import TombRaiderIcon from "/tomb.jpg";
import PersiaIcon from "/persia.png";
import NightwavePlazaIcon from "/vapor.png";
import TerminalIcon from "/terminal.svg";
import CalculatorIcon from "/calculator.svg";
import MinesweeperIcon from "/minesweeper.svg";
import SolitaireIcon from "/solitaire.svg";
import SnakeIcon from "/snake.svg";
import FreeCellIcon from "/freecell.svg";
import ClockIcon from "/clock.svg";
import PaintIcon from "/paint_file-3.png";
import FindIcon from "/find.svg";
import HelpIcon from "/help.svg";
import TimeMachineIcon from "/timemachine.svg";
import AppStoreIcon from "/appstore.svg";
import VortexMailIcon from "/vortexmail.svg";
import CalendarAppIcon from "/calendar.svg";
import ContactsIcon from "/contacts.svg";
import TasksIcon from "/tasks.svg";
import OfficeIcon from "/office.svg";
import NetworkIcon from "/network.svg";
import WinpopupIcon from "/winpopup.svg";
import LoungeIcon from "/lounge.svg";
import CoWriteIcon from "/cowrite.svg";
import BbsIcon from "/bbs.svg";
import WhiteboardIcon from "/whiteboard.svg";
import VortexAmpIcon from "/vortexamp.svg";
import VortexVizIcon from "/vortexviz.svg";
import SynthIcon from "/synth.svg";
import ShaderIcon from "/shader.svg";
import VideoIcon from "/video.svg";

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
        defineApp({ exec: "vortexcode", name: "VortexCode", icon: VortexCodeIcon, component: VortexCode, permissions: ["fs", "proc"] }),
        defineApp({ exec: "vortexcalc", name: "VortexCalc", icon: VortexCalcIcon, component: VortexCalc, permissions: ["fs"] }),
        defineApp({ exec: "markdown", name: "Markdown Studio", icon: MarkdownIcon, component: MarkdownStudio, permissions: ["fs"] }),
        defineApp({ exec: "docviewer", name: "Document Viewer", icon: DocViewerIcon, component: DocViewer, permissions: ["fs"] }),
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
        defineApp({ exec: "lounge", name: "Vortex Lounge", icon: LoungeIcon, component: Lounge, permissions: ["net"] }),
        defineApp({ exec: "cowrite", name: "Vortex CoWrite", icon: CoWriteIcon, component: CoWrite, permissions: ["net"] }),
        defineApp({ exec: "bbs", name: "Vortex BBS", icon: BbsIcon, component: Bbs, permissions: ["net"] }),
        defineApp({ exec: "whiteboard", name: "Vortex Whiteboard", icon: WhiteboardIcon, component: Whiteboard, permissions: ["net"] }),
        defineApp({ exec: "vortexamp", name: "VortexAmp", icon: VortexAmpIcon, component: VortexAmp, permissions: ["fs"] }),
        defineApp({ exec: "vortexviz", name: "VortexViz", icon: VortexVizIcon, component: VortexViz, permissions: [] }),
        defineApp({ exec: "synth", name: "Vortex Synth", icon: SynthIcon, component: Synth, permissions: [] }),
        defineApp({ exec: "shader", name: "Shader Playground", icon: ShaderIcon, component: ShaderPlayground, permissions: [] }),
        defineApp({ exec: "video", name: "Vortex Video", icon: VideoIcon, component: VideoPlayer, permissions: ["fs"] }),
        defineApp({ exec: "browser", name: "Browser", icon: BrowserIcon, component: Browser, permissions: ["net"] }),
        defineApp({ exec: "vaporwave", name: "Nightwave Plaza", icon: NightwavePlazaIcon, component: NightwavePlaza, permissions: ["net", "audio"] }),
        // Sandboxed apps — no system access.
        defineApp({ exec: "calculator", name: "Calculator", icon: CalculatorIcon, component: Calculator, permissions: [] }),
        defineApp({ exec: "minesweeper", name: "Minesweeper", icon: MinesweeperIcon, component: Minesweeper, permissions: ["net"] }),
        defineApp({ exec: "solitaire", name: "Solitaire", icon: SolitaireIcon, component: Solitaire, permissions: ["net"] }),
        defineApp({ exec: "snake", name: "Snake", icon: SnakeIcon, component: Snake, permissions: ["net"] }),
        defineApp({ exec: "freecell", name: "FreeCell", icon: FreeCellIcon, component: FreeCell, permissions: ["net"] }),
        defineApp({ exec: "clock", name: "Clock", icon: ClockIcon, component: Clock, permissions: [] }),
        defineApp({ exec: "help", name: "Help", icon: HelpIcon, component: Help, permissions: [] }),
        defineApp({ exec: "control_panel", name: "Control Panel", icon: MyComputerIcon, component: ControlPanel, permissions: [] }),
        defineApp({ exec: "timemachine", name: "Time Machine", icon: TimeMachineIcon, component: TimeMachine, permissions: [] }),
        defineApp({ exec: "appstore", name: "App Store", icon: AppStoreIcon, component: AppStore, permissions: ["net"] }),
        defineApp({ exec: "vortexmail", name: "VortexMail", icon: VortexMailIcon, component: VortexMail, permissions: ["net"] }),
        defineApp({ exec: "calendar", name: "Calendar", icon: CalendarAppIcon, component: Calendar, permissions: ["net"] }),
        defineApp({ exec: "contacts", name: "Contacts", icon: ContactsIcon, component: Contacts, permissions: ["net", "proc"] }),
        defineApp({ exec: "tasks", name: "Tasks", icon: TasksIcon, component: Tasks, permissions: ["net"] }),
        defineApp({ exec: "office", name: "Vortex Office", icon: OfficeIcon, component: Office, permissions: ["net", "proc"] }),
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
