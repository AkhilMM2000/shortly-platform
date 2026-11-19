# Local PostgreSQL

Docker provides a repeatable local PostgreSQL environment without installing or configuring PostgreSQL directly on each development machine. The `postgres` container runs PostgreSQL 16 for Shortly Platform's local development needs.

The database listens on port `5432` inside the Docker network. Docker maps it to port `5433` on your host, so local tools and future applications connect to `localhost:5433` without conflicting with a PostgreSQL installation that might already use host port `5432`.

PostgreSQL stores its data in the named volume `shortly_postgres_data`. Named volumes persist database data when the container is stopped, recreated, or updated.

## Configure local environment variables

From this directory, create your local environment file and replace the placeholder password with a local development-only value:

```powershell
Copy-Item .env.example .env
```

The `.env` file is ignored by Git and must not be committed.

## Start and stop PostgreSQL

Run these commands from `infrastructure/docker`:

```powershell
docker compose up -d
docker compose down
```

`docker compose down` stops and removes the container but preserves the named volume. To remove the database data as well, run `docker compose down -v`.

## Check status and logs

```powershell
docker compose ps
docker compose logs postgres
docker compose logs -f postgres
```

Wait until the `postgres` service reports `healthy` before connecting.

## Connect with psql inside the container

With the service running, use the configured database and user:

```powershell
docker compose exec postgres psql -U shortly_user -d shortly_db
```

For a basic readiness check:

```powershell
docker compose exec postgres pg_isready -U shortly_user -d shortly_db
```
