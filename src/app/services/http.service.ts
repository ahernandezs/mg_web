import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class HttpClient {

  constructor(
      private http: Http
  ) {}

  get(url: string) {

    let headers = new Headers({'X-AUTH-TOKEN': this.getCookie()});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options);
  }

  post(url: string, data: any, options) {
    return this.http.post(url, data, options);
  }

  getCookie(){
    var x = document.cookie.split(';');
    var toquen = '';
    for(var i=0; i < x.length; i++) {
      var c = x[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf('JSESSIONID=') == 0)
        toquen = c.substring('JSESSIONID='.length,c.length);
    }
    return toquen;
  }


}