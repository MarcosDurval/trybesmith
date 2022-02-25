import { Router } from 'express';
import 'express-async-errors';
import * as controllerOrdes from '../controller/orders';
import auth from '../controller/middleware/auth';
import { IUserWithId } from '../interface/interface';

declare module 'express-serve-static-core'{
  interface Request {
    user:IUserWithId
  }
}
const orders = Router();

orders.use(auth);
orders.post('/', controllerOrdes.default);

export default orders;