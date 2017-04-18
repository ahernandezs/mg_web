import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.sass']
})
export class BillingComponent implements OnInit {

  desde: Date;
  hasta: Date;
  es: any;

  constructor(
    private utils: Utils
  ) { }

  ngOnInit() {
    this.es = this.utils.es;
  }

}
