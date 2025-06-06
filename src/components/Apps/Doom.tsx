import { Button, Frame, Toolbar, WindowContent } from "react95";
import DosPlayer from "../DosPlayer";

const Doom: React.FC = () => {

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
                <div style={{ width: "800px", height: "600px" }}>
                    <DosPlayer bundleUrl="dos/doom.jsdos" />
                </div>

            </WindowContent>
            <Frame variant='well' className='footer'>
                TEST
            </Frame>
        </>
    );
}

export default Doom;