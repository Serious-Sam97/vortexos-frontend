import { useRef, useEffect, useState } from "react";
import TrashIcon from '/trash.svg'
import MyComputerIcon from '/my-computer.png'
import DoomIcon from '/doom.png'
import Doom from "../components/Apps/Doom";
import MyComputer from "../components/Apps/MyComputer";
import RecycleBin from "../components/Apps/RecycleBin";

const Desktop: React.FC = () => {
    const desktop = useRef<HTMLDivElement | null>(null);
    const [blocksHeight, setHeight] = useState(0);

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
                component: RecycleBin,
            },
        ],
        [
            {
                name: "My Computer",
                icon: MyComputerIcon,
                selected: false,
                component: MyComputer,
            },
        ],
        [
            {
                name: "Doom",
                icon: DoomIcon,
                selected: false,
                component: Doom,
            },
        ]
    ]);

    const selectIcon = (i: number, j: number) => {
        setIcons(icons.map((row, rowIndex) => {
            return row.map((icon, iconIndex) => {
                if (i === rowIndex && j === iconIndex) {
                    return {
                        ...icon,
                        selected: !icon.selected,
                    };
                }
                return {
                    ...icon,
                    selected: false,
                };
            });
        }));
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

    useEffect(() => {
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div ref={desktop} style={{width: "100vw", height: "94vh"}}>
            {
                Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} style={{height: blocksHeight, display: "flex"}}>
                        {
                            Array.from({ length: 10 }).map((_, j) => (
                                <div onClick={() => checkIfItsEmpty(i, j)} key={j} style={{width: "10.2857%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {
                                        (icons[i] && icons[i][j]) && (
                                            <div onClick={() => selectIcon(i, j)} style={{cursor: "pointer"}}>
                                                <img
                                                src={icons[i][j].icon}
                                                alt={icons[i][j].name}
                                                style={{ height: '70px', filter: icons[i][j].selected ? 'sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)' : 'none',}}
                                                />
                                                <p style={{color: 'white', textAlign: 'center', backgroundColor: icons[i][j].selected ? '#000080' : 'transparent'}}>{icons[i][j].name}</p>
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