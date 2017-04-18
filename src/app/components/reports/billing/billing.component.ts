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

  banks: Array<any>;
  bankselected;
  bankselectedLabel: String;
  bankinlocalstorage: String;

  constructor(
    private utils: Utils
  ) { }

  ngOnInit() {
    this.es = this.utils.es;
    this.banks = this.utils.banks;
    this.bankinlocalstorage = localStorage.getItem('X-BANK-ID-MG');
    if (this.bankinlocalstorage !== 'admin') {
      for (let i = 0; i < this.banks.length; i++) {
        if (this.banks[i].value === this.bankinlocalstorage) {
          this.bankselected = this.banks[i].value;
          this.bankselectedLabel = this.utils.banks[i].label;
          break;
        }
      }
    }
  }

}
