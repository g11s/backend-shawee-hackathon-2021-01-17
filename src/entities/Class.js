import bookshelf from '../config/knex';

const Class = bookshelf.model('Class', {
  tableName: 'classes',
});

export default Class;
