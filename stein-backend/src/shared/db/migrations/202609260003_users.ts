import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("name", 120).notNullable();
    table.string("email", 255).notNullable();
    table.text("password_hash").notNullable();
    table
      .enu("role", ["ADMIN", "OPERATOR", "VIEWER"], {
        useNative: true,
        enumName: "user_role",
      })
      .notNullable()
      .defaultTo("VIEWER");
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(false, true);
    table.unique(["email"]);
    table.index(["role"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
  await knex.raw('DROP TYPE IF EXISTS "user_role"');
}
