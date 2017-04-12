import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Utils } from '../utils/utils'

@Injectable()
export class HttpClient {

  constructor(
      private http: Http,
      private utils: Utils
  ) {}

  get(url: string) {

    let headers = new Headers({'X-AUTH-TOKEN': this.utils.getCookie()});
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    return this.http.get(url, options);
  }

  post(url: string, data: any, options) {
    return this.http.post(url, data, options);
  }

}