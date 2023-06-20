import { Component } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-editar-servicios',
  templateUrl: './editar-servicios.component.html',
  styleUrls: ['./editar-servicios.component.css']
})
export class EditarServiciosComponent {
  servicio: Servicio = Object();

  nombre: string = "";
  imagen!: File;
  descripcion: string = "";
  precio: string = "";
  fecha_creacion: string = "";


  constructor(private servicioService: ServicioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioService.detail(id).subscribe(
      data => {
        this.servicio = data;


      }, err => {
        alert("Error al traer la categoria");
        this.router.navigate(['']);
      }
    )
  }

  guardarNombre(event: any) {
    console.log(this.nombre = event.target.value)
  }

  guardarDescripcion(event: any) {
    console.log(this.descripcion = event.target.value)
  }

  guardarPrecio(event: any) {
    console.log(this.precio = event.target.value)
  }

  guardarFecha(event: any) {
    console.log(this.fecha_creacion = event.target.value)
  }

  enviarFoto(event: any) {
    console.log(this.imagen = event.target.files[0])
  }



  guardar() {

    const servicio = new FormData();
    servicio.append('nombre', this.nombre);
    servicio.append('descripcion', this.descripcion);
    servicio.append('precio', this.precio);
    servicio.append('fecha_creacion', this.fecha_creacion);
    servicio.append('imagen', this.imagen, this.imagen!.name);

    let newServicio = new Servicio(this.nombre, this.descripcion, this.precio, this.fecha_creacion, this.imagen);

    console.log("se guardo la modificacion del servicio " + newServicio.nombre);
    console.log("se guardo la modificacion del servicio " + newServicio.descripcion);
    console.log("se guardo la modificacion del servicio " + newServicio.precio);
    console.log("se guardo la modificacion del servicio " + newServicio.fecha_creacion);
    console.log("se guardo la modificacion del servicio " + newServicio.imagen?.name);

    

  }



  onUpdate(): void {
   
    console.log("se guardo la modificacion del servicio " + this.servicio.nombre);
    console.log("se guardo la modificacion del servicio " + this.servicio.descripcion);
    console.log("se guardo la modificacion del servicio " + this.servicio.precio);
    console.log("se guardo la modificacion del servicio " + this.servicio.fecha_creacion);

    this.servicio.nombre = this.nombre;
    this.servicio.descripcion = this.descripcion;
    this.servicio.precio = this.precio;
    this.servicio.imagen = this.imagen;
    
    this.servicioService.update(this.servicio.id, this.servicio).subscribe(
      data => {

        console.log("se guardo la modificacion del servicio " + this.servicio.imagen?.name);
        console.log("se al modificar la servicio ", this.servicio);

      }, err => {
        console.log(err)
        this.servicio.nombre = this.nombre;
        this.servicio.descripcion = this.descripcion;
        this.servicio.precio = this.precio;
        this.servicio.imagen = this.imagen;
        console.log("Error al modificar la servicio ", this.servicio);
      }
    )
  }


  // guardar() {
  //   const servicioF = new FormData();
  //   servicioF.append('nombre', this.nombre);
  //   servicioF.append('descripcion', this.descripcion);
  //   servicioF.append('precio', this.precio);
  //   servicioF.append('fecha_creacion', this.fecha_creacion);
  //   servicioF.append('imagen', this.imagen,this.imagen!.name);

  //   this.servicio.nombre = this.nombre;
  //   this.servicio.descripcion = this.descripcion;
  //   this.servicio.precio = this.precio;
  //   this.servicio.imagen = this.imagen;

  //   console.log("se guardo la modificacion del servicio " + this.servicio.nombre);

  // }
  // // form = new FormGroup({
  // //   nombre: new FormGroup('', Validators.required),
  // //   imagen: new FormGroup('', Validators.required),
  // //   descripcion: new FormGroup('', Validators.required),
  // //   precio: new FormGroup('', Validators.required),
  // // })

  // // this.data=this.form.value
  // //     this.servicio.nombre=this.data.nombre
  // //     this.servicio.imagen=this.data.imagen
  // //     this.servicio.descripcion=this.data.descripcion
  // //     this.servicio.precio=this.data.precio
  // //     console.log(this.data);

  // submit() {


  //   this.servicioService.update(this.servicio.id, this.servicio).subscribe(
  //     data => {
  //       this.servicio.nombre = this.nombre;
  //       this.servicio.descripcion = this.descripcion;
  //       this.servicio.precio = this.precio;
  //       this.servicio.imagen = this.imagen;

  //       console.log(data)
  //       console.log(this.servicio)
  //     }),
  //     (err:any) =>{
  //       console.log(err)
  //       console.log(this.servicio)
  //     }

  //   this.router.navigate(['/lista-servicios'])
  // }
}
