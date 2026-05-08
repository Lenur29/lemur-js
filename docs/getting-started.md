# Getting Started

Локальное поднятие LemurJS с нуля до работающего API.

## 1. Системные требования

- macOS (скрипт `infra/local/up.sh` рассчитан на macOS + Homebrew)
- [Homebrew](https://brew.sh)
- Docker Desktop или OrbStack (для PostgreSQL)
- Node.js **24** и pnpm **10**

Удобнее всего поставить Node через `nvm`/`fnm` (`nvm install 24 && nvm use 24`)
и pnpm через `corepack enable && corepack prepare pnpm@10.30.1 --activate`.

`up.sh` сам поставит через `brew` всё остальное (`dnsmasq`, `mailpit`, `caddy`,
`minio`, `mc`).

## 2. Клонирование и зависимости

```bash
git clone <repo-url> lemurjs
cd lemurjs
pnpm install
```

## 3. Поднять локальный стек

```bash
pnpm dev:up
```

Скрипт идемпотентный — повторный запуск ничего не сломает. Что он делает:

- настраивает `dnsmasq` как `*.lemurjs.local → 127.0.0.1`;
- запускает PostgreSQL в Docker (`localhost:6720`, db `app`, user/pass `root`/`root`);
- стартует Mailpit (UI `http://localhost:8025`, SMTP `localhost:1025`);
- стартует MinIO (S3 API `http://localhost:9000`, консоль `http://localhost:9001`,
  бакеты `lemurjs-uploads`, `lemurjs-private`);
- регистрирует Caddy-фрагмент с маршрутами:
  - `https://api.lemurjs.local → localhost:3020`
  - `https://app.lemurjs.local → localhost:3030`

При первом запуске потребуется ввести `sudo` (для `dnsmasq`/`caddy`/`/etc/resolver`).
Чтобы убрать предупреждение в браузере, выполните `sudo caddy trust`.

Остановка:

```bash
pnpm dev:down
```

> **Conductor-воркспейсы.** Если вы используете Conductor, у каждого воркспейса
> свои порты — Conductor сам пробрасывает `https://api.<workspace>.lemurjs.local`
> на нужный локальный порт. В этом случае `PORT` в `.env.yml` подставляется
> Conductor'ом и `pnpm dev:up` запускать не нужно.

## 4. Конфиг API

```bash
cp apps/api/.env.example.yml apps/api/.env.yml
```

Дефолтные значения совпадают с тем, что поднимает `dev:up` — менять ничего не
нужно. Если используете Conductor, выставьте `PORT` и `POSTGRES_PORT` в значения
из «Workspace setup», а `APP_URL`/`LEMUR_APP_URL` — на доменные имена воркспейса
(`api.<workspace>.lemurjs.local`, `app.<workspace>.lemurjs.local`).

## 5. Сидинг базы

Один раз (или при `--clean`) создаём `superadmin@lemur.test`:

```bash
pnpm --filter @lm/cli dev db seed --env local --clean
```

> Пароль выводится в терминал в конце команды.

В `local`-режиме TypeORM запускается с `synchronize: true`, поэтому схема
накатывается из сущностей автоматически — отдельных миграций пока нет.

## 6. Запуск API

```bash
pnpm dev:api
```

Признак успешного старта в логах:

```
[NestApplication] Nest application successfully started
```

Проверка:

```bash
curl -i -X POST -H "Content-Type: application/json" \
  --data '{"query":"{ __typename }"}' \
  http://localhost:3020/graphql
```

Ожидаемый ответ — `200 OK` с `{"data":{"__typename":"Query"}}`. Если используете
Conductor, замените `localhost:3020` на порт из «Workspace setup» (или дёрните
через `https://api.<workspace>.lemurjs.local/graphql`).

## 7. Запуск фронтенда

В отдельном терминале:

```bash
pnpm dev:app
```

Откроется на `https://app.lemurjs.local` (через Caddy) или
`http://localhost:3030` напрямую.

## Траблшутинг

- **`pnpm install` падает на peer-зависимостях** — проверьте, что `node -v`
  показывает `v24.x` и `pnpm -v` — `10.x`.
- **`pnpm dev:up` зависает на `dnsmasq is ready`** — убедитесь, что Docker уже
  запущен; скрипт ждёт его на следующем шаге.
- **API падает с `An instance of … has failed the validation`** — нет какой-то
  переменной в `apps/api/.env.yml`. Сравните с `apps/api/.env.example.yml`.
- **API падает с `ECONNREFUSED 127.0.0.1:6720`** — не поднялся Postgres.
  Перезапустите `pnpm dev:up` или загляните в `docker ps`.
- **Браузер ругается на сертификат** — выполните `sudo caddy trust`.
