export class LoginUsersUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user) {
    const response = await this.usersRepository.login(user);

    return response;
  }
}
