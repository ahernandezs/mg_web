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

  message: String;
  showError: Boolean = false;
  showLoading: Boolean = false;

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
      this.message = 'Introduce un usuario y una contraseña';
      this.showError = true;
    } else {
      this.showLoading = true;
      this.authService.login(this.user, this.password).subscribe(
        response => {
          this.showLoading = false;
          localStorage.setItem('X-AUTH-TOKEN', this.utils.getCookie());
          localStorage.setItem('X-BANK-ID-MG', response.bankId);
          localStorage.setItem('X-USER-MG', this.user);
          localStorage.setItem('X-PASS-MG', this.password);
          this.router.navigate(['/reports']);
        },
        err => {
          this.showLoading = false;
          this.message = 'Datos incorrectos';
          this.showError = true;
        }
      );
    }
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }

}
