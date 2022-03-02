import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { IUser } from 'src/app/interfaces/Iuser';
import { HttpClient } from '@angular/common/http';
import { FoodishService } from '../../../../../services/foodish/foodish.service';


@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

  user:IUser=JSON.parse(localStorage.getItem("user")||"{}");

  image: string;
  posts: any;

  isLogin():boolean{
    return this.user?this.user.user_id?true:false:false;
  }
  isCustomer():boolean{
    return this.isLogin()?this.user.roleid==1?true:false:false;
  }

  constructor(private foodishService: FoodishService) { }



  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.foodishService.getData('https://foodish-api.herokuapp.com/images/burger/burger11.jpg')
      .subscribe(
        imgData => this.image = imgData,
        err => console.log(err)
      );
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
    statusid: 1,
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
    statusid: 0,
    typeid: 0
  };



}
