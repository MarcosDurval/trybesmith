import CustomError from '../../error/customErro';
import { ErrorType } from '../../interface/interface';

const erroType400:ErrorType = { code: 'BadRequest' };
const erroType422:ErrorType = { code: 'UnprocessableEntity' };

const array400 = (products:Array<number>) => {
  if (!products) {
    erroType400.message = 'Products is required';
    throw new CustomError(erroType400);
  }
};
const array422 = (products:Array<number>) => {
  if (!Array.isArray(products)) {
    erroType422.message = 'Products must be an array of numbers';
    throw new CustomError(erroType422);
  }
  if (products.length === 0) {
    erroType422.message = 'Products can\'t be empty';
    throw new CustomError(erroType422);
  }
  products.forEach((n) => {
    if (typeof n !== 'number') {
      erroType422.message = 'Products must be an array of numbers';
      throw new CustomError(erroType422);
    }
  });
};
const validArray = (products:Array<number>) => {
  array400(products);
  array422(products);
};

export default validArray;