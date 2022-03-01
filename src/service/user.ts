import CustomErro from '../error/customErro';
import { ErrorType, ILogin, User, IUserWithPassoword } from '../interface';
import * as modelUser from '../models/user';
import { login } from '../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized', message: 'Username or password invalid' };
const erroType500:ErrorType = { code: 'Internal Server Error' };
const removePassword = ({ username, level, classe }:User) => ({ username, level, classe });
export const createUser = async (user:IUserWithPassoword) => {
  const id = await modelUser.createUser(user);
  if (!id) {
    throw new CustomErro(erroType500);
  }
  const withoutPassword = removePassword(user);
  const token = login(withoutPassword);
  return token;
};

export const loginUser = async ({ username, password }:ILogin) => {
  const userDate = await modelUser.findUser(username);
  if (!userDate || userDate.password !== password) throw new CustomErro(erroType);
  const token = login(userDate);
  return token;
};