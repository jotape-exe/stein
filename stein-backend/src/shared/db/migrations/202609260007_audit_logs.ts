import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("audit_logs", (table) => {
    table.bigIncrements("id").primary();
    table.uuid("user_id").nullable();
    table.string("action", 100).notNullable();
    table.string("resource", 100).nullable();
    table.jsonb("metadata").nullable();
    table.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.foreign("user_id").references("users.id").onDelete("RESTRICT");
    table.index(["created_at"]);
    table.index(["action"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("audit_logs");
}
