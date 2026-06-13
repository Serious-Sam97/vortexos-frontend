import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import { useOSContext } from "../contexts/OSContext";
import { useDialog } from "../components/Dialog/DialogProvider";
import { useEffect, useState } from "react";
import { MenuList, MenuListItem, Separator } from "react95";

const Vortex: React.FC = () => {
    const { cursor, crt } = useOSContext();
    const { alert } = useDialog();
    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const close = () => setShowMenu(false);
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowMenu(false);
        document.addEventListener("click", close);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", close);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                cursor,
            }}
            onContextMenu={(event) => {
                event.preventDefault();
                const pad = 8;
                setMenuPosition({
                    x: Math.min(event.pageX, window.innerWidth - 200),
                    y: Math.min(event.pageY, window.innerHeight - 240 - pad),
                });
                setShowMenu(true);
            }}
        >
            <Desktop />
            <WindowManager />

            {showMenu && (
                <MenuList
                    style={{ position: "fixed", top: menuPosition.y, left: menuPosition.x, width: 190, zIndex: 99998 }}
                    onClick={() => setShowMenu(false)}
                >
                    <MenuListItem disabled>Arrange Icons ▸</MenuListItem>
                    <MenuListItem disabled>Line up Icons</MenuListItem>
                    <MenuListItem style={{ cursor: "pointer" }} onClick={() => window.location.reload()}>
                        Refresh
                    </MenuListItem>
                    <Separator />
                    <MenuListItem disabled>Paste</MenuListItem>
                    <MenuListItem disabled>Paste Shortcut</MenuListItem>
                    <Separator />
                    <MenuListItem disabled>New ▸</MenuListItem>
                    <Separator />
                    <MenuListItem
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            alert({
                                title: "Display Properties",
                                message:
                                    "VortexOS 2.0\nExperimental Windows 95 simulation.\n\nMicrokernel build — desktop, VFS, shell.",
                                type: "info",
                            })
                        }
                    >
                        Properties
                    </MenuListItem>
                </MenuList>
            )}

            <WMenu />

            {crt && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        pointerEvents: "none",
                        zIndex: 1000000,
                        background:
                            "repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
                        mixBlendMode: "multiply",
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 150px rgba(0,0,0,0.55)" }} />
                </div>
            )}
        </div>
    );
};

export default Vortex;
