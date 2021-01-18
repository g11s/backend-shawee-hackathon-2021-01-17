import { Router } from 'express';

import { getUsersController } from '../../useCases/GetUser';
import { findUsersController } from '../../useCases/FindUser';
import { loginUsersController } from '../../useCases/LoginUser';
import { registerUsersController } from '../../useCases/RegisterUser';

const router = Router();

router.get('/', (req, res) => {
  getUsersController.handle(req, res);
});

router.get('/find/:uid', (req, res) => {
  findUsersController.handle(req, res);
});

router.post('/login', (req, res) => {
  loginUsersController.handle(req, res);
});

router.post('/register', (req, res) => {
  registerUsersController.handle(req, res);
});

export default router;
