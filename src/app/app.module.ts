import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { NewEmpresaComponent } from './componentes/new-empresa/new-empresa.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadoslitaComponent } from './componentes/empleadoslita/empleadoslita.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpleadoencontradoComponent } from './componentes/empleadoencontrado/empleadoencontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrarComponent,
    NewEmpresaComponent,
    EmpleadosComponent,
    EmpleadoslitaComponent,
    InicioComponent,
    EmpleadoencontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
