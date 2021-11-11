import { Component, OnInit, ViewChild } from '@angular/core';
import { TableGenComponent } from '@general/table-gen/table-gen.component';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Form1Service } from '../../services/form1.service';

@Component({
  selector: 'app-listado-forms',
  templateUrl: './listado-forms.component.html',
  styles: [
  ]
})
export class ListadoFormsComponent implements OnInit {
  [x: string]: any;
  tableDatos$!: Observable<any>;
 /*datos tabla*/
 @ViewChild('tableLista') tableLista!: TableGenComponent;
 
 componente: string = 'listaVentanilla';
 tablaData: any = {
   titulo: 'Formularios existentes',
   loadingTable: true,
   cantidadDatos: 10,
   totalDatos: 0,
   filtroColumnas: true,
   datos: {
     columnas: [
       { titulo: 'Estados', campo: 'code', p_aling: 'text-center' },
       { titulo: 'Formularios', campo: 'name', verColumna: false },
       {
         titulo: 'Category', campo: 'category',
         filtro: {
           tipo: 'combo',
           lista: [{ codigo: 'valor 11', valor: 'valor 11' }]
         }
       },
       {
         titulo: 'Quantity', campo: 'quantity',
         filtro: {
           tipo: 'combo',
           lista: [{ codigo: 'valor 11', valor: 'valor 11' }]
         }
       },
       { titulo: 'Combo', campo: 'combo' },
     ],
     lista: []
   },
   valores: []
 };


 /*menu acciones*/
 valorMenuItem: any = [{
  tooltipLabel: "Adicionar",
  tooltipPosition: "top",
  icon: 'pi pi-pencil',
  accion: 'adicionarMenu'
}];

 emiterDataTabla(dato: any) {
  //console.log('--', dato);
  this.form1Service.getForm1().subscribe(resp=>{
    console.log(resp)
  
  })

  
  setTimeout(() => {
    console.log('espera------');
    

   
    let data = [
      {
        id: 'uuid',
        menu: this.valorMenuItem,
        code: { p_txt: '1 1 1', p_strong: '2', p_small: '3' },
        name: { p_txt: '1 1 1' },
        category: 'hola',
        quantity: { p_txt: '1 1 1', p_strong: '2', p_small: 'Ipsum es simplemente el' },
        combo: {
          p_opccion: {
            txt: 'Aprobado',
            cod: 'AP',
            color: 'red'
          }
        }
      },

    ];
    this.tableLista.loadDataTable(data);
  },
    3000);

}
  constructor(
    private messageService: MessageService,
    private form1Service:Form1Service) { }

  ngOnInit(): void {
  }

  formatTableDatos(tabla: any) {
    //codigo|estado|tipo|f_crea|destinatario|remitente|unidad_organizacional|referencia
    //id|estado|nombre|apellidos|unidad_org|fecha_salida|fecha_retorno
    var lista_tabla = [];
    for (const row of tabla) {
      var data: any = {
        //ide: row.id_form1,
        id: { p_txt: row.id_form1, p_enlace: { txt: 'HS : ', enlace: '' } },
        estado: row.estado,
        nombre: row.nombre,
        apellidos: row.apellidos,
        
        unidad_organizacional: row.unidad_organizacional.valor,
        fecha_salida: row.fecha_salida,
        fecha_retorno: row.fecha_retorno,
        
      }
      if (row.estado == 'BOR') {
        
        data.menu = [
          {
            tooltipLabel: "Ver",
            tooltipPosition: "top",
            icon: 'pi pi-eye',
            accion: 'verMenu'
          }, {
            tooltipLabel: "Editar",
            tooltipPosition: "top",
            icon: 'pi pi-pencil',
            accion: 'editarMenu'
          }, {
            tooltipLabel: "Eliminar",
            tooltipPosition: "top",
            icon: 'pi pi-trash',
            accion: 'eliminarMenu'
          }
        ],
          data.codigo = 'Por asignar';
        data.estado = {
          p_opccion: {
            txt: row.estado.valor,
            color: 'bluegray'
          }
        };
      }
      lista_tabla.push(data);
    }
    return lista_tabla;
  }

}
