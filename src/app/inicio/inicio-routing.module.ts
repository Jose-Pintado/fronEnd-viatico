import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard/auth.guard';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: '',
      component: PrincipalComponent,
      canActivate: [AuthGuard],
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
