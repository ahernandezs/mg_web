import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({name: 'yesorno'})
export class YesorNo implements PipeTransform {
  transform(response: string): string {
    return response === '0' ? 'No' : 'Sí'
  }
}
