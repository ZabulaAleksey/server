# Решения Server

## ADR-001: Express как текущий HTTP-слой

Сохраняем Express 5 и единственную точку входа `server.js`, пока не появятся подтверждённые требования к разбиению сервера.

## ADR-002: Безопасный доступ к файлам

Проверка пути и разрешённой области обязательна для каждого HTTP-запроса к файлам.

## ADR-003: pnpm как package manager

С 2026-08-24 проект использует `pnpm@11.23.0`, project-local `pnpm-lock.yaml` и штатный machine-level content-addressable store. Для Node backend успешно пилотируется `virtualStoreType: global`; обязательны frozen restore и прямой `node server.js`/syntax compatibility proof. npm lockfile удаляется только после clean restore и повторной проверки; возврат к npm или project-local virtual store допускается только как документированное решение при доказанной несовместимости.
