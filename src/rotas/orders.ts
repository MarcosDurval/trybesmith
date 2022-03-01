import { Router } from 'express';
import 'express-async-errors';
import * as controllerOrdes from '../controller/orders';
import auth from '../controller/middleware/auth';
import { IUser } from '../interface';

// source: https://serveanswer.com/questions/how-do-i-add-custom-property-to-express-request-in-typescript
declare module 'express-serve-static-core'{
  interface Request {
    user:IUser
  }
}
const orders = Router();

orders.use(auth);

orders.post('/', controllerOrdes.default);

orders.get('/', controllerOrdes.findAll);

orders.get('/:id', controllerOrdes.findeOrder);

export default orders;