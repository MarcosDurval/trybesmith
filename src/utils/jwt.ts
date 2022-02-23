import Jwt, {} from 'jsonwebtoken';
import { User } from '../interface/interface';

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

export const valid = (token:string) => {
  const result = Jwt.verify(token, senha);
  return result;
};