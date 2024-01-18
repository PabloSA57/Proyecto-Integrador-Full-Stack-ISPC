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
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ListaServiciosComponent } from './pages/lista-servicios/lista-servicios.component';

import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component'

import { AgregarServiciosComponent } from './pages/agregar-servicios/agregar-servicios.component';
import { AgregarCategoriasComponent } from './pages/agregar-categorias/agregar-categorias.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { EditarCategoriasComponent } from './pages/editar-categorias/editar-categorias.component';
import { EditarServiciosComponent } from './pages/editar-servicios/editar-servicios.component';

import { AuthRedirectGuard } from './guards/auth-redirect.guard';
import { AuthClientGuard } from './guards/auth-client.guard';
import { EditarProductosComponent } from './pages/editar-productos/editar-productos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes-somos', component:QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegranteComponent},
  {path: 'home', component:DashboardComponent},
  //{path: 'home', canActivate:[AuthClientGuard] ,component:DashboardComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'login',canActivate: [AuthRedirectGuard], component: LoginComponent}, 
  {path: 'carrito', component: CarritoComponent},
  {path: 'productos/:id', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'articulo/:id', component: ArticuloComponent},
  {path: 'articulo/', component: ArticuloComponent},
  {path: 'servicio/:id', component:ServicioComponent},
  {path: 'lista-servicios',component:ListaServiciosComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'lista-productos',component:ListaProductosComponent},
  {path: 'editar-servicios/:id',component:EditarServiciosComponent},
  {path: 'agregar-servicios',component:AgregarServiciosComponent},
  {path: 'agregar-categorias', component: AgregarCategoriasComponent},
  {path: 'agregar-productos', component: AgregarProductosComponent},
  {path: 'editar-categorias/:id', component: EditarCategoriasComponent},
  {path: 'editar-productos/:id', component:EditarProductosComponent},



  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
