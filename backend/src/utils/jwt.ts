import Jwt from 'jsonwebtoken';
import { IUser, User } from '../interface';

const KEY = process.env.SECRETKEY || '';

export const login = (payload:User):string => {
  const result:string = Jwt.sign(payload, KEY, { expiresIn: '1h',
    algorithm: 'HS256' });
  return result;
};
// source: https://stackoverflow.com/questions/68403905/how-to-add-additional-properties-to-jwtpayload-type-from-types-jsonwebtoken
export const valid = (token:string) => {
  const result = Jwt.verify(token, KEY); 
  return result as IUser;
};