export class RegisterUsersController {
  constructor(registerUsersUseCase) {
    this.registerUsersUseCase = registerUsersUseCase;
  }

  async handle(request, response) {
    try {
      const {
        name, email, password, phone,
      } = request.body;

      const user = {
        name,
        email,
        password,
        phone,
      };

      const data = await this.registerUsersUseCase.execute(user);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
