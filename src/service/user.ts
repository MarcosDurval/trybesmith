import * as argon2 from 'argon2';
import CustomErro from '../error/customErro';
import { ErrorType, ILogin, User, IUserWithPassoword } from '../interface';
import * as modelUser from '../models/user';
import { login } from '../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized', message: 'Username or password invalid' };

const removePassword = ({ username, level, classe }:User) => ({ username, level, classe });

const passwordHash = (user:IUserWithPassoword, hash:string) => ({ ...user, password: hash });
const verify = (hash:string, password:string) => argon2.verify(hash, password);

export const createUser = async (user:IUserWithPassoword) => {
  const hash = await argon2.hash(user.password, { type: argon2.argon2id });
  const expectHash = passwordHash(user, hash);
  await modelUser.createUser(expectHash);
  const withoutPassword = removePassword(user);
  const token = login(withoutPassword);
  return token;
};

export const loginUser = async ({ username, password }:ILogin) => {
  const userDate = await modelUser.findUser(username);
  if (!userDate || !(await verify(userDate.password, password))) throw new CustomErro(erroType);
  const token = login(userDate);
  return token;
};