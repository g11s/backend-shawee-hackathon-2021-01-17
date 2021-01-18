import bookshelf from '../config/knex';
import Class from './Class';

const Section = bookshelf.model('Section', {
  tableName: 'sections',
  class() {
    return this.hasMany(Class, 'section_uid', 'uid');
  },
});

export default Section;
