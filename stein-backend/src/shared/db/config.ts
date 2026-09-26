import "dotenv/config";
import type { Knex } from "knex";

function connection(): Knex.PgConnectionConfig {
  if (process.env.DATABASE_URL) {
    return {
      connectionString: process.env.DATABASE_URL,
    };
  }

  return {
    host: process.env.POSTGRES_HOST ?? "localhost",
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    database: process.env.POSTGRES_DB ?? "stein",
    user: process.env.POSTGRES_USER ?? "stein",
    password: process.env.POSTGRES_PASSWORD ?? "stein",
  };
}

export const knexConfig: Record<string, Knex.Config> = {
  development: {
    client: "pg",
    connection: connection(),
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./src/shared/db/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./src/shared/db/seeds",
      extension: "ts",
    },
  },
  production: {
    client: "pg",
    connection: connection(),
    pool: { min: 2, max: 20 },
    migrations: {
      directory: "./dist/shared/db/migrations",
      extension: "js",
    },
    seeds: {
      directory: "./dist/shared/db/seeds",
      extension: "js",
    },
  },
};
