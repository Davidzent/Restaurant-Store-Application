import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { IUser } from '../interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }


  loginSeller(form:any): void{
    let url:string=`http://localhost:7000/user/login/seller`;
    this.http.post<IUser>(url,form)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
      });
  }

  loginCustomer(form:any): void{
    let url:string=`http://localhost:7000/user/login/customer`;
    this.http.post<IUser>(url,form)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));

      });
  }

  registerCustomer(form:any): void{
    let url:string=`http://localhost:7000/user/register/customer`;
    this.http.post<IUser>(url,form)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
      });
  }

  registerSeller(form:any): void{
    let url:string=`http://localhost:7000/user/register/seller`;
    this.http.post<IUser>(url,form)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
      });
  }
}
