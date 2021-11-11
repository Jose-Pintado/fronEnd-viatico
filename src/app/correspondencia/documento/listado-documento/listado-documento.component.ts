import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, combineLatest } from 'rxjs';
import { TableGenComponent } from '@general/table-gen/table-gen.component';
import { LoaderService } from '@general/services/loader.service';
import { ParametricaService } from '@general//services/parametrica.service';
import { DocumentoService } from '../../service/documento.service';
import { GeneralService } from '@general/services/general.service';
import { Router } from '@angular/router';
//d
@Component({
  selector: 'app-listado-documento',
  templateUrl: './listado-documento.component.html',
  styleUrls: ['./listado-documento.component.scss']
})
export class ListadoDocumentoComponent implements OnInit {
  /*datos titulo*/
  titulo: string = "Documentos";
  descripcion: string = "generados";
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
    titulo: 'Lista documentos',
    loadingTable: true,
    cantidadDatos: 10,
    totalDatos: 0,
    filtroColumnas: true,
    datos: {
      columnas: [
        { titulo: 'Cite', campo: 'codigo' },
        {
          titulo: 'Estado', campo: 'estado', filtro: {
            tipo: 'combo',
            lista: []
          }
        },
        {
          titulo: 'Tipo', campo: 'tipo', verColumna: false, filtro: {
            tipo: 'combo',
            lista: []
          }
        },
        { titulo: 'Fecha', campo: 'f_crea', verColumna: false },
        { titulo: 'Destinatario', campo: 'destinatario' },
        { titulo: 'Remitente', campo: 'remitente', verColumna: false },
        { titulo: 'Unidad organizacional', campo: 'unidad_organizacional', verColumna: false },
        { titulo: 'Referencia', campo: 'referencia' },

      ],
      lista: []
    },
    valores: []
  };

  constructor(
    private _router: Router,
    private loaderService: LoaderService,
    private messageService: MessageService,
    private parametricaService: ParametricaService,
    private documentoService: DocumentoService,
    private generalService: GeneralService
  ) { }//

  ngOnInit(): void {
    this.loaderService.show();
    this.estado$ = this.parametricaService.getParametricaGenerico('param_documento_estado', { filtro: '', ignorar: 'ELI' });
    this.tipo$ = this.parametricaService.getParametricaGenerico('param_documento_tipo', { filtro: '', ignorar: '' });
    //this.unidad_organizacional$
    this.param_combine$ = combineLatest(this.estado$, this.tipo$).subscribe(
      ([estado, tipo]) => {
        if (estado.success == true && tipo.success == true) {
          this.messageService.add({ severity: 'success', summary: this.titulo, detail: 'Estado y Tipos cargados' });
          let index_estado = this.tablaData.datos.columnas.findIndex(function (el: any) {
            return el.campo == 'estado';
          });
          (this.tablaData.datos.columnas[index_estado]).filtro.lista = estado.data;
          let index_tipo = this.tablaData.datos.columnas.findIndex(function (el: any) {
            return el.campo == 'tipo';
          });
          (this.tablaData.datos.columnas[index_tipo]).filtro.lista = tipo.data;
          this.loaderService.hide();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Parametros estado y tipo', detail: 'No se pudo cargar' });
        }
      }
    );
  }
  emiterDataTabla(dato: string) {
    let dataEmiter = JSON.parse(dato);
    console.log(dataEmiter);
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
    let columnas = this.generalService.columnasTabla(dt_filtro);
    let estado = this.generalService.valorComulnasComboTabla('estado', dt_filtro);
    let tipo = this.generalService.valorComulnasComboTabla('tipo', dt_filtro);
    let data = {
      filtro_global: dt_filtro.filtroGlobal,
      inicio: dt_filtro.inicio,
      cantidad: dt_filtro.cantidad,
      tipo: tipo,
      estado: estado,
      unidad_organizacional: '',
      columnas: columnas
    };
    this.tableDatos$ = this.documentoService.getListaDocumentos(data);
    this.tableDatos$.subscribe(response => {
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
    var lista_tabla = [];
    for (const row of tabla) {
      var data: any = {
        id: row.id,
        codigo: { p_txt: row.codigo, p_enlace: { txt: 'HS : ', enlace: '' } },
        tipo: row.tipo.valor,
        f_crea: row.f_crea,
        destinatario: { p_txt: row.destinatario.nombre, p_small: row.destinatario.cargo },
        remitente: { p_txt: row.remitente.nombre, p_small: row.remitente.cargo },
        unidad_organizacional: row.unidad_organizacional.valor,
        referencia: { p_small: row.referencia }
      }
      if (row.estado.codigo == 'BOR') {
        
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

  adicionar(){
    this._router.navigate(['/correspondencia/documento/adicionar']);
  }
}
