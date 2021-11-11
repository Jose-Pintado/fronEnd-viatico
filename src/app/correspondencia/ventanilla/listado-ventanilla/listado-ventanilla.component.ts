import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableGenComponent } from '@general/table-gen/table-gen.component';

@Component({
  selector: 'app-listado-ventanilla',
  templateUrl: './listado-ventanilla.component.html',
  styleUrls: ['./listado-ventanilla.component.scss']
})
export class ListadoVentanillaComponent implements OnInit {

  /*datos tabla*/
  @ViewChild('tableLista') tableLista!: TableGenComponent;
  componente: string = 'listaVentanilla';
  tablaData: any = {
    titulo: 'Lista documentos ingresados',
    loadingTable: true,
    cantidadDatos: 10,
    totalDatos: 0,
    filtroColumnas: true,
    datos: {
      columnas: [
        { titulo: 'Code', campo: 'code', p_aling: 'text-center' },
        { titulo: 'Name', campo: 'name', verColumna: false },
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

  /*datos titulo*/
  titulo: string = "Ventanilla";
  descripcion: string = "Ingreso por ventanilla";
  dataTitulo: any = {
    titulo: this.titulo,
    descripcion: this.descripcion
  };

  constructor(private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      //tipo
      key: 'gent-confirm-dialog',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }
  emiterDataTabla(dato: any) {
    console.log('**', dato);
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
              txt: 'Arpbado',
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
}
