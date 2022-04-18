import { IOders, IidProducts } from '../interface';
import { prisma } from './connection';

const createOrder = async (id:number, product:Array<number>) => {
  const orders = await prisma.orders.create({ data: { userId: id } });
  await prisma.products.updateMany({ where: { id: { in: product } },
    data: { orderId: orders.id } });
  return [id, product];
};

export const findOne = async (id:number) => {
  const row = await prisma.orders.findFirst({ where: { id } });
   
  return row as IOders;
};

export const findOderId = async (id:number) => {
  const result = await prisma.products.findMany({ where: { orderId: id } });
  const t = result as IidProducts[];
  return t.map((i) => i.id);
};

export const findAll = async () => {
  const row = await prisma.orders.findMany();
     
  return row as IOders[];
};
export default createOrder;