export async function up(Knex) {
  return Knex.schema.createTable('classes', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.string('title', 60).notNullable().unique();
    tbl.string('mediauid', 60).notNullable();
    tbl.integer('minutes');
    tbl.text('description').notNullable();
    tbl.timestamps(true, true);
    tbl.string('section_uid', 36).notNullable().references('uid').inTable('sections')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('classes');
}
