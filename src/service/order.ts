import * as modelOrder from '../models/ordes';

const createOrder = async (id:number, product:Array<number>) => {
  const [n, p] = await modelOrder.default(id, product);
  return [n, p];
};

export default createOrder;