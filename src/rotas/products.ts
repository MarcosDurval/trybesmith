import { Router } from 'express';
import 'express-async-errors';
import auth from '../controller/middleware/auth';
import * as controllerProducts from '../controller/products';

const products = Router();
products.use(auth);

products.post('/', controllerProducts.crate);

products.get('/', controllerProducts.findAll);

export default products;