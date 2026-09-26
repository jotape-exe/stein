import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("stream_jobs", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.uuid("owner_id").nullable();
    table
      .enu("type", ["IMPORT", "EXPORT"], {
        useNative: true,
        enumName: "stream_job_type",
      })
      .notNullable();
    table
      .enu("status", ["PENDING", "RUNNING", "DONE", "FAILED"], {
        useNative: true,
        enumName: "stream_job_status",
      })
      .notNullable()
      .defaultTo("PENDING");
    table.string("input_name", 255).nullable();
    table.bigInteger("bytes_total").nullable();
    table.bigInteger("rows_total").nullable();
    table.text("error").nullable();
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(false, true);
    table.foreign("owner_id").references("users.id").onDelete("RESTRICT");
    table.index(["status"]);
    table.index(["type"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("stream_jobs");
  await knex.raw('DROP TYPE IF EXISTS "stream_job_status"');
  await knex.raw('DROP TYPE IF EXISTS "stream_job_type"');
}
