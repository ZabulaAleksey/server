# Server - local instructions

Before working here, read `~/codex-workspace/AGENTS.md`.

## Project context

- Small Express 5 server with `server.js` as the runtime entry point and `public/` for served assets.
- Keep HTTP input validation and filesystem boundaries explicit; never expose local secrets or arbitrary files.
- Use `node server.js` or the existing `start.bat` for local execution.
- The current `npm test` script is a failing placeholder and must not be reported as a passing test suite.
- Avoid editing generated dependencies under `node_modules/`.

Load only task-relevant AI Dev Team guidance; do not preload all rules, SPEC files, or `LEARNING_LOG.md`.
