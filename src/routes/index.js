import { Router } from 'express';

import userRouter from './user';
import courseRouter from './course';
import studentRouter from './student';
import producerRouter from './producer';
import mentorRouter from './mentor';
import mentoringRouter from './mentoring';
import categoryRouter from './category';
import classRouter from './class';
import sectionRouter from './section';
import subscriptionRouter from './subscription';

const router = Router();

router.use('/users', userRouter);
router.use('/courses', courseRouter);
router.use('/students', studentRouter);
router.use('/producers', producerRouter);
router.use('/mentors', mentorRouter);
router.use('/mentoring', mentoringRouter);
router.use('/category', categoryRouter);
router.use('/class', classRouter);
router.use('/section', sectionRouter);
router.use('/subscription', subscriptionRouter);

router.get('/', (req, res) => res.send('Hello, I am working!'));

export default router;
