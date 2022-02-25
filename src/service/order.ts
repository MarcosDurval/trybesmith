import CustomError from '../error/customErro';
import { ErrorType } from '../interface/interface';
import * as modelOrder from '../models/ordes';

const erroType:ErrorType = { code: 'NotFound' };

const createOrder = async (id:number, product:Array<number>) => {
  const [n, p] = await modelOrder.default(id, product);
  return [n, p];
};
export const findId = async (id:number) => {
  const orders = await modelOrder.findOne(id);
  if (!orders || orders.length === 0) {
    erroType.message = 'Order not found';
    throw new CustomError(erroType);
  }

  const productId = await modelOrder.findOderId(orders[0].id);
  return [orders[0].userId, productId];
};
export default createOrder;