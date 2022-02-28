import { HttpClient } from '@angular/common/http';
import { Injectable ,EventEmitter} from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IProduct } from '../interfaces/Iproduct';
import { IPurchase } from '../interfaces/Ipurchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchaseSelected = new EventEmitter<IPurchase>();
  purchase: IPurchase[] = [];

  subject:Subject<IPurchase[]> = new Subject<IPurchase[]>();



constructor(private http:HttpClient) { }

getPurchases(): void{
  let url:string=`http://localhost:7000/purchase/`;
  this.http.get<IPurchase[]>(url)
    .pipe(
      catchError((e) => {
        console.log(e);
        return throwError(e);
      })
    ).subscribe((data) => {
      console.log(data);
      this.purchase=data;
      this.subject.next(this.purchase);
    });
}

}
