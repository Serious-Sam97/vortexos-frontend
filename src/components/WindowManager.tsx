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
                        <WindowHeader className='window-title' style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span>{process.name}</span>
                            <Button style={{alignSelf: 'center'}} onClick={() => closeProcess(process.uuid)}>
                                {/* <span className='close-icon' /> */}
                                <p style={{fontWeight: 'bold'}}>X</p>
                            </Button>
                        </WindowHeader>
                        {React.createElement(process.component, { propA: 'foo' })}
                    </Window>
                ))
            }
        </>
    );
};

export default WindowManager;