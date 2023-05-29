import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { StoreCartService } from 'src/app/service/store-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  products: Producto[] = []

  total_precio = 0
  constructor(
    private serviceStore: StoreCartService
  ){

  }

  ngOnInit(): void {
      this.serviceStore.myCart$.subscribe(products => {
        this.products = products
        const precio =  products.map(p => p.precio * (p.quality ?? 1)).reduce((a, b) => a + b, 0)
        this.total_precio = Number(Number.parseFloat(precio.toString()).toFixed(2))
      })
  }

}
