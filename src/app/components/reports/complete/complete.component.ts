import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../../../services/reports.services';
import { CompleteResponse } from '../../../models/complete-response';

import { Utils} from '../../share/utils';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  constructor(
    private reportsService: ReportsService
  ) {
    this.utils = new Utils();
   }

  public completeResponse: Array<any>;
  utils: Utils;

  bank = 0;
  desde: Date;
  hasta: Date;
  es: any;
  banks;
  message: string
  display: boolean = false;
  blocked: boolean = false;

  ngOnInit() {
    this.es = this.utils.es;
    this.banks = this.utils.banks;
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
      this.blocked = true;
      this.reportsService.complete(this.utils.getDate(this.desde), this.utils.getDate(this.hasta), this.bank)
      .subscribe(
          response => {
            this.blocked = false;
            this.completeResponse =  response;
            if(this.completeResponse.length === 0 ){
              this.message = "No hay registros a mostrar";
              this.display = true;
            }
          },
          err => {
            this.blocked = false;
            this.message = "Error al consultar";
            this.display = true;
          }
      );
    }
  }

  export(){
      if(this.completeResponse != null){
        var csvData = this.utils.ConvertToCSV(this.completeResponse);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'SampleExport.csv';
        a.click();
      }else{
        this.message = "Realiza primero una búsqueda";
        this.display = true;
      }
  }

  imprimir(){
      if(this.completeResponse != null){
        var htmlData = this.utils.ConvertToTable(this.completeResponse);
        var w = window.open("about:blank");
        w.document.write(htmlData);
        if (navigator.appName == 'Microsoft Internet Explorer') window.print();
        else w.print();
        w.close();
      }else{
        this.message = "Realiza primero una búsqueda";
        this.display = true;
      }
  }

}