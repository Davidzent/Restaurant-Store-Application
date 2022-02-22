import { Component, Input, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() input:IPurchase = {
    purchase_id: 0,
    product: {
      product_id: 0,
      price: 0,
      description: '',
      seller: {       //probably we are just going to need a buyer or a seller since one of them is going to  be login
        user_id:0,    //unique id no need to display this
        fname:"",
        lname:"",
        email:""     //don't know if we should display this
      },
      status: 0,
      typeid: 0
    },
    buyer: {       //probably we are just going to need a buyer or a seller since one of them is going to  be login
      user_id:0,   //unique id no need to display this
      fname:"",
      lname:"",
      email:""    //don't know if we should display this
    },
    purchase: 0,
    delivery: 0,
    status: 0
  };



}
