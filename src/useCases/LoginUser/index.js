import { MysqlUsersRepository } from '../../repositories/MysqlUsersRepository';
import { LoginUsersController } from './LoginUsersController';
import { LoginUsersUseCase } from './LoginUsersUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const loginUsersUseCase = new LoginUsersUseCase(mysqlUsersRepository);

const loginUsersController = new LoginUsersController(loginUsersUseCase);

export { loginUsersUseCase, loginUsersController };
