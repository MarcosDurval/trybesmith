import { JwtPayload } from 'jsonwebtoken';

export interface User {
  username:string,
  classe:string,
  level:number,
  password:string
}
export interface ErrorType {
  code: string,
  message?:string
}
export interface ILogin{
  username:string,
  password:string
}

export interface IProducts {
  id:number,
  name: string,
  amount: string,
  orderId: number | null
}

export interface IUser extends JwtPayload {
  username:string,
  classe:string,
  level:number,
  password:string
  iat:number,
  exp:number
}
export interface IUserWithId extends User{
  id:number
}
