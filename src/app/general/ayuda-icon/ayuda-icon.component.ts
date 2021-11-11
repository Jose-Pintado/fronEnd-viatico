import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda-icon',
  templateUrl: './ayuda-icon.component.html',
  styleUrls: ['./ayuda-icon.component.scss']
})
export class AyudaIconComponent implements OnInit {

  /*var datos
  datos={
        'campo':{
                  'titulo':'Titulo de datos',
                  'contenido':'<p>hola <strong> desde campo</strong>'
                  }
        },
        'campo2':{
          ...
        }
  */
  @Input() datos: any = {};
  /*var seleccionado
  selector de la variable "datos"
   */
  @Input() seleccionado: string = '';
  /* var posicion
  posicion=right|left|bottom
  */
  @Input() posicion: string = 'right';
  /* var tipo
  posicion=sm|md|lg
  */
  @Input() tipo: string = 'md'

  elem: any = {};

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.elem = this.datos[this.seleccionado];
    if (this.elem == undefined) {
      this.elem = {};
    }
  }

}
