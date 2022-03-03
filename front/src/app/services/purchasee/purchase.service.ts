import { HttpClient } from '@angular/common/http';
import { Injectable ,EventEmitter} from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchaseSelected = new EventEmitter<IPurchase>();
  purchases: IPurchase[] = [];
  subject:Subject<IPurchase[]> = new Subject<IPurchase[]>();

  constructor(private http:HttpClient) { }

  // getPurchases(): void{
  //   let url:string=`${environment.url.base}/purchase/`;
  //   this.http.get<IPurchase[]>(url,environment.httpOptions)
  //     .pipe(
  //       catchError((e) => {
  //         debugger;
  //         console.log(e);
  //         return throwError(e);
  //       })
  //     ).subscribe((data) => {
  //       console.log(data);
  //       this.purchases=data;
  //       this.subject.next(this.purchases);
  //     });
  // }

  getPurchases(): Observable<IPurchase[]>{
    let url:string=`${environment.url.base}/purchase/`;
    return this.http.get<IPurchase[]>(url,environment.httpOptions)
  }

  createPurchase(prod: IProduct): void{
    let url:string=`${environment.url.base}/purchase/create`;
    const body = {   
      product:{
          product_id: prod.product_id
      },
      address:"address.",
      statusid:"Cart"
    };

    this.http.post<any>(url, body, environment.httpOptions).subscribe((data) => {console.log(data)});
  }

  getCartPurchases(): Observable<IPurchase[]> {
    let url:string=`${environment.url.base}/purchase/cart/user` 
    return this.http.get<IPurchase[]>(url, environment.httpOptions);
  }

  declinePurchase(purchase_id):void{
    let purchase:IPurchase = {
      purchase_id: purchase_id, //unique id mainly used for form request
      product:undefined,   //product
      address:"",
      purchase:0,
      statusid:""
    }
    let url:string=`${environment.url.base}/purchase/cancel`;
    this.http.put<IPurchase>(url,purchase,environment.httpOptions)
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
      statusid:""
    }
    let url:string=`${environment.url.base}/purchase/confirm`;
    this.http.put<IPurchase>(url,purchase,environment.httpOptions)
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
      statusid:""
    }
    let url:string=`${environment.url.base}/purchase/delivery`;
    this.http.put<IPurchase>(url,purchase,environment.httpOptions)
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
