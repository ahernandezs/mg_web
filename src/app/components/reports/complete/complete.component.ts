import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

import { ReportsService } from '../../../services/reports.services';
import { CompleteResponse } from '../../../models/complete-response';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  constructor(
    private reportsService: ReportsService,
  ) { }

  public completeResponse;
  desde: Date;
  hasta: Date;
  es: any;

  ngOnInit() {
    this.es = {
        firstDayOfWeek: 1,
        dayNames: ["Doming", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["D","L","M","M","J","V","S"],
        monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
        monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
    };
  }

  search() {
    this.reportsService.complete()
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
        var csvData = this.ConvertToCSV(this.completeResponse);
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

  ConvertToCSV(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
      var str = '';
      var row = "";

      for (var index in objArray[0]) {
          row += index + ',';
      }
      row = row.slice(0, -1);
      str += row + '\r\n';
      for (var i = 0; i < array.length; i++) {
          var line = '';
          for (var index in array[i]) {
              if (line != '') line += ','
              line += array[i][index];
          }
          str += line + '\r\n';
      }
      return str;
  }

}