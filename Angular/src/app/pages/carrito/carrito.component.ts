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
  constructor() { }

  ngOnInit(): void {
  }

}
