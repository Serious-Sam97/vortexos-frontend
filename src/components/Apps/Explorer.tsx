// @ts-nocheck

import { useEffect, useState } from "react";
import { useProcessContext } from "../../contexts/ProcessContext";
import { useOSContext } from "../../contexts/OSContext";
import { Button, Frame, MenuList, MenuListItem, Toolbar, WindowContent } from "react95";
import { Program } from "../../interfaces/Program";
import { IExplorer } from "../../interfaces/IExplorer";

const Explorer: React.FC<IExplorer> = ({level}) => {
    const { addProcess, fetchIcon, programs } = useProcessContext();
    const { storage, setStorage } = useOSContext();
    const [ isFileOpen, setIsFileOpen ] = useState(false);
    const [ newFileTemp, setNewFileTemp ] = useState('');
    const [ isAddingFile, setIsAddingFile ] = useState(false);

    useEffect(() => {
        // setStorage([
        //     [
        //         programs[0],
        //     ]
        // ])
    }, []);

    const addFile = (program: Program) => {
        let nextLvlAvailable = [0, 0];

        for (let lvlIndex = 0; lvlIndex < storage.length; lvlIndex++) {
            const line = storage[lvlIndex];
            for (let columnIndex = 0; columnIndex < line.length; columnIndex++) {
                const column = line[columnIndex];
                if (column.length >= 4) {
                    continue;
                }
                nextLvlAvailable = [lvlIndex, columnIndex];
            }
        }

        console.log(nextLvlAvailable);

        const tempStorage = storage;

        if (!tempStorage[nextLvlAvailable[0]]) {
            setStorage([
                [
                    program
                ]
            ]);
        }

        tempStorage[nextLvlAvailable[0]][nextLvlAvailable[1]] = program;
        console.log(tempStorage);

        setStorage(tempStorage);
        setIsFileOpen(false);
    };

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

    return (
        <>
            <Toolbar>
                <Button variant='menu' size='sm' onClick={() => setIsFileOpen(!isFileOpen)}>
                    New File
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
                            {
                                programs.map((program, index) => (
                                    <MenuListItem onClick={() => addFile(program)} key={index} style={{cursor: 'pointer', display: 'flex'}}>
                                        <img src={program.icon} alt={program.name} style={{width: '20px', height: '20px', marginRight: '10px'}} />
                                        <p>{program.name}</p>
                                    </MenuListItem>
                                ))
                            }
                        </MenuList>
                    )
                }
            </Toolbar>
            <WindowContent style={{backgroundColor: 'white', border: '3px solid gray', borderRadius: '5px'}}>
                <div style={{width: '700px'}}>
                    <div style={{width: '100%'}}>
                    {
                        Array.from({length: 7}).map((_, i) => (
                            <div style={{display: 'flex', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px'}}>
                                {
                                    Array.from({length: 7}).map((_, j) => (
                                        (storage[i] && storage[i][j] && (
                                            <div onClick={() => selectFile(i, j)} style={{cursor: "pointer", display: "flex", justifyContent: "center", flexDirection: 'column', paddingRight: '30px'}}>
                                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    <img
                                                        src={storage[i][j].icon}
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
                <p>Explorer</p>
            </Frame>
        </>
    )
};

export default Explorer;