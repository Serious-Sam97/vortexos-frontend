import Desktop from "./Desktop";
import WMenu from "./WMenu";
import WindowManager from "../components/WindowManager";

const Windows: React.FC = () => {
    return (
        <div>
            <Desktop/>
            <WindowManager/>
            <WMenu/>
        </div>
    );
}

export default Windows;