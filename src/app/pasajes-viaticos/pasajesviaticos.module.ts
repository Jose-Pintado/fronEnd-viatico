import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import { CustomerService } from './services/customer.service';

import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';


import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AdministradorComponent } from './administrador/administrador.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { ControlViaticosComponent } from './control-viaticos/control-viaticos.component';
import { Page404Component } from './page404/page404.component';

import { Form2Component } from './solicitudes/form2/form2.component';
import { Form4Component } from './solicitudes/form4/form4.component';
import { ListadosFormsComponent } from './solicitudes/listados-forms/listados-forms.component';
import { SolVehiculosComponent } from './solicitudes/sol-vehiculos/sol-vehiculos.component';
import { GeneralModule } from '../general/general.module';

import { PasajesviaticosRoutingModule } from './pasajesviaticos-routing.module';

import { Form1Module } from './solicitudes/form1/form1.module';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { RouterModule } from '@angular/router';
import { ListadoFormsComponent } from './solicitudes/listado-forms/listado-forms.component';


@NgModule({
  declarations: [
  
    AdministradorComponent,
    ContabilidadComponent,
    ControlViaticosComponent,
    Page404Component,

    Form2Component,
    Form4Component,
    ListadosFormsComponent,
    ListadoFormsComponent,
    SolVehiculosComponent,
    SolicitudesComponent
  ],
  imports: [
    
   
    DialogModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    ProgressBarModule,
    RouterModule,
    SliderModule,
    FormsModule,
    PasajesviaticosRoutingModule,
    ToastModule,
  
    GeneralModule,
    CommonModule,
    
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    RadioButtonModule,
    Form1Module,
    
  ],
  exports:
  [
    Form1Module
   
  ],
  
  
 
  
  
})
export class PasajesviaticosModule { }
