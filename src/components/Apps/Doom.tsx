import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";

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
                <iframe
                    width="680"
                    height="400"
                    frameborder="0"
                    src="https://dos.zone/doom-ii-oct-10-1994"
                    allowfullscreen>
                </iframe>
            </WindowContent>
            <Frame variant='well' className='footer'>
                TEST
            </Frame>
        </>
    );
}

export default Doom;