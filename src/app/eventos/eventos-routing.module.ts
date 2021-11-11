import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard/auth.guard';
import { GeneralCalendarioComponent } from './calendario/general-calendario/general-calendario.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Eventos'
  },
  children: [
    {
      path: 'calendario',
      component: GeneralCalendarioComponent,
      canActivate: [AuthGuard],
    },
    
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
