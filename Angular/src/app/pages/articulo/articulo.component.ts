import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { StoreCartService } from 'src/app/service/store-cart.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  productos: any={};
  catSelec: any={};
  
  
  constructor(private miCarrito:StoreCartService, private miProductos: ProductoService, private activatedRouter: ActivatedRoute, private router: Router){
    const id = this.activatedRouter.snapshot.params['id'];
    let datos:any= {};
    this.miProductos.detail(id).subscribe(
      data => {
        this.productos = data;
        
        
      }, err => {
        alert("Error al cargar");
        this.router.navigate(['']);
      }
    )
        

  }

 /* guardarNombre(event: any) {
    console.log( this.productos.nombre = event.target.value)
   }*/


   agregarCarrito() {
    console.log(this.productos.id);
    console.log(this.productos.nombre);
    console.log(this.productos.descripcion);
    console.log(this.productos.precio);
    console.log(this.productos.date_created);
    console.log(this.productos.imagen);


    let producto= this.productos;
    producto.id= this.productos.id;
    
    this.miCarrito.addProduct(producto);

    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.descripcion);
    console.log(producto.precio);
    console.log(producto.date_created);
    console.log(producto.imagen);
   
    
  }

  
  ngOnInit(): void {
   
    

  }

 // productos: any;
  //constructor(private miProductos: ProductoService){
    
 // }

 // ngOnInit(): void {
   // this.miProductos.traerUnProd(3).subscribe(resp=>{
   //   this.productos=resp;
   // })
    
 // }


 

}
