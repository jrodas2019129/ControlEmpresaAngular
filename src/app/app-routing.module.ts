import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoencontradoComponent } from './componentes/empleadoencontrado/empleadoencontrado.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadoslitaComponent } from './componentes/empleadoslita/empleadoslita.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewEmpresaComponent } from './componentes/new-empresa/new-empresa.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoslistaComponent } from './componentes/productoslista/productoslista.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "newEmpresa", component: NewEmpresaComponent},
  {path: "empleado", component: EmpleadosComponent},
  {path: "empleadolista", component: EmpleadoslitaComponent},
  {path: "inicio", component: InicioComponent},
  {path: "empleadoEncontrado", component: EmpleadoencontradoComponent},
  {path: "productos", component: ProductosComponent},
  {path: "productolista",component: ProductoslistaComponent},
  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
