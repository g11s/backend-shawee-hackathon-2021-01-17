export async function up(Knex) {
  return Knex.schema.createTable('courses', (tbl) => {
    tbl.string('uid', 36).notNullable().unique();
    tbl.text('thumbnail').notNullable();
    tbl.string('title', 60).notNullable().unique();
    tbl.text('description').notNullable();
    tbl.integer('level').notNullable();
    tbl.timestamps(true, true);
    tbl.string('producer_uid', 36).notNullable().references('uid').inTable('producers')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('category_uid', 36).notNullable().references('uid').inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}
export async function down(Knex) {
  return Knex.schema.dropTableIfExists('courses');
}
