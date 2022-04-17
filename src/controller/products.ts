import { Request, Response } from 'express';
import valid from './joischema/validProduct';
import * as serviceProduct from '../service/products';

export const crate = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  valid(name, amount);
  const result = await serviceProduct.crate(name, amount);
  return res.status(201).json({ item: result });
};

export const findAll = async (_req:Request, res:Response) => {
  const result = await serviceProduct.findAll();
  return res.status(200).json(result);
};