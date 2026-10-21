\# Top 4 Bakery



A static bakery website served by Nginx and packaged with Docker. The core feature is the \*\*Order\*\* flow: a visitor opens the Menu, goes to Order, fills in the order form, and submits it.



\## Prerequisites



\- Git

\- Docker Desktop with the Docker Engine running

\- Tested with: Docker \[ISI hasil `docker --version`], Docker Compose \[ISI hasil `docker compose version`]

\- Tested on: Windows



\## 1. Clone the repository



```bash

git clone https://github.com/dealovadewi26-star/Top4-Bakery.git

cd Top4-Bakery

git checkout chore/dockerize-project

```



\## 2. Configure environment variables



Create your local `.env` from the example file:



```powershell

\# Windows PowerShell

copy .env.example .env

```



```bash

\# macOS / Linux

cp .env.example .env

```



| Variable | Description | Default |

|----------|-------------|---------|

| `HOST\_PORT` | Port on your computer used to open the website | `8080` |



`.env` is listed in `.gitignore`. Do not commit it.



\## 3. Build and start



```bash

docker compose up --build -d

```



This builds the image `group06/top4-bakery:week6` (based on `nginx:1.27-alpine`) and starts the `web` service in the background.



\## 4. Access the app



| Item | Value |

|------|-------|

| App URL | http://localhost:8080 |

| Host port | `8080` (change with `HOST\_PORT` in `.env`) |

| Container port | `80` |

| Container name | `top4-bakery` |



\## 5. Verify it works



| ID | Check | Command / Action | Expected result |

|----|-------|------------------|-----------------|

| V-01 | Service is running | `docker compose ps` | Service `web` shows `running`, then `healthy` after a few seconds |

| V-02 | Health response | `curl.exe -I http://localhost:8080/index.html` | `HTTP/1.1 200 OK` |

| V-03 | Core function | Open http://localhost:8080, go to Menu, then Order, fill in the form and submit | The pages load and the order form can be submitted |

| V-04 (optional) | Restart | `docker compose restart`, then reopen the page | The website still works |



On macOS / Linux, use `curl -I http://localhost:8080/index.html` for V-02.



\## 6. View logs and status



```bash

docker compose ps

docker compose logs web

docker compose logs -f web

```



\## 7. Stop and clean up



```bash

docker compose down

```



This stops and removes the container and the default network.



\## Troubleshooting



| Symptom | Cause | Fix |

|---------|-------|-----|

| `port is already allocated` | Port 8080 is used by another program | Change `HOST\_PORT` in `.env`, then run `docker compose up --build -d` again |

| `cannot connect to the Docker daemon` or `dockerDesktopLinuxEngine` error | Docker Desktop is not running | Open Docker Desktop and wait until the engine is running |

| Browser cannot open the page | Container not running or wrong port | Run `docker compose ps`, check the port mapping, read `docker compose logs web` |

| `.env` not found or `HOST\_PORT` ignored | `.env` was not created | Run `copy .env.example .env` and start again |

| Changes to the website do not appear | Old image is still used | Run `docker compose up --build -d` again |

| Status stays `starting` | Healthcheck is still waiting | Wait up to 30 seconds, then run `docker compose ps` again |

| `LF will be replaced by CRLF` warning | Line ending difference on Windows | Safe to ignore |



\## Known limitations



\- This is a static website served by Nginx. There is no backend or database, so no data is stored on a server.

\- Tested only with Docker Desktop on Windows.







