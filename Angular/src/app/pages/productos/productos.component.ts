import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from 'src/app/service/auth.service';
import { ProductoService } from 'src/app/service/producto.service';
import { StoreCartService } from 'src/app/service/store-cart.service';
import { TokenService } from 'src/app/service/token.service';
=======
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { StoreCartService } from 'src/app/service/store-cart.service';
>>>>>>> 4a937ba0fce8859f1c7d24931fa73f5047ab1509

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  isLogged:boolean= false;
  productos: any = {};
  categorias: any = {};
  productosCat: any = {};
  catSelec: any = {};

<<<<<<< HEAD

  constructor(private tokenService: TokenService, private authService: AuthService, private miCarrito: StoreCartService, private miProductos: ProductoService, private activatedRouter: ActivatedRoute, private router: Router) {

=======
  productos: any={};
  categorias: any={};
  productosCat: any={};
  catSelec: any={};
  isCart: boolean = false

  constructor(private miProductos: ProductoService, private activatedRouter: ActivatedRoute, private router: Router, private cartService: StoreCartService ) {
    
>>>>>>> 4a937ba0fce8859f1c7d24931fa73f5047ab1509
  }
  //cambio
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(resp => this.isLogged = resp)

    let id = this.activatedRouter.snapshot.params['id'];
    if (id > 0) {
      this.miProductos.detailCat(id).subscribe(
        data => {
          this.productos = data;

        }, err => {
          alert("Error al cargar");
          this.router.navigate(['/productos']);
        }
      )
    }
    else {
      this.miProductos.traerProductos().subscribe(resp => {
        this.productos = resp;
      })

    }
    this.miProductos.categoria(id).subscribe(
      data2 => {
        this.catSelec = data2;

      })
    this.miProductos.traerCategorias().subscribe(resp2 => {
      this.categorias = resp2;

    })

<<<<<<< HEAD



  }

  agregarCarrito() {
    console.log(this.productos.id);
    console.log(this.productos.nombre);
    console.log(this.productos.descripcion);
    console.log(this.productos.precio);
    console.log(this.productos.date_created);
    console.log(this.productos.imagen);


    let producto = this.productos;
    producto.id = this.productos.id;

    this.miCarrito.addProduct(producto);
    this.router.navigate(['/carrito'])

=======
>>>>>>> 4a937ba0fce8859f1c7d24931fa73f5047ab1509
  }

  addProductToCart(product: any){
    this.cartService.addProduct({...product, cantidad:1})
  }
  
}
