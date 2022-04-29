import prisma from './connection';
import { User, IUserWithPassoword, IUserWithId } from '../interface';

export const createUser = async (user:IUserWithPassoword)
:Promise<IUserWithId['id'] | null> => {
  const { username, classe, level, password } = user;
  const newUser = await prisma.users.create({ data: { username, classe, level, password } });

  return newUser.id;
};

export const findUser = async (name: User['username']):Promise<IUserWithId> => {
  const [user] = await prisma.users.findMany(
    { where: {
      username: name,
    }, 
    },
  );
   
  return user;
};
