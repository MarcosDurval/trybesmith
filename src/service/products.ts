import { IProducts } from '../interface';
import * as modelProducts from '../models/product';

export const crate = async (name:string, amount:string):Promise<IProducts> => 
  modelProducts.create(name, amount);

export const findAll = async ():Promise<IProducts[]> => modelProducts.findProduct();

export const findId = async (id:IProducts['id'])
:Promise<IProducts | null> => 
  modelProducts.findId(id);