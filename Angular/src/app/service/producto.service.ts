import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string="http://localhost:8000/api/";

  constructor(private http: HttpClient) { }

  public traerProductos():Observable<any>{
    return this.http.get(this.url +"producto");

  };
  
  public detail(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'producto/'+ Id);
  };

  public detailCat(Id:number): Observable<any>{

    return this.http.get<any>(this.url + 'producto?idCategoria='+ Id);
  };

  public traerCategorias():Observable<any>{
    return this.http.get(this.url +"categoria");

  };
  public categoria(Id:number): Observable<any>{
    return this.http.get<any>(this.url + 'categoria/'+ Id);
  };

}
