import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';

import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.sass']
})
export class OperationComponent implements OnInit {

  desde: Date;
  hasta: Date;
  es: any;

  constructor(
    private utils: Utils
  ) { }

  ngOnInit() {
    this.es = this.utils.es;
  }

}
