import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
//  url:string="http://localhost:3000/";
url:string="http://localhost:8000/api/"

 constructor(private http:HttpClient) { }

//servicios
 obtenerServicios():Observable<any>{
    return this.http.get(this.url+"servicio");
    
  }

// servicio
// obtener servicio
  public detail(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'servicio/'+ Id);
  };

//alta de un servicio
public create(data:any):Observable<any>{
  return this.http.post(this.url,data);
} 

//actualizar servicio
public update(id:any,data:any): Observable<any>{
  return this.http.put(`${this.url}/${id}`,data);
}

//eliminar servicio
public delete(id:any):Observable<any>{
  return this.http.delete(`${this.url}${id}`);
}


  


  
}
