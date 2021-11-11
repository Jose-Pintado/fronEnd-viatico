import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  /*
  formato de entrada para armado de accion de boton
  */
 /*jsonDataMenu
 var jsonDataMenu=[{
    tooltipLabel: "nombre tooltip",
    tooltipPosition: "posicion del tooltip",
    icon: 'pi pi-(icono de primeng))',
    accion: 'accion para retorno de emiter ejemp adicionar'
  },
  {...}]
  */
  @Input() jsonDataMenu: any = [];
  /*componente
  var componente:string='nombre de respuesta del componente'
  */
  @Input() componente: string = "";
  /*data
  var data:any=?
  */ 
  @Input() data:any={};
  @Output() emiterData = new EventEmitter<string>();
  habilitado: boolean = true;

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.armaMenu(this.jsonDataMenu);
  }

  armaMenu(data: any): void {
    if (data == undefined || data ==null) {
      this.habilitado = false;
    } else {
      data.forEach((element: any) => {
        this.items.push({
          tooltipOptions: {
            tooltipLabel: element.tooltipLabel,
            tooltipPosition: element.tooltipPosition,
          },
          icon: element.icon,
          command: () => {
            delete this.data.menu;
            let valor = { data: this.data, accion: element.accion, componente: this.componente }
            this.emiterData.emit(JSON.stringify(valor));
          }
        });
      });
    }
  }
}
