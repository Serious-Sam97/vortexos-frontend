import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import { useOSContext } from "../contexts/OSContext";
import { useEffect, useState } from "react";

const Vortex: React.FC = () => {
    const { cursor } = useOSContext();
    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    const handleClick = () => setShowMenu(false);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div
            style={{ cursor: cursor }}
            onContextMenu={event => {
                event.preventDefault();
                setMenuPosition({ x: event.pageX, y: event.pageY });
                setShowMenu(true);
            }}
        >
            <Desktop/>
            <WindowManager/>
            {showMenu && (
                <div
                style={{
                  position: "fixed",
                  top: menuPosition.y,
                  left: menuPosition.x,
                  background: "#333",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  zIndex: 9999,
                }}
              >
                <div>Option 1</div>
                <div>Option 2</div>
              </div>
            )}
            <WMenu/>
        </div>
    );
}

export default Vortex;