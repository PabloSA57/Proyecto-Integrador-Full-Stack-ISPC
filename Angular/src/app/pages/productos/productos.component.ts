import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any={};

  constructor(private miProductos: ProductoService) {


  }

  ngOnInit(): void {
    this.miProductos.traerProductos().subscribe(resp => {
      this.productos = resp;
      

    })


  }
}
