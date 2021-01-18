import { MysqlUsersRepository } from '../../repositories/MysqlUsersRepository';
import { FindUsersController } from './FindUsersController';
import { FindUsersUseCase } from './FindUsersUseCase';

const mysqlUsersRepository = new MysqlUsersRepository();

const findUsersUseCase = new FindUsersUseCase(mysqlUsersRepository);

const findUsersController = new FindUsersController(findUsersUseCase);

export { findUsersUseCase, findUsersController };
