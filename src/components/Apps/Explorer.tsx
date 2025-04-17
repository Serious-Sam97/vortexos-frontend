import { useEffect, useState } from "react";
import axios from 'axios';
import ExplorerIcon from '/explorer.png';
import NotesIcon from '/notes.png';
import { useProcessContext } from "../../contexts/ProcessContext";

const Explorer: React.FC = () => {
    const { addProcess } = useProcessContext();

    const [storage, setStorage] = useState([
        [
            {
                type: 'folder',
                name: 'New Folder',
                selected: false,
            },
            {
                type: 'notes',
                name: 'Note test',
                selected: false,
            },
            {
                type: 'notes',
                name: 'Cake',
                selected: false,
            }
        ]
    ]);

    const fetchIcon = (type: string) => {
        switch(type) {
            case 'folder':
                return ExplorerIcon;
                break;
            case 'notes':
                return NotesIcon;
                break;
        }
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

    useEffect(() => {
        axios.get('http://localhost:8080/files');
    }, []);
    return (
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
    )
};

export default Explorer;