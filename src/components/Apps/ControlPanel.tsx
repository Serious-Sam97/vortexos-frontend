import { Button, Frame, Toolbar, WindowContent } from "react95";

const ControlPanel: React.FC = () => {

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
                    
                </div>

            </WindowContent>
            <Frame variant='well' className='footer'>
                Tomb Raider
            </Frame>
        </>
    );
}

export default ControlPanel;