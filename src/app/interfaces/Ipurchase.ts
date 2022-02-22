import { IProduct } from "./Iproduct"
import { IUser } from "./Iuser"


export interface IPurchase {
  purchase_id:number, //unique id
  product:IProduct,   //product
  buyer?:IUser,        //user type
  address:string,
  purchase:number,    //timestamp
  delivery?:number,    //timestamp
  status:number       //current status
}
