import { IOders, IidProducts } from '../interface';
import prisma from './connection';

const createOrder = async (id:number, product:Array<number>) => {
  // const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  // const updateQuery = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id=?';
  try {
    // const [row] = await connection.execute<OkPacket>(query, [id]);
    // await Promise.all(product.map(async (p) => {
    //   connection.execute(updateQuery, [row.insertId, p]);
    // }));
    const orders = await prisma.orders.create({ data: { userId: id } });
    await prisma.products.updateMany({ where: { id: { in: product } },
      data: { orderId: orders.id } });
    return [id, product];
  } catch (error) {
    console.error('error:', error);
    return [null, null];
  }
};

export const findOne = async (id:number) => {
  try {
    const row = await prisma.orders.findFirst({ where: { id } });
   
    return row as IOders;
  } catch (error) {
    console.error(error);
  }
};

export const findOderId = async (id:number) => {
  try {
    const result = await prisma.products.findMany({ where: { orderId: id } });
    const t = result as IidProducts[];
    return t.map((i) => i.id);
  } catch (error) {
    console.error('error:', error);
  }
};

export const findAll = async () => {
  try {
    const row = await prisma.orders.findMany();
     
    return row as IOders[];
  } catch (error) {
    console.error(error);
  }
};
export default createOrder;