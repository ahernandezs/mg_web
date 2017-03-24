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
        this.router.navigate(['/reports']);
      },
      err => {
        window.alert('Error al autenticar');
        console.log(err);
      }
    )
  }

}
