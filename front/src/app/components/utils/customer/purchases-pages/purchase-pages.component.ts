import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../../../services/purchase.service";
import {IPurchase} from "../../../../interfaces/Ipurchase";


@Component({
  selector: 'purchase-pages',
  templateUrl: './purchase-pages.component.html',
  styleUrls: ['./purchase-pages.component.css'],
  providers: [PurchaseService]
})
export class PurchasePagesComponent implements OnInit {
  // itemInteract:boolean = true;
  display = false;
  selectedPurchase: IPurchase ;
  constructor(private  purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.purchaseSelected
      .subscribe(
        (purchase: IPurchase) => {
          this.selectedPurchase = purchase;
          this.display = true;
        }
      );
  }


}
