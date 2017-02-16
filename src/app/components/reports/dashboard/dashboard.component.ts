import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // lineChart
  public lineChartData:Array<any> = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    [65, 59, 70, 81, 56, 55, 40],
    [23, 49, 80, 21, 86, 35, 30],
    [65, 59, 60, 81, 45, 55, 49],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'doughnut';
  public polarAreaChartType: string = 'polarArea';

  // Pie
  public pieChartLabels:string[] = ['Reportes', 'Operaciones', 'Bancos'];
  public pieChartData:number[] = [300, 500, 100];

  //other
  public polarAreaChartLabels:string[] = ['Monetizados','No monetizados'];
  public polarAreaChartData:number[] = [500,300];

  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }

}
