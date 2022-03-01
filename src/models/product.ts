// import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interface';
import { prisma } from './connection';

export const create = async (name:string, amount:string) => {
  const product = await prisma.products.create({ data: { name, amount } });
  return product;
};

export const findProduct = async ():Promise<IProducts[]> => {
  const data = await prisma.products.findMany();
  return data as IProducts[];
};