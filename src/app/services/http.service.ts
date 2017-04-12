import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(
      private http: Http
  ) {}

  get(url: string) {

    let headers = new Headers({'X-AUTH-TOKEN':  localStorage.getItem('X-AUTH-TOKEN')});
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this.http.get(url, options);
  }

  post(url: string, data: any, options) {
    return this.http.post(url, data, options);
  }

}