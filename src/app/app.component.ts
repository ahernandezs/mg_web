import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(){
    window.onbeforeunload = function(e) {
      localStorage.removeItem('X-AUTH-TOKEN');
      localStorage.removeItem('X-BANK-ID-MG');
    };
  }

}