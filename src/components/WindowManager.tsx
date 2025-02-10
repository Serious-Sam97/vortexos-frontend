import { Button, Window, WindowHeader } from "react95";
import { useProcessContext } from "../contexts/ProcessContext";
import React from "react";

const WindowManager: React.FC = () => {

    const { processes, changePriority, closeProcess } = useProcessContext();

    return (
        <>
            {
                processes.map((process, index) => (
                    <Window
                        onClick={() => changePriority(process, 0)}
                        key={index} resizable
                        className='window'
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: process.priority === 0 ? '9999' : '1' }}
                    >
                        <WindowHeader className='window-title' style={{display: 'flex', justifyContent: 'space-between', backgroundColor: process.priority !== 0 ? 'grey' : ''}}>
                            <div style={{display: 'flex'}}>
                                <img src={process.icon} style={{width: '20px',height: '80%', marginRight: '5px', alignSelf: 'center'}}/>
                                <p>{process.name}</p>
                            </div>
                            <Button style={{alignSelf: 'center'}} onClick={() => closeProcess(process.uuid)}>
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