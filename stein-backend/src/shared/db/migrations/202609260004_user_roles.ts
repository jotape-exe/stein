import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_roles", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.uuid("user_id").notNullable();
    table.uuid("role_id").notNullable();
    table.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.foreign("user_id").references("users.id").onDelete("RESTRICT");
    table.foreign("role_id").references("roles.id").onDelete("RESTRICT");
    table.unique(["user_id", "role_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_roles");
}
