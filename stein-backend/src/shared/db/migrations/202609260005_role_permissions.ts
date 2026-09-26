import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("role_permissions", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.uuid("role_id").notNullable();
    table.uuid("permission_id").notNullable();
    table.timestamp("created_at", { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.foreign("role_id").references("roles.id").onDelete("RESTRICT");
    table.foreign("permission_id").references("permissions.id").onDelete("RESTRICT");
    table.unique(["role_id", "permission_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("role_permissions");
}
