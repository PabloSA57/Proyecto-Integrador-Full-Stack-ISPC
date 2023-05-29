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
  
  public detail(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'productos/'+ Id);
  };

  public detailCat(Id:number): Observable<any>{

    return this.http.get<any>(this.url + 'productos?idCategoria='+ Id);
  };

  public traerCategorias():Observable<any>{
    return this.http.get(this.url +"categorias");

  };
  public categoria(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'categorias/'+ Id);
  };

}
