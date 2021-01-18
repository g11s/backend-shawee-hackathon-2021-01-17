import { MysqlUsersRepository } from '../../repositories/MysqlUsersRepository';
import { GetUsersController } from './GetUsersController';
import { GetUsersUseCase } from './GetUsersUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const getUsersUseCase = new GetUsersUseCase(mysqlUsersRepository);

const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersUseCase, getUsersController };
