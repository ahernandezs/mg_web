import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(
      private http: Http
  ) {}

  get(url: string, options) {
    return this.http.get(url, options);
  }

  post(url: string, data: any, options) {
    return this.http.post(url, data, options);
  }
  
}