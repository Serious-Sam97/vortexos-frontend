import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";
import { useProcessContext } from "../contexts/ProcessContext";
import React, { useEffect } from "react";

const WindowManager: React.FC = () => {

    const { processes, setProcesses, changePriority } = useProcessContext();
    const [ ordenatedProcesses, setOrdenatedProcesses ] = React.useState<any[]>([]);

    const closeProcess = (uuid: string) => {
        //Set Timeout Zero to run after the changePriority function
        setTimeout(() => {
            setProcesses(processes => processes.filter((p: any) => p.uuid !== uuid));
        }, 0);
    }

    useEffect(() => {
        setOrdenatedProcesses(processes.sort((a, b) => a.priority > b.priority));
    }, [processes]);

    return (
        <>
            {
                ordenatedProcesses.map((process, index) => (
                    <Window onClick={() => changePriority(process, 0)} key={index} resizable className='window' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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
                            Put some useful information here
                        </Frame>
                    </Window>
                ))
            }
        </>
    );
};

export default WindowManager;