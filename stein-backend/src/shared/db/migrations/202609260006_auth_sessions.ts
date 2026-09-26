import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("auth_sessions", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.uuid("user_id").notNullable();
    table.text("refresh_hash").notNullable();
    table.text("user_agent");
    table.string("ip", 45);
    table.timestamp("expires_at", { useTz: true }).notNullable();
    table.timestamp("revoked_at", { useTz: true }).nullable();
    table.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.foreign("user_id").references("users.id").onDelete("RESTRICT");
    table.index(["user_id"]);
    table.index(["expires_at"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("auth_sessions");
}
