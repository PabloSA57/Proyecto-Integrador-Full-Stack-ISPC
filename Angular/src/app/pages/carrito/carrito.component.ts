import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  products = [
    {
      id:1,
      name: 'Oil',
      img: '',
      precio: 500
    },
    {
      id:2,
      name: 'Oil',
      img: '',
      precio: 700
    },
    {
      id:3,
      name: 'Oil',
      img: '',
      precio: 500
    }
  ]

  total_precio = 0
  constructor() { }

  ngOnInit(): void {
    this.total_precio =  this.products.map(p => p.precio).reduce((a,b) => a + b, 0)
  }

}
