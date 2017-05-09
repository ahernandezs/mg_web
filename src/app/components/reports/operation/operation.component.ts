import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.services';
import { Utils } from '../../../utils/utils';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.sass']
})
export class OperationComponent implements OnInit {

  banks: SelectItem[];
  bankselected: Number;
  bankselectedLabel: String;
  bankinlocalstorage: String;

  desde: Date;
  hasta: Date;
  es: any;
  device: String;
  user: String;
  method: String;

  message: String;
  showError: Boolean = false;
  showLoading: Boolean = false;

  operationResponse;

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

  search() {
    if (typeof this.bankselected === 'undefined' || this.bankselected === 0 ) {
      this.message = 'Selecciona un banco primero';
      this.showError = true;
    } else if (typeof this.desde === 'undefined' || typeof this.hasta === 'undefined' ) {
      this.message = 'Selecciona un rango de fechas';
      this.showError = true;
    } else if (this.desde > this.hasta) {
      this.message = 'La fecha inicial debe ser anterior a la final';
      this.showError = true;
    } else if (typeof this.device === 'undefined') {
      this.message = 'Selecciona un dispositivo';
      this.showError = true;
    } else if (typeof this.user === 'undefined') {
      this.message = 'Selecciona un usuario';
      this.showError = true;
    } else if (typeof this.method === 'undefined') {
      this.message = 'Selecciona un método';
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
      this.reportsService.search(this.desde, this.hasta, this.bankselected, this.device, this.user, this.method).subscribe(
            res => {
              this.operationResponse = res;
            },
            err => {
              this.message = 'Hubo un error';
              this.showError = true;
            },
            () =>  this.showLoading = false
      );
    }
  }

}
