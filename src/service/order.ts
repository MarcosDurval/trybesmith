import CustomError from '../error/customErro';
import { ErrorType } from '../interface';
import * as modelOrder from '../models/ordes';

const erroType:ErrorType = { code: 'NotFound', message: 'Order not found' };

const createOrder = async (id:number, product:Array<number>) => {
  const [n, p] = await modelOrder.default(id, product);
  return [n, p];
};
export const findId = async (id:number) => {
  const orders = await modelOrder.findOne(id);
  if (!orders || orders.length === 0) {
    throw new CustomError(erroType);
  }

  const productId = await modelOrder.findOderId(orders[0].id);
  return [orders[0].userId, productId];
};

export const findAll = async () => {
  const listOrds = await modelOrder.findAll();
  if (!listOrds || listOrds.length === 0) {
    return [];
  }
  const result = listOrds.map(async (i) => {
    const productId = await modelOrder.findOderId(i.id);
    return {
      id: i.id,
      userId: i.userId,
      products: productId,
    };
  });
  return Promise.all(result);
};
export default createOrder;