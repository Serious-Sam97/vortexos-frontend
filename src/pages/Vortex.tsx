import Desktop from "./Desktop";
import WMenu from "../components/WMenu";
import WindowManager from "../components/WindowManager";
import { useOSContext } from "../contexts/OSContext";

const Vortex: React.FC = () => {
    const { cursor } = useOSContext();

    return (
        <div style={{ cursor: cursor }}>
            <Desktop/>
            <WindowManager/>
            <WMenu/>
        </div>
    );
}

export default Vortex;