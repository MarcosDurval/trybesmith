import Joi from 'joi';
import CustomError from '../../error/customErro';
import { User, ErrorType } from '../../interface';
// custom messages Joi: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
const erroType400:ErrorType = { code: 'BadRequest' };
const erroType422:ErrorType = { code: 'UnprocessableEntity' };
const validNameAndPassword = Joi.object({
  username: Joi.required().messages({ 'any.required': 'Username is required' }),
  password: Joi.required().messages({ 'any.required': 'Password is required' }),
});

export const validNamePassword = ({ username, password }:User):void => {
  const val = validNameAndPassword.validate({ username, password });
  if (val.error) {
    erroType400.message = val.error.message;
    throw new CustomError(erroType400); 
  }
};
const allSchema422 = Joi.object({
  username: Joi.string().min(3).messages({ 'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters' }),
  classe: Joi.string().min(3).messages({ 'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters' }),
  level: Joi.number().min(1).messages({ 'number.base': 'Level must be a number',
    'number.min': 'Level must be greater than 0' }),
  password: Joi.string().min(8).messages({ 'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
  }),
});
const allSchema400 = Joi.object({
  classe: Joi.required().messages({ 'any.required': 'Classe is required' }),
  level: Joi.required().messages({ 'any.required': 'Level is required' }),
});
const des = (username:string, password:string, classe:string, level:number) => {
  const n = validNameAndPassword.validate({ username, password }).error;
  const schema400 = allSchema400.validate({ classe, level }).error;
  const schema422 = allSchema422.validate({ username, classe, level, password }).error;
  return [n, schema400, schema422];
}; 
export const allValidCreate = ({ username, password, classe, level }:User) => {
  const [n, schema400, schema422] = des(username, password, classe, level);
  if (n) {
    erroType400.message = n.message;
    throw new CustomError(erroType400); 
  }
  if (schema400) {
    erroType400.message = schema400.message;
    throw new CustomError(erroType400); 
  }
  if (schema422) {
    erroType422.message = schema422.message;
    throw new CustomError(erroType422); 
  }
  if (typeof level !== 'number') {
    erroType422.message = 'Level must be a number';
    throw new CustomError(erroType422);
  }
};
