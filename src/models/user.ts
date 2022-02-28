import { ResultSetHeader } from 'mysql2';
import { PrismaClient } from '@prisma/client';
import { IUserWithId, User } from '../interface';
import connection from './connection';

export const createUser = async (user:User):Promise<number | null> => {
  const { username, classe, level, password } = user;
  try {
    const [newUser] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?,?,?,?)
  `, [username, classe, level, password]);
    
    return newUser.insertId;
  } catch (error) {
    return null;
  }
};

export const findUser = async (name: User['username']) => {
  const prisma = new PrismaClient();
  try {
    const rows = await prisma.users.findMany({ where: {
      username: name,
    } });
    const [user] = rows as IUserWithId[];
    console.log(rows);
    return user;
  } catch (error) {
    console.error(error);  
  }
};
