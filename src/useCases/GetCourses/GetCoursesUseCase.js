export class GetCoursesUseCase {
  constructor(coursesRepository) {
    this.coursesRepository = coursesRepository;
  }

  async execute() {
    const courses = await this.coursesRepository.index();

    return courses;
  }
}
