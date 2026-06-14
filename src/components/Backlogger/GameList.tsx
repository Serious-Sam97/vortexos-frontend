import React, { useEffect, useState } from 'react';
import { ProgressBar } from "react95";
import axios from 'axios';
import { Game } from '../../interfaces/Game';
import { useOSContext } from '../../contexts/OSContext';
import { ConsoleArt, ActionButton, LibraryHeader } from './consoleArt';

interface GameListProps {
    games: Game[];
    setGames: (values: Game[]) => void;
    fetchGames: () => void;
}

const GameList: React.FC<GameListProps> = ({ games, fetchGames, setGames }) => {
    const { changeCursor } = useOSContext();
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
        axios.delete(`${import.meta.env.VITE_API_URL}/games/${game.id}`)
            .then(() => fetchGames());
    }

    const completeGame = (game: Game) => {
        setLoading(true);
        axios.post(`${import.meta.env.VITE_API_URL}/games/${game.id}/complete`)
            .then(() => fetchGames());
    }

    const updateNotes = (event: React.ChangeEvent<HTMLTextAreaElement>, game: Game) => {
        axios.put(`${import.meta.env.VITE_API_URL}/games/${game.id}`, {
            notes: event.target.value
        });
    }

    if (loading) {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 36, minHeight: 200 }}>
                <img src="/playstation-logo.png" alt="" style={{ height: 60 }} />
                <p style={{ fontWeight: "bold", letterSpacing: 1 }}>Loading your game library…</p>
                <div style={{ width: 260 }}><ProgressBar value={Math.floor(percent)} /></div>
            </div>
        )
    }

    return (
        <div style={{ padding: 8 }}>
            <LibraryHeader title="My Game Library" right={`${games.length} title(s)`} />
            {
                !games.length ?
                    (
                        <div style={{ textAlign: "center", padding: 24, color: "#444" }}>
                            <div style={{ fontSize: 40, marginBottom: 8 }}>🕹️</div>
                            <p style={{ fontWeight: "bold" }}>No games yet.</p>
                            <p style={{ fontSize: 12 }}>Use <b>File ▸ New Game</b> to add one to your collection.</p>
                        </div>
                    )
                    :
                    (
                        <div style={{ maxHeight: '52vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 2 }}>
                            {games.map((game, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        padding: 8,
                                        background: '#fff',
                                        border: '2px solid',
                                        borderColor: '#808080 #ffffff #ffffff #808080',
                                    }}
                                >
                                    <ConsoleArt name={game.platform.name} size={58} />

                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontWeight: 'bold', fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {game.title}
                                        </div>
                                        <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>
                                            {game.platform.name} · Started {game.startedDate}
                                            {game.completed && game.completedDate ? ` · Finished ${game.completedDate}` : ''}
                                        </div>
                                        {game.completed && (
                                            <textarea
                                                value={game.notes || ''}
                                                placeholder="Your thoughts on this game…"
                                                onChange={(event) => onChangeNotes(event, index)}
                                                onBlur={(event) => updateNotes(event, game)}
                                                rows={2}
                                                style={{
                                                    marginTop: 6, width: '100%', resize: 'vertical', boxSizing: 'border-box',
                                                    border: '2px solid', borderColor: '#808080 #fff #fff #808080', padding: 4,
                                                    fontFamily: "'ms_sans_serif', sans-serif", fontSize: 12,
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                                        <span
                                            style={{
                                                fontSize: 11, fontWeight: 'bold', padding: '2px 8px', color: '#fff',
                                                background: game.completed ? '#107c10' : '#1084d0', whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {game.completed ? '✓ Completed' : '▶ Playing'}
                                        </span>
                                        <div style={{ display: 'flex', gap: 6 }}>
                                            {!game.completed && (
                                                <ActionButton $tone="green" onClick={() => completeGame(game)}>✓ Complete</ActionButton>
                                            )}
                                            <ActionButton $tone="red" onClick={() => deleteGame(game)}>✕ Delete</ActionButton>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
            }
        </div>
    );
};

export default GameList;
