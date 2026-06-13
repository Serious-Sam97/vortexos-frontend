import { FormEvent, useState } from "react";
import { Button, TextInput, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import bg from "/clouds.jpg";
import logo from "/w95.png";

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: url(${bg}) center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Field = styled.label`
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
`;

const Login: React.FC = () => {
    const { login, register } = useAuth();
    const [mode, setMode] = useState<"login" | "register">("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        if (busy || !username.trim() || !password) return;
        setBusy(true);
        setError(null);
        try {
            if (mode === "login") await login(username.trim(), password);
            else await register(username.trim(), password);
            // Success: AuthContext flips isAuthenticated → the gate unmounts this screen.
        } catch (err) {
            setError(err instanceof Error ? err.message : "Sign in failed.");
            setBusy(false);
        }
    };

    const toggleMode = () => {
        setMode((m) => (m === "login" ? "register" : "login"));
        setError(null);
    };

    return (
        <Backdrop>
            <Window style={{ width: 360 }}>
                <WindowHeader style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img src={logo} alt="" style={{ width: 18, height: 18 }} />
                    <span>{mode === "login" ? "Enter Network Password" : "New VortexOS Account"}</span>
                </WindowHeader>
                <WindowContent>
                    <form onSubmit={submit}>
                        <p style={{ marginTop: 0, marginBottom: 14, fontSize: 13 }}>
                            {mode === "login"
                                ? "Type a user name and password to log on to VortexOS."
                                : "Choose a user name and password to create your account."}
                        </p>

                        <Field>
                            User name:
                            <TextInput
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={busy}
                                autoFocus
                            />
                        </Field>
                        <Field>
                            Password:
                            <TextInput
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={busy}
                            />
                        </Field>

                        {error && (
                            <p style={{ color: "#aa0000", fontSize: 12, margin: "4px 0 10px" }}>{error}</p>
                        )}

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 6 }}>
                            <Button type="submit" primary disabled={busy || !username.trim() || !password}>
                                {busy ? "Please wait…" : mode === "login" ? "OK" : "Create"}
                            </Button>
                            <Button type="button" onClick={toggleMode} disabled={busy}>
                                {mode === "login" ? "New user…" : "Cancel"}
                            </Button>
                        </div>
                    </form>
                </WindowContent>
            </Window>
        </Backdrop>
    );
};

export default Login;
