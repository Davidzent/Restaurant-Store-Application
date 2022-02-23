import { IUser } from "./Iuser";


export interface IProduct {
  name?:string,
  product_id:number,    //unique id mainly used for form request
  price:number,
  description:string,
  seller?:IUser,
  status:number,
  typeid?:number
}
