import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORIASComponent } from './componentes/categorias/categorias.component';
import { HOMEComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path:"categorias",
    component:CATEGORIASComponent
  },
  {
    path:"home",
    component:HOMEComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
