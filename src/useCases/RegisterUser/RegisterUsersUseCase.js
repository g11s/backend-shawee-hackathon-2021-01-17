export class RegisterUsersUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user) {
    const users = await this.usersRepository.register(user);

    return users;
  }
}
