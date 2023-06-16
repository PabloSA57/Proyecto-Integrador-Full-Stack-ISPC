import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-agregar-servicios',
  templateUrl: './agregar-servicios.component.html',
  styleUrls: ['./agregar-servicios.component.css']
})
export class AgregarServiciosComponent {

  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  precio: number = 0;
  fecha_creacion: string = "";

  constructor(private servicioServicio: ServicioService, private router: Router) {

  }

  ngOnInit(): void { }

  create(): void {
  const servicio = new Servicio(this.nombre,this.descripcion, this.precio,this.fecha_creacion,this.imagen);
  this.servicioServicio.create(servicio).subscribe(
    data=>this.router.navigate(['/lista-servicios'])
  );
  console.log(servicio);
//  => this.router.navigate(['/lista-servicios'])

}


}

