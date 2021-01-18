export async function up(Knex) {
  return Knex.schema.createTable('banners', (tbl) => {
    tbl.text('url').notNullable();
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('banners');
}
