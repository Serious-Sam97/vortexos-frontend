import { Frame, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import MyComputerIcon from "/my-computer.png";
import FolderIcon from "/explorer.png";

const DRIVES = [
    { name: "VortexOS (C:)", path: "/", icon: MyComputerIcon },
    { name: "Home", path: "/home/user", icon: FolderIcon },
    { name: "Cloud (/mnt/cloud)", path: "/mnt/cloud", icon: FolderIcon },
    { name: "Public (/mnt/public)", path: "/mnt/public", icon: FolderIcon },
    { name: "Programs (/bin)", path: "/bin", icon: FolderIcon },
    { name: "Devices (/dev)", path: "/dev", icon: FolderIcon },
    { name: "Processes (/proc)", path: "/proc", icon: FolderIcon },
];

const MyComputer: React.FC = () => {
    const sys = useSys();

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", minWidth: 420, minHeight: 260 }}>
            <WindowContent style={{ flex: 1, minHeight: 0, overflow: "auto", backgroundColor: "white", border: "3px solid gray", borderRadius: 5 }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {DRIVES.map((drive) => (
                        <div
                            key={drive.path}
                            onDoubleClick={() => sys.spawn("explorer", { argv: [drive.path] })}
                            title="Double-click to open"
                            style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", width: 110, padding: 10 }}
                        >
                            <img src={drive.icon} alt="" style={{ height: 44 }} />
                            <p style={{ textAlign: "center" }}>{drive.name}</p>
                        </div>
                    ))}
                </div>
            </WindowContent>
            <Frame variant="well" className="footer">
                {DRIVES.length} object(s)
            </Frame>
        </div>
    );
};

export default MyComputer;
