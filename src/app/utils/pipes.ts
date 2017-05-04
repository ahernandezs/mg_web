import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({name: 'yesorno'})
export class YesorNo implements PipeTransform {
  transform(response: string): string {
    return response === '0' ? 'No' : 'Sí'
  }
}

@Pipe({name: 'dateRange'})
export class DateRange implements PipeTransform {
  transform(response: string): string {
    console.log('en el filtro: '+response);
    let tmp = response.split(' ');
    return tmp[0] === tmp[2] ? tmp[0] : tmp[0] + ' hasta ' + tmp[2];
  }
}
