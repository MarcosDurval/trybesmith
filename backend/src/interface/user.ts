export interface User {
  username:string,
  classe:string,
  level:number,
}

export interface IUserWithPassoword extends User{
  password:string
}

export interface IUserWithId extends IUserWithPassoword{
  id:number
}

export interface IUser {
  id:number
  username:string,
  classe:string,
  level:number,
  iat:number,
  exp:number
}