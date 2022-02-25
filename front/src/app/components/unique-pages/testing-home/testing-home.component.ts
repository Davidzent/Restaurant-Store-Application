import { Component, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { IUser } from 'src/app/interfaces/Iuser';

@Component({
  selector: 'testing-home',
  templateUrl: './testing-home.component.html',
  styleUrls: ['./testing-home.component.css']
})
export class TestingHomeComponent implements OnInit {

  user:IUser=JSON.parse(localStorage.getItem("user")||"{}");

  constructor() { }

  ngOnInit() {
  }

  isLogin():boolean{
    return this.user?this.user.user_id?true:false:false;
  }
  isCustomer():boolean{
    return this.isLogin()?this.user.roleid==1?true:false:false;
  }

  purchase:IPurchase={
    purchase_id:1, //unique id mainly used for form request
    product:{
      product_id: 1,
      price: 50.56,
      description: 'An expensive hamburger',
      seller: JSON.parse(localStorage.getItem("user")||'{}'),
      name: 'This is a very expensive hamburger that is handcrafted by our finest chefs, It has beef, tomatoes, lettuce, and pickles.',
      status: 1,
      typeid: 2
    },   //product
    buyer:JSON.parse(localStorage.getItem("user")||'{}'),        //user type
    address:"Some address",
    purchase:312312,    //timestamp this is going to be a date
    delivery:312312,    //timestamp this is going to be a date
    status:1       //current status
  }

}
