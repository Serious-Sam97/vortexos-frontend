import { useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";

const Backlogger: React.FC = () => {
    const [addGame, setAddGame] = useState(false);
    

    return (
        <>
            {
                addGame
                    ? (<AddGame/>)
                    : (<GameList setAddGame={setAddGame}/>)
            }
            
        </>
    )
};

export default Backlogger;