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
export interface Login{
  username:string,
  password:string
}