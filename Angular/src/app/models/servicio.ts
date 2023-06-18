export class Servicio {
    public id?: number;
    nombre?: string;
    imagen?: File;
    descripcion?: string;
    precio: string;
    fecha_creacion?: string;
    
    constructor(nombre:string,descripcion:string,precio:string,fecha_creacion:string,imagen:File){

        this.nombre=nombre;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fecha_creacion=fecha_creacion;
        
    }
}