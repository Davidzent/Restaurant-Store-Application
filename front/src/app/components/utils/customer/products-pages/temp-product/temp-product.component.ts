import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { IUser } from 'src/app/interfaces/Iuser';
import { FoodishService } from '../../../../../services/foodish/foodish.service';

@Component({
  selector: 'temp-product',
  templateUrl: './temp-product.component.html',
  styleUrls: ['./temp-product.component.css'],
})
export class TempProductComponent implements OnInit {
  @Input() product: IProduct;

  user: IUser = JSON.parse(sessionStorage.getItem('user') || '{}');
  image: string;
  category: string = 'burger';
  imgNum: string = '1';

  isclicked: boolean = false;

  constructor(private foodishService: FoodishService) {}

  isLogin(): boolean {
    return this.user ? (this.user.user_id ? true : false) : false;
  }

  isCustomer(): boolean {
    return this.isLogin()
      ? this.user.roleid == 'Customer'
        ? true
        : false
      : false;
  }

  ngOnInit() {
    this.getimgInfo();
    this.getImage();
  }

  getImage() {
    this.foodishService
      .getData(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.product.name}`
      )
      .subscribe((data) => {
        this.image = data.meals[0].strMealThumb;
        if(this.image==null)this.image="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
      });
  }

  getimgInfo() {
    //   if (this.product.typeid.toLocaleString() == 'Hambur'){
    //       this.category = 'burger';

    //   }

    //   if (this.product.typeid.toLocaleString() == 'pasta'){
    //     this.category = 'pasta';
    // }

    // if (this.product.typeid.toLocaleString() == 'pizza'){
    //   this.category = 'pizza';
    // }
    this.category = this.product.name.toLowerCase();
    this.imgNum = this.product.product_id.toLocaleString();
    
  }

  clicked() {
    this.isclicked = !this.isclicked;
  }
}
