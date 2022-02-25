import { Response, NextFunction, Request } from 'express';
import CustomError from '../../error/customErro';
import { ErrorType, IUser } from '../../interface/interface';
import { valid } from '../../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized' };

const verifyToken = (req:Request, _res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    erroType.message = 'Token not found';
    throw new CustomError(erroType);
  }
  try {
    const user = valid(authorization) as IUser;
    req.user = user;
    return next();
  } catch (error) {
    erroType.message = 'Invalid token';
    throw new CustomError(erroType);
  }
};

export default verifyToken;