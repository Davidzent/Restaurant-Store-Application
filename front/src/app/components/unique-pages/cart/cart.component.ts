import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../services/purchasee/purchase.service';
import { IPurchase } from 'src/app/interfaces/Ipurchase';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchases: IPurchase[];


  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.purchaseService.getCartPurchases().subscribe((data) => this.purchases = data);
  }
  
}
