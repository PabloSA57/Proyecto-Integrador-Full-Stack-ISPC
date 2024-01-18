import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogged:boolean= false
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(resp => this.isLogged = resp)
  }

  logout(){
    this.tokenService.removeToken()
    window.location.reload()
  }
}
