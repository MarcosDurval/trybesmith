import CustomErro from '../error/fuckerro';
import { ErrorType, Login, User } from '../interface/interface';
import * as modelUser from '../models/user';
import { login } from '../utils/jwt';

const erroType:ErrorType = { code: 'BadRequest', message: 'xablau' };

export const createUser = async (user:User) => {
  const id = await modelUser.createUser(user);
  if (!id) {
    throw new CustomErro(erroType);
  }
  const token = login(user);
  return token;
};

export const loginUser = async ({ username, password }:Login) => {
  const userDate = await modelUser.findUser(username);
  if (!userDate) throw new CustomErro(erroType);
  if (userDate.password !== password) throw new CustomErro(erroType);
  const token = login(userDate);
  return token;
};