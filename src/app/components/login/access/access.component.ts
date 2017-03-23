import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.sass']
})
export class AccessComponent {

  user: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = '';
    this.password = '';
  }

  login(){
    if(this.user === '' || this.password === '' ){
      window.alert('Favor de introducir un usuario y una contraseña');
      return;
    }
    this.authService.login(this.user, this.password).subscribe(
      response => {
        var x = document.cookie;
        console.log('La galletita: '+x);
/*
Set-Cookie:X-AUTH-TOKEN=ec046c8b-f8cb-49f2-84ab-74608dd2ac50;Max-Age=10;path=/
Set-Cookie:JSESSIONID=36818EED34CF1664B4574A7C2F726358;path=/MG-Core;HttpOnly
*/
        this.router.navigate(['/reports']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
