import { useEffect, useState } from "react";
import GameList from "../Backlogger/GameList";
import AddGame from "../Backlogger/AddGame";
import axios from "axios";
import { Button, Frame, MenuList, MenuListItem, Toolbar, WindowContent } from "react95";
import { Game } from "../../interfaces/Game";
import PendingList from "../Backlogger/PendingList";

const Backlogger: React.FC = () => {
    const [page, setPage] = useState(1);
    const [games, setGames] = useState<Game[]>([]);
    const [isFileOpen, setIsFileOpen] = useState(false);
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
        setIsFileOpen(false);
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
        <>
            <Toolbar>
                <Button variant="menu" size="sm" onClick={() => setIsFileOpen(!isFileOpen)}>
                    File
                </Button>
                {isFileOpen && (
                    <MenuList style={{ position: "absolute", left: "3%", top: "100%", zIndex: 99999 }}>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => fileOptions(0)}>
                            New Game
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => fileOptions(1)}>
                            Game List
                        </MenuListItem>
                        <MenuListItem style={{ cursor: "pointer" }} onClick={() => fileOptions(2)}>
                            Backlog
                        </MenuListItem>
                    </MenuList>
                )}
            </Toolbar>
            <WindowContent>{body()}</WindowContent>
            <Frame variant="well" className="footer">
                {pageFlow[page].text}
            </Frame>
        </>
    );
};

export default Backlogger;
