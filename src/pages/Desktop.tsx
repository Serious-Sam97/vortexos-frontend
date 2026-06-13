import { useRef, useEffect, useState } from "react";
import TrashIcon from '/trash.svg'
import MyComputerIcon from '/my-computer.png'
import DoomIcon from '/doom.png';
import DoomIIIcon from '/doom2.png';
import Doom from "../components/Apps/Doom";
import MyComputer from "../components/Apps/MyComputer";
import RecycleBin from "../components/Apps/RecycleBin";
import Backlogger from "../components/Apps/Backlogger";
import BackloggerIcon from '/backlogger.png';
import PersiaIcon from '/persia.png';
import TaskManager from "../components/Apps/TaskManager";
import TaskManagerIcon from '/task_manager.png';
import TombRaiderIcon from '/tomb.jpg';
import { useProcessContext } from "../contexts/ProcessContext";
import NotesIcon from '/notes.png';
import Notes from "../components/Apps/Notes";
import ExplorerIcon from '/explorer.png';
import Explorer from "../components/Apps/Explorer";
import BrowserIcon from '/browser.png';
import Browser from "../components/Apps/Browser";
import TombRaider from "../components/Apps/TombRaider";
import DoomII from "../components/Apps/DoomII";
import Persia from "../components/Apps/Persia";
import NightwavePlaza from "../components/Apps/NightwavePlaza";
import NightwavePlazaIcon from '/vapor.png';
import Terminal from "../components/Apps/Terminal";
import TerminalIcon from '/terminal.svg';

const Desktop: React.FC = () => {
    const desktop = useRef<HTMLDivElement | null>(null);
    const [blocksHeight, setHeight] = useState(0);
    const { addProcess } = useProcessContext();

    const updateHeight = () => {
        if (desktop.current) {
          setHeight(desktop.current.getBoundingClientRect().height / 7);
        }
    };

    const [ icons, setIcons ] = useState([
        [
            {
                name: "Recycle Bin",
                icon: TrashIcon,
                selected: false,
                componentName: 'recycle_bin',
                component: RecycleBin,
                priority: 0,
            },
            {
                name: "GameCache",
                icon: BackloggerIcon,
                selected: false,
                componentName: 'backlogger',
                component: Backlogger,
                priority: 0,
            },
        ],
        [
            {
                name: "My Computer",
                icon: MyComputerIcon,
                selected: false,
                componentName: 'my_computer',
                component: MyComputer,
                priority: 0,
            },
            {
                name: "Nightwave Plaza",
                icon: NightwavePlazaIcon,
                selected: false,
                componentName: 'vaporwave',
                component: NightwavePlaza,
                priority: 0,
            },
        ],
        [
            {
                name: "Task Manager",
                icon: TaskManagerIcon,
                selected: false,
                componentName: 'task_manager',
                component: TaskManager,
                priority: 0,
            },
            {
                name: "Doom",
                icon: DoomIcon,
                selected: false,
                componentName: 'doom',
                component: Doom,
                priority: 0,
            },
        ],
        [
            {
                name: "Explorer",
                icon: ExplorerIcon,
                selected: false,
                componentName: 'explorer',
                component: Explorer,
                priority: 0,
            },
            {
                name: "Doom II",
                icon: DoomIIIcon,
                selected: false,
                componentName: 'doomII',
                component: DoomII,
                priority: 0,
            },
        ],
        [
            {
                name: "Browser",
                icon: BrowserIcon,
                selected: false,
                componentName: 'browser',
                component: Browser,
                priority: 0,
            },
            {
                name: "Prince of Persia",
                icon: PersiaIcon,
                selected: false,
                componentName: 'persia',
                component: Persia,
                priority: 0,
            },
        ],
        [
            {
                name: "Notes",
                icon: NotesIcon,
                selected: false,
                componentName: 'notes',
                component: Notes,
                priority: 0,
            },
            {
                name: "Tomb Raider",
                icon: TombRaiderIcon,
                selected: false,
                componentName: 'tomb',
                component: TombRaider,
                priority: 0,
            },
        ],
        [
            {
                name: "Terminal",
                icon: TerminalIcon,
                selected: false,
                componentName: 'terminal',
                component: Terminal,
                priority: 0,
            },
        ],
    ]);

    const selectIcon = (i: number, j: number) => {
        setIcons(icons.map((row, rowIndex) =>
            row.map((icon, iconIndex) => ({
                ...icon,
                selected: i === rowIndex && j === iconIndex,
            })),
        ));
    };

    const openIcon = (i: number, j: number) => {
        const icon = icons[i]?.[j];
        if (icon) addProcess(icon);
    };

    const checkIfItsEmpty = (i: number, j: number) => {
        if (icons[i] && icons[i][j]) {
            return;
        }

        setIcons(icons.map((row) => {
            return row.map((icon) => {
                return {
                    ...icon,
                    selected: false,
                };
            });
        }));
    }

    const playIntroAudio = () => {
        const audio = new Audio('win98.mp3');
        audio.play();
    }

    useEffect(() => {
        playIntroAudio();
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div ref={desktop} style={{ width: "100vw", height: `calc(100vh - 40px)` }}>
            {
                Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} style={{height: blocksHeight, display: "flex"}}>
                        {
                            Array.from({ length: 10 }).map((_, j) => (
                                <div onClick={() => checkIfItsEmpty(i, j)} key={j} style={{width: "10.2857%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {
                                        (icons[i] && icons[i][j]) && (
                                            <div
                                                onClick={(e) => { e.stopPropagation(); selectIcon(i, j); }}
                                                onDoubleClick={() => openIcon(i, j)}
                                                style={{
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    padding: 3,
                                                    border: icons[i][j].selected ? "1px dotted #ffffff" : "1px solid transparent",
                                                }}
                                            >
                                                <img src={icons[i][j].icon} alt={icons[i][j].name} style={{ height: 48, width: 48, objectFit: "contain" }} />
                                                <p
                                                    style={{
                                                        marginTop: 2,
                                                        padding: "0 3px",
                                                        textAlign: "center",
                                                        color: "#fff",
                                                        textShadow: icons[i][j].selected ? "none" : "1px 1px 0 rgba(0,0,0,0.6)",
                                                        backgroundColor: icons[i][j].selected ? "#000080" : "transparent",
                                                    }}
                                                >
                                                    {icons[i][j].name}
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Desktop;