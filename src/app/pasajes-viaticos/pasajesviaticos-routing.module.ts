import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { ControlViaticosComponent } from './control-viaticos/control-viaticos.component';

import { Page404Component } from './page404/page404.component';
import { AdministradorComponent } from './administrador/administrador.component';
//import { ListadoFormsComponent } from './solicitudes/listado-forms/listado-forms.component';
import { ListadosFormsComponent } from './solicitudes/listados-forms/listados-forms.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AuthGuard } from '../AuthGuard/auth.guard';




const routes: Routes= [
  {
    path:'contabilidad',
    component:ContabilidadComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'control-viaticos',
    component:ControlViaticosComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'solicitudes',
    component:ListadosFormsComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'solicitudes/form1',
    component:SolicitudesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./solicitudes/form1/form1.module').then(m => m.Form1Module)
      },
    ]
  },
  {
    path:'admin',
    component:AdministradorComponent
  },
  {
    path:'**',
    component:Page404Component
  }


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class PasajesviaticosRoutingModule { }
