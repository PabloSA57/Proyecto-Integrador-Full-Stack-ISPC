import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { StoreCartService } from 'src/app/service/store-cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any={};
  categorias: any={};
  productosCat: any={};
  catSelec: any={};
  isCart: boolean = false

  constructor(private miProductos: ProductoService, private activatedRouter: ActivatedRoute, private router: Router, private cartService: StoreCartService ) {
    
  }
  //cambio
  ngOnInit(): void {
    
    let id = this.activatedRouter.snapshot.params['id'];
    if(id>0){
      this.miProductos.detailCat(id).subscribe(
      data => {
        this.productos = data;
        
      }, err => {
        alert("Error al cargar");
        this.router.navigate(['']);
      }
    )
    }
    else{
      this.miProductos.traerProductos().subscribe(resp => {
        this.productos = resp;
      })
      
    }
    this.miProductos.categoria(id).subscribe(
      data2 =>{
        this.catSelec = data2;

    })
    this.miProductos.traerCategorias().subscribe(resp2 => {
      this.categorias = resp2;

    })

  }

  addProductToCart(product: any){
    this.cartService.addProduct({...product, cantidad:1})
  }
  
}
