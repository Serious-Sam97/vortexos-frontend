import React, { useEffect, useState } from 'react';
import { ProgressBar, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow, TextInput } from "react95";
import Error from '/error.png';
import Trust from '/trust.png';
import axios from 'axios';
import { Game } from '../../interfaces/Game';
import { useOSContext } from '../../contexts/OSContext';
import styled from 'styled-components';

interface GameListProps {
    games: Game[];
    setGames: (values: Game[]) => void;
    fetchGames: () => void;
}

const GameList: React.FC<GameListProps> = ({ games, fetchGames, setGames }) => {
    const { changeCursor } = useOSContext();
    const headers = ['Platform', 'Title', 'Started Date', 'Notes','Completed', 'Completed Date', ''];
    const [ percent, setPercent ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        startTimer();
    }, []);

    const startTimer = () => {
        changeCursor('loading.cur');
        const timer = setInterval(() => {
            setPercent(previousPercent => {
              if (previousPercent === 100) {
                setLoading(false);
                changeCursor('arrow.cur');
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

    const onChangeNotes = (event: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        setGames(games.map((game, gameIndex) => {
            if (gameIndex === index) {
                return {
                    ...game,
                    notes: event.target.value
                }
            }
            return game;
        }));
    }


    const deleteGame = (game: Game) => {
        setLoading(true);
        axios.delete(`http://localhost:8080/games/${game.id}`)
            .then(() => fetchGames());
    }

    const completeGame = (game: Game) => {
        setLoading(true);
        axios.post(`http://localhost:8080/games/${game.id}/complete`)
            .then(() => fetchGames());
    }

    const updateNotes = (event: React.ChangeEvent<HTMLTextAreaElement>, game: Game) => {
        axios.put(`http://localhost:8080/games/${game.id}`, {
            notes: event.target.value
        });
    }

    if (loading) {
        return (
            <ProgressBar value={Math.floor(percent)} />
        )
    }

    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>GAMES!</p>
            {
                !games.length ?
                    (
                        <p>NO GAMES AVAILABLE, Go registry some!</p>
                    )
                    :
                    (
                        <div style={{maxHeight: '50vh', overflowY: 'auto'}}>
                            <Table>
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
                                                    <p>{ game.platform.name }</p>
                                                </TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                    <div style={{ minWidth: '150px' }}>
                                                        <p>{game.title}</p>
                                                    </div>
                                                </TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.startedDate}</TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                    { game.completed ?
                                                        (
                                                            <TextInput style={{minWidth: '20vw'}} onChange={(event) => onChangeNotes(event, index)} value={game.notes || ''} onBlur={(event) => updateNotes(event, game)} multiline rows={4} fullWidth />
                                                        )
                                                        : game.notes
                                                    }
                                                </TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.completed ? 'Yes!' : 'No'}</TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>{game.completedDate}</TableDataCell>
                                                <TableDataCell style={{ textAlign: 'center', verticalAlign: 'middle'}}>
                                                    {
                                                        !game.completed && (
                                                            <div style={{width: '70px' }}>
                                                                <img
                                                                    onClick={() => completeGame(game)}
                                                                    src={Trust}
                                                                    style={{ height: '25px', cursor: 'pointer', marginTop: '10px', marginRight: '20px'}}
                                                                />
                                                                <img
                                                                    onClick={() => deleteGame(game)}
                                                                    src={Error}
                                                                    style={{ height: '25px', cursor: 'pointer', marginTop: '10px'}}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                </TableDataCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    )
            }
        </div>
    );
};

export default GameList;
