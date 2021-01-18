import { MysqlUsersRepository } from '../../repositories/MysqlUsersRepository';
import { RegisterUsersController } from './RegisterUsersController';
import { RegisterUsersUseCase } from './RegisterUsersUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const registerUsersUseCase = new RegisterUsersUseCase(mysqlUsersRepository);

const registerUsersController = new RegisterUsersController(registerUsersUseCase);

export { registerUsersUseCase, registerUsersController };
