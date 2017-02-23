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

}