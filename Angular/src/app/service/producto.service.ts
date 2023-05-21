import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string="http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public traerProductos():Observable<any>{
    return this.http.get(this.url +"productos");

  };
 // public traerUnProd(id:number){
 //   return this.http.get(this.url+"producto/"+id)
    //.map((res: Response) => res.json());

  //}
  public detail(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'productos/'+ Id);
  }

}
