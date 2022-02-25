import Joi from 'joi';
import CustomError from '../../error/customErro';
import { ErrorType } from '../../interface/interface';

const erroType400:ErrorType = { code: 'BadRequest' };
const erroType422:ErrorType = { code: 'UnprocessableEntity' };

const schema400 = Joi.object({
  name: Joi.required().messages({ 'any.required': 'Name is required' }),
  amount: Joi.required().messages({ 'any.required': 'Amount is required' }),
});

const schema422 = Joi.object({
  name: Joi.string().min(3).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
  }),
  amount: Joi.string().min(3).messages({ 'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters' }),
});
const validProduct = (name:string, amount:string) => {
  const validSchema400 = schema400.validate({ name, amount }).error;
  const validSchema422 = schema422.validate({ name, amount }).error;
  if (validSchema400) {
    erroType400.message = validSchema400.message;
    throw new CustomError(erroType400);
  }
  if (validSchema422) {
    erroType422.message = validSchema422.message;
    throw new CustomError(erroType422);
  }
};

export default validProduct;