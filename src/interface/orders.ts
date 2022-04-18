export interface IOders{
  id:number,
  userId:number
}

export interface IResultOders extends IOders{
  products: number[]
}
