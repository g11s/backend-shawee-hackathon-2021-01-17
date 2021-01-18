export class FindUsersController {
  constructor(findUsersUseCase) {
    this.findUsersUseCase = findUsersUseCase;
  }

  async handle(request, response) {
    try {
      const { uid } = request.params;

      const data = await this.findUsersUseCase.execute(uid);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
