import { ErrorType } from '../interface';

export default class CustomError extends Error {
  code:string;

  constructor({ code = 'Internal Server Error', message = 'inesperado' }:ErrorType) {
    super(message);
    this.message = message;
    this.code = code;
  }
}