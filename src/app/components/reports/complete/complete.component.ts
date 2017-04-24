import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

import { ResponseContentType } from '@angular/http';

import { ReportsService } from '../../../services/reports.services';
import { CompleteResponse } from '../../../models/complete-response';
import { Complete } from '../../../models/complete';

import { Utils } from '../../../utils/utils';
import { SelectItem } from 'primeng/primeng';

import 'rxjs/Rx' ;

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  completeRequest: Complete;
  completeResponse: Array<any>;

  banks: SelectItem[];
  bankselected: Number;
  bankselectedLabel: String;
  bankinlocalstorage: String;

  desde: Date;
  hasta: Date;
  es: any;

  selected: boolean;

  message: String;
  showError: Boolean = false;
  showLoading: Boolean = false;

  constructor(
    private reportsService: ReportsService,
    private utils: Utils,
    private http: Http
  ) {
    this.completeRequest = new Complete(0, '', '');
    this.selected = false;
  }

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
      this.reportsService.complete(this.utils.getDate(this.desde), this.utils.getDate(this.hasta), this.bankselectedLabel)
        .subscribe(
          res => {
            this.completeResponse = res;
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

  download() {
    var reader = new FileReader();
    let selected: Array<any> = new Array<any>();
    let checkboxes = document.getElementsByName('report');
    for (let i = 0 ; i < checkboxes.length ; i++) {
      let tmp = <HTMLInputElement>checkboxes[i];
      if (tmp.checked) {
        selected.push(tmp.value);
      }
    }
    if (selected.length === 0) {
      this.message = 'Selecciona los reportes a descargar';
      this.showError = true;
    } else {
      this.showLoading = true;
      this.reportsService.download(selected)
        .subscribe(
          (data: any) => {
            this.showLoading = false;
            let leBlob = new Blob([data], { type: 'text/octet-stream' });
            reader.readAsDataURL(leBlob);
            console.log(data);
          },
          error => console.log("Error downloading the file."),
          () => console.log('Completed file download.')
        );

        reader.onloadend = function (e) {
          window.open(reader.result, 'archivo', 'width=20,height=10,toolbar=0,menubar=0,scrollbars=no');
       }
    }
  }

  selectAll(source) {
    let checkboxes = document.getElementsByName('report');
    for (let i = 0 ; i < checkboxes.length ; i++) {
      let tmp = <HTMLInputElement>checkboxes[i];
      tmp.checked = this.selected;
    }
  }

}
