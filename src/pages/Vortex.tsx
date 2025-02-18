import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";

const Vortex: React.FC = () => {
    return (
        <div>
            <Desktop/>
            <WindowManager/>
            <WMenu/>
        </div>
    );
}

export default Vortex;