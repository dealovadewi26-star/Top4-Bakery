# Top 4 Bakery (Dockerized)

## 1. Project overview
Top 4 Bakery is a static website (HTML, CSS, jQuery) with a home page, menu, order form, contact page, and login / sign-up / forgot-password pages. It has no backend and no database. The Docker setup serves the files with Nginx, so the site runs the same on any computer.

## 2. Prerequisites
- Docker Engine or Docker Desktop with Docker Compose v2
- Check with `docker --version` and `docker compose version`
- Internet access in your browser (the site loads jQuery, Font Awesome, Ionicons, Google Fonts and some images from CDNs)
- Tested with: Docker __VERSION__ on __OS__

## 3. Clone and configure
```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
cp .env.example .env
```
`.env` only contains `HOST_PORT` (default `8080`). Change it if that port is already used. Never commit `.env`.

## 4. Build and start
```bash
docker compose up --build -d
```

## 5. Access the application
Open http://localhost:8080 (or the `HOST_PORT` you set). The container listens on port 80, mapped to `HOST_PORT` on your computer.

## 6. Verify it works
1. `docker compose ps` shows service `web` as `running` and, after about 10 seconds, `healthy`.
2. `curl -I http://localhost:8080/index.html` returns `HTTP/1.1 200 OK`.
3. In the browser, click **Menu**, then **Order**, fill the order form and submit. The page responds as it does without Docker.

## 7. Logs and status
```bash
docker compose ps
docker compose logs -f web
docker inspect --format '{{.State.Health.Status}}' top4-bakery
```

## 8. Stop and clean up
```bash
docker compose down
```
This project stores no data, so there are no volumes to remove.

## 9. Troubleshooting
| Problem | Likely cause | Fix |
|---|---|---|
| `port is already allocated` | Another program uses `HOST_PORT` | Change `HOST_PORT` in `.env`, run `docker compose up -d` again |
| `Cannot connect to the Docker daemon` | Docker is not running | Start Docker Desktop / the Docker service |
| Page loads but has no styling or icons | No internet for CDN files | Connect to the internet and refresh |
| Old content after editing files | Image was not rebuilt | `docker compose up --build -d` |
| Container is `unhealthy` | Nginx failed to start | `docker compose logs web` |

## 10. Known limitations
- The page background in `main.css` points to `bg.jpg`, which is not in the project, so login and sign-up pages show no background image.
- `login.html` and `sign.html` load `../javascript/login.js` and `../javascript/sign.js`, which do not exist in this folder structure, so the login and sign-up validation scripts do not run.
- Login and sign-up are front-end only (no real accounts).
- Fonts, jQuery, icons and some images come from external CDNs, so internet is required.
