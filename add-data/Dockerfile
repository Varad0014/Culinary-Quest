FROM mongo:latest

COPY init-data.js /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init-data.js
