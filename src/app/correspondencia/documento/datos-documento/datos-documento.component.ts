import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoaderService } from '@general/services/loader.service';
import { MessageService } from 'primeng/api';
import { DocumentoService } from '../../service/documento.service';

@Component({
  selector: 'app-datos-documento',
  templateUrl: './datos-documento.component.html',
  styleUrls: ['./datos-documento.component.scss']
})
export class DatosDocumentoComponent implements OnInit {
  titulo:string='Documento';
  componente:string='verDocumento';
  id:string='';
  cite:string='';
  hr:string='';
  datos:any={};
  load:boolean=true;

  @Output() emiterData = new EventEmitter<string>();
  constructor(
    private documentoService: DocumentoService,
    private messageService: MessageService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.loaderService.show();
  }

  cargarDocumento(id:string){
    this.id=id;
    this.documentoService.getDocumentosId(this.id).subscribe(response => {
      if (response.success) {
        if (response.data.estado.codigo == 'BOR') {
          this.cite= 'Por asignar';
          this.hr='Por asignar';
        } else {
          this.cite = response.data.codigo;
          this.hr=response.data.codigo
        }
        this.datos = response.data;
        this.load = false;
        this.messageService.add({ severity: 'success', summary: this.titulo, detail: response.message });
        this.loaderService.hide();
        let valor = { data:  response.data, accion: 'cargaDatos', componente: this.componente }
        this.emiterData.emit(JSON.stringify(valor));
      } else {
        this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }

}
