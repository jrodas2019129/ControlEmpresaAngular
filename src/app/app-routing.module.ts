import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoencontradoComponent } from './componentes/empleadoencontrado/empleadoencontrado.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadoslitaComponent } from './componentes/empleadoslita/empleadoslita.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { MayorstockComponent } from './componentes/mayorstock/mayorstock.component';
import { MenorstockComponent } from './componentes/menorstock/menorstock.component';
import { NewEmpresaComponent } from './componentes/new-empresa/new-empresa.component';
import { ProductoencontradoComponent } from './componentes/productoencontrado/productoencontrado.component';
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
  {path: "productoencontrado", component: ProductoencontradoComponent},
  {path: "Mayorstock", component: MayorstockComponent},
  {path: "Menorstock",component: MenorstockComponent},
  {path: "graficas", component: GraficasComponent},
  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
