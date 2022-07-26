import CustomError from '../error/customError';
import { ErrorType, IResultOders } from '../interface';
import * as modelOrder from '../models/ordes';
import * as serviceProducts from './products';

const erroType:ErrorType = { code: 'NotFound', message: 'Order not found' };
const erroExistOrder:ErrorType = { code: 'NotFound', message: 'Do not have the product in stock' };

export const createOrder = async (id:number, products:Array<number>)
  :Promise<(number | number[])[]> => {
  const sales = await Promise.all(products.map((product) => serviceProducts.findId(product)));
  const verifySales = sales.every((sale) => sale?.orderId === null);
  if (!verifySales) {
    throw new CustomError(erroExistOrder);
  }
  const [userId, resultProducts] = await modelOrder.createOrder(id, products);
  return [userId, resultProducts];
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
  const result = listOrds.map(async (order) => {
    const productId = await modelOrder.findOderId(order.id);
    return {
      id: order.id,
      userId: order.userId,
      products: productId,
    };
  });
  return Promise.all(result);
};
