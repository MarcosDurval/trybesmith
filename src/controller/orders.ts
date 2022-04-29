import { Response, Request } from 'express';
import validArray from './joischema/validOrdes';
import * as serviceOrder from '../service/order';

export const createOrder = async (req:Request, res:Response) => {
  const { body: { products }, user: { id } } = req;
  validArray(products);
  const [userId, productIds] = await serviceOrder.createOrder(id, products);
  return res.status(201).json({ order: { userId, products: productIds } });
}; 
export const findeOrder = async (req:Request, res:Response) => {
  const strigId = req.params.id;
  const id = +strigId;
  const [userId, prod] = await serviceOrder.findId(id);

  return res.status(200).json({ id, userId, products: prod });
};
export const findAll = async (_req:Request, res:Response) => {
  const result = await serviceOrder.findAll();
  return res.status(200).json(result);
};
