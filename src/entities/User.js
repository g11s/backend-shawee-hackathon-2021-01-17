import bookshelf from '../config/knex';

const User = bookshelf.model('User', {
  tableName: 'users',
});

export default User;
