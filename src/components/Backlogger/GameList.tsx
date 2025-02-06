import React from 'react';
import { Button, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";

interface GameListProps {
    setAddGame: (value: boolean) => void;
    games: any[];
}

const GameList: React.FC<GameListProps> = ({ setAddGame, games }) => {
    const headers = ['Platform', 'Title', 'Started Date', 'Completed', 'Completed Date'];

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
                                <TableDataCell style={{ textAlign: 'center' }}>
                                    { game.platform.name }
                                </TableDataCell>
                                <TableDataCell style={{ textAlign: 'center' }}>{game.title}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center' }}>{game.startedDate}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center' }}>{game.completed}</TableDataCell>
                                <TableDataCell style={{ textAlign: 'center' }}>{game.completedDate}</TableDataCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default GameList;