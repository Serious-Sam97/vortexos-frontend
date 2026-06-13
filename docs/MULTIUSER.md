# VortexOS — How Accounts, Auth & Per-User Data Work

> VortexOS is multi-user. A Win9x-style login gates the desktop, the Java backend issues a
> signed token, and every networked thing a user owns — their cloud drive and their game
> library — is scoped to them by that token. The local in-browser filesystem stays
> per-browser; the *networked* state is per-account.

## 1. The shape of it

```
LOGIN SCREEN ── POST /auth/login ──▶  Spring Security + JWT
   │  { token, username }                    │ issues HMAC-SHA256 token
   ▼                                         ▼
AuthContext (session in localStorage)   protects /files & /games
   │  Authorization: Bearer <token>          │ scopes every row to ownerId
   ▼                                         ▼
desktop · CloudFS (/mnt/cloud) · Backlogger   per-user File / Game tables
```

No token → the backend answers `401`; the OS drops you back to the login screen.

## 2. Backend — accounts (`vortexos/`)

A `User` lives in `domain/user/` (table `app_user`; `user` is reserved in SQL). It stores a
**BCrypt hash**, never the plaintext, and is never serialized into a response.

`AuthController` exposes two open endpoints:

- `POST /auth/register` → `201 { token, username }` (or `400` blank, `409` duplicate)
- `POST /auth/login` → `200 { token, username }` (or `401` bad credentials)

Everything else requires authentication.

## 3. Backend — Spring Security + JWT

Stateless, token-based. The pieces in `application/security/`:

- **`JwtService`** — issues/verifies HMAC-SHA256 tokens. Secret + lifetime come from
  `jwt.secret` / `jwt.expiration` (override `JWT_SECRET` in any real deployment). A
  malformed/expired token verifies to `null` rather than throwing.
- **`JwtAuthFilter`** — a `OncePerRequestFilter` that reads `Authorization: Bearer <jwt>`,
  validates it, and sets the `SecurityContext`. Wrapped in try/catch so a valid token for a
  deleted user yields *unauthenticated*, not a 500.
- **`CustomUserDetailsService`** — adapts our `User` to Spring's `UserDetails`.
- **`SecurityConfig`** — stateless session policy; `/auth/**` + CORS preflight permitted,
  everything else authenticated; a **401 entry point** (not the Spring default 403) so an
  API client sees `Unauthorized`; `BCryptPasswordEncoder`; and a `CorsConfigurationSource`
  bean (Spring Security manages CORS itself — the old `WebMvcConfigurer` mapping wouldn't
  apply under the filter chain).

## 4. Backend — per-user ownership

`File` and `Game` each carry an `ownerId` — a plain `Long` column, deliberately **not** a
`@ManyToOne User`, so the user (and its hash) can never be serialized into JSON.

Controllers resolve the caller from the JWT principal via the `CurrentUser` helper
(`SecurityContext` → username → user id, or `401`), then scope **every** query to it:

- list → `findByOwnerId` / `gamesList(ownerId)`
- create → stamps `ownerId` from the **token**, never a client-supplied value
- update/delete/etc. → `findByIdAndOwnerId` → returns `404` if the row isn't yours (which
  also avoids leaking that it exists)

Two users at the same path (`/mnt/cloud/notes.txt`) are two independent rows.

## 5. Frontend — session & the token

- **`src/system/session.ts`** is the single source of truth for the token: `getSession` /
  `setSession` / `clearSession`, `getToken()`, and a tiny pub/sub (`setUnauthorizedHandler`
  / `notifyUnauthorized`) used to signal expiry. Persisted under `localStorage`
  key `vortex.session`.
- **`src/system/authApi.ts`** — `register` / `login` via `fetch`, with friendly per-status
  messages and a network-failure catch.
- **`src/contexts/AuthContext.tsx`** — `useAuth()` exposing `session` / `username` /
  `isAuthenticated` / `login` / `register` / `logout`. On mount it registers `logout` as
  the unauthorized handler, so any `401` ends the session.

## 6. Frontend — the gate and the login UI

`LoginScreen` (`src/components/Login/`) is an authentic Win9x "Enter Network Password"
dialog with a login⇄register toggle. The gate is in `Vortex.tsx`:

```tsx
const { isAuthenticated } = useAuth();
if (!isAuthenticated) return <LoginScreen />;   // no session, no desktop
```

The boot flow is unchanged otherwise: `Intro` ("Are you ready?") → `/vortex` → (gate) →
desktop. **Start ▸ Log Off** calls `logout()` and the gate swaps back to the login screen;
the signed-in username also shows in the system tray.

## 7. Frontend — attaching the token, and handling expiry

- **axios** (Backlogger's many calls): a single interceptor in `src/system/http.ts`
  (installed once in `main.tsx`) adds `Authorization: Bearer <token>` to every request and,
  on a `401` from anything except `/auth/*`, calls `notifyUnauthorized()` → logout. No
  per-call edits needed.
- **CloudFS** (`/mnt/cloud`): `createCloudApi` builds the bearer header fresh per request
  (so the current token is always used) and routes `401` through the same handler.

## 8. The cloud drive is loaded *after* sign-in

The kernel builds the `CloudFS` mount at boot, but the backend needs a token — which
doesn't exist until login. So `/mnt/cloud` is **not** loaded at boot. Instead `Vortex`
calls `useReloadCloud()` in an effect keyed on `isAuthenticated`:

```tsx
useEffect(() => { if (isAuthenticated) void reloadCloud(); }, [isAuthenticated, reloadCloud]);
```

`reloadCloud()` resets the CloudFS mirror and re-fetches the signed-in user's files — so it
also handles **switching users** (log off → log in as someone else → their drive). After
loading, `CloudFS` calls `vfs.touch()` so reactive views (the live desktop) learn the
mirror changed.

## 9. Running it locally

1. Backend: `cd vortexos && ./gradlew bootRun` (port 8082). First boot creates the schema;
   delete `vortexos.db` to start fresh.
2. Frontend `.env`: `VITE_API_URL=http://localhost:8082` (already present).
3. `cd vortexos-frontend && npm run dev` (port 5173), register an account, and you're in.

## Where to look

- Backend: `application/security/*`, `application/controller/AuthController.java`,
  `domain/user/User.java`, `domain/{file,game}/*` (`ownerId`), `application/security/CurrentUser.java`.
- Frontend: `src/system/{session,authApi,http}.ts`, `src/contexts/AuthContext.tsx`,
  `src/components/Login/LoginScreen.tsx`, `src/pages/Vortex.tsx`, `src/kernel/fs/CloudFS.ts`.
- Tests: `AuthControllerTest`, `GameControllerTest`, `FileControllerTest` (auth-aware + isolation).
