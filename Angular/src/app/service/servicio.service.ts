import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 url:string="http://localhost:3000/";

 constructor(private http:HttpClient) { }

 obtenerServicios():Observable<any>
   {
    return this.http.get(this.url+"servicios");
    
  }

  public detail(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'servicios/'+ Id);
  };




  


  
}
