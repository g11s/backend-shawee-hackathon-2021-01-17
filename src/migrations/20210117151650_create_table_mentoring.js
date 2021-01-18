export async function up(Knex) {
  return Knex.schema.createTable('mentoring', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.datetime('date').notNullable();
    tbl.integer('duration').notNullable();
    tbl.timestamps(true, true);
    tbl.string('mentor_uid', 36).notNullable().references('uid').inTable('mentors')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('student_uid', 36).notNullable().references('uid').inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('mentoring');
}
