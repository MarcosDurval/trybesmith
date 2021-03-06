import CustomError from '../error/customError';
import { ErrorType, IResultOders } from '../interface';
import * as modelOrder from '../models/ordes';
import * as serviceProducts from './products';

const erroType:ErrorType = { code: 'NotFound', message: 'Order not found' };
const erroExistOrder:ErrorType = { code: 'NotFound', message: 'Do not have the product in stock' };

export const createOrder = async (id:number, product:Array<number>)
  :Promise<(number | number[])[]> => {
  const sale = await Promise.all(product.map((v) => serviceProducts.findId(v)));
  const verifySale = sale.every((v) => v?.orderId === null);
  if (!verifySale) {
    throw new CustomError(erroExistOrder);
  }
  const [userId, products] = await modelOrder.createOrder(id, product);
  return [userId, products];
};
export const findId = async (id:number):Promise<(number | number[])[]> => {
  const orders = await modelOrder.findOne(id);
  if (!orders) {
    throw new CustomError(erroType);
  }

  const productId = await modelOrder.findOderId(orders.id);
  return [orders.userId, productId];
};

export const findAll = async ():Promise<IResultOders[]> => {
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
