import { IidProducts, IResultOders, IOders } from '../interface';

import prisma from './connection';

export const createOrder = async (id:IOders['id'], product:IResultOders['products'])
  :Promise<(number | number[]) []> => {
  const orders = await prisma.orders.create({ data: { userId: id } });
  await prisma.products.updateMany({ where: { id: { in: product } },
    data: { orderId: orders.id } });
  return [id, product];
};

export const findOne = async (id:number):Promise<IOders | null> => {
  const data = await prisma.orders.findFirst({ where: { id } });
   
  return data as IOders;
};

export const findOderId = async (id:IOders['id'])
:Promise<IResultOders['products']> => {
  const data = await prisma.products.findMany({ where: { orderId: id } });
  const result = data as IidProducts[];
  return result.map((i) => i.id);
};

export const findAll = async ():Promise<IOders[]> => {
  const data = await prisma.orders.findMany();
     
  return data as IOders[];
};
