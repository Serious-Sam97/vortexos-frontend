import { Frame, Toolbar, WindowContent } from "react95";
import ProcessList from "../TaskManager/ProcessList";

const TaskManager: React.FC = () => {
    return (
        <>
            <Toolbar>
                {/* <Button variant='menu' size='sm' onClick={() => setIsFileOpen(!isFileOpen)}>
                    File
                </Button>
                {
                    isFileOpen && (
                        <MenuList
                            style={{
                                position: 'absolute',
                                left: '3%',
                                top: '100%',
                                zIndex: '99999'
                            }}
                        >
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(true)}>
                                New Game
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(false)}>
                                <p>Game List</p>
                            </MenuListItem>
                        </MenuList>
                    )
                }
                <Button variant='menu' size='sm' onClick={() => setIsFileOpen(false)}>
                    Edit
                </Button>
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button> */}
            </Toolbar>
            <WindowContent>
                <ProcessList/>
            </WindowContent>
            <Frame variant='well' className='footer'>
                See your running processes
            </Frame>
        </>
    );
};

export default TaskManager;