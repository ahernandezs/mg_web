import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

 constructor(private http: Http) {}

 login(user, password): Observable<any> {
  let headers = new Headers();
  headers.append('X-CLIENT-TYPE', 'WEB');
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Authorization', 'Basic ' + btoa(user + ':' + password));
  headers.append('Access-Control-Allow-Headers', 'Authorization');
  let options = new RequestOptions({ headers: headers, withCredentials: true });

  return this.http.get(environment.baseURL + 'login', options)
   .map((res: Response) => {
    return res.json();
   })
   .catch(
    err => Promise.reject(err)
   );
 }

}
