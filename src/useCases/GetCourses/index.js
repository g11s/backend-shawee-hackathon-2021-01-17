import { MysqlCoursesRepository } from '../../repositories/MysqlCoursesRepository';
import { GetCoursesController } from './GetCoursesController';
import { GetCoursesUseCase } from './GetCoursesUseCase';

const mysqlCoursesRepository = new MysqlCoursesRepository();

const getCoursesUseCase = new GetCoursesUseCase(mysqlCoursesRepository);

const getCoursesController = new GetCoursesController(getCoursesUseCase);

export { getCoursesUseCase, getCoursesController };
