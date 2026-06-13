# Phase 5 — Network Neighborhood & Messaging

**Goal:** make multi-user *social*. Users get a shared drive, can browse each other's shared
folders (Network Neighborhood), and can send each other live WinPopup/"Net Send" messages
with a "who's online" presence list. Builds directly on the Phase 3 accounts + JWT.

**Decision (2026-06-13):** realtime (M3) uses a **raw WebSocket + JSON** protocol, with the
JWT validated on the connect handshake. No STOMP/SockJS.

## Milestones (ship-and-verify)

### M1 · Shared `/mnt/public` drive
A common bucket every signed-in user can read **and** write.
- **Backend:** public-file endpoints (`/public/files` GET/POST/DELETE + `/public/files/rename`)
  that operate on `File` rows with a reserved `ownerId = 0` (PUBLIC) and are **not** scoped
  to the caller. Reuses the existing owner-keyed `JpaFileRepository` finders with `0`. Still
  requires auth (any logged-in user).
- **Frontend:** mount a second `CloudFS` at `/mnt/public` backed by a public API
  (`createCloudApi(base, "/public/files")`); load it after sign-in alongside the user's
  `/mnt/cloud`.
- **Verify:** user A writes `/mnt/public/hello.txt`; user B sees it. Private `/mnt/cloud`
  stays separate.

### M2 · Network Neighborhood
Browse other users' **shared** folders, read-only.
- **Backend:** a `shared` flag on `File` (a user marks files shared); endpoints to list users
  and to list a given user's shared files.
- **Frontend:** a *Network Neighborhood* app — a list of users, drill into one to see their
  shared files, open them read-only. Add it to My Computer / the desktop.
- **Verify:** A shares a file; B sees A under Network Neighborhood and can open it; non-shared
  files stay private.

### M3 · Messaging + presence (raw WebSocket)
- **Backend:** `spring-boot-starter-websocket`, one `WebSocketHandler` at `/ws`, JWT validated
  on handshake. A small JSON protocol: `{type:"msg", to, body}`, `{type:"presence", users}`.
  Tracks connected users; broadcasts presence on connect/disconnect; routes direct messages.
- **Frontend:** a WebSocket client (authenticated with the bearer token), a *WinPopup*
  messenger app (pick a recipient from the online list, send/receive), and a tray/presence
  indicator. Incoming messages pop a dialog.
- **Verify:** two browser sessions; A sends to B → B sees it live; presence updates as each
  connects/disconnects.

## Notes / risks
- `/mnt/public` writes go through the normal fs syscalls, so an app needs the `fs` permission
  (Explorer/Terminal already have it).
- Public files (`ownerId = 0`) never collide with private files: different path prefixes
  (`/mnt/public/…` vs `/mnt/cloud/…`) and different owners.
- WebSocket auth: browsers can't set headers on the WS handshake, so the token goes as a
  query param (`/ws?token=…`) or first message; validate before joining the presence set.
- Keep the in-thread, REST-first staging: M1/M2 need no new transport; only M3 adds WebSocket.
