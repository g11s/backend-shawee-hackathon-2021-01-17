export class FindUsersUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(uid) {
    const users = await this.usersRepository.findById(uid);

    return users;
  }
}
