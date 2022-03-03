import { Component, Input, OnInit } from "@angular/core";
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { PurchaseService } from "src/app/services/purchasee/purchase.service";
@Component({
  selector: 'view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {
  tax:number = 0;
  total:number = 0;

  constructor(private purchaseService:PurchaseService) { }

  ngOnChanges(){
    this.tax = Number((this.input.product.price * 0.1).toFixed(2));
    this.total = this.input.product.price + this.tax;
  }

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
      statusid: 0,
      typeid: ""
    },
    address:"",
    purchase: 0,
    delivery: 0,
    statusid: ""
  };


  approvePurchase(purchaseId){
    this.purchaseService.approvePurchase(purchaseId);
  }
  declinePurchase(purchaseId) {
    this.purchaseService.declinePurchase(purchaseId);
  }
  deliveryPurchase(purchaseId) {
    this.purchaseService.deliveryPurchase(purchaseId);
  }

}
