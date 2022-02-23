import { ErrorType } from '../interface/interface';

export default class CustomError extends Error {
  code:string;

  message:string;

  constructor({ code = 'Internal Server Error', message = 'inesperado' }:ErrorType) {
    super(message);
    this.code = code;
    this.message = message;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}