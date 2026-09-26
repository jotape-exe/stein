import bcrypt from "bcrypt";
import "dotenv/config";
import type { Knex } from "knex";

const ROLES = [
  { slug: "admin", description: "Acesso total ao lab" },
  { slug: "operator", description: "Executa imports/exports e jobs" },
  { slug: "viewer", description: "Acesso somente leitura ao dashboard" },
];

const PERMISSIONS = [
  { slug: "streams:export", description: "Exportar datasets via stream" },
  { slug: "streams:import", description: "Importar datasets via stream" },
  { slug: "jobs:retry", description: "Reprocessar jobs falhados" },
  { slug: "users:manage", description: "Gerenciar usuarios e roles" },
];

const ROLE_PERMISSIONS: Record<string, string[]> = {
  admin: ["streams:export", "streams:import", "jobs:retry", "users:manage"],
  operator: ["streams:export", "streams:import", "jobs:retry"],
  viewer: ["streams:export"],
};

export async function seed(knex: Knex): Promise<void> {
  for (const role of ROLES) {
    await knex("roles").insert(role).onConflict("slug").ignore();
  }

  for (const permission of PERMISSIONS) {
    await knex("permissions").insert(permission).onConflict("slug").ignore();
  }

  const roles = await knex("roles").select("id", "slug");
  const permissions = await knex("permissions").select("id", "slug");

  const roleIdBySlug = new Map(roles.map((r) => [r.slug as string, r.id as string]));
  const permissionIdBySlug = new Map(
    permissions.map((p) => [p.slug as string, p.id as string]),
  );

  for (const [roleSlug, slugs] of Object.entries(ROLE_PERMISSIONS)) {
    const roleId = roleIdBySlug.get(roleSlug);
    if (!roleId) continue;
    for (const slug of slugs) {
      const permissionId = permissionIdBySlug.get(slug);
      if (!permissionId) continue;
      await knex("role_permissions")
        .insert({ role_id: roleId, permission_id: permissionId })
        .onConflict(["role_id", "permission_id"])
        .ignore();
    }
  }

  const adminName = process.env.STEIN_ADMIN_NAME ?? "Stein Admin";
  const adminEmail = process.env.STEIN_ADMIN_EMAIL;
  const adminPassword = process.env.STEIN_ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    throw new Error("Seed: defina STEIN_ADMIN_EMAIL e STEIN_ADMIN_PASSWORD no .env");
  }
  const admin = await knex("users").where({ email: adminEmail }).first("id");

  let adminId = admin?.id as string | undefined;
  if (!adminId) {
    const password_hash = await bcrypt.hash(adminPassword, 10);
    const inserted = await knex("users")
      .insert({
        name: adminName,
        email: adminEmail,
        password_hash,
        role: "ADMIN",
        is_active: true,
      })
      .onConflict("email")
      .ignore()
      .returning("id");
    adminId = (inserted[0]?.id as string | undefined) ?? admin?.id;
  }

  const adminRoleId = roleIdBySlug.get("admin");
  if (adminId && adminRoleId) {
    await knex("user_roles")
      .insert({ user_id: adminId, role_id: adminRoleId })
      .onConflict(["user_id", "role_id"])
      .ignore();
  }
}
