import { useEffect, useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";
import axios from "axios";
import { Button } from "react95";
import { AppShell, AppBody, MenuBar, Menu, MenuItem, StatusBar, StatusPanel } from "../chrome/AppChrome";
import { Game } from "../../interfaces/Game";
import PendingList from "../Backlogger/PendingList";

const Backlogger: React.FC = () => {
    const [page, setPage] = useState(1);
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchGames = (pending: boolean) => {
        setGames([]);
        setLoading(true);
        setError(false);
        axios
            .get(`${import.meta.env.VITE_API_URL}/games${pending ? "/backlog" : ""}`)
            .then((data) => {
                setLoading(false);
                if (Array.isArray(data.data)) setGames(data.data);
                else setError(true); // backend missing/misconfigured → non-array (e.g. HTML) response
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    };

    useEffect(() => {
        switch (page) {
            case 0:
                break; // AddGame page: nothing to fetch
            case 1:
                fetchGames(false);
                break;
            case 2:
                fetchGames(true);
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const fileOptions = (target: number) => {
        setPage(target);
    };

    const saveAndGoBack = (target: number) => {
        setPage(target);
    };

    const pageFlow = [
        { component: <AddGame saveAndGoBack={saveAndGoBack} />, text: "Add a new game to your backlog" },
        { component: <GameList setGames={setGames} fetchGames={() => fetchGames(false)} games={games} />, text: "Game list" },
        { component: <PendingList setGames={setGames} fetchGames={() => fetchGames(true)} games={games} />, text: "Backlogged games, ready to play!" },
    ];

    const body = () => {
        if (page === 0) return pageFlow[0].component;
        if (error)
            return (
                <div style={{ padding: 24, textAlign: "center", color: "#800000" }}>
                    <p style={{ fontWeight: "bold" }}>Could not reach the game server.</p>
                    <p>Start the VortexOS backend (Java, port 8082) and try again.</p>
                    <Button onClick={() => fetchGames(page === 2)} style={{ marginTop: 12 }}>
                        Retry
                    </Button>
                </div>
            );
        if (loading) return <div style={{ padding: 24, textAlign: "center" }}>Loading…</div>;
        return pageFlow[page].component;
    };

    return (
        <AppShell $minW={420} $minH={320}>
            <MenuBar>
                <Menu label="File">
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); fileOptions(0); }}>New Game</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); fileOptions(1); }}>Game List</MenuItem>
                    <MenuItem onMouseDown={(e) => { e.preventDefault(); fileOptions(2); }}>Backlog</MenuItem>
                </Menu>
                <Menu label="Help"><MenuItem $disabled>GameCache — VortexOS</MenuItem></Menu>
            </MenuBar>
            <AppBody style={{ flexDirection: "column", overflow: "auto" }}>{body()}</AppBody>
            <StatusBar>
                <StatusPanel $flex={1}>{pageFlow[page].text}</StatusPanel>
            </StatusBar>
        </AppShell>
    );
};

export default Backlogger;
