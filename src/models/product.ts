import { IProducts } from '../interface';
import prisma from './connection';

export const create = async (name:string, amount:string):Promise<IProducts> => 
  prisma.products.create({ data: { name, amount } });

export const findProduct = async ():Promise<IProducts[]> => prisma.products.findMany();