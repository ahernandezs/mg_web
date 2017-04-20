import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(
      private http: Http
  ) {}

  get(url: string) {

/*
    let headers = new Headers({'X-AUTH-TOKEN':  localStorage.getItem('X-AUTH-TOKEN')});
    let options = new RequestOptions({ headers: headers, withCredentials: true });
*/

    let headers = new Headers();
    headers.append('X-CLIENT-TYPE', 'WEB');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'Basic ' + btoa(localStorage.getItem('X-USER-MG') + ':' + localStorage.getItem('X-PASS-MG')));
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.get(url, options);
  }

  post(url: string, data: any) {
    let headers = new Headers();
    headers.append('X-CLIENT-TYPE', 'WEB');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'Basic ' + btoa(localStorage.getItem('X-USER-MG') + ':' + localStorage.getItem('X-PASS-MG')));
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.post(url, data, options);
  }

}