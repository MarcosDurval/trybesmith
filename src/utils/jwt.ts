import Jwt from 'jsonwebtoken';
import { User } from '../interface';

const senha = 'minhaSenhaÉ';
// const options:{ expiresIn:string, algorithm:string } = {
//   expiresIn: '1h',
//   algorithm: 'HS256',
// };

export const login = (payload:User):string => {
  const result:string = Jwt.sign(payload, senha, { expiresIn: '1h',
    algorithm: 'HS256' });
  return result;
};
// source: https://stackoverflow.com/questions/68403905/how-to-add-additional-properties-to-jwtpayload-type-from-types-jsonwebtoken
export const valid = (token:string) => {
  const result = Jwt.verify(token, senha); 
  return result;
};