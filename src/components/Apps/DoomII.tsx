import { Frame, WindowContent } from "react95";
import DosPlayer from "../DosPlayer";

const DoomII: React.FC = () => (
    <>
        <WindowContent>
            <div style={{ width: "800px", height: "600px" }}>
                <DosPlayer bundleUrl="dos/doom2.jsdos" />
            </div>
        </WindowContent>
        <Frame variant="well" className="footer">
            Running in the js-dos DOS emulator — click to play
        </Frame>
    </>
);

export default DoomII;
