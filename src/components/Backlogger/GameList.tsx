import React, { useEffect, useState } from 'react';
import { Button, ProgressBar, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";
import Error from '/error.png';
import axios from 'axios';

interface GameListProps {
    setAddGame: (value: boolean) => void;
    games: any[];
    fetchGames: () => void;
}

const GameList: React.FC<GameListProps> = ({ setAddGame, games, fetchGames }) => {
    const headers = ['Platform', 'Title', 'Started Date', 'Notes','Completed', 'Completed Date', ''];
    const [ percent, setPercent ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        startTimer();
    }, []);

    const startTimer = () => {
        const timer = setInterval(() => {
            setPercent(previousPercent => {
              if (previousPercent === 100) {
                setLoading(false);
                return 0;
              }
              const diff = Math.random() * 20;
              return Math.min(previousPercent + diff, 100);
            });
          }, 500);
          return () => {
            clearInterval(timer);
          };
    };


    const deleteGame = (game) => {
        setLoading(true);
        axios.delete(`http://localhost:8080/games/${game.id}`)
            .then(() => fetchGames());
    }

    if (loading) {
        return (
            <ProgressBar value={Math.floor(percent)} />
        );
    }

    return (
        <>
            <Button style={{marginBottom: '20px'}} onClick={() => setAddGame(true)}>New Game</Button>
            <Table style={{width: '50vw'}}>
                <TableHead>
                    <TableRow>
                        {
                            headers.map(header => (
                                <TableHeadCell key={header}>{header}</TableHeadCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        games.map((game, index) => (
                            <TableRow key={index}>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    { game.platform.name }
                                </TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.title}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.startedDate}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.notes}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.completed}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.completedDate}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <img
                                        onClick={() => deleteGame(game)}
                                        src={Error}
                                        style={{ height: '25px', cursor: 'pointer', marginTop: '10px'}}
                                    />
                                </TableDataCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default GameList;
