import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { ServicioComponent } from './servicio/servicio.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { AgregarServiciosComponent } from './agregar-servicios/agregar-servicios.component';



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
    ArticuloComponent,
    ServicioComponent,
    ListaServiciosComponent,
    AgregarServiciosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent, ServiciosComponent, QuienesSomosComponent, IntegranteComponent, 
    SucursalesComponent, ContactoComponent, RegistrarseComponent,LoginComponent, 
    CarritoComponent,ServicioComponent,ListaServiciosComponent,AgregarServiciosComponent]
})
export class PagesModule { }
