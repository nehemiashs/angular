import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './componentes/home/home.component';
import { CATEGORIASComponent } from './componentes/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    CATEGORIASComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
