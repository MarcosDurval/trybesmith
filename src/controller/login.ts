import { Request, Response } from 'express';
import * as serviceUser from '../service/user';
import { validNamePassword } from './joischema/validUser';

const login = async (req:Request, res:Response) => {
  validNamePassword(req.body);
  const token = await serviceUser.loginUser(req.body);
  return res.status(200).json({ token });
};

export default login;