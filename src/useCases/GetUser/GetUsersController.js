export class GetUsersController {
  constructor(getUsersUseCase) {
    this.getUsersUseCase = getUsersUseCase;
  }

  async handle(_, response) {
    try {
      const data = await this.getUsersUseCase.execute();

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
