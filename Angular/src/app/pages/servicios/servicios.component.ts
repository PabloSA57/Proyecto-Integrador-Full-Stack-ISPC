import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  miServi:any;



  constructor(private serv: ServicioService, private activatedRouter: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {
    this.serv.obtenerServicios().subscribe({
      next:(serviciosTodos)=>{
        this.miServi=serviciosTodos;
        console.log(" Exito se cargo los servicios");
      },
      error:(errorData)=> {
        console.log("error del componenete servicio ");
        console.error(errorData);
        this.router.navigate(['']);
      }
    })
  

   


  }
  

}
