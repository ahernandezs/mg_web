import { SelectItem } from 'primeng/primeng';

export class Utils{

    es: any;
    banks: SelectItem[];

    constructor(){
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Doming", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["D","L","M","M","J","V","S"],
            monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
            monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
        };
        this.banks = [];
        this.banks.push({label: "Institución", value: 0})
        this.banks.push({label: "Afirme", value: 9});
        this.banks.push({label: "Mifel", value: 13});
        this.banks.push({label: "Invex", value: 11});
    }

    getDate(fecha: Date): string{
        let date: string = "";
        let tmp = fecha.toString().split(' ');
        let mes;
        if(tmp[1]==='Jan')
            mes = "01";
        if(tmp[1]==='Feb')
            mes = "02";
        if(tmp[1]==='Mar')
            mes = "03";
        if(tmp[1]==='Apr')
            mes = "04";
        if(tmp[1]==='May')
            mes = "05";
        if(tmp[1]==='Jun')
            mes = "06";
        if(tmp[1]==='Jul')
            mes = "07";
        if(tmp[1]==='Aug')
            mes = "08";
        if(tmp[1]==='Sep')
            mes = "09";
        if(tmp[1]==='Oct')
            mes = "10";
        if(tmp[1]==='Nov')
            mes = "11";
        if(tmp[1]==='Dec')
            mes = "12";
        return tmp[3]+"-"+mes+"-"+tmp[2];
    }

    ConvertToTable(objArray){
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = "";
        str = '<html><head><style>@page{size: landscape; margin: 5mm;}table{border-collapse: collapse;font-size:0.7em} table, th, td {border:1px solid black;} th{background:#58717b;color:white} th, td {padding: 10px}tr:nth-child(even) {background-color: #f4f4f4}</style></head><body><table><tr>'
        for (var index in objArray[0]) {
            str += '<th>' + index + '</th>';
        }
        str += '</tr>' 
        for (var i = 0; i < array.length; i++) {
            str += '<tr>';
            for (var index in array[i]) {
                str += '<td>' +array[i][index] + '</td>';
            }
            str += '</tr>';
        }

        str += '</table></body></html>'
        return str;
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