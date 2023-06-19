import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/models/producto'
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {

  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  precio: number = 0;
  cantidad: number = 0;
  fecha_creacion: string = "";
  categoria: Categoria = {};

  constructor(private productoServicio: ProductoService, private router: Router){

  }

  ngOnInit(): void { }

  create(): void {
    const producto = new Producto(this.nombre,this.descripcion, this.precio,this.fecha_creacion,this.imagen,this.cantidad, this.categoria);
    this.productoServicio.create(producto).subscribe(
      data=>this.router.navigate(['/lista-productos'])
    );
    console.log(producto)
  }
}
