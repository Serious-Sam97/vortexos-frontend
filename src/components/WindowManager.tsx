import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";
import { useProcessContext } from "../contexts/ProcessContext";

const WindowManager: React.FC = () => {

    const { processes } = useProcessContext();

    return (
        <>
            {
                processes.map((process, index) => (
                    <Window key={index} resizable className='window' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <WindowHeader className='window-title'>
                            <span>{process.name}</span>
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
                            {process.component}
                        </WindowContent>
                        <Frame variant='well' className='footer'>
                            Put some useful information here
                        </Frame>
                    </Window>
                ))
            }
        </>
    );
};

export default WindowManager;