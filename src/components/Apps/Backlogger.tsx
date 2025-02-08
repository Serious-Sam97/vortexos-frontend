import { useEffect, useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";
import axios from 'axios';
import { Button, Frame, MenuList, MenuListItem, Separator, Toolbar, WindowContent } from "react95";

const Backlogger: React.FC = () => {
    const [addGame, setAddGame] = useState(false);
    const [ games, setGames ] = useState([]);
    const [ isFileOpen, setIsFileOpen ] = useState(false);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        axios.get('http://localhost:8080/games')
            .then(data => setGames(data.data));
    }

    const fileOptions = (addGame) => {
        setAddGame(addGame);
        setIsFileOpen(false);
    }

    const saveAndGoBack = () => {
        setAddGame(false);
        fetchGames();
    }
    
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
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(false)}>
                                <p>Game List</p>
                            </MenuListItem>
                            <MenuListItem style={{cursor: 'pointer'}} onClick={() => fileOptions(true)}>
                                New Game
                            </MenuListItem>
                        </MenuList>
                    )
                }
                <Button variant='menu' size='sm' disabled>
                    Edit
                </Button>
                <Button variant='menu' size='sm' disabled>
                    Save
                </Button>
            </Toolbar>
            <WindowContent>
                {
                    addGame
                        ? (<AddGame goBack={() => setAddGame(false)} saveAndGoBack={saveAndGoBack}/>)
                        : (<GameList fetchGames={fetchGames} games={games} setAddGame={setAddGame}/>)
                }
            </WindowContent>
            <Frame variant='well' className='footer'>
                {addGame ? 'Add new Game to your Backlog' : 'Game list'}
            </Frame>
        </>
    )
};

export default Backlogger;