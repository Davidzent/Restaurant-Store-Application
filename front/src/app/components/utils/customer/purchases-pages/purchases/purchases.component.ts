import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { PurchaseService } from 'src/app/services/purchasee/purchase.service';

@Component({
  selector: 'purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases:Observable<IPurchase[]> = new Observable<IPurchase[]>();

  input:IPurchase = {
    purchase_id: 0,
    product: {
      product_id: 0,
      price: 0,
      description: '',
      seller: {
        user_id:0,    //unique id no need to display this
        fname:"",
        lname:"",
        email:""      //don't know if we should display this
      },
      statusid: 0,
      typeid: ""
    },
    address:"",
    purchase: 0,
    delivery: 0,
    statusid: ""
  };

  constructor(private purchaseService:PurchaseService) { }

  ngOnInit() {
    this.purchaseService.getPurchases();
    this.purchases = this.purchaseService.subject;
  }

  // getPokemon(name: string){
  //   console.log(name);
  //   this.purchaseService.getAll();
  // }


}
