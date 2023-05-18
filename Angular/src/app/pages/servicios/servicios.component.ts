import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  miServi:any;
  //hoy = new Date();
  //mostrarServicios:boolean=true;
  //servicios:any;

  constructor(private serv: ServicioService) {
 
    this.serv.obtenerServicios().subscribe({
      next:(serviciosTodos)=>{
        this.miServi=serviciosTodos;
        console.log(" Exito se cargo los servicios");
      },
      error:(errorData)=> {
        console.log("error del componenete servicio ");
        console.error(errorData);
      }
    });
  
    
   }

  ngOnInit(): void {
  //   this.serv.obtenerServicios().subscribe(data=>{
  //     // console.log(data);
  //     this.miServi=data;
  //     console.log(this.miServi);
  //   });
  }

}
