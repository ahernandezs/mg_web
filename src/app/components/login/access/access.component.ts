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
  message: string
  display: boolean = false;
  blocked: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = '';
    this.password = '';
  }

  login(){
    if(this.user === '' || this.password === '' ){
      this.message = "Favor de introducir un usuario y una contraseña";
      this.display = true;
    }else{
      this.blocked = true;
      this.authService.login(this.user, this.password).subscribe(
        response => {
          this.blocked = false;
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
            this.message = "Error al autenticar";
            this.display = true;
          }
        },
        err => {
          this.blocked = false;
          this.message = "Datos incorrectos";
          this.display = true;
        }
      )
    }
  }

}
