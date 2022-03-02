import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IProduct } from '../../interfaces/Iproduct';
import { IPurchase } from '../../interfaces/Ipurchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

purchase: IPurchase[] = [];

subject:Subject<IPurchase[]> = new Subject<IPurchase[]>();

private url:string='http://localhost:7000';

constructor(private http:HttpClient) { }

getAll(): void{
  let url:string=`${this.url}/purchase/`;
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
