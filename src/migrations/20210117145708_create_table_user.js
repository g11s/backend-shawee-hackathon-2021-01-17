export async function up(Knex) {
  return Knex.schema.createTable('users', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.string('email', 60).notNullable().unique();
    tbl.text('avatar');
    tbl.text('description');
    tbl.string('password', 60).notNullable();
    tbl.string('name', 60).notNullable();
    tbl.string('phone', 20);
    tbl.timestamps(true, true);
  });
}

export async function down(Knex) {
  return Knex.schema.dropTableIfExists('users');
}
