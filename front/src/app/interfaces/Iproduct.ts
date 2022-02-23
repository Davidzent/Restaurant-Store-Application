import { IUser } from "./Iuser";


export interface IProduct {
  product_id:number,    //unique id mainly used for form request
  price:number,
  description:string,
  seller?:IUser,
  detailedDescription?: string,
  status:number,
  typeid?:number
}
