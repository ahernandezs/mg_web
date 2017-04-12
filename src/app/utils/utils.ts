import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

  getCookie(){
    var x = document.cookie.split(';');
    var toquen = '';
    for(var i=0; i < x.length; i++) {
      var c = x[i];
      while (c.charAt(0)==' '){
        c = c.substring(1,c.length);
      }
      if (c.indexOf('X-AUTH-TOKEN') == 0){
        toquen = c.substring('X-AUTH-TOKEN='.length,c.length);
      }
    }
    return toquen;
  }

}