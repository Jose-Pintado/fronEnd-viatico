import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CorrespondenciaRoutingModule } from './correspondencia-routing.module';
import { FormularioVentanillaComponent } from './ventanilla/formulario-ventanilla/formulario-ventanilla.component';
import { ListadoVentanillaComponent } from './ventanilla/listado-ventanilla/listado-ventanilla.component';
import { ListadoDocumentoComponent } from './documento/listado-documento/listado-documento.component';

import { GeneralModule } from '../general/general.module';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

import { SkeletonModule } from 'primeng/skeleton';
import { FormularioAdicionarDocumentoComponent } from './documento/formulario-adicionar-documento/formulario-adicionar-documento.component';
import { FormularioEditarDocumentoComponent } from './documento/formulario-editar-documento/formulario-editar-documento.component';
import { FormularioEliminarDocumentoComponent } from './documento/formulario-eliminar-documento/formulario-eliminar-documento.component';
import { VerDocumentoComponent } from './documento/ver-documento/ver-documento.component';
import { DatosDocumentoComponent } from './documento/datos-documento/datos-documento.component';
import { FormularioDocumentoComponent } from './documento/formulario-documento/formulario-documento.component';

@NgModule({
  declarations: [
    FormularioVentanillaComponent,
    ListadoVentanillaComponent,
    ListadoDocumentoComponent,
    FormularioAdicionarDocumentoComponent,
    FormularioEditarDocumentoComponent,
    FormularioEliminarDocumentoComponent,
    VerDocumentoComponent,
    DatosDocumentoComponent,
    FormularioDocumentoComponent
  ],
  imports: [
    GeneralModule,
    CommonModule,
    CorrespondenciaRoutingModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    InputTextareaModule,
    AutoCompleteModule,
    DropdownModule,
    SkeletonModule
  ]
})
export class CorrespondenciaModule { }
