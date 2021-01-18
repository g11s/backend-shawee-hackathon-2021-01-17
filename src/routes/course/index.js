import { Router } from 'express';
import { getCoursesController } from '../../useCases/GetCourses';

const router = Router();

router.get('/', (req, res) => {
  getCoursesController.handle(req, res);
});

export default router;
