import { Component, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { PurchaseService } from 'src/app/services/purchasee/purchase.service';

@Component({
  selector: 'cart',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {

  purchases:IPurchase[] = [];
  totalPrice: number = 0;
  total: number = 0;
  totalTax: number = 0;
 //purchases:Observable<IPurchase[]> = new Observable<IPurchase[]>();

  constructor(private purchasesService: PurchaseService) { }
  display:boolean= false;

  ngOnInit() {
    this.purchasesService.getPurchases().subscribe((data) =>{
      this.purchases = data;
      if(this.purchases){
        this.display = true;
        for(let purchase of this.purchases){
          this.totalPrice += purchase.product.price;
          this.totalTax += purchase.product.price * 0.1;
          this.total += purchase.product.price + this.totalTax;

          console.log("a: ", purchase.product.price);
          console.log("a: ", this.totalTax);
          console.log("a: ", this.total);

        }
      }
    });

  }
}
