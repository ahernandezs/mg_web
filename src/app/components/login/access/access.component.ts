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
        if(document.cookie !== null){
          var x = document.cookie.split(';');
          var toquen;
          for(var i=0; i < x.length; i++) {
              var c = x[i];
              while (c.charAt(0)==' ') c = c.substring(1,c.length);
              if (c.indexOf('X-AUTH-TOKEN=') == 0)
                toquen = c.substring('X-AUTH-TOKEN='.length,c.length);
          }
          localStorage.setItem('X-AUTH-TOKEN-MG', toquen);
          localStorage.setItem('X-AUTH-USER-MG', this.user);
          localStorage.setItem('X-AUTH-PASS-MG', this.password);
          this.router.navigate(['/reports']);
        }else{
          window.alert("Fallo al autenticar");
        }
      },
      err => {
        window.alert('Error al autenticar');
        console.log(err);
      }
    )
  }

}
