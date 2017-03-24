import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

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

  public completeResponse;
  utils: Utils;

  bank = 0;
  desde: Date;
  hasta: Date;
  es: any;

  ngOnInit() {
    this.es = this.utils.es;
  }

  search() {
    if(this.desde === null || this.hasta === null || this.bank === 0){
      alert("Selecciona un rango de fechas y un banco");
      return;
    }
    let desde = this.desde.getFullYear()+"-"+ ((this.desde.getMonth() < 10) ? '0'+this.desde.getMonth() : this.desde.getMonth()) +"-"+((this.desde.getDay() < 10) ? '0'+this.desde.getDay() : this.desde.getDay());
    let hasta = this.hasta.getFullYear()+"-"+ ((this.hasta.getMonth() < 10) ? '0'+this.hasta.getMonth() : this.hasta.getMonth()) +"-"+((this.hasta.getDay() < 10) ? '0'+this.hasta.getDay() : this.hasta.getDay());
    this.reportsService.complete(desde, hasta, this.bank)
      .subscribe(
          response => {
            this.completeResponse =  response;
          },
          err => {
            console.log(err);
          }
    );
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
        console.log('busca algo primero');
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
        console.log('busca algo primero');
    }
  }

}