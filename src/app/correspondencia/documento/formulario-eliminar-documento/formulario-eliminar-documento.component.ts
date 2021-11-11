import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatosDocumentoComponent } from '../datos-documento/datos-documento.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ValidacionService } from '@general/services/validacion.service';
import { DocumentoService } from '../../service/documento.service';
import { LoaderService } from '@general/services/loader.service';

@Component({
  selector: 'app-formulario-eliminar-documento',
  templateUrl: './formulario-eliminar-documento.component.html',
  styleUrls: ['./formulario-eliminar-documento.component.scss']
})
export class FormularioEliminarDocumentoComponent implements OnInit {
  titulo: string = "Documento a eliminar";
  descripcion: string = "";
  modulo: string = 'Documento';
  dataTitulo: any = {
    titulo: this.titulo,
    descripcion: this.descripcion
  };

  id: any = '';
  volver_boton: boolean = false;
  datos: any = {};
  load = true;
  estado = '';

  form: FormGroup = new FormGroup({});
  formValid: boolean = false;

  @ViewChild('documentos') documentos!: DatosDocumentoComponent;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private loaderService:LoaderService,
    private documentoService:DocumentoService,
    private cdr: ChangeDetectorRef
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    let id_route = this._activatedRoute.snapshot.paramMap.get("id");
    if (id_route != undefined) {
      this.id = id_route;
      this.cdr.detectChanges();
      this.documentos.cargarDocumento(this.id);
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      comentario: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
    })
    this.formValid = false;
  }

  resetForm(): void {
    this.form.reset();
    this.formValid = false;
  }

  emiterData(dato: any): void {
    let dataEmiter = JSON.parse(dato);
    if (dataEmiter.accion == 'cargaDatos' && dataEmiter.componente == 'verDocumento') {
      this.estado=dataEmiter.data.estado.codigo;
      if (dataEmiter.data.estado.codigo == 'BOR') {

      } else {
        if (dataEmiter.data.estado.codigo == 'GEN') {

        }else{
          this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
          this.volver();
        }
      }
    }
  }
  confirmarGuardar() {
    if (this.form.valid) {
      this.confirmationService.confirm({
        message: '¿Esta seguro de realzar la acción?',
        header: 'Confirmar eliminar documento',
        icon: 'pi pi-exclamation-triangle',
        key: 'gent-confirm-dialog',
        accept: () => {
          this.guardar();
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formValid = true;
    }

  }
  confirmarGuardarBOR(){
    this.confirmationService.confirm({
      message: '¿Esta seguro de realzar la acción?',
      header: 'Confirmar eliminar documento',
      icon: 'pi pi-exclamation-triangle',
      key: 'gent-confirm-dialog',
      accept: () => {
        this.guardarBOR();
      }
    });
  }
  volver() {
    this._location.back();
  }
  guardar() {

  }
  guardarBOR(){
    this.loaderService.show();
    this.documentoService.deleteDocumentos(this.id).subscribe(response => {
      if (response.success) {
        this.messageService.add({ severity: 'success', summary: this.titulo, detail: response.message });
        this.loaderService.hide();
        this.volver();
      } else {
        this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }

}
