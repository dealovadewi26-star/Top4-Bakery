# Top 4 Bakery - static website served by Nginx
FROM nginx:1.27-alpine

# Remove the default Nginx welcome page, then copy the site files
# (.dockerignore keeps Docker files, README and editor settings out)
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/

# Nginx listens on port 80 inside the container
EXPOSE 80

# Mark the container healthy only when the home page answers
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/index.html || exit 1

# Base image already starts Nginx in the foreground (CMD ["nginx","-g","daemon off;"])
