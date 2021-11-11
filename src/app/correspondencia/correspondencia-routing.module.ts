import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard/auth.guard';
import { FormularioAdicionarDocumentoComponent } from './documento/formulario-adicionar-documento/formulario-adicionar-documento.component';
import { FormularioEliminarDocumentoComponent } from './documento/formulario-eliminar-documento/formulario-eliminar-documento.component';
import { ListadoDocumentoComponent } from './documento/listado-documento/listado-documento.component';
import { VerDocumentoComponent } from './documento/ver-documento/ver-documento.component';
import { ListadoVentanillaComponent } from './ventanilla/listado-ventanilla/listado-ventanilla.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Correspondencia'
  },
  children: [
    {
      path: 'documento',
      component: ListadoDocumentoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'documento/adicionar',
      component: FormularioAdicionarDocumentoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'documento/ver/:id',
      component: VerDocumentoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'documento/editar/:id',
      component: ListadoDocumentoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'documento/eliminar/:id',
      component: FormularioEliminarDocumentoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'ventanilla',
      component: ListadoVentanillaComponent,
      canActivate: [AuthGuard],
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondenciaRoutingModule { }
