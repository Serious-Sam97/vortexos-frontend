import { Button, Frame, Toolbar, WindowContent } from "react95";
import DosPlayer from "../DosPlayer";

const DoomII: React.FC = () => {

    return (
        <>
            <Toolbar>
                <Button variant='menu' size='sm'>
                    File
                </Button>
                <Button variant='menu' size='sm'>
                    Edit
                </Button>
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
            </Toolbar>
            <WindowContent>
                <div style={{ width: "640px", height: "400px" }}>
                    <DosPlayer bundleUrl="dos/doom.jsdos" />
                </div>

            </WindowContent>
            <Frame variant='well' className='footer'>
                TEST
            </Frame>
        </>
    );
}

export default DoomII;