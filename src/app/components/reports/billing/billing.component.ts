import { Component, OnInit } from '@angular/core';
import { BillingResponse } from '../../../models/billing-response';
import { Complete } from '../../../models/complete';

import { ReportsService } from '../../../services/reports.services';
import { Utils } from '../../../utils/utils';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.sass']
})
export class BillingComponent implements OnInit {

  billingResponse: BillingResponse = new BillingResponse('','','','','');

  datos: any = [];

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

  lafecha;

  constructor(
    private reportsService: ReportsService,
    private utils: Utils
  ) { }

  ngOnInit() {
    this.showLoading = true;
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
    let today = new Date();
    let yesterday = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000));
    let bancoinicial = this.bankinlocalstorage === 'admin' ? 'Invex' : this.bankselectedLabel;
    this.reportsService.validate(this.utils.getDate(yesterday), this.utils.getDate(yesterday), bancoinicial)
      .subscribe(
        res => {
          this.billingResponse = res;
          if (typeof res.entries == 'undefined') {
            this.datos = [];
          }else{
            this.datos = this.billingResponse.entries;
          }
          let tmp = this.billingResponse.date.split(' ');
          this.lafecha = tmp[0] === tmp[2] ? tmp[0] : tmp[0] + ' hasta ' + tmp[2];
          this.showLoading = false;
        },
        err => {
          this.showLoading = false;
          this.message = 'Hubo un error';
          this.showError = true;
        },
        () => this.showLoading = false
      );
  }

  search() {
    if (typeof this.bankselected === 'undefined' || this.bankselected === 0 ) {
      this.message = 'Selecciona un banco primero';
      this.showError = true;
    } else if (typeof this.desde === 'undefined' || typeof this.hasta === 'undefined' ) {
      this.message = 'Selecciona un rango de fechas';
      this.showError = true;
    } else if (this.desde > this.hasta) {
      this.message = 'La fecha final no debe ser anterior a la inicial';
      this.showError = true;
    } else {
      if (this.bankinlocalstorage === 'admin') {
        for (let i = 0; i < this.banks.length; i++) {
          if (this.banks[i].value === this.bankselected) {
            this.bankselectedLabel = this.utils.banks[i].label;
            break;
          }
        }
      }
      this.showLoading = true;
      this.reportsService.validate(this.utils.getDate(this.desde), this.utils.getDate(this.hasta), this.bankselectedLabel)
        .subscribe(
          res => {
            this.billingResponse = res;
            if (typeof res.entries == 'undefined') {
              this.datos = [];
            }else{
              this.datos = this.billingResponse.entries;
            }
            let tmp = this.billingResponse.date.split(' ');
            this.lafecha = tmp[0] === tmp[2] ? tmp[0] : tmp[0] + ' hasta ' + tmp[2];
            this.showLoading = false;
          },
          err => {
            this.showLoading = false;
            this.message = 'Hubo un error';
            this.showError = true;
          }
        );
    }
  }

}
