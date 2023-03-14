import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Subject, throwError } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodishService {

  constructor(private httpClient: HttpClient) { }

  getData(url: string): any {
    return this.httpClient.get<any>(url, { responseType: 'json' }).pipe(
      catchError((e) => {
        console.log(e);
        return throwError(e);
      })
    );
  }
}
