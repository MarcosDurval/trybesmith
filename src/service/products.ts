// import { IProducts } from '../interface/interface';
import * as modelProducts from '../models/product';

export const crate = async (name:string, amount:string) => {
  const result = await modelProducts.create(name, amount);
  return result;
};

export const findAll = async () => modelProducts.findProduct();