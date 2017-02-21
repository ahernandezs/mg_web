import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../../../services/reports.services';
import { CompleteResponse } from '../../../models/complete-response';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  constructor(
    private reportsService: ReportsService,
  ) { }

  public completeResponse;

  ngOnInit() {
  }

  search() {
    this.reportsService.complete()
      .subscribe(
          response => {
            this.completeResponse =  response;
          },
          err => {
            console.log(err);
          }
    );
  }

}