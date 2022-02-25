import { Request, Response } from 'express';
import * as serviceUser from '../service/user';
import { allValidCreate } from './joiError/validUser';

const createUser = async (req:Request, res:Response) => {
  allValidCreate(req.body);

  const token = await serviceUser.createUser(req.body);
  return res.status(201).json({ token });
};

export default createUser;