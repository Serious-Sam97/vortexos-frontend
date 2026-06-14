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

const PendingList: React.FC<GameListProps> = ({ games, fetchGames, setGames }) => {
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

    const startGame = (game: Game) => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/games/${game.id}/start`)
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
                <p style={{ fontWeight: "bold", letterSpacing: 1 }}>Loading your backlog…</p>
                <div style={{ width: 260 }}><ProgressBar value={Math.floor(percent)} /></div>
            </div>
        );
    }

    return (
        <div style={{ padding: 8 }}>
            <LibraryHeader title="Backlog" right={`${games.length} pending`} />
            {
                !games.length ?
                    (
                        <div style={{ textAlign: "center", padding: 24, color: "#444" }}>
                            <div style={{ fontSize: 40, marginBottom: 8 }}>📋</div>
                            <p style={{ fontWeight: "bold" }}>Backlog's empty.</p>
                            <p style={{ fontSize: 12 }}>Add games via <b>File ▸ New Game</b> — they'll queue up here.</p>
                        </div>
                    )
                    :
                    (
                        <div style={{ maxHeight: '52vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 2 }}>
                            {games.map((game, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 12, padding: 8, background: '#fff',
                                        border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080',
                                    }}
                                >
                                    <ConsoleArt name={game.platform.name} size={58} />

                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontWeight: 'bold', fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {game.title}
                                        </div>
                                        <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>
                                            {game.platform.name} · Logged {game.startedDate}
                                        </div>
                                        <textarea
                                            value={game.notes || ''}
                                            placeholder="Why do you want to play this?…"
                                            onChange={(event) => onChangeNotes(event, index)}
                                            onBlur={(event) => updateNotes(event, game)}
                                            rows={1}
                                            style={{
                                                marginTop: 6, width: '100%', resize: 'vertical', boxSizing: 'border-box',
                                                border: '2px solid', borderColor: '#808080 #fff #fff #808080', padding: 4,
                                                fontFamily: "'ms_sans_serif', sans-serif", fontSize: 12,
                                            }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                                        <span style={{ fontSize: 11, fontWeight: 'bold', padding: '2px 8px', color: '#fff', background: '#806000', whiteSpace: 'nowrap' }}>
                                            ⏳ Backlog
                                        </span>
                                        <div style={{ display: 'flex', gap: 6 }}>
                                            <ActionButton $tone="green" onClick={() => startGame(game)}>▶ Start</ActionButton>
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

export default PendingList;
