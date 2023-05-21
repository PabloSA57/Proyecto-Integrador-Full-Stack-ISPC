import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  productos: any={};
  catSelec: any={};

  
  constructor(private miProductos: ProductoService, private activatedRouter: ActivatedRoute, private router: Router){
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
