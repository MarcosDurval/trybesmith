import { Router } from 'express';
import 'express-async-errors';
import * as controllerOrdes from '../controller/orders';
import auth from '../controller/middleware/auth';

const orders = Router();

orders.use(auth);

orders.post('/', controllerOrdes.createOrder);

orders.get('/', controllerOrdes.findAll);

orders.get('/:id', controllerOrdes.findeOrder);

export default orders;