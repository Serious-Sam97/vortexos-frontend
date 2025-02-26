import { useEffect, useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";
import axios from 'axios';
import { Button, Frame, MenuList, MenuListItem, Toolbar, WindowContent } from "react95";
import { Game } from "../../interfaces/Game";
import PendingList from "../Backlogger/PendingList";

const Backlogger: React.FC = () => {
    const [ page, setPage ] = useState(0);
    const [ games, setGames ] = useState<Game[]>([]);
    const [ isFileOpen, setIsFileOpen ] = useState(false);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        setGames([]);
        axios.get('http://localhost:8080/games')
            .then(data => setGames(data.data));
    }

    const fileOptions = (page: number) => {
        setPage(page);
        setIsFileOpen(false);
    }

    const saveAndGoBack = () => {
        setPage(0);
        fetchGames();
    }

    const pageFlow = [
        {
            component: (<GameList setGames={setGames} fetchGames={fetchGames} games={games}/>),
            text: 'Game list',
        },
        {
            component: (<AddGame saveAndGoBack={saveAndGoBack}/>),
            text: 'Add new Game to your Backlog',
        },
        {
            component: (<PendingList setGames={setGames} fetchGames={fetchGames} games={games}/>),
            text: 'Backloged games, ready to play!',
        },
    ];
    
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
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(1)}>
                                New Game
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(0)}>
                                <p>Game List</p>
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(2)}>
                                <p>Backlog</p>
                            </MenuListItem>
                        </MenuList>
                    )
                }
                <Button variant='menu' size='sm' onClick={() => setIsFileOpen(false)}>
                    Edit
                </Button>
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
            </Toolbar>
            <WindowContent>
                { pageFlow[page].component }
            </WindowContent>
            <Frame variant='well' className='footer'>
            { pageFlow[page].text }
            </Frame>
        </>
    )
};

export default Backlogger;