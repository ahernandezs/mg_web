import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  bank: String;
  summaries: Array<any>;
  path: SafeResourceUrl;

  constructor(
    private utils: Utils,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.bank = localStorage.getItem('X-BANK-ID-MG');
    this.summaries = new Array();
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    this.summaries.push({bank: 'Banco 1', current: '324423', last: '324453'});
    for (let i = 0; i < this.utils.paths.length; i++) {
      if (this.utils.paths[i].key === this.bank) {
        this.path = this.sanitizer.bypassSecurityTrustResourceUrl(this.utils.widgetURL + this.utils.paths[i].value);
        break;
      }
    }
  }

}
