import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SpeedDialModule } from 'primeng/speeddial';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { TituloGenComponent } from './titulo-gen/titulo-gen.component';
import { TableGenComponent } from './table-gen/table-gen.component';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { AyudaIconComponent } from './ayuda-icon/ayuda-icon.component';
import { DocumentoGenComponent } from './documento-gen/documento-gen.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    MesajeFormErrorComponent,
    PlantillaComponent,
    MenuButtonComponent,
    TituloGenComponent,
    TableGenComponent,
    AyudaIconComponent,
    DocumentoGenComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    PanelMenuModule,
    SpeedDialModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    SkeletonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    ProgressSpinnerModule,
    BlockUIModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [
    MesajeFormErrorComponent,
    MenuButtonComponent,
    TituloGenComponent,
    TableGenComponent,
    AyudaIconComponent,
    DocumentoGenComponent,
    LoaderComponent
  ],
  providers: []
})
export class GeneralModule { }
