import { Component, Input, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      status: 0,
      typeid: 0
    },
    address:"",
    purchase: 0,
    delivery: 0,
    status: 0
  };

}
