import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("permissions", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("slug", 100).notNullable();
    table.text("description");
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(false, true);
    table.unique(["slug"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("permissions");
}
