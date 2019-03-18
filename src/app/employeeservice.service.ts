import { Injectable } from '@angular/core';
import {throwError as observableThrowError, Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { IEmployee } from './employee';
import { tap, catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private url: string ='/assets/data/employee.json';

  constructor(private http:HttpClient) 
  {}

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
}
errorHandler(error: HttpErrorResponse){
return observableThrowError(error.message || "Server Error");
}
  }

