import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatosDocumentoComponent } from '../datos-documento/datos-documento.component';

@Component({
  selector: 'app-ver-documento',
  templateUrl: './ver-documento.component.html',
  styleUrls: ['./ver-documento.component.scss']
})
export class VerDocumentoComponent implements OnInit {

  titulo: string = "Ver documento";
  descripcion: string = "";
  dataTitulo: any = {
    titulo: this.titulo,
    descripcion: this.descripcion
  };

  @Input() id: any = '';
  datos: any = {};
  load = true;
  @ViewChild('documentos') documentos!: DatosDocumentoComponent;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    let id_route = this._activatedRoute.snapshot.paramMap.get("id");
    if (id_route != undefined) {
      this.id = id_route;
      this.cdr.detectChanges();
      this.documentos.cargarDocumento(this.id);
    }
  }

  volver() {
    this._location.back();
  }

}
