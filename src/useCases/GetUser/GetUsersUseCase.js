export class GetUsersUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute() {
    const users = await this.usersRepository.index();

    return users;
  }
}
