import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass']
})
export class ReportsComponent implements OnInit {

    mainMenu: false;
    private myUrl: any;
    showLoading: Boolean = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.myUrl = 'dashboard';
    }

    changeView(view: String) {
        this.myUrl = view;
    }

    logout(){
      localStorage.removeItem('X-AUTH-TOKEN');
      localStorage.removeItem('X-BANK-ID-MG');
      localStorage.removeItem('X-USER-MG');
      localStorage.removeItem('X-PASS-MG');
      this.router.navigate(['/login']);
    }

}
