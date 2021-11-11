import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard/auth.guard';
import { PlantillaComponent } from './general/plantilla/plantilla.component';
import { LoginGenComponent } from './login-gen/login-gen.component';
//pruebas
import { ListadoFormsComponent } from './pasajes-viaticos/solicitudes/listado-forms/listado-forms.component';
import { PasajesviaticosRoutingModule } from './pasajes-viaticos/pasajesviaticos-routing.module';

const routes: Routes = [
  { 
    path: '', component: LoginGenComponent 
  },
  //inicio.module
  { 
    path: 'inicio', 
    component: PlantillaComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./inicio/inicio-routing.module').then(m => m.InicioRoutingModule)
      },
    ]
  },
  //correspondencia.module
  { 
    path: 'correspondencia', 
    component: PlantillaComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./correspondencia/correspondencia-routing.module').then(m => m.CorrespondenciaRoutingModule)
      },
    ]
  },
  //eventos.module
  { 
    path: 'eventos', 
    component: PlantillaComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule)
      },
    ]
  },
  { 
    path: 'inicio/pasajes-viaticos', 
    component: PlantillaComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./pasajes-viaticos/pasajesviaticos-routing.module').then(m => m.PasajesviaticosRoutingModule)
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
