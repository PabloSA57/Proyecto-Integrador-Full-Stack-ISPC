import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RouterModule } from '@angular/router';
import { Pagina404Component } from './pagina404/pagina404.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { CardProductComponent } from './carrito/components/card-product/card-product.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductosComponent } from './productos/productos.component';
import { ArticuloComponent } from './articulo/articulo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ServiciosComponent,
    QuienesSomosComponent,
    Pagina404Component,
    IntegranteComponent,
    SucursalesComponent,
    ContactoComponent,
    RegistrarseComponent,
    LoginComponent,
    CarritoComponent,
    PreguntasFrecuentesComponent,
    CardProductComponent,
    ProductosComponent,
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [DashboardComponent, ServiciosComponent, QuienesSomosComponent, IntegranteComponent, SucursalesComponent, ContactoComponent, RegistrarseComponent,LoginComponent, CarritoComponent]
})
export class PagesModule { }
