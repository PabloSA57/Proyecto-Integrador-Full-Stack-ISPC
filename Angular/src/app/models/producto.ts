import { Categoria } from "./categoria";

export class Producto{
    public id?: number;
    nombre?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    fecha_creacion?: string;
    categoria?: Categoria;

    constructor(nombre:string,descripcion:string,precio:number,fecha_creacion:string,imagen:string, cantidad:number, categoria:Categoria){

        this.nombre=nombre;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fecha_creacion=fecha_creacion;
        this.cantidad = cantidad;
        this.categoria = categoria;
        
    }
}