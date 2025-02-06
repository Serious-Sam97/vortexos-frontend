import { useEffect, useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";
import axios from 'axios';

const Backlogger: React.FC = () => {
    const [addGame, setAddGame] = useState(false);
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = () => {
        axios.get('http://localhost:8080/games')
            .then(data => setGames(data.data));
    }

    const saveAndGoBack = () => {
        setAddGame(false);
        fetchGames();
    }
    
    return (
        <>
            {
                addGame
                    ? (<AddGame saveAndGoBack={saveAndGoBack}/>)
                    : (<GameList games={games} setAddGame={setAddGame}/>)
            }
        </>
    )
};

export default Backlogger;