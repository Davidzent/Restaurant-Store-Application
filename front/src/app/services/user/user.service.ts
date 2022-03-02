import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { IUser } from '../../interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) {
 }

httpOptions = {
  withCredentials: true
 };

  private url:string='http://localhost:7000';

  islogin():void{
    let url:string=`${this.url}/user/islogin`;
    this.http.get<IUser>(url,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
      });
  }

  loginSeller(user:IUser): void{
    let url:string=`${this.url}/user/login/seller`;
    this.http.post<IUser>(url,user,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
        if(data)location.reload();
      });
  }

  loginCustomer(user:IUser): void{
    let url:string=`${this.url}/user/login/customer`;
    this.http.post<IUser>(url,user,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
        if(data)location.reload();

      });
  }

  registerCustomer(user:IUser): void{
    let url:string=`${this.url}/user/register/customer`;
    this.http.post<IUser>(url,user,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
        if(data)location.reload();


      });
  }

  registerSeller(user:IUser): void{
    let url:string=`${this.url}/user/register/seller`;
    this.http.post<IUser>(url,user,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
                if(data)location.reload();


      });
  }
  logOut():void{
    let url:string=`${this.url}/user/logout`;
    this.http.post<void>(url,null,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user","");
        location.reload();
      });
  }
  update(user:IUser):void{
    let url:string=`${this.url}/user/update`;
    this.http.put<IUser>(url,user,this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
        if(data)location.reload();

      });
  }
}
