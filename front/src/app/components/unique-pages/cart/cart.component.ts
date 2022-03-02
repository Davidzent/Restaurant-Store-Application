import { Component, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchases:IPurchase[]=[];
  
  constructor() { }

  ngOnInit() {
  }
  
}
