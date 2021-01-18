import bookshelf from '../config/knex';
import Section from './Section';

const Course = bookshelf.model('Course', {
  tableName: 'courses',
  section() {
    return this.hasMany(Section, 'course_uid', 'uid');
  },
});

export default Course;
