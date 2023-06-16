export class Servicio {
    public id?: number;
    nombre?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    fecha_creacion?: string;
    
    constructor(nombre:string,descripcion:string,precio:number,fecha_creacion:string,imagen:string){

        this.nombre=nombre;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fecha_creacion=fecha_creacion;
        
    }
}