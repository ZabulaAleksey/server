# Архитектура Server

Текущая реализация — небольшой Express 5 сервер с точкой входа `server.js` и статическими ресурсами в `public/`. Границы файловой системы и HTTP-входа проверяются до доступа к ресурсу.

## Контракты

- Запуск: `node server.js` или `start.bat`.
- Публичный каталог: `public/`.
- Секреты и произвольные локальные файлы не выдаются HTTP-слоем.

## Ограничения

Зависимости объявляются в `package.json`, воспроизводятся через `pnpm-lock.yaml` и материализуются локально в `node_modules/` из machine-level pnpm content store и global virtual store. Прямой запуск `node server.js` входит в compatibility proof этой настройки.

Автоматизированные endpoint/E2E тесты пока отсутствуют; `pnpm test` намеренно завершается ошибкой-заглушкой.

## Контракт зависимостей

- Источник истины (Source of truth): `package.json`, `pnpm-lock.yaml` и `pnpm-workspace.yaml`; канонический менеджер — `pnpm@11.23.0`.
- Чистое восстановление (Clean restore): удалить только disposable `node_modules`, затем выполнить `pnpm install --frozen-lockfile`.
- Общий pnpm content store и global virtual store разрешены; npm/Yarn/Bun lock-файлы запрещены.
- `node_modules` и tool caches можно пересоздавать; `public/`, application source, локальные данные и секреты dependency cleanup не затрагивает.
- Минимальная проверка — `pnpm exec node --check server.js`; `pnpm test` остаётся намеренно падающей заглушкой и не считается успешным gate.
