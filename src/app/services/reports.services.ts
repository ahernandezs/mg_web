import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from './http.service';
import { ResponseContentType, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { BillingResponse } from '../models/billing-response';
import { CompleteResponse } from '../models/complete-response';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

 constructor(private http: HttpClient) {}

 complete(desde, hasta, banco): Observable<CompleteResponse[]> {
  return this.http.get(environment.baseURL + 'getLog?dateSince=' + desde + '&dateUntil=' + hasta + '&client=' + banco)
   .map(res => res.json())
   .catch(err => Promise.reject(err));
 }

 validate(desde, hasta, banco): Observable<BillingResponse> {
  return this.http.get(environment.baseURL + 'reporteValidacion?dateSince=' + desde + '&dateUntil=' + hasta + '&client=' + banco)
   .map(res => res.json())
   .catch(err => Promise.reject(err));
 }

 search(desde, hasta, banco, dispositivo, usuario, metodo): Observable<Array<any>> {
 return this.http.get(environment.baseURL + 'search?dateSince=' + desde + '&dateUntil=' + hasta + '&client=' + banco + '&device=' + dispositivo + '&user=' + usuario + '&method=' + metodo )
   .map(res => res.json())
   .catch(err => Promise.reject(err));
 }

}
