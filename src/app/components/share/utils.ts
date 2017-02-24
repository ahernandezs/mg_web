export class Utils{

    constructor(){
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Doming", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["D","L","M","M","J","V","S"],
            monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
            monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
        };
    }
    es: any;

    ConvertToTable(objArray){
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = "";
        str = '<html><head><style>table{border-collapse: collapse;font-size:0.7em} table, th, td {border:1px solid black;} th{background:#58717b;color:white} th, td {padding: 10px}tr:nth-child(even) {background-color: #f4f4f4}</style></head><body><table><tr>'
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