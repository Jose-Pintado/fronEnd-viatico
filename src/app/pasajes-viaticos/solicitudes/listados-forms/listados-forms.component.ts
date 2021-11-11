import { Component, ViewChild, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GeneralService } from '@general/services/general.service';
import { LoaderService } from '@general/services/loader.service';
import { ParametricaService } from '@general/services/parametrica.service';
import { TableGenComponent } from '@general/table-gen/table-gen.component';
import { MessageService } from 'primeng/api';
import { Observable, combineLatest } from 'rxjs';

import { Form1Service } from '../../services/form1.service';



@Component({
  selector: 'app-listados-forms',
  templateUrl: './listados-forms.component.html',
  styleUrls: ['./listados-forms.component.scss']
})
export class ListadosFormsComponent implements OnInit{
  
  /*datos titulo*/
  titulo: string = "Formularios";
  descripcion: string = "existentes";
  dataTitulo: any = {
    titulo: this.titulo,
    descripcion: this.descripcion
  };
  /*datos tabla*/
  @ViewChild('tableLista') tableLista!: TableGenComponent;
  componente: string = 'listaDocumetnos';
  //param para select combo
  estado$!: Observable<any>;
  tipo$!: Observable<any>;
  unidad_organizacional$!: Observable<any>;
  param_combine$!: any;
  //tabla input
  tableDatos$!: Observable<any>;
  tablaData: any = {
    titulo: 'Lista Formularios existentes',
    loadingTable: true,
    cantidadDatos: 10,
    totalDatos: 0,
    filtroColumnas: true,
    datos: {
      columnas: [
        {
          titulo: 'Estado', campo: 'estado', filtro: {
            tipo: 'combo',
            lista: []
          }
        },
        { titulo: 'Objeto de viaje', campo: 'objeto_viaje'},
        { titulo: 'Fecha de Elaboración', campo: 'fecha_elaboracion'},
        { titulo: 'Fecha de Salida', campo: 'fecha_salida'},
        { titulo: 'Fecha de Retorno', campo: 'fecha_retorno'},
        { titulo: 'Cambio ruta', campo: 'cambio_ruta_fecha',verColumna: false },
        { titulo: 'Id Form1', campo: 'id_form1',verColumna: false },
      ],
      lista: []
    },
    valores: []
  };

  constructor(
    private _router: Router,
    private loaderService: LoaderService,//se queda
    private messageService: MessageService,// se queda
    private parametricaService: ParametricaService,
    private documentoService: Form1Service,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    //this.loaderService.show();
    this.estado$ = this.parametricaService.getParametricaGenerico('estados', { filtro: '', ignorar: 'ELI' });
    //this.tipo$ = this.parametricaService.getParametricaGenerico('param_documento_tipo', { filtro: '', ignorar: '' });
    //this.unidad_organizacional$
   this.param_combine$ = combineLatest(this.estado$).subscribe(
      ([estado]) => {
        if (estado.success == true) {
          this.messageService.add({ severity: 'success', detail: 'Estado  cargados' });
          let index_estado = this.tablaData.datos.columnas.findIndex(function (el: any) {
            return el.campo == 'estado';
          });
          
        } else {
          this.messageService.add({ severity: 'error', summary: 'Parametros estado', detail: 'No se pudo cargar' });
        }
      }
    );
  }
  emiterDataTabla(dato: string) {
    let dataEmiter = JSON.parse(dato);
    console.log("mi data emiter", dataEmiter.data);
    
    if (dataEmiter.accion == 'lazyTable') {
      this.cargarTabla(dataEmiter);
    }
    if (dataEmiter.accion == 'verMenu') {
      console.log(dataEmiter.data);
        this._router.navigate(['/correspondencia/documento/ver',dataEmiter.data]);
    }
    if (dataEmiter.accion == 'editarMenu') {
      console.log(dataEmiter.data);
    }
    if (dataEmiter.accion == 'eliminarMenu') {
      this._router.navigate(['/correspondencia/documento/eliminar',dataEmiter.data]);
    }
    
  }

  cargarTabla(dataEmiter: any) {
    let dt_filtro = dataEmiter.data;
    //console.log("filtro",dt_filtro);
    let columnas = this.generalService.columnasTabla(dt_filtro);
    let estado = this.generalService.valorComulnasComboTabla('estado', dt_filtro);
    //let tipo = this.generalService.valorComulnasComboTabla('tipo', dt_filtro);
    let data = {
      filtro_global: dt_filtro.filtroGlobal,
      inicio: dt_filtro.inicio,
      cantidad: dt_filtro.cantidad,
      //tipo: tipo,
      estado: estado,
      //unidad_organizacional: '',
      columnas: columnas
    };
    this.tableDatos$ = this.documentoService.getListaDocumentos(data);
    this.tableDatos$.subscribe(response => {
      //console.log("hola mundo",response)
      if (response.success) {
        this.messageService.add({ severity: 'success', summary: this.titulo, detail: response.message });
        let lista = this.formatTableDatos(response.data.listado);
        this.tableLista.loadDataTable(lista);
      } else {
        this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }

  formatTableDatos(tabla: any) {
    //codigo|estado|tipo|f_crea|destinatario|remitente|unidad_organizacional|referencia
    //id|estado|nombre|apellidos|unidad_org|fecha_salida|fecha_retorno
    var lista_tabla = [];
    
    for (const row of tabla) {
      //console.log(row.cambio_ruta_fecha);
      var data: any = {
        //ide: row.id_form1,
        id: { p_txt: row.id_form1, telefono: { txt: 'HS : ', enlace: '' } },
        //cambio_ruta_fecha: row.cambio_ruta_fecha,
        estado: row.estado,
        objeto_viaje: row.objeto_viaje, 
        fecha_elaboracion: row.fecha_elaboracion,      
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
        ]
        data.estado = {
          p_opccion: {
            txt: "BORRADOR",
            color: 'bluegray'
          }
        };
        
      }
      if (row.estado == 'ACE') {
        
        data.menu = [
          {
            tooltipLabel: "Imprimir Form1",
            tooltipPosition: "top",
            icon: 'pi pi-print',
            accion: 'imprimir'
          }, {
            tooltipLabel: "Registrar Form2",
            tooltipPosition: "top",
            icon: 'pi pi-calendar-times',
            accion: 'registraform2'
          }, {
            tooltipLabel: "Registrar Form4",
            tooltipPosition: "top",
            icon: 'pi pi-file',
            accion: 'registraform4'
          }
        ]
        data.estado = {
          p_opccion: {
            txt: "ACEPTADO",
            color: 'green'
          }
        };
        
      }
      if (row.estado == 'OBS') {
        
        data.menu = [
          {
            tooltipLabel: "Ver detalle",
            tooltipPosition: "top",
            icon: 'pi pi-eye',
            accion: 'verDetalle'
          }, {
            tooltipLabel: "Modificar Form1",
            tooltipPosition: "top",
            icon: 'pi pi-pencil',
            accion: 'modificar'
          }
        ]
        data.estado = {
          p_opccion: {
            txt: "OBSERVADO",
            color: 'orange'
          }
        };
        
      }
      if (row.estado == 'REC') {
        
        data.menu = [
          {
            tooltipLabel: "Ver detalle",
            tooltipPosition: "top",
            icon: 'pi pi-eye',
            accion: 'verDetalle'
          }
        ],
        data.estado = {
          p_opccion: {
            txt: "RECHAZADO",
            color: 'red'
          }
        };
       }
       if (row.estado == 'ARC') {
        
       /* data.menu = [
          {
            tooltipLabel: "Ver detalle",
            tooltipPosition: "top",
            icon: 'pi pi-eye',
            accion: 'verDetalle'
          }
        ],*/
        data.estado = {
          p_opccion: {
            txt: "ARCHIVADO",
            color: 'skyblue'
          }
        };
       }
       if (row.cambio_ruta_fecha == true) {
        
        data.menu = [
          {
            tooltipLabel: "Enviar por email",
            tooltipPosition: "top",
            icon: 'pi pi-send',
            accion: 'subirForm2'
          }
        ],
        data.estado = {
          p_opccion: {
            txt: "CAMBIO",
            color: 'purple'
          }
        };

       }
     
        
     
      
      lista_tabla.push(data);
      //$i=$i+1;
    }
    return lista_tabla;
  }

  adicionar(){
    this._router.navigate(['/correspondencia/documento/adicionar']);
  }
}
