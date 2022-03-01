import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { FoodishService } from '../../../../../services/foodish.service';

@Component({
  selector: 'temp-product',
  templateUrl: './temp-product.component.html',
  styleUrls: ['./temp-product.component.css']
})
export class TempProductComponent implements OnInit {
  @Input() product: IProduct;
  
  image: string;
  category: string = 'pizza';
  imgNum: string = '1';

  isclicked: boolean = false;

  constructor(private foodishService: FoodishService) { }

  ngOnInit() {
    this.getimgInfo();
    this.getImage();
  }

  getImage() {
    this.foodishService.getData(`https://foodish-api.herokuapp.com/images/${this.category}/${this.category}${this.imgNum}.jpg`)
      .subscribe(
        imgData => this.image = imgData,
        err => console.log(err)
      );
  }

  getimgInfo() {
      console.log(this.product.typeid);
    if (this.product.typeid.toLocaleString() == 'Lunch'){
        this.category = 'burger';
        
    }

    if (this.product.typeid.toLocaleString() == 'Dinner'){
      this.category = 'pasta';
  }

  if (this.product.typeid.toLocaleString() == 'Breakfast'){
    this.category = 'pizza';
  }

  this.imgNum = this.product.product_id.toLocaleString();
  
  }

  clicked() {
    this.isclicked = !this.isclicked;
    console.log(this.isclicked);
  }


}
