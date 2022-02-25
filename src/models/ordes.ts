import connection from './connection';

const createOrder = async (id:number, product:Array<number>) => {
  try {
    await connection.execute('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [id]);
    Promise.all(product.map(async (p) => {
      connection.execute('UPDATE Trybesmith.Products SET orderId = ? WHERE id=?', [id, p]);
    }));
    return [id, product];
  } catch (error) {
    console.error(error);
    return [null, null];
  }
};

export default createOrder;