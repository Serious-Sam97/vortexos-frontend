import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";
import { useProcessContext } from "../contexts/ProcessContext";
import React from "react";

const WindowManager: React.FC = () => {

    const { processes, setProcesses, changePriority, closeProcess, ordenatedProcess } = useProcessContext();

    return (
        <>
            {
                ordenatedProcess.map((process, index) => (
                    <Window
                        onClick={() => changePriority(process, 0)}
                        key={index} resizable
                        className='window'
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: process.priority === 0 ? '9999' : '1' }}
                    >
                        <WindowHeader className='window-title'>
                            <span>{process.name}</span>
                            <Button onClick={() => closeProcess(process.uuid)}>
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
                            {React.createElement(process.component, { propA: 'foo' })}
                        </WindowContent>
                        <Frame variant='well' className='footer'>
                            TEST
                        </Frame>
                    </Window>
                ))
            }
        </>
    );
};

export default WindowManager;