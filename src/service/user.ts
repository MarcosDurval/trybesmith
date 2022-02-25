import CustomErro from '../error/customErro';
import { ErrorType, ILogin, User } from '../interface/interface';
import * as modelUser from '../models/user';
import { login } from '../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized', message: 'Username or password invalid' };
const erroType500:ErrorType = { code: 'Internal Server Error' };
export const createUser = async (user:User) => {
  const id = await modelUser.createUser(user);
  if (!id) {
    throw new CustomErro(erroType500);
  }
  const token = login(user);
  return token;
};

export const loginUser = async ({ username, password }:ILogin) => {
  const userDate = await modelUser.findUser(username);
  if (!userDate) throw new CustomErro(erroType);
  if (userDate.password !== password) throw new CustomErro(erroType);
  const token = login(userDate);
  return token;
};