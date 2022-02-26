import { OkPacket } from 'mysql2';
import { IOders, IidProducts } from '../interface/orders';
import connection from './connection';

const createOrder = async (id:number, product:Array<number>) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const updateQuery = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id=?';
  try {
    const [row] = await connection.execute<OkPacket>(query, [id]);
    Promise.all(product.map(async (p) => {
      connection.execute(updateQuery, [row.insertId, p]);
    }));
    return [id, product];
  } catch (error) {
    console.error(error);
    return [null, null];
  }
};

export const findOne = async (id:number) => {
  const query = 'SELECT * FROM Trybesmith.Orders WHERE id = ?';
  try {
    const [row] = await connection.execute(query, [id]);
    const data = row as IOders[];
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const findOderId = async (id:number) => {
  try {
    const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
    const [result] = await connection.execute(query, [id]);
    const t = result as IidProducts[];
    return t.map((i) => i.id);
  } catch (error) {
    console.error('error:', error);
  }
};

export const findAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  try {
    const [row] = await connection.execute(query);
    const data = row as IOders[];
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default createOrder;