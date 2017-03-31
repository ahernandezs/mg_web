import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  bank: string;

  constructor() { }

  ngOnInit() {
    this.bank = localStorage.getItem('X-BANK-ID-MG');
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [650, 590, 700, 810, 560, 550, 400, 100], label: '301000 Banco 1'},
    {data: [230, 490, 800, 210, 860, 350, 300, 900], label: '400828 Banco 2'},
    {data: [650, 590, 600, 810, 450, 550, 490, 200], label: '530222 Banco 3'},
  ];
  public lineChartLabels:Array<any> = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  public lineChartOptions: any={
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(255,0,0,1)',
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,204,204,1)',
    },
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(204,102,0,1)',
    }
  ];
  public lineChartType:string = 'line';
  public lineChartLegend: boolean = true;

  public pieChartType:string = 'doughnut';
  public polarAreaChartType: string = 'polarArea';

  // Pie
  public pieChartLabels:string[] = ['Reportes', 'Operaciones', 'Bancos'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartColors:Array<any> = [
    {
      backgroundColor: [
        "rgba(255,0,0,1)",
        "rgba(0,0,221,1)",
        "rgba(0,153,0,1)"
      ],
      hoverBackgroundColor: [
        "rgba(255,0,0,0.8)",
        "rgba(0,0,221,0.8)",
        "rgba(0,153,0,0.8)"
      ]
    }
  ];

  //other
  public polarChartColors:Array<any> = [
    {
      backgroundColor: [
        "rgba(0,0,0,0)",
        "rgba(0,0,0,0)"
      ],
      borderColor: [
        "rgba(255,0,0,1)",
        "rgba(204,204,0,1)"
      ],
      hoverBackgroundColor: [
        "rgba(255,0,0,0.2)",
        "rgba(204,204,0,0.2)"
      ]
    }
  ];
  public polarAreaChartLabels:string[] = ['Monetizados','No monetizados'];
  public polarAreaChartData:number[] = [500,300];

  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }

}
