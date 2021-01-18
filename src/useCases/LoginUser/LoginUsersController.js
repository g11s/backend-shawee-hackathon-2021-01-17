export class LoginUsersController {
  constructor(loginUsersUseCase) {
    this.loginUsersUseCase = loginUsersUseCase;
  }

  async handle(request, response) {
    try {
      const {
        email, password,
      } = request.body;

      const user = {
        email,
        password,
      };

      const data = await this.loginUsersUseCase.execute(user);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
