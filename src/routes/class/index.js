import { Router } from 'express';
// import { convertCoinController } from '../../useCases/ConvertCoin';

const router = Router();

router.get('/', (req, res) => {
    res.send('Eu sou a rota do class :D');
  //convertCoinController.handle(req, res);
});

export default router;