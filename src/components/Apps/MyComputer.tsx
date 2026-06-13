import { Frame, WindowContent } from "react95";
import { useSys } from "../../kernel/react/useSys";
import { formatBytes, useStorageEstimate } from "../../system/storage";
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
    const storage = useStorageEstimate();
    const pct = storage && storage.quota > 0 ? Math.min(100, (storage.usage / storage.quota) * 100) : 0;

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
            <Frame variant="well" className="footer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px" }}>
                <span style={{ fontSize: 12 }}>{DRIVES.length} object(s)</span>
                {storage?.supported && (
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, marginLeft: "auto" }}>
                        <span>Disk (C:):</span>
                        <span title={`${formatBytes(storage.usage)} of ${formatBytes(storage.quota)} used`}
                            style={{ width: 90, height: 12, border: "2px solid", borderColor: "#808080 #fff #fff #808080", background: "#fff", position: "relative" }}>
                            <span style={{ position: "absolute", inset: 0, width: `${pct}%`, background: "#000080" }} />
                        </span>
                        <span>{formatBytes(storage.usage)} / {formatBytes(storage.quota)}</span>
                    </span>
                )}
            </Frame>
        </div>
    );
};

export default MyComputer;
