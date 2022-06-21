import { Response, NextFunction, Request } from 'express';
import CustomError from '../../error/customError';
import { ErrorType } from '../../interface';
import { valid } from '../../utils/jwt';

const erroType:ErrorType = { code: 'Unauthorized' };

const auth = (req:Request, _res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    erroType.message = 'Token not found';
    throw new CustomError(erroType);
  }
  try {
    req.user = valid(authorization);
    return next();
  } catch (error) {
    erroType.message = 'Invalid token';
    throw new CustomError(erroType);
  }
};

export default auth;