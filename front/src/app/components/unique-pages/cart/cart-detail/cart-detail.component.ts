import {Component, Input, OnInit} from '@angular/core';
import {IPurchase} from "../../../../interfaces/Ipurchase";
import { FoodishService } from 'src/app/services/foodish/foodish.service';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  tax:number = 0;
  total:number = 0;
  image:string;

  @Input() purchase:IPurchase;
  constructor(private foodishService: FoodishService) { }



  ngOnChanges(){
    this.tax = Number((this.purchase.product.price * 0.1).toFixed(2));
    this.total = this.purchase.product.price + this.tax;
  }
  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.foodishService.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.purchase.product.name}`)
      .subscribe((data) => {
        this.image = data.meals[0].strMealThumb;
      });
  }
}
