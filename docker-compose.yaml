version: "3.9"
services:
  postgres:
    image: "postgres:13"
    ports:
      - "5432:5432"
    env_file:
      "./docker/postgres/env"
    volumes:
      - type: bind
        source: "./docker/postgres/data"
        target: /var/lib/postgresql/data
