import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Form1CuatroComponent } from './pages/form1-cuatro/form1-cuatro.component';
import { Form1TresComponent } from './pages/form1-tres/form1-tres.component';
import { Form1DosComponent } from './pages/form1_dos/form1-dos.component';
import { Form1UnoComponent } from './pages/form1_uno/form1-uno.component';

const routes: Routes = [  
  {
    path:'',
    children: [
      {
        path:'form1_uno',
        component:Form1UnoComponent
      },
      {
        path:'form1_dos',
        component:Form1DosComponent
      },
      {
        path:'form1_tres',
        component:Form1TresComponent
      },
      {
        path:'form1_cuatro',
        component:Form1CuatroComponent
      },
      {
        path:'**',
        redirectTo: 'form1_uno'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
  
})
export class Form1RoutingModule { }
