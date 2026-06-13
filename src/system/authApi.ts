import { Session } from "./session";

const BASE = import.meta.env.VITE_API_URL ?? "";

function messageFor(status: number): string {
    switch (status) {
        case 400:
            return "Please enter a user name and password.";
        case 401:
            return "Incorrect user name or password.";
        case 409:
            return "That user name is already taken.";
        default:
            return `Something went wrong (HTTP ${status}).`;
    }
}

async function authRequest(path: string, username: string, password: string): Promise<Session> {
    let res: Response;
    try {
        res = await fetch(`${BASE}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
    } catch {
        throw new Error("Cannot reach the server. Is the backend running?");
    }

    if (!res.ok) {
        throw new Error(messageFor(res.status));
    }

    const data = await res.json();
    return { token: data.token, username: data.username };
}

export const apiRegister = (username: string, password: string): Promise<Session> =>
    authRequest("/auth/register", username, password);

export const apiLogin = (username: string, password: string): Promise<Session> =>
    authRequest("/auth/login", username, password);
