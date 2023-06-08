import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent {

  miList:any;

  constructor(private list:ServicioService,private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit():void{
    this.list.obtenerServicios().subscribe({
      next:(todaLaLista)=>{
        this.miList=todaLaLista;
        console.log("cargo toda la lista");
        console.log(this.miList);

      },
      error:(errorData)=>{
        console.log("no cargo lista");
        console.log(errorData);
        this.router.navigate(['']);
      }
    })
  }
}
