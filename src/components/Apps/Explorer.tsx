import { useEffect, useState } from "react";
import axios from 'axios';
import ExplorerIcon from '/explorer.png';
import NotesIcon from '/notes.png';
import { useProcessContext } from "../../contexts/ProcessContext";
import { useOSContext } from "../../contexts/OSContext";
import { Button, Frame, MenuList, MenuListItem, TextInput, Toolbar, WindowContent } from "react95";

const Explorer: React.FC = () => {
    const { addProcess, fetchIcon } = useProcessContext();
    const { storage, setStorage } = useOSContext();
    const [ isFileOpen, setIsFileOpen ] = useState(false);

    // useEffect(() => {


    const selectFile = (indexI: number, indexJ: number) => {
        setStorage(storage.map((row, rowIndex) => {
            return row.map((file, fileIndex) => {
                if (indexI === rowIndex && indexJ === fileIndex) {
                    if (file.selected) {
                        addProcess(file);
                    }
                    return {
                        ...file,
                        selected: !file.selected,
                    };
                }
                return {
                    ...file,
                    selected: false,
                };
            })
        }))
    };

    useEffect(() => {
        axios.get('http://localhost:8080/files');
    }, []);
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
                            <MenuListItem style={{cursor: 'pointer'}}>
                                New Note
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}}>
                                <p>Save File</p>
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}}>
                                <p>Load File</p>
                            </MenuListItem>
                        </MenuList>
                    )
                }
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
                <Button variant='menu' size='sm'>
                    About us
                </Button>
            </Toolbar>
            <WindowContent style={{backgroundColor: 'white', border: '3px solid gray', borderRadius: '5px'}}>
                <div style={{width: '700px'}}>
                    <div style={{width: '100%'}}>
                    {
                        Array.from({length: 7}).map((_, i) => (
                            <div style={{display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', cursor: 'pointer'}}>
                                {
                                    Array.from({length: 7}).map((_, j) => (
                                        (storage[i] && storage[i][j] && (
                                            <div onClick={() => selectFile(i, j)} style={{cursor: "pointer", display: "flex", justifyContent: "center", flexDirection: 'column', paddingRight: '30px'}}>
                                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    <img
                                                        src={fetchIcon(storage[i][j].type)}
                                                        alt={storage[i][j].name}
                                                        style={{ height: '70px', filter: storage[i][j].selected ? 'sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)' : 'none',}}
                                                    />
                                                </div>
                                                <p style={{color: storage[i][j].selected ? 'white' : 'black', textAlign: 'center', backgroundColor: storage[i][j].selected ? '#000080' : 'transparent'}}>{storage[i][j].name}</p>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>
                        ))
                    }
                    </div>
                </div>
            </WindowContent>
            <Frame variant='well' className='footer'>
                <p>Notes App, the file name will appear here : )</p>
            </Frame>
        </>
    )
};

export default Explorer;