import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";

const Doom: React.FC = () => {

    return (
        <>
             <Window resizable className='window' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <WindowHeader className='window-title'>
                <span>react95.exe</span>
                <Button>
                    <span className='close-icon' />
                </Button>
                </WindowHeader>
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
                    src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1"
                    allowfullscreen>
                </iframe>
                </WindowContent>
                <Frame variant='well' className='footer'>
                Put some useful information here
                </Frame>
            </Window>
        </>
    );
}

export default Doom;