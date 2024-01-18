import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})

export class EditarProductosComponent {

  productos: any = {};
  categorias: any = {};

  id: string = "";
  nombre: string = "";
  imagen!: File;
  descripcion: string = "";
  precio: string = "";
  cantidad: string = "";
  categoria: string = "";
  fecha_creacion: string = "";

  constructor(private productoServicio: ProductoService, private activatedRouter: ActivatedRoute, private router: Router) {

    const id = this.activatedRouter.snapshot.params['id'];
    let datos:any= {};
    this.productoServicio.detail(id).subscribe(
      data => {
        this.productos = data;
        
        
      }, err => {
        alert("Error al cargar");
        this.router.navigate(['']);
      }
    )

  }

  ngOnInit(): void {


    this.productoServicio.traerCategorias().subscribe(resp2 => {
      this.categorias = resp2;

    })
  }

  guardarId(event: any) {
    console.log(this.id = event.target.value)
  }

  guardarNombre(event: any) {
    console.log(this.nombre = event.target.value)
  }

  guardarDescripcion(event: any) {
    console.log(this.descripcion = event.target.value)
  }

  guardarPrecio(event: any) {
    console.log(this.precio = event.target.value)
  }

  guardarCantidad(event: any) {
    console.log(this.cantidad = event.target.value)
  }

  guardarCategoria(event: any) {
    console.log(this.categoria = event.target.value)
  }
  selectCategoria(event: any) {
    console.log(this.categoria = event.target.value)
  }

  enviarFoto(event: any) {
    console.log(this.imagen = event.target.files[0])
  }

  actualizar() {
    const produ = new FormData();
    //produ.append('nombre', this.productos.id);
    produ.append('nombre', this.productos.nombre);
    produ.append('descripcion', this.productos.descripcion);
    produ.append('precio', this.productos.precio);
    produ.append('cantidad', this.productos.cantidad);
    produ.append('categoria', this.productos.categoria);
    //produ.append('fecha_creacion', this.fecha_creacion);
    produ.append('imagen', this.imagen, this.imagen!.name);
    
    console.log(this.productos.id)
    this.productoServicio.update(this.productos.id,produ).subscribe(
      data => this.router.navigate(['/productos'])

      ,
      error => console.log(error)

    );
    }
}
