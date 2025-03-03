import { useEffect, useState } from "react";
import { Button, Frame, MenuList, MenuListItem, TextInput, Toolbar, WindowContent } from "react95";

const Notes: React.FC = () => {
    const [ note, setNote ] = useState('');
    const [ isFileOpen, setIsFileOpen ] = useState(false);

    const fileOptions = (option: number) => {

    };

    useEffect(() => {
        const tempNote = localStorage.getItem('App.Notes.tempValue');
        if (tempNote) {
            setNote(tempNote);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('App.Notes.tempValue', note);
    }, [note]);

    return (
        <>
            <Toolbar>
                <Button variant='menu' size='sm' onClick={() => setIsFileOpen(!isFileOpen)}>
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
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(0)}>
                                New Note
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(1)}>
                                <p>Save File</p>
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(1)}>
                                <p>Load File</p>
                            </MenuListItem>
                        </MenuList>
                    )
                }
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
                <Button variant='menu' size='sm' onClick={() => setIsFileOpen(false)}>
                    About us
                </Button>
            </Toolbar>
            <WindowContent>
                <TextInput style={{minWidth: '60vw'}} value={note} onChange={e => setNote(e.target.value)} multiline rows={20} fullWidth />
            </WindowContent>
            <Frame variant='well' className='footer'>
                <p>Notes App, the file name will appear here : )</p>
            </Frame>
        </>
    );
};

export default Notes;