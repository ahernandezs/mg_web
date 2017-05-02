import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Injectable()
export class Utils {

    es: any;
    banks: SelectItem[];
    paths: Array<any>;
    widgetURL: String;

    constructor() {
        this.widgetURL = 'https://insights-embed.newrelic.com/embedded_widget/';
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            monthNames: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ]
        };
        this.banks = [];
        this.banks.push({label: 'Institución    ▼', value: 0});
        this.banks.push({label: 'Afirme', value: 9});
        this.banks.push({label: 'Mifel', value: 13});
        this.banks.push({label: 'Invex', value: 11});
        this.paths = new Array();
        this.paths.push({key: 'admin', value: '7V6pORBldpv_fpRHxpi2H71IaX8cDkeG'});
        this.paths.push({key: '9', value: 'xhdle4vNnLcLFOGKJzufawVB4JkSoMio'});
        this.paths.push({key: '11', value: 'C7-D2Kl3Rn2YXXVxjCs4GMP8u_ei8jTc'});
        this.paths.push({key: '13', value: '8OeKL3lhmHe1uOX_e2kHsHOrj_vimepD'});
    }

    getDate(fecha: Date): string{
        let date: String = '';
        let tmp = fecha.toString().split(' ');
        let mes;
        if (tmp[1] === 'Jan') {
            mes = '01';
        }
        if (tmp[1] === 'Feb') {
            mes = '02';
        }
        if (tmp[1] === 'Mar') {
            mes = '03';
        }
        if (tmp[1] === 'Apr') {
            mes = '04';
        }
        if (tmp[1] === 'May') {
            mes = '05' ;
        }
        if (tmp[1] === 'Jun') {
            mes = '06';
        }
        if (tmp[1] === 'Jul') {
            mes = '07';
        }
        if (tmp[1] === 'Aug') {
            mes = '08';
        }
        if (tmp[1] === 'Sep') {
            mes = '09' ;
        }
        if (tmp[1] === 'Oct') {
            mes = '10';
        }
        if (tmp[1] === 'Nov') {
            mes = '11';
        }
        if (tmp[1] === 'Dec') {
            mes = '12';
        }
        return tmp[3] + '-' + mes + '-' + tmp[2];
    }

    ConvertToTable(objArray){
        let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        str = '<html><head><style>@page{size: landscape; margin: 5mm;}table{border-collapse: collapse;font-size:0.7em} table, th, td {border:1px solid black;} th{background:#58717b;color:white} th, td {padding: 10px}tr:nth-child(even) {background-color: #f4f4f4}</style></head><body><table><tr>'
        for (var index in objArray[0]) {
            str += '<th>' + index + '</th>';
        }
        str += '</tr>';
        for (let i = 0; i < array.length; i++) {
            str += '<tr>';
            for (var index in array[i]) {
                str += '<td>' + array[i][index] + '</td>';
            }
            str += '</tr>';
        }
        str += '</table></body></html>'
        return str;
    }

    ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = '';

        for (var index in objArray[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (var index in array[i]) {
                if (line != '') {
                line += ',';
                }
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }

    getCookie(){
        let x = document.cookie.split(';');
        let toquen = '';
        for (let i = 0; i < x.length; i++) {
        let c = x[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf('X-AUTH-TOKEN') === 0) {
            toquen = c.substring('X-AUTH-TOKEN='.length, c.length);
        }
        }
        return toquen;
    }

}
