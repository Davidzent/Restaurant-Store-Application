import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { IUser } from 'src/app/interfaces/Iuser';
import { HttpClient } from '@angular/common/http';
import { FoodishService } from '../../../../../services/foodish/foodish.service';
import { PurchaseService } from '../../../../../services/purchasee/purchase.service';


@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

  user:IUser=JSON.parse(sessionStorage.getItem("user")||"{}");

  @Input() innerproduct: IProduct;
  @Output() eventCloser = new EventEmitter<null>();

  image: string;
  posts: any;

  category: string = 'pizza';
  imgNum: string = '1';


  isLogin():boolean{
    return this.user?this.user.user_id?true:false:false;
  }
  isCustomer():boolean{
    return this.isLogin()?this.user.roleid=="Customer"?true:false:false;
  }

  constructor(private foodishService: FoodishService, private purchaseService: PurchaseService) { }



  ngOnInit() {
   this.getimgInfo();
   this.getImage();
  }

  closeWindow(){
    this.eventCloser.emit(null);
  }

  getImage() {
    this.foodishService.getData(`https://foodish-api.herokuapp.com/images/${this.category}/${this.category}${this.imgNum}.jpg`)
      .subscribe(
        imgData => this.image = imgData,
        err => console.log(err)
      );
  }

  getimgInfo() {
      console.log(this.innerproduct.typeid);
    if (this.innerproduct.typeid.toLocaleString() == 'Hambur'){
        this.category = 'burger';
        
    }

    if (this.innerproduct.typeid.toLocaleString() == 'pasta'){
      this.category = 'pasta';
  }

  if (this.innerproduct.typeid.toLocaleString() == 'pizza'){
    this.category = 'pizza';
  }

  this.imgNum = this.innerproduct.product_id.toLocaleString();
  
  }

  generatePurchase(){
    this.purchaseService.createPurchase(this.innerproduct);
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
