import axios from "axios";
import { getToken, notifyUnauthorized } from "./session";

/**
 * Installs global axios interceptors (once):
 *  - attach `Authorization: Bearer <token>` to every request when signed in;
 *  - on a 401 from an authenticated endpoint, signal session expiry (→ logout).
 * The /auth/* endpoints are exempt from the 401 handler (a 401 there just means
 * "wrong password", not an expired session).
 */
let installed = false;

export function installAuthInterceptors(): void {
    if (installed) return;
    installed = true;

    axios.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            const url: string = error?.config?.url ?? "";
            if (error?.response?.status === 401 && !url.includes("/auth/")) {
                notifyUnauthorized();
            }
            return Promise.reject(error);
        },
    );
}
