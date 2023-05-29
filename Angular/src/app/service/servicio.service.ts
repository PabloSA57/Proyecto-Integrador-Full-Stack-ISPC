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






  //  obtenerServicios():Observable<any>
  //  {
  //   return this.http.get("./assets/data/nuevo.json");
  //   //console.log("desde el service");
  // }


  
}
