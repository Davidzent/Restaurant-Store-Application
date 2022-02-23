import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { product } from '../../../../../../assets/mock-product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Product: IProduct = product; 

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
