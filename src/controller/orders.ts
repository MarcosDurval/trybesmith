import { Response, Request } from 'express';
import validArray from './joiError/validOrdes';
import * as serviceOrder from '../service/order';

const createOrder = async (req:Request, res:Response) => {
  const { body: { products }, user: { id } } = req;
  validArray(products);
  const [userId, productIds] = await serviceOrder.default(id || 0, products);
  return res.status(201).json({ order: { userId, products: productIds } });
}; 

export default createOrder;