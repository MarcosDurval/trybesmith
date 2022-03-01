// import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interface';
import prisma from './connection';

export const create = async (name:string, amount:string) => {
  try {
  //   const [product] = await connection.execute<ResultSetHeader>(`
  // INSERT INTO Trybesmith.Products (name,amount) VALUES (?,?)
  // `, [name, amount]);
  //   const { insertId: id } = product;
    const product = await prisma.products.create({ data: { name, amount } });
    return product;  
  } catch (error) {
    console.error(error);
  }
};

export const findProduct = async ():Promise<IProducts[]> => {
  const data = await prisma.products.findMany();
  return data as IProducts[];
};