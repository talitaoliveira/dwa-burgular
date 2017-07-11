import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './../../perfil/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {


  }

  fazerLogin() {
    // this.authService.fazerLogin(this.usuario);
  }

}
