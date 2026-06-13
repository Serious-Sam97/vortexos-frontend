import { useEffect, useState } from "react";
import { Button, Checkbox, GroupBox, Select, TextInput } from "react95";
import axios from "axios";
import { Platform } from "../../interfaces/Platform";
import { useDialog } from "../Dialog/DialogProvider";

interface AddGameProps {
    saveAndGoBack: (page: number) => void;
}

interface PlatformOption {
    value: number;
    label: string;
    id: number;
    name: string;
}

const AddGame: React.FC<AddGameProps> = ({ saveAndGoBack }) => {
    const { alert } = useDialog();
    const [platforms, setPlatforms] = useState<PlatformOption[]>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<Partial<PlatformOption>>({});
    const [game, setGame] = useState("");
    const [backlog, setBacklog] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/platforms`)
            .then((data) =>
                setPlatforms(data.data.map((plat: Platform) => ({ value: plat.id as number, label: plat.name, id: plat.id as number, name: plat.name }))),
            )
            .catch(() =>
                alert({ title: "GameCache", message: "Could not load platforms. Is the game server running?", type: "warning" }),
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveGame = async () => {
        setSaving(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/games`, {
                platform_id: selectedPlatform.id,
                title: game,
                backlog,
            });
            saveAndGoBack(backlog ? 2 : 1);
        } catch {
            setSaving(false);
            await alert({ title: "GameCache", message: "Could not save the game. Is the game server running?", type: "error" });
        }
    };

    return (
        <>
            <GroupBox label="New Game">
                <div>
                    <p>Platform</p>
                    <Select
                        formatDisplay={() => selectedPlatform.name ?? "Select…"}
                        labelId="opt.name"
                        options={[{ value: 0, label: "Select…", id: 0, name: "" }, ...platforms]}
                        menuMaxHeight={160}
                        width={160}
                        onChange={(value: any) => setSelectedPlatform(value)}
                    />
                </div>
                <div style={{ marginTop: 5 }}>
                    <p>Title</p>
                    <TextInput value={game} placeholder="Game title" onChange={(e) => setGame(e.target.value)} fullWidth />
                </div>
                <div style={{ marginTop: 5, display: "flex" }}>
                    <Checkbox checked={backlog} onChange={() => setBacklog(!backlog)} style={{ marginTop: 2 }} />
                    <p>Backlog</p>
                </div>
            </GroupBox>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 15 }}>
                {saving ? (
                    <p>Saving…</p>
                ) : (
                    <Button disabled={!selectedPlatform.id || !game} onClick={saveGame}>
                        Save new game
                    </Button>
                )}
            </div>
        </>
    );
};

export default AddGame;
