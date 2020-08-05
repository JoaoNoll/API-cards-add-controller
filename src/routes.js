import { Router } from 'express';
import cors from 'cors';
import CardController from './app/controllers/CardController';

const routes = Router();

routes.use(cors());
routes.get('/', (req, res) => res.json({ result: 'CARD-API' }));

routes.post('/cards', CardController.store);
routes.get('/cards', CardController.index);
routes.get('/cards/:uid', CardController.show);
routes.put('/cards/:uid', CardController.update);
routes.delete('/cards/:uid', CardController.delete);

export default routes;
