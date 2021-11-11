import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-formulario-adicionar-documento',
  templateUrl: './formulario-adicionar-documento.component.html',
  styleUrls: ['./formulario-adicionar-documento.component.scss']
})
export class FormularioAdicionarDocumentoComponent implements OnInit {

  titulo: string = "Documento";
  descripcion: string = "nuevo";
  modulo: string = 'Documento adicionar';
  dataTitulo: any = {
    titulo: this.titulo,
    descripcion: this.descripcion
  };

  constructor(private _location: Location,
    ) { }

  ngOnInit(): void {
  }

  atras(){
    //this._location.back();
    this._location.historyGo(-2);
  }
}
