import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interface/interface';
import connection from './connection';

export const create = async (name:string, amount:string) => {
  try {
    const [product] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Products (name,amount) VALUES (?,?)
  `, [name, amount]);
    const { insertId: id } = product;
    const item = { id, name, amount };
    return item;  
  } catch (error) {
    console.error(error);
  }
};

export const findProduct = async ():Promise<IProducts[]> => {
  const [data] = await connection.execute(`
    SELECT * FROM Trybesmith.Products
  `);
  const products = data as IProducts[];
  return products;
};