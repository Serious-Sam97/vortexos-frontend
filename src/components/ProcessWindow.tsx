import React, { useEffect, useRef, useState } from "react";
import { useProcessContext } from "../contexts/ProcessContext";
import { Button, Window, WindowHeader } from "react95";

interface ProcessWindowProp {
    process: any
}

const ProcessWindow: React.FC<ProcessWindowProp> = ({process}) => {
    const { processes, changePriority, closeProcess } = useProcessContext();
    const [ properties, setProperties ] = useState({x: window.innerWidth/2, y: window.innerHeight/2});
    const offset = useRef({x: 0, y: 0});
    const [ dragging, setDragging ] = useState(false);

    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', () => setDragging(false));
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', () => setDragging(false));
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', () => setDragging(false));
        }
    }, [dragging]);

    const handleMouseDown = (event) => {
        setDragging(true);

        offset.current = {
            x: event.clientX - properties.x,
            y: event.clientY - properties.y,
        };
    };

    const handleMouseMove = (event) => {
        if (! dragging) {
            return;
        }

        setProperties({
            x: event.clientX - offset.current.x,
            y: event.clientY - offset.current.y,
        });
    }

    
   

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
            {React.createElement(process.component, { propA: 'foo' })}
        </Window>
    );
};

export default ProcessWindow;