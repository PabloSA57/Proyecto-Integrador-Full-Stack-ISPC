import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //  url:string="http://localhost:3000/";
url:string="http://localhost:8000/api/"

constructor(private http:HttpClient) { }

//categorias
obtenerCategorias():Observable<any>{
   return this.http.get(this.url+"categoria");
   
 }

// obtener categoria
 public detail(Id:number): Observable<any>{
   return this.http.get<any>(this.url + 'categoria/'+ Id);
 };

//alta de una categoría
public create(data:any):Observable<any>{
 return this.http.post(this.url,data);
} 

//actualizar categoría
public update(id:any,data:any): Observable<any>{
 return this.http.put(`${this.url}/${id}`,data);
}

//eliminar categoría
public delete(id:any):Observable<any>{
 return this.http.delete(`${this.url}${id}`);
}
}
