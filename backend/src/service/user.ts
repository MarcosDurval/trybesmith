import bcrypt from 'bcryptjs';
import CustomErro from '../error/customError';
import { ErrorType, ILogin, User, IUserWithPassoword } from '../interface';
import * as modelUser from '../models/user';
import { login } from '../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized', message: 'Username or password invalid' };

const removePassword = ({ username, level, classe }:User) => ({ username, level, classe });

const passwordHash = (user:IUserWithPassoword, hash:string) => ({ ...user, password: hash });

const verify = (hash:string, password:string) => bcrypt.compare(password, hash);

export const createUser = async (user:IUserWithPassoword):Promise<string> => {
  const hash = await bcrypt.hash(user.password, 12);
  const expectHash = passwordHash(user, hash);
  const newUserId = await modelUser.createUser(expectHash);
  const withoutPassword = removePassword(user);
  const userDate = { id: newUserId, ...withoutPassword };
  return login(userDate);
};

export const loginUser = async ({ username, password }:ILogin):Promise<string> => {
  const userDate = await modelUser.findUser(username);
  if (!userDate || !(await verify(userDate.password, password))) throw new CustomErro(erroType);
  return login(userDate);
};
