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
  bankselected;
  bankselectedLabel: string;
  bankinlocalstorage;

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
    this.bankinlocalstorage = localStorage.getItem('X-BANK-ID-MG');
    if(this.bankinlocalstorage != 'admin'){
      for(let i=0; i < this.banks.length; i++){
        if(this.banks[i].value == this.bankinlocalstorage){
          this.bankselected = this.banks[i].value;
          this.bankselectedLabel = this.utils.banks[i].label
          break;
        }
      }
    }
  }

  search() {
    if(this.bankselected === 0){
      this.message = "Selecciona un banco primero";
      this.display = true;
    } else if(typeof this.desde == 'undefined' || typeof this.hasta == 'undefined' ){
      this.message = "Selecciona un rango de fechas";
      this.display = true;
    } else if(this.desde > this.hasta){
      this.message = "La fecha final no debe ser anterior a la inicial";
      this.display = true;
    } else{
      if(this.bankinlocalstorage == 'admin'){
        for(let i=0; i < this.banks.length; i++){
          if(this.banks[i].value == this.bankselected){
            this.bankselectedLabel = this.utils.banks[i].label
            break;
          }
        }
      }
      console.log('Voy a mandar la petición...');
      this.reportsService.complete(this.utils.getDate(this.desde), this.utils.getDate(this.hasta), this.bankselectedLabel.toLowerCase()).subscribe(
        res => {
          console.log("respuesta: "+JSON.stringify(res));
          this.completeResponse = res
        },
        err => console.log(err)
      );
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