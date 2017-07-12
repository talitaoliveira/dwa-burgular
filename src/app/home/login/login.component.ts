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

  boolLogado: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    if( localStorage.token ){
      console.log("ta logado");
    }else{
      console.log("não ta logado");
    }


  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario).subscribe( data => this.boolLogado = data );
  }

}
