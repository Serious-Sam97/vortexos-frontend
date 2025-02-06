import React from 'react';
import { Button, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";

interface GameListProps {
    setAddGame: (value: boolean) => void;
}

const GameList: React.FC<GameListProps> = ({ setAddGame }) => {
    const headers = ['Platform', 'Title', 'Completed', 'Started Date', 'Completed Date'];
    const games: any[] = [];

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
                                    { game.platform }
                                </TableDataCell>
                                <TableDataCell>{game.title}</TableDataCell>
                                <TableDataCell>{game.completed}</TableDataCell>
                                <TableDataCell>{game.started_date}</TableDataCell>
                                <TableDataCell>{game.completed_date}</TableDataCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default GameList;