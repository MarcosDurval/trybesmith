import { ResultSetHeader } from 'mysql2';
import { User } from '../interface/interface';
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
  try {
    const [rows] = await connection.execute(`
  SELECT username, classe, level, password FROM Trybesmith.Users WHERE username = ?
  `, [name]);
    const [user] = rows as User[]; 
    return user;
  } catch (error) {
    console.error(error);  
  }
};
findUser('xablau');

// :Promise<User>