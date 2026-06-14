import { useEffect, useState } from "react";
import { Button, Checkbox, Select, TextInput } from "react95";
import axios from "axios";
import { Platform } from "../../interfaces/Platform";
import { useDialog } from "../Dialog/DialogProvider";
import { ConsoleArt, LibraryHeader } from "./consoleArt";

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
        <div style={{ padding: 8 }}>
            <LibraryHeader title="Add a New Game" />

            <div style={{ display: "flex", gap: 14 }}>
                <fieldset style={{ flex: 1, minWidth: 0 }}>
                    <legend>Details</legend>
                    <label style={{ display: "block", fontWeight: "bold", marginBottom: 3 }}>Platform</label>
                    <Select
                        formatDisplay={() => selectedPlatform.name || "Select…"}
                        labelId="opt.name"
                        options={[{ value: 0, label: "Select…", id: 0, name: "" }, ...platforms]}
                        menuMaxHeight={180}
                        width={200}
                        onChange={(value: any) => setSelectedPlatform(value)}
                    />

                    <label style={{ display: "block", fontWeight: "bold", margin: "12px 0 3px" }}>Title</label>
                    <TextInput value={game} placeholder="e.g. Final Fantasy VII" onChange={(e) => setGame(e.target.value)} fullWidth />

                    <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6 }}>
                        <Checkbox checked={backlog} onChange={() => setBacklog(!backlog)} />
                        <span>Add to backlog (not started yet)</span>
                    </div>
                </fieldset>

                <fieldset style={{ width: 120, flexShrink: 0 }}>
                    <legend>Console</legend>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
                        {selectedPlatform.name ? (
                            <ConsoleArt name={selectedPlatform.name} size={72} />
                        ) : (
                            <span style={{ fontSize: 11, color: "#666", textAlign: "center" }}>Pick a platform to preview the console</span>
                        )}
                    </div>
                </fieldset>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
                <Button primary disabled={saving || !selectedPlatform.id || !game} onClick={saveGame} style={{ minWidth: 120 }}>
                    {saving ? "Saving…" : "Save Game"}
                </Button>
            </div>
        </div>
    );
};

export default AddGame;
