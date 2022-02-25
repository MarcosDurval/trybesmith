import { ErrorType } from '../interface/interface';

// source: https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
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