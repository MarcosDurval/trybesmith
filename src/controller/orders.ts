import { Response, Request } from 'express';
import validArray from './joiError/validOrdes';
import * as serviceOrder from '../service/order';

const createOrder = async (req:Request, res:Response) => {
  const { body: { products }, user: { id } } = req;
  validArray(products);
  const [userId, productIds] = await serviceOrder.default(id, products);
  return res.status(201).json({ order: { userId, products: productIds } });
}; 
export const findeOrder = async (req:Request, res:Response) => {
  const strigId = req.params.id;
  const id = +strigId;
  const [userId, trat] = await serviceOrder.findId(id);

  return res.status(200).json({ id, userId, products: trat });
};
export const findAll = async (req:Request, res:Response) => {
  const result = await serviceOrder.findAll();
  return res.status(200).json(result);
};
export default createOrder;