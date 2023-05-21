import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', component: Pagina404Component},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes-somos', component:QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegranteComponent},
  {path: 'home', component:DashboardComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'carrito', component: CarritoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'articulo/:id', component: ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
