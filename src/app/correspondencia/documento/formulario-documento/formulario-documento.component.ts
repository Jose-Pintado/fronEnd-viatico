import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '@general/services/loader.service';
import { ParametricaService } from '@general/services/parametrica.service';
import { MessageService } from 'primeng/api';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-formulario-documento',
  templateUrl: './formulario-documento.component.html',
  styleUrls: ['./formulario-documento.component.scss']
})
export class FormularioDocumentoComponent implements OnInit {
  titulo: string = 'Documento';
  componente: string = 'guardarDocumento';

  form: FormGroup = new FormGroup({});
  formValid: boolean = true;

  autoComplete: any = {};

  tipo$!: Observable<any>;
  
  @Output() emiterData = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder,
    private parametricaService: ParametricaService,
    private messageService: MessageService,
    private loaderService:LoaderService,) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loaderService.show();

    this.tipo$ = this.parametricaService.getParametricaGenerico('param_documento_tipo', { filtro: '', ignorar: '' });

    combineLatest(this.tipo$).subscribe(
      ([tipo]) => {
        if (tipo.success == true) {
          this.autoComplete.tipo = tipo.data;
          this.messageService.add({ severity: 'success', summary: this.titulo, detail: 'Tipos cargados' });
          this.loaderService.hide();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Parametros tipo', detail: 'No se pudo cargar' });
        }
      }
    );
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      destinatario: this.formBuilder.group({
        nombre: new FormControl({ value: '', disabled: false }, [Validators.required]),
        cargo: new FormControl({ value: '', disabled: false }, []),
      }),
      remitente: this.formBuilder.group({
        nombre: new FormControl({ value: '', disabled: false }, []),
        cargo: new FormControl({ value: '', disabled: false }, []),
      }),
      referencia: new FormControl({ value: '', disabled: false }, [Validators.required]),
      adjunto: new FormControl({ value: '', disabled: false }, []),
      nro_hojas: new FormControl({ value: '', disabled: false }, []),
      con_copia_a: new FormControl({ value: '', disabled: false }, []),
      tipo: new FormControl({ value: '', disabled: false }, []),
      codigo_unidad_organizacional: new FormControl({ value: '', disabled: false }, []),
    })
    this.formValid = false;
  }

  resetForm(): void {
    this.form.reset();
    this.formValid = false;
    /*
    this.messageService.add({ severity: 'success', summary: this.titulo, detail: response.message });
        let valor = { data: response.data, accion: 'cargaDatos', componente: this.componente }
        this.emiterData.emit(JSON.stringify(valor));
    */
  }

  usuarioGet(event: any): void {
    this.parametricaService.getUsuarios(event.query).subscribe(response => {
      if (response.success) {
        this.autoComplete.destinatarios = response.data;
      } else {
        this.autoComplete.destinatarios = [];
        //this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }

  remitenteGet(event: any): void {
    this.parametricaService.getUsuarios(event.query).subscribe(response => {
      if (response.success) {
        this.autoComplete.remitentes = response.data;
      } else {
        this.autoComplete.remitentes = [];
        //this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }
  //param_documento_tipo
  paramtricaGenGet(codigo: string, event: any): void {
    let data = {
      filtro: event.query,
      ignorar: ''
    };
    this.parametricaService.getParametricaGenerico(codigo, data).subscribe(response => {
      if (response.success) {
        this.autoComplete.tipo = response.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: this.titulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.titulo, detail: error.message });
      });
  }

  destinatarioSelect(event: any): void {
    (this.form.get('destinatario'))?.get('cargo')?.setValue(event.cargo_usuario);
  }

  remitenteSelect(event: any): void {
    (this.form.get('remitente'))?.get('cargo')?.setValue(event.cargo_usuario);
 
  }
}
