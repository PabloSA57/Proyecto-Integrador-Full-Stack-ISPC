import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8000/api'
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
<<<<<<< HEAD
    return this.http.post<Token>(`${this.apiUrl}/login`, {
=======
    return this.http.post<Token>(`${this.apiUrl}/login/`, {
>>>>>>> a4c3d76c9891d49eb57389bc59ce2267b1325bd8
      email,
      password
    })
    .pipe(
      tap(resp => {
        this.tokenService.createToken(resp.access_token)
      })
    )
  }

  register(first_name: string, last_name: string,email: string, password: string) {
    return this.http.post(`${this.apiUrl}/registro/`, {
      first_name,
      last_name,
      email,
      password
    })
  }
}
