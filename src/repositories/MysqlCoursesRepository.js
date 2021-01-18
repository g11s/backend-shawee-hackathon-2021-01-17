import Course from '../entities/Course';

export class MysqlCoursesRepository {
  async index() {
    const courses = await Course.where({ uid: 1 }).fetch({ withRelated: ['section.class'] });

    return courses;
  }
}
