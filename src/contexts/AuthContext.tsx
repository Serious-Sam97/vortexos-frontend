import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { apiLogin, apiRegister } from "../system/authApi";
import { clearSession, getSession, setSession, setUnauthorizedHandler, Session } from "../system/session";

interface AuthValue {
    session: Session | null;
    username: string | null;
    isAuthenticated: boolean;
    login(username: string, password: string): Promise<void>;
    register(username: string, password: string): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSessionState] = useState<Session | null>(() => getSession());

    const apply = useCallback((s: Session) => {
        setSession(s);
        setSessionState(s);
    }, []);

    const login = useCallback(async (u: string, p: string) => apply(await apiLogin(u, p)), [apply]);
    const register = useCallback(async (u: string, p: string) => apply(await apiRegister(u, p)), [apply]);
    const logout = useCallback(() => {
        clearSession();
        setSessionState(null);
    }, []);

    // A 401 from any authenticated request (axios or CloudFS) ends the session.
    useEffect(() => {
        setUnauthorizedHandler(() => setSessionState(null));
        return () => setUnauthorizedHandler(null);
    }, []);

    const value = useMemo<AuthValue>(
        () => ({
            session,
            username: session?.username ?? null,
            isAuthenticated: !!session,
            login,
            register,
            logout,
        }),
        [session, login, register, logout],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
}
