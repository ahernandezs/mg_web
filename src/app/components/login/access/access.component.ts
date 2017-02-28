import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.sass']
})
export class AccessComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  user;
  password;
  csrf = "d4c5f173-372f-44c5-a127-3ba11223592a";

  ngOnInit() {
  }

  /**
   * This event element will help to change the current view in the parent element <auth.component>.
   */
  @Output() routeView: EventEmitter<String> = new EventEmitter();

  /**
   * This event is emitted to the parent element <auth.component>.
   */
  changeView(view: String): void {
      this.routeView.emit(view);
  }

  login(view: String){
    this.authService.login(this.user, this.password, this.csrf).subscribe(
      response => {
        console.log("la respuesta");
      },
      err => {
        console.log(err);
      }
    )
  }

}
