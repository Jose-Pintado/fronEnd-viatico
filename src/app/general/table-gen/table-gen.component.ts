import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-gen',
  templateUrl: './table-gen.component.html',
  styleUrls: ['./table-gen.component.scss']
})
export class TableGenComponent implements OnInit {

  //columnas cabezera
  _selectedColumns: any = [];

  @Input() componente: string = '';
  /*tabla datos contructor*/
  /*
  columnas=[
  { titulo: 'Nombre', campo: 'nombre_campo_lista', p_aling: 'text-center|text-justify|text-left|text-right' },
  //si filtroColumnas=true
  { titulo: 'Nombre', campo: 'nombre_campo_lista', verColumna: false },
  //
  {titulo: 'Category', campo: 'category', filtro: {
                                                    tipo: 'combo',
                                                    lista: [{ codigo: 'codigo parametrica', valor: 'valor a desplegar' }]
                                                  }
  }
  {...}
  ]

  lista=[
              id: 'uuid',
            menu: OBJETO MENU menu-button.component,
            
            //campo con los tipos de despliege generico
            campo: { p_txt: 'texto normal', p_strong: 'texto en negrotas', p_small: 'texto pequeño' },
            campo: { p_txt: 'texto nomrmal' },
            campo: { p_enlace: {txt:'',enlace:''} },
            
            //campo con solo despliege texto normal
            campo: 'hola',
            
            //campo parra filtro commbo o uso similar
            combo: {
              p_opccion: {
                txt: 'texto',
                //no necesario
                codigo: 'AP',
                tipo color de texto encuadrado red
                color: 'red|blue|green|yellow|cyan|pink|indigo|teal|orange|bluegray|purple|gray'
              }
            }
          },
  ]
 */
  @Input() tablaData: any = {
    titulo: '',
    loadingTable: true,
    cantidadDatos: 10,
    totalDatos: 0,
    //valor por defecto es false por null
    filtroColumnas: true,
    datos: {
      columnas: [],
      lista: []
    },
    valores: []
  };

  @Output() emiterData = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    //carga todas las columnas
    this._selectedColumns = this.tablaData.datos.columnas;
    this._selectedColumns = this._selectedColumns.filter((col: any) => { if (col.verColumna != false) return col });
    this.cdr.detectChanges();
  }

  emitLoadDataTable(event: any): void {
    let filtroData = [];
    for (const key in event.filters) {
      if (key != 'global') {
        let filtro = event.filters[key] == undefined ? "" : (event.filters[key])[0].value;
        filtroData.push({ nombre: key, valor: filtro });
      }
    }
    let globalFilter = event.globalFilter?.value;
    if (globalFilter == undefined) {
      globalFilter = '';
    }
    let colums = this.tablaData.datos.columnas;
    if (this.tablaData.filtroColunbas != true) {
      colums = this.selectedColumns;
    }
    let data = {
      filtroGlobal: globalFilter,
      inicio: event.first,
      cantidad: event.rows,
      filtroCampo: filtroData,
      columnas: colums
    }
    this.tablaData.loadingTable = true;
    let valor = { data: data, accion: 'lazyTable', componente: this.componente }
    this.emiterData.emit(JSON.stringify(valor));

    this.loadingSkeleton();
  }

  loadDataTable(data: any) {
    this.tablaData.datos.lista = data;
    this.tablaData.loadingTable = false;
  }

  loadingSkeleton(): void {
    this.tablaData.loadingTable = true;
    this.tablaData.datos.lista = [];
    for (let index = 0; index < this.tablaData.cantidadDatos; index++) {
      (this.tablaData.datos.lista).push({});
    }
  }

  clear(table: any): void {
    table.clear();
  }
  enlace(enlace:any){
    console.log('REDIRECCIONAR',enlace);
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    if (this.tablaData.filtroColunbas == true) {
      this._selectedColumns = this.tablaData.datos.columnas.filter((col: any) => val.includes(col));
    } else {
      this._selectedColumns = this.tablaData.datos.columnas;
    }
  }

  stringValid(valor: any): any {
    return typeof valor === 'string' || valor instanceof String;
  }
  emiterDataMenu(dato: any): void {
    this.emiterData.emit(dato);
  }

}
