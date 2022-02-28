import { Component, Input, OnInit } from "@angular/core";
import { IPurchase } from 'src/app/interfaces/Ipurchase';
@Component({
  selector: 'view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {
  tax:number = 0;
  total:number = 0;
  constructor() { }
  ngOnInit() {
    this.tax = this.input.product.price * 0.1;
    this.total = this.input.product.price + this.tax;
  }
  @Input() input:IPurchase = {
    purchase_id: 0,
    product: {
      name: "Testing",
      product_id: 0,
      price: 30,
      description: 'Test Test Test Test Test Test Test Test Test Test Test Test Test',
      seller: {
        user_id:0,    //unique id no need to display this
        fname:"",
        lname:"",
        email:""     //don't know if we should display this
      },
      statusid: 0,
      typeid: 0
    },
    address:"",
    purchase: 0,
    delivery: 0,
    status: 0
  };
}
