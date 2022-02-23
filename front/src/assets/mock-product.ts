import { IProduct } from '../app/interfaces/Iproduct';
import { IUser } from '../app/interfaces/Iuser';

const Seller: IUser = {
    user_id: 1,   //unique id mainly used for form request
  username: '',   //sometimes we might not want to have this like when displaying purchased orders
  password: '',   //sometimes we might not want to have this like when displaying purchased orders
  fname: 'Bob',
  lname: 'Burger',
  email: 'bburger@gmail.com',
  roleid: 1
}

export const product: IProduct = {
    product_id: 1,
    price: 50.56,
    description: 'An expensive hamburger',
    seller: Seller,
    detailedDescription: 'This is a very expensive hamburger that is handcrafted by our finest chefs, It has beef, tomatoes, lettuce, and pickles.',
    status: 1,
    typeid: 2
}