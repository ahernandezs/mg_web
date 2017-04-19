import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.services';
import { Router } from '@angular/router';
import { Utils } from '../../../utils/utils'

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.sass']
})
export class AccessComponent {

  user: string;
  password: string;
  message: string;
  display: Boolean = false;
  blocked: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private utils: Utils
  ) {
    this.user = '';
    this.password = '';
  }

  login() {
    if (this.user === '' || this.password === '' ) {
      this.message = 'Favor de introducir un usuario y una contraseña';
      this.display = true;
    } else {
      this.blocked = true;
      this.authService.login(this.user, this.password).subscribe(
        response => {
          this.blocked = false;
          localStorage.setItem('X-AUTH-TOKEN', this.utils.getCookie());
          localStorage.setItem('X-BANK-ID-MG', response.bankId);
          localStorage.setItem('X-USER-MG', this.user);
          localStorage.setItem('X-PASS-MG', this.password);

          this.router.navigate(['/reports']);
        },
        err => {
          console.log(err);
          this.blocked = false;
          this.message = 'Datos incorrectos';
          this.display = true;
        }
      )
    }
  }

}
