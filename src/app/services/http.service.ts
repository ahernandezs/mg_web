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
  
  getSesionToken(): string{
      var x = document.cookie.split(';');
      var toquen;
      for(var i=0; i < x.length; i++) {
          var c = x[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf('X-AUTH-TOKEN=') == 0)
            toquen = c.substring('X-AUTH-TOKEN='.length,c.length);
      }
      return toquen;
  }


}