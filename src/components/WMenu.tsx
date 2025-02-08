import React from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import { useState } from 'react';
import w95 from '/w95.png';
import styled from "styled-components";
import { useProcessContext } from '../contexts/ProcessContext';

const WMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const StyledAppBar = styled(AppBar)`
        top: 94% !important;
    `;
    const { ordenatedProcess, changePriority, processes } = useProcessContext();

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

    return (
        <StyledAppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
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
                    Start
                </Button>
                {open && (
                    <MenuList
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '-430%'
                        }}
                        onClick={() => setOpen(false)}
                    >
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
                        processes.map(process => 
                            (
                                <TaskbarButton style={process.priority === 0 ? {borderTopColor: '#808080', borderLeftColor: '#808080', borderRightColor: '#fff', borderBottomColor: '#fff'} : {}}>
                                    <p style={{textAlign: 'center'}} onClick={() => changePriority(process, 0)}>{process.name}</p>
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