import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.services';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.sass']
})
export class BillingComponent implements OnInit {

  banks: Array<any>;
  bankselected: Number;
  bankselectedLabel: String;
  bankinlocalstorage: String;

  desde: Date;
  hasta: Date;
  es: any;

  message: String;
  showError: Boolean = false;
  showLoading: Boolean = false;

  constructor(
    private reportsService: ReportsService,
    private utils: Utils
  ) { }

  ngOnInit() {
    this.es = this.utils.es;
    this.banks = this.utils.banks;
    this.bankinlocalstorage = localStorage.getItem('X-BANK-ID-MG');
    if (this.bankinlocalstorage !== 'admin') {
      for (let i = 0; i < this.banks.length; i++) {
        if (this.banks[i].value === Number(this.bankinlocalstorage)) {
          this.bankselected = this.banks[i].value;
          this.bankselectedLabel = this.utils.banks[i].label;
          break;
        }
      }
    }
  }

}
