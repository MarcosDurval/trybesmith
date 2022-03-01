// import { ResultSetHeader } from 'mysql2';
import { prisma } from './connection';
import { IUserWithId, User, IUserWithPassoword } from '../interface';

export const createUser = async (user:IUserWithPassoword):Promise<number | null> => {
  const { username, classe, level, password } = user;
  try {
    const newUser = await prisma.users.create({ data: { username, classe, level, password } });

    return newUser.id;
  } catch (error) {
    return null;
  }
};

export const findUser = async (name: User['username']) => {
  try {
    const [user] = await prisma.users.findMany({ where: {
      username: name,
    } });
   
    return user as IUserWithId;
  } catch (error) {
    console.error(error);  
  }
};
