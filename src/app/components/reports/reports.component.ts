import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass']
})
export class ReportsComponent implements OnInit {

    mainMenu: false;
    private myUrl:any;

    constructor() { }

    ngOnInit() {
        this.myUrl = 'dashboard';
    }

    changeView(view: String) {
        this.myUrl = view;
    }

}
