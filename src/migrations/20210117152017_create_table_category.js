export async function up(Knex) {
  return Knex.schema.createTable('categories', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.string('name', 60).notNullable().unique();
    tbl.string('icon', 60).notNullable().unique();
    tbl.timestamps(true, true);
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('categories');
}
