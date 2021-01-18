export class GetCoursesController {
  constructor(getCoursesUseCase) {
    this.getCoursesUseCase = getCoursesUseCase;
  }

  async handle(_, response) {
    try {
      const data = await this.getCoursesUseCase.execute();

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
