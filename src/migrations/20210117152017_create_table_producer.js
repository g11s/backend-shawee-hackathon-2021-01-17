export async function up(Knex) {
  return Knex.schema.createTable('producers', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.timestamps(true, true);
    tbl.string('user_uid', 36).notNullable().references('uid').inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('producers');
}
