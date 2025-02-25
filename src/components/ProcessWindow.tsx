import React, { useEffect, useRef, useState } from "react";
import { useProcessContext } from "../contexts/ProcessContext";
import { Button, Window, WindowHeader } from "react95";
import { Process } from "../interfaces/Process";
import { useOSContext } from "../contexts/OSContext";

interface ProcessWindowProp {
    process: Process
}

const ProcessWindow: React.FC<ProcessWindowProp> = ({process}) => {
    const { processes, changePriority, closeProcess, handleProceessLocationChange } = useProcessContext();
    const { changeCursor } = useOSContext();
    const [ properties, setProperties ] = useState({x: process.location.x, y: process.location.y});
    const offset = useRef({x: 0, y: 0});
    const [ dragging, setDragging ] = useState(false);

    useEffect(() => {
        if (dragging) {
            changeCursor('Grabbing.cur');
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            changeCursor('arrow.cur');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [dragging]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);

        offset.current = {
            x: event.clientX - properties.x,
            y: event.clientY - properties.y,
        };
    };

    const handleMouseUp = (event: MouseEvent) => {
        setDragging(false);

        const location = {
            x: event.clientX - offset.current.x,
            y: event.clientY - offset.current.y,
        };
        handleProceessLocationChange(process.uuid, location);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!dragging) {
            return;
        }

        const location = {
            x: event.clientX - offset.current.x,
            y: event.clientY - offset.current.y,
        };

        setProperties(location);
    };
   
    return (
        <Window
            onClick={() => changePriority(process, 0)}
            key={processes.uuid} resizable
            className='window'
            style={{ position: 'absolute', top: `${properties.y}px`, left: `${properties.x}px`, transform: 'translate(-50%, -50%)', zIndex: process.priority === 0 ? '9999' : process.priority + 1, userSelect: 'none' }}
        >
            <WindowHeader onMouseDown={handleMouseDown} className='window-title' style={{display: 'flex', justifyContent: 'space-between', backgroundColor: process.priority !== 0 ? 'grey' : ''}}>
                <div style={{display: 'flex'}}>
                    <img src={process.icon} style={{width: '20px',height: '80%', marginRight: '5px', alignSelf: 'center'}}/>
                    <p>{process.name}</p>
                </div>
                <Button style={{alignSelf: 'center'}} onClick={() => closeProcess(process.uuid)}>
                    <p style={{fontWeight: 'bold'}}>X</p>
                </Button>
            </WindowHeader>
            {
                process.component
                    ? (
                        React.createElement(process.component)
                    ) : ''
            }
        </Window>
    );
};

export default ProcessWindow;