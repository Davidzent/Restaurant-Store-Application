import { HttpClient } from '@angular/common/http';
import { Injectable ,EventEmitter} from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IProduct } from '../interfaces/Iproduct';
import { IPurchase } from '../interfaces/Ipurchase';
import {environment} from "../../environments/environment";
import {IUser} from "../interfaces/Iuser";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchaseSelected = new EventEmitter<IPurchase>();
  purchases: IPurchase[] = [];
  subject:Subject<IPurchase[]> = new Subject<IPurchase[]>();



  constructor(private http:HttpClient) { }

  getPurchases(): void{
    let url:string=`http://localhost:7000/purchase/`;
    this.http.get<IPurchase[]>(url)
      .pipe(
        catchError((e) => {
          debugger;
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        debugger;
        console.log(data);
        this.purchases=data;
        this.subject.next(this.purchases);
      });
  }



  declinePurchase(purchase_id):void{
    let purchase:IPurchase = {
      purchase_id: purchase_id, //unique id mainly used for form request
      product:undefined,   //product
      address:"",
      purchase:0,
      statusid:0
    }
    let url:string=`${environment.url.base}/purchase/cancel`;
    this.http.put<IPurchase>(url,purchase)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e)
        })
      )
      .subscribe((data)=>{
        console.log(data);
      }
      )
  }

  approvePurchase(purchase_id):void{
    let purchase:IPurchase = {
      purchase_id: purchase_id, //unique id mainly used for form request
      product:undefined,   //product
      address:"",
      purchase:0,
      statusid:0
    }
    console.log("TRESTxxxxxxxx....");
    let url:string=`${environment.url.base}/purchase/confirm`;
    this.http.put<IPurchase>(url,purchase)
      .pipe(
        catchError((e)=>{
          console.log(e);
          return throwError(e)
        })
      )
      .subscribe((data)=>{
          console.log(data);
      }

      )
  }

  deliveryPurchase(purchase_id):void{
    let purchase:IPurchase = {
      purchase_id: purchase_id, //unique id mainly used for form request
      product:undefined,   //product
      address:"",
      purchase:0,
      statusid:0
    }

    console.log("TRESTxxxxxxxx....");
    let url:string=`${environment.url.base}/purchase/delivery`;
    this.http.put<IPurchase>(url,purchase)
      .pipe(
        catchError((e)=>{
          console.log(e);
          return throwError(e)
        })
      )
      .subscribe((data)=>{
          console.log(data);
        }

      )
  }
}
