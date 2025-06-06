import React from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import { useState } from 'react';
import w95 from '/w95.png';
import styled from "styled-components";
import { useProcessContext } from '../contexts/ProcessContext';
import TaskManager from "../components/Apps/TaskManager";
import TaskManagerIcon from '/task_manager.png';
import { Process } from '../interfaces/Process';

const WMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const StyledAppBar = styled(AppBar)`
        top: 94% !important;
    `;
    const { changePriority, processes, addProcess } = useProcessContext();

    const TaskbarButton = styled.div`
        width: 20%;
        display: inline-block;
        padding: 7px 15px;
        margin-right: 2px;
        font-family: "MS Sans Serif", sans-serif;
        font-size: 12px;
        background-color: #C0C0C0;
        color: black;
        cursor: default;
        border: 2px solid #fff;
        border-right-color: #808080;
        border-bottom-color: #808080;
    `;

    const [ icons ] = useState([
        {
            name: "Task Manager",
            icon: TaskManagerIcon,
            selected: false,
            componentName: 'task_manager',
            component: TaskManager,
            priority: 0,
        },
    ]);

    return (
        <StyledAppBar>
            <Toolbar style={{ justifyContent: 'space-between', padding: '7px' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button
                    onClick={() => setOpen(!open)}
                    active={open}
                    style={{ fontWeight: 'bold' }}
                >
                    <img
                    src={w95}
                    alt='react95 logo'
                    style={{ height: '20px', marginRight: 4 }}
                    />
                    <p style={{padding: '5px'}}>Start</p>
                </Button>
                {open && (
                    <MenuList
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '-550%',
                            width: '15vw'
                        }}
                        onClick={() => setOpen(false)}
                    >
                        {
                            icons.map(icon => (
                                <MenuListItem style={{cursor: 'pointer'}} onClick={() => addProcess(icon)}>
                                    <img src={icon.icon} style={{width: '20px', marginRight: '5px'}}/>
                                    <p>{icon.name}</p>
                                </MenuListItem>
                            ))
                        }
                        <MenuListItem>
                            <span role='img' aria-label='👨‍💻'>
                            👨‍💻
                            </span>
                            Profile
                        </MenuListItem>
                        <MenuListItem>
                            <span role='img' aria-label='📁'>
                            📁
                            </span>
                            My account
                        </MenuListItem>
                        <Separator />
                        <MenuListItem disabled>
                            <span role='img' aria-label='🔙'>
                            🔙
                            </span>
                            Logout
                        </MenuListItem>
                    </MenuList>
                )}
                </div>
                <div style={{width: '100%', display: 'flex'}}>
                    {
                        processes.map((process: Process) => 
                            (
                                <TaskbarButton style={process.priority === 0 ? {borderTopColor: '#808080', borderLeftColor: '#808080', borderRightColor: '#fff', borderBottomColor: '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'center'} : {cursor: 'pointer', display: 'flex', justifyContent: 'center'}} onClick={() => changePriority(process, 0)}>
                                    <img
                                        src={process.icon}
                                        style={{ height: '20px', alignSelf: 'center', marginRight: '5px'}}
                                    />
                                    <p style={{textAlign: 'center', alignSelf: 'center'}}>{process.name}</p>
                                </TaskbarButton>
                            )
                        )
                    }
                </div>
                <TextInput placeholder='Search...' width={150} />
            </Toolbar>
        </StyledAppBar>
    );
};

export default WMenu;