import "dotenv/config";
import knex from "knex";
import { knexConfig } from "@/shared/db/config.js";

const env = process.env.NODE_ENV ?? "development";
const config = knexConfig[env] ?? knexConfig.development;

if (!config) {
  throw new Error(`Missing knex config for env "${env}"`);
}

export const db = knex(config);
