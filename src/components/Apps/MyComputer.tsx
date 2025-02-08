import { Button, Frame, Toolbar, WindowContent } from "react95";

const MyComputer: React.FC = () => {
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
                My Computer
            </WindowContent>
            <Frame variant='well' className='footer'>
                TEST
            </Frame>
        </>
    );
}

export default MyComputer;