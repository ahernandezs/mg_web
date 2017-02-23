import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.sass']
})
export class OperationComponent implements OnInit {

  constructor() { }

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

}
