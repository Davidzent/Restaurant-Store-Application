import { IUser } from "./Iuser";


export interface IProduct {
  product_id:number,    //unique id
  price:number,
  description:string,
  seller?:IUser,
  status:number,
  typeid?:number
}
