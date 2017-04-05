import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../../../services/reports.services';
import { CompleteResponse } from '../../../models/complete-response';
import { Complete } from '../../../models/complete';

import { Utils} from '../../share/utils';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  completeRequest: Complete;
  completeResponse: Array<any>;

  utils: Utils;
  banks;

  bank;
  bankLogged;
  desde: Date;
  hasta: Date;
  es: any;

  selected: boolean;

  message: string
  display: boolean = false;
  blocked: boolean = false;

  constructor(
    private reportsService: ReportsService
  ) {
    this.utils = new Utils();
    this.completeRequest = new Complete(0,"","");
    this.selected = false;
   }

  ngOnInit() {
    this.es = this.utils.es;
    this.banks = this.utils.banks;
    for(let i=0; i < this.banks.length; i++){
      if(this.utils.banks[i].value === localStorage.getItem('X-BANK-ID-MG')){
        this.bankLogged = this.utils.banks[i].label;
        break;
      }
    }
    console.log('Banco: '+this.bankLogged);
  }

  search() {
    if(this.bank === 0){
      this.message = "Selecciona un banco primero";
      this.display = true;
    } else if(typeof this.desde == 'undefined' || typeof this.hasta == 'undefined' ){
      this.message = "Selecciona un rango de fechas";
      this.display = true;
    } else if(this.desde > this.hasta){
      this.message = "La fecha final no debe ser anterior a la inicial";
      this.display = true;
    } else{
      this.completeResponse = new Array<any>();
      let bankname;
      for(let i=0; i < this.utils.banks.length; i++){
        if(this.utils.banks[i].value === this.bank){
          bankname = this.utils.banks[i];
          break;
        }
      }
      for(let i=0; i <= Math.round((Number(this.hasta) - Number(this.desde))/(1000*60*60*24)); i++){
        this.completeResponse.push({bank: bankname.label, date: this.utils.getDate(new Date(Number(this.desde) + (1000*60*60*24*i))), id: i});
      }
    }
  }

  download(){
    console.log('bajando...');
  }

  seleccionar(source) {
    let checkboxes = document.getElementsByName('report');
    for(var i = 0 ; i < checkboxes.length ; i++) {
      let tmp = <HTMLInputElement>checkboxes[i];
      tmp.checked = this.selected;
    }
  }

}