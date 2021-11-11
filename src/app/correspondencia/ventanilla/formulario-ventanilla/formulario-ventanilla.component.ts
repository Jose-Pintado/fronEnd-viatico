import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DocumentoGenService } from '@general/services/documento-gen.service';

@Component({
  selector: 'app-formulario-ventanilla',
  templateUrl: './formulario-ventanilla.component.html',
  styleUrls: ['./formulario-ventanilla.component.scss']
})
export class FormularioVentanillaComponent implements OnInit {

  value1: string = "";

  constructor(private confirmationService: ConfirmationService,
    private documentoGenService: DocumentoGenService) { }

  ngOnInit(): void {
  }
  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      key: 'gent-confirm-popup',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      }
    });
  }
  documento() {
    //let data='';
    //this.documentoGenService.showPdf(data);
    //this.documentoGenService.blank('','');
  }
}
