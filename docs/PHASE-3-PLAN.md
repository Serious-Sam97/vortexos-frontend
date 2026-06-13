# Phase 3 — Multi-user + Networking

**Goal:** turn VortexOS from a single shared namespace into a real multi-user system with
network accounts. A Win95 login screen gates the desktop; each user gets their own
cloud drive (`/mnt/cloud`) and game library, persisted server-side and synced over the
network. The local in-browser VFS stays per-browser; the *networked* state becomes
per-user.

**Decisions (2026-06-13):**
- **Auth:** full **Spring Security + JWT** (BCrypt password hashing, stateless bearer
  tokens). The textbook, extensible approach.
- **Existing data:** **wipe `vortexos.db`** and recreate the schema clean with owners from
  the start (no backfill). Lose current cloud files / saved games — fine for dev.

## Starting point (backend today)
- No `User` entity, no auth, no Spring Security.
- `File` and `Game` are a single global namespace (no owner column).
- Clean layering: `domain/<x>/` (entity + repo interface) · `infrastructure/repository/`
  (Spring Data `Jpa*Repository`) · `application/` (controllers, dtos, config).
- SQLite, `ddl-auto=update` (prod) / `create-drop` (tests, shared-cache in-memory).
- CORS open to `http://localhost:5173` + the Vercel deploy.

## Milestones (ship-and-verify, like the v2 milestones)

### M1 · Accounts + JWT infrastructure (backend)
- `User` entity (`domain/user/`) + `JpaUserRepository` (`findByUsername`,
  `existsByUsername`).
- Security layer (`application/security/`): `JwtService` (issue/verify HMAC tokens),
  `JwtAuthFilter` (OncePerRequestFilter), `CustomUserDetailsService`, `SecurityConfig`
  (`SecurityFilterChain`, `BCryptPasswordEncoder`, `AuthenticationManager`,
  `CorsConfigurationSource` so CORS still works under security).
- `AuthController`: `POST /auth/register`, `POST /auth/login` → `{ token, username }`.
- Secure everything except `/auth/**`. Keep the existing Game/File/Platform controller
  tests green by running them with `@AutoConfigureMockMvc(addFilters = false)` (they test
  controller logic, not the security layer).
- New deps: `spring-boot-starter-security`, `jjwt` (api/impl/jackson),
  `spring-security-test`. `jwt.secret`/`jwt.expiration` in both main + test properties.
- **Verify:** `./gradlew test` green; register→login returns a token; a protected endpoint
  is 401 without a token and 200 with one (new `AuthControllerTest`).

### M2 · Ownership + per-user scoping (backend)
- Add `ownerId` to `File` and `Game` (a plain `Long`, *not* a `@ManyToOne` — keeps the
  `User` from being serialized into JSON responses, which would leak the password hash).
- Resolve the current user from the JWT principal in the controllers; scope **every**
  File/Game query to that user (`findByPathAndOwnerId`, `findByOwnerId`, …).
- Update Game/File controllers + their tests to be auth-aware (`@WithMockUser` + a seeded
  test user).
- **Verify:** two users can't see each other's files/games; `./gradlew test` green.

### M3 · Login UI (frontend)
- Authentic Win9x "Enter Network Password" screen wired into the boot flow (`Intro`).
- `AuthContext` + session persisted in `localStorage` (`vortex.session` = token+username).
- Register path; **Start ▸ Log Off** clears the session → back to login.
- **Verify (live):** register, log in, reach the desktop; log off returns to login.

### M4 · Wire the OS to the session (frontend)
- `CloudApi` (`createCloudApi`) + Backlogger axios calls attach `Authorization: Bearer`.
- `/mnt/cloud` (CloudFS) becomes *this user's* drive; Backlogger shows *this user's* games.
- Username surfaced in the UI (Start menu banner / tray); a 401 / expired token kicks back
  to the login screen.
- **Verify (live, end-to-end):** two accounts each see only their own cloud files + games
  with the backend running.

### M5 · (stretch)
- A shared, read-mostly `/mnt/public` drive, or fast account-switching.

## Risks / notes
- Spring Security will 401 the existing tests unless filters are disabled or auth is mocked
  — handled per-milestone (M1 disables filters on legacy controller tests; M2 makes them
  auth-aware).
- CORS under Spring Security needs a `CorsConfigurationSource` bean (the existing
  `WebMvcConfigurer` mapping isn't picked up by the security filter chain) — added in M1.
- Token parsing must be wrapped so a malformed token yields 401, not 500.
- Don't serialize the `User` entity in responses (password hash) — use DTOs / `ownerId`.
