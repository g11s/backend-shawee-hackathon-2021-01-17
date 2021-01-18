export async function up(Knex) {
  return Knex.schema.createTable('subscriptions', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.timestamps(true, true);
    tbl.string('student_uid', 36).notNullable().references('uid').inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('course_uid', 36).notNullable().references('uid').inTable('courses')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('subscriptions');
}
