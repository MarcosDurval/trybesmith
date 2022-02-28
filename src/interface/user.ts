export interface User {
  username:string,
  classe:string,
  level:number,
  password:string
}

export interface IUserWithId extends User{
  id:number
}

export interface IUser {
  username:string,
  classe:string,
  level:number,
  password:string
  iat:number,
  exp:number
}