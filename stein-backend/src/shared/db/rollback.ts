import "dotenv/config";
import knex from "knex";
import { knexConfig } from "@/shared/db/config.js";
import { logger } from "@/shared/logger.js";

const env = process.env.NODE_ENV ?? "development";
const config = knexConfig[env] ?? knexConfig.development;

if (!config) {
  throw new Error(`Missing knex config for env "${env}"`);
}

const db = knex(config);
const log = logger.child({ module: "db:rollback" });

try {
  const [batch, list] = await db.migrate.rollback(undefined, true);
  log.info({ batch, files: list }, "rollback executado");
} catch (err) {
  log.error({ err }, "falha ao executar rollback");
  process.exitCode = 1;
} finally {
  await db.destroy();
}
