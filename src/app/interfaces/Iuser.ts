export interface IUser {
  user_id:number,   //unique id
  username?:string,   //sometimes we might not want to have this like when displaying purchased orders
  password?:string,   //sometimes we might not want to have this like when displaying purchased orders
  fname:string,
  lname:string,
  email:string,
  roleid?:number
}
