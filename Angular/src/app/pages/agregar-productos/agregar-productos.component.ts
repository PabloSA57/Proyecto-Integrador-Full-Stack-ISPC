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
  productos: any = {};
  categorias: any = {};

  
  nombre: string = "";
  imagen!: File;
  descripcion: string = "";
  precio: string = "";
  cantidad: string = "";
  categoria: string = "";
  fecha_creacion: string = "";
<<<<<<< HEAD
=======
  categoria: number = 1;
>>>>>>> 4a937ba0fce8859f1c7d24931fa73f5047ab1509

  constructor(private productoServicio: ProductoService, private router: Router) {

  }

  ngOnInit(): void {

    this.productoServicio.traerCategorias().subscribe(resp2 => {
      this.categorias = resp2;

    })
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



  /*
    create(): void {
      let producto = this.productos;
      console.log(producto.nombre)
      this.productoServicio.create(producto).subscribe(
        data=>this.router.navigate(['/productos'])
      )
  
  
      
    }*/

  create() {
    const produ = new FormData();
    produ.append('nombre', this.nombre);
    produ.append('descripcion', this.descripcion);
    produ.append('precio', this.precio);
    produ.append('cantidad', this.cantidad);
    produ.append('categoria', this.categoria);
    produ.append('fecha_creacion', this.fecha_creacion);
    produ.append('imagen', this.imagen, this.imagen!.name);
    this.productoServicio.create(produ).subscribe(
      servicio => this.router.navigate(['/productos'])

      ,
      error => console.log(error)

<<<<<<< HEAD
    );

/*
    function actualizarValorMunicipioInm() {
      let municipio = document.getElementById("catsel").value;
      //Se actualiza en municipio inm
      document.getElementById("cat").value = municipio;
    }*/

=======
  create(): void {
    const producto = new Producto(this.nombre,this.descripcion, this.precio,this.fecha_creacion,this.imagen,this.cantidad, this.categoria);
    this.productoServicio.create(producto).subscribe(data=>this.router.navigate(['/lista-productos']));
    console.log(producto)
>>>>>>> 4a937ba0fce8859f1c7d24931fa73f5047ab1509
  }


}
