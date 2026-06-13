import { Frame, WindowContent } from "react95";
import DosPlayer from "../DosPlayer";

const Doom: React.FC = () => (
    <>
        <WindowContent>
            <div style={{ width: "800px", height: "600px" }}>
                <DosPlayer bundleUrl="dos/final-DOOM.jsdos" />
            </div>
        </WindowContent>
        <Frame variant="well" className="footer">
            Running in the js-dos DOS emulator — click to play
        </Frame>
    </>
);

export default Doom;
