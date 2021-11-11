import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form1RoutingModule } from './form1-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Form1UnoComponent } from './pages/form1_uno/form1-uno.component';
import { Form1TresComponent } from './pages/form1-tres/form1-tres.component';
import { Form1CuatroComponent } from './pages/form1-cuatro/form1-cuatro.component';
import { Form1DosComponent } from './pages/form1_dos/form1-dos.component';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    Form1UnoComponent,
    Form1DosComponent,
    Form1TresComponent,
    Form1CuatroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Form1RoutingModule,

    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    
  ]
})
export class Form1Module { }
