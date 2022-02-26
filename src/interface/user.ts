import { JwtPayload } from 'jsonwebtoken';

export interface User {
  username:string,
  classe:string,
  level:number,
  password:string
}

export interface IUserWithId extends User{
  id:number
}

export interface IUser extends JwtPayload {
  username:string,
  classe:string,
  level:number,
  password:string
  iat:number,
  exp:number
}