import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Seller: IUser = {
    user_id: 1,   //unique id mainly used for form request
  username: '',   //sometimes we might not want to have this like when displaying purchased orders
  password: '',   //sometimes we might not want to have this like when displaying purchased orders
  fname: 'Bob',
  lname: 'Burger',
  email: 'bburger@gmail.com',
  roleid: 1
}

product: IProduct = {
    product_id: 1,
    price: 50.56,
    description: 'An expensive hamburger',
    seller: this.Seller,
    name: 'This is a very expensive hamburger that is handcrafted by our finest chefs, It has beef, tomatoes, lettuce, and pickles.',
    status: 1,
    typeid: 2
}

  Product: IProduct = this.product;

  @Input() input:IProduct = {
    product_id: 0,
    price: 0,
    description: '',
    seller: {
      user_id:0,   //unique id
      fname:"",
      lname:"",
      email:""   //don't know if we should display this
    },
    status: 0,
    typeid: 0
  };



}
